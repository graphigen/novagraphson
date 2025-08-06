// Safe Cleanup Plan
// This script provides a plan for safely cleaning up the component structure

import fs from "fs"
import path from "path"
import { analyzeComponents } from "./component-analysis"

interface CleanupAction {
  type: "delete" | "move" | "rename" | "fix"
  source: string
  target?: string
  reason: string
  risk: "low" | "medium" | "high"
  dependencies: string[]
}

interface CleanupPlan {
  actions: CleanupAction[]
  summary: {
    totalActions: number
    safeActions: number
    riskyActions: number
  }
  warnings: string[]
}

export function createCleanupPlan(): CleanupPlan {
  const analysis = analyzeComponents()
  const plan: CleanupPlan = {
    actions: [],
    summary: {
      totalActions: 0,
      safeActions: 0,
      riskyActions: 0,
    },
    warnings: [],
  }

  // Plan duplicate removal
  for (const duplicate of analysis.duplicates) {
    const isInUI = duplicate.filePath.includes("/ui/")
    const isInRoot = !isInUI

    if (isInRoot && hasUICounterpart(duplicate)) {
      plan.actions.push({
        type: "delete",
        source: duplicate.filePath,
        reason: "Duplicate of UI component",
        risk: "low",
        dependencies: findDependencies(duplicate.filePath),
      })
    }
  }

  // Plan JSX to TSX conversion for consistency
  const jsxFiles = analysis.issues.filter(
    (comp) => comp.fileName.endsWith(".jsx") && comp.issues.includes("JSX file contains TypeScript interfaces"),
  )

  for (const jsxFile of jsxFiles) {
    plan.actions.push({
      type: "rename",
      source: jsxFile.filePath,
      target: jsxFile.filePath.replace(".jsx", ".tsx"),
      reason: "Convert to TypeScript for consistency",
      risk: "low",
      dependencies: findDependencies(jsxFile.filePath),
    })
  }

  // Plan fixes for broken exports
  const brokenExports = analysis.issues.filter((comp) => comp.issues.includes("No exports found"))

  for (const broken of brokenExports) {
    plan.actions.push({
      type: "fix",
      source: broken.filePath,
      reason: "Add missing exports",
      risk: "medium",
      dependencies: findDependencies(broken.filePath),
    })
  }

  // Calculate summary
  plan.summary.totalActions = plan.actions.length
  plan.summary.safeActions = plan.actions.filter((a) => a.risk === "low").length
  plan.summary.riskyActions = plan.actions.filter((a) => a.risk !== "low").length

  // Add warnings
  if (plan.summary.riskyActions > 0) {
    plan.warnings.push("Some actions have medium/high risk - review carefully")
  }

  if (analysis.brokenComponents > analysis.totalComponents * 0.3) {
    plan.warnings.push("High number of broken components detected")
  }

  return plan
}

function hasUICounterpart(component: { fileName: string }): boolean {
  const baseName = path.basename(component.fileName, path.extname(component.fileName))
  const uiPath = path.join(process.cwd(), "components", "ui", `${baseName}.tsx`)
  return fs.existsSync(uiPath)
}

function findDependencies(filePath: string): string[] {
  const dependencies: string[] = []
  const componentsDir = path.join(process.cwd(), "components")

  try {
    const files = getAllFiles(componentsDir)
    const fileName = path.basename(filePath, path.extname(filePath))

    for (const file of files) {
      if (file === filePath) continue

      const content = fs.readFileSync(file, "utf-8")
      if (content.includes(`from "./${fileName}"`) || content.includes(`from "@/components/${fileName}"`)) {
        dependencies.push(file)
      }
    }
  } catch (error) {
    console.warn(`Error finding dependencies for ${filePath}:`, error)
  }

  return dependencies
}

function getAllFiles(dir: string): string[] {
  const files: string[] = []

  if (!fs.existsSync(dir)) return files

  const items = fs.readdirSync(dir)

  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      files.push(...getAllFiles(fullPath))
    } else if (item.endsWith(".tsx") || item.endsWith(".jsx")) {
      files.push(fullPath)
    }
  }

  return files
}

export function executeSafeActions(plan: CleanupPlan): void {
  const safeActions = plan.actions.filter((action) => action.risk === "low")

  for (const action of safeActions) {
    try {
      switch (action.type) {
        case "delete":
          if (action.dependencies.length === 0) {
            fs.unlinkSync(action.source)
            console.log(`Deleted: ${action.source}`)
          } else {
            console.warn(`Skipped deletion of ${action.source} - has dependencies`)
          }
          break

        case "rename":
          if (action.target && !fs.existsSync(action.target)) {
            fs.renameSync(action.source, action.target)
            console.log(`Renamed: ${action.source} -> ${action.target}`)
          }
          break

        default:
          console.log(`Skipped ${action.type} action for ${action.source}`)
      }
    } catch (error) {
      console.error(`Failed to execute action on ${action.source}:`, error)
    }
  }
}

// Run cleanup plan if called directly
if (require.main === module) {
  const plan = createCleanupPlan()
  console.log("Cleanup Plan:")
  console.log(JSON.stringify(plan, null, 2))

  // Optionally execute safe actions
  if (process.argv.includes("--execute")) {
    console.log("\nExecuting safe actions...")
    executeSafeActions(plan)
  }
}
