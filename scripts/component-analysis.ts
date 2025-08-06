import fs from "fs"
import path from "path"

interface ComponentInfo {
  fileName: string
  filePath: string
  hasDefaultExport: boolean
  hasNamedExports: boolean
  exportName?: string
  imports: string[]
  issues: string[]
}

interface AnalysisReport {
  totalComponents: number
  workingComponents: number
  brokenComponents: number
  duplicates: ComponentInfo[]
  issues: ComponentInfo[]
  recommendations: string[]
}

export function analyzeComponents(): AnalysisReport {
  const componentsDir = path.join(process.cwd(), "components")
  const uiDir = path.join(componentsDir, "ui")

  const report: AnalysisReport = {
    totalComponents: 0,
    workingComponents: 0,
    brokenComponents: 0,
    duplicates: [],
    issues: [],
    recommendations: [],
  }

  // Scan components directory
  const componentFiles = scanDirectory(componentsDir)
  const uiFiles = scanDirectory(uiDir)

  report.totalComponents = componentFiles.length + uiFiles.length

  // Analyze each component
  const allComponents = [...componentFiles, ...uiFiles]

  for (const component of allComponents) {
    const analysis = analyzeComponent(component)

    if (analysis.issues.length > 0) {
      report.issues.push(analysis)
      report.brokenComponents++
    } else {
      report.workingComponents++
    }
  }

  // Find duplicates
  report.duplicates = findDuplicates(allComponents)

  // Generate recommendations
  report.recommendations = generateRecommendations(report)

  return report
}

function scanDirectory(dir: string): ComponentInfo[] {
  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir)
  const components: ComponentInfo[] = []

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isFile() && (file.endsWith(".tsx") || file.endsWith(".jsx"))) {
      components.push({
        fileName: file,
        filePath,
        hasDefaultExport: false,
        hasNamedExports: false,
        imports: [],
        issues: [],
      })
    }
  }

  return components
}

function analyzeComponent(component: ComponentInfo): ComponentInfo {
  try {
    const content = fs.readFileSync(component.filePath, "utf-8")

    // Check for exports
    component.hasDefaultExport = /export\s+default/.test(content)
    component.hasNamedExports = /export\s+(?:const|function|class)/.test(content)

    // Extract export name
    const defaultExportMatch = content.match(/export\s+default\s+(?:function\s+)?(\w+)/)
    if (defaultExportMatch) {
      component.exportName = defaultExportMatch[1]
    }

    // Extract imports
    const importMatches = content.match(/import.*from\s+['"]([^'"]+)['"]/g)
    if (importMatches) {
      component.imports = importMatches
        .map((imp) => {
          const match = imp.match(/from\s+['"]([^'"]+)['"]/)
          return match ? match[1] : ""
        })
        .filter(Boolean)
    }

    // Check for common issues
    if (!component.hasDefaultExport && !component.hasNamedExports) {
      component.issues.push("No exports found")
    }

    if (content.includes("any")) {
      component.issues.push("Uses any type")
    }

    if (component.fileName.endsWith(".jsx") && content.includes("interface")) {
      component.issues.push("JSX file contains TypeScript interfaces")
    }
  } catch (error) {
    component.issues.push(`Failed to read file: ${error}`)
  }

  return component
}

function findDuplicates(components: ComponentInfo[]): ComponentInfo[] {
  const duplicates: ComponentInfo[] = []
  const seen = new Map<string, ComponentInfo>()

  for (const component of components) {
    const baseName = path.basename(component.fileName, path.extname(component.fileName))

    if (seen.has(baseName)) {
      duplicates.push(component)
      if (!duplicates.includes(seen.get(baseName)!)) {
        duplicates.push(seen.get(baseName)!)
      }
    } else {
      seen.set(baseName, component)
    }
  }

  return duplicates
}

function generateRecommendations(report: AnalysisReport): string[] {
  const recommendations: string[] = []

  if (report.duplicates.length > 0) {
    recommendations.push("Remove duplicate components to avoid conflicts")
  }

  if (report.brokenComponents > 0) {
    recommendations.push("Fix broken components before deployment")
  }

  recommendations.push("Ensure all components have proper TypeScript types")
  recommendations.push("Use consistent file naming conventions")
  recommendations.push("Organize components by feature or domain")

  return recommendations
}

// Run analysis if called directly
if (require.main === module) {
  const report = analyzeComponents()
  console.log("Component Analysis Report:")
  console.log(JSON.stringify(report, null, 2))
}
