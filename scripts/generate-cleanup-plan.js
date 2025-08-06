import { readdir, readFile } from "fs/promises"
import { join } from "path"

async function findDuplicateComponents() {
  const componentsFiles = await readdir("components").catch(() => [])
  const uiFiles = await readdir("components/ui").catch(() => [])

  const duplicates = []

  for (const file of componentsFiles) {
    if (file.endsWith(".tsx") && uiFiles.includes(file)) {
      duplicates.push(file)
    }
  }

  return duplicates
}

async function analyzeFileContent(filePath) {
  try {
    const content = await readFile(filePath, "utf-8")
    return {
      path: filePath,
      lines: content.split("\n").length,
      exports: (content.match(/export/g) || []).length,
      imports: (content.match(/import/g) || []).length,
      hasDefaultExport: content.includes("export default"),
      hasNamedExports: /export\s+(?:const|function|class|interface|type)/.test(content),
    }
  } catch (error) {
    return null
  }
}

async function checkImportUsage(componentName) {
  const searchPaths = ["app", "components", "lib", "hooks"]
  const usage = {
    componentsPath: [],
    uiPath: [],
  }

  for (const searchPath of searchPaths) {
    try {
      const files = await readdir(searchPath, { recursive: true }).catch(() => [])

      for (const file of files) {
        if (file.endsWith(".tsx") || file.endsWith(".ts")) {
          const fullPath = join(searchPath, file)
          const content = await readFile(fullPath, "utf-8").catch(() => "")

          // Check for imports from components/
          if (
            content.includes(`from 'components/${componentName.replace(".tsx", "")}'`) ||
            content.includes(`from './components/${componentName.replace(".tsx", "")}'`) ||
            content.includes(`from '../components/${componentName.replace(".tsx", "")}'`)
          ) {
            usage.componentsPath.push(fullPath)
          }

          // Check for imports from components/ui/
          if (
            content.includes(`from '@/components/ui/${componentName.replace(".tsx", "")}'`) ||
            content.includes(`from 'components/ui/${componentName.replace(".tsx", "")}'`) ||
            content.includes(`from './ui/${componentName.replace(".tsx", "")}'`)
          ) {
            usage.uiPath.push(fullPath)
          }
        }
      }
    } catch (error) {
      console.log(`Error searching in ${searchPath}: ${error.message}`)
    }
  }

  return usage
}

async function main() {
  console.log("🧹 Generating Cleanup Plan for Duplicate UI Components\n")

  const duplicates = await findDuplicateComponents()
  console.log(`Found ${duplicates.length} duplicate components\n`)

  const cleanupPlan = {
    safeToRemove: [],
    needsRefactoring: [],
    analysis: [],
  }

  for (const duplicate of duplicates) {
    console.log(`Analyzing: ${duplicate}`)

    // Analyze both versions
    const componentsVersion = await analyzeFileContent(`components/${duplicate}`)
    const uiVersion = await analyzeFileContent(`components/ui/${duplicate}`)

    // Check import usage
    const usage = await checkImportUsage(duplicate)

    const analysis = {
      component: duplicate,
      componentsVersion,
      uiVersion,
      usage,
      recommendation: "",
    }

    if (usage.componentsPath.length === 0 && usage.uiPath.length > 0) {
      analysis.recommendation = "SAFE_TO_REMOVE"
      cleanupPlan.safeToRemove.push(duplicate)
      console.log(`  ✅ Safe to remove - only UI version is used`)
    } else if (usage.componentsPath.length > 0 && usage.uiPath.length === 0) {
      analysis.recommendation = "REFACTOR_IMPORTS"
      cleanupPlan.needsRefactoring.push({
        component: duplicate,
        action: "Update imports to use @/components/ui/ path",
        affectedFiles: usage.componentsPath,
      })
      console.log(`  🔄 Needs refactoring - update imports to UI version`)
    } else if (usage.componentsPath.length > 0 && usage.uiPath.length > 0) {
      analysis.recommendation = "MIXED_USAGE"
      cleanupPlan.needsRefactoring.push({
        component: duplicate,
        action: "Consolidate all imports to @/components/ui/ path",
        affectedFiles: [...usage.componentsPath, ...usage.uiPath],
      })
      console.log(`  ⚠️  Mixed usage - both versions imported`)
    } else {
      analysis.recommendation = "UNUSED"
      cleanupPlan.safeToRemove.push(duplicate)
      console.log(`  🗑️  Appears unused - safe to remove both`)
    }

    cleanupPlan.analysis.push(analysis)
    console.log("")
  }

  // Generate final report
  console.log("📋 CLEANUP PLAN SUMMARY\n")

  console.log(`✅ Safe to Remove (${cleanupPlan.safeToRemove.length} files):`)
  cleanupPlan.safeToRemove.forEach((file) => {
    console.log(`   rm components/${file}`)
  })

  console.log(`\n🔄 Need Refactoring (${cleanupPlan.needsRefactoring.length} components):`)
  cleanupPlan.needsRefactoring.forEach((item) => {
    console.log(`   ${item.component}: ${item.action}`)
    console.log(`   Affected files: ${item.affectedFiles.length}`)
  })

  // Generate shell commands for safe removal
  console.log("\n🚀 RECOMMENDED ACTIONS:\n")

  console.log("1. Remove safe duplicates:")
  cleanupPlan.safeToRemove.forEach((file) => {
    console.log(`   rm components/${file}`)
  })

  console.log("\n2. Verify no build errors:")
  console.log("   npm run build")

  console.log("\n3. Test functionality:")
  console.log("   npm run dev")

  // Risk assessment
  const riskLevel = cleanupPlan.needsRefactoring.length > 0 ? "MEDIUM" : "LOW"
  console.log(`\n🎯 RISK LEVEL: ${riskLevel}`)

  if (riskLevel === "LOW") {
    console.log("   All duplicates are safe to remove without breaking changes")
  } else {
    console.log("   Some components require import path updates before removal")
  }

  return cleanupPlan
}

main().catch(console.error)
