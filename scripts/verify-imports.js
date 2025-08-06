import { readdir, readFile } from "fs/promises"
import { join } from "path"

async function getAllFiles(dir, extensions = [".tsx", ".ts"]) {
  const files = []

  try {
    const items = await readdir(dir, { recursive: true })

    for (const item of items) {
      if (extensions.some((ext) => item.endsWith(ext))) {
        files.push(join(dir, item))
      }
    }
  } catch (error) {
    console.log(`Error reading directory ${dir}: ${error.message}`)
  }

  return files
}

async function extractImports(filePath) {
  try {
    const content = await readFile(filePath, "utf-8")
    const imports = []

    // Match various import patterns
    const patterns = [
      /import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"]/g,
      /import\s+(\w+)\s+from\s+['"]([^'"]+)['"]/g,
      /import\s+\*\s+as\s+(\w+)\s+from\s+['"]([^'"]+)['"]/g,
    ]

    patterns.forEach((pattern) => {
      let match
      while ((match = pattern.exec(content)) !== null) {
        imports.push({
          file: filePath,
          importPath: match[2],
          imported: match[1],
          fullMatch: match[0],
        })
      }
    })

    return imports
  } catch (error) {
    return []
  }
}

async function main() {
  console.log("🔍 Verifying Import Statements for UI Components\n")

  // Get all TypeScript/React files
  const allFiles = [
    ...(await getAllFiles("app")),
    ...(await getAllFiles("components")),
    ...(await getAllFiles("lib")),
    ...(await getAllFiles("hooks")),
  ]

  console.log(`Scanning ${allFiles.length} files for imports...\n`)

  // Extract all imports
  const allImports = []
  for (const file of allFiles) {
    const imports = await extractImports(file)
    allImports.push(...imports)
  }

  console.log(`Found ${allImports.length} total import statements\n`)

  // Filter UI component imports
  const uiImports = allImports.filter(
    (imp) =>
      imp.importPath.includes("components/ui/") ||
      imp.importPath.includes("@/components/ui/") ||
      imp.importPath.includes("./ui/") ||
      imp.importPath.includes("../ui/"),
  )

  const componentImports = allImports.filter(
    (imp) =>
      imp.importPath.includes("components/") &&
      !imp.importPath.includes("components/ui/") &&
      !imp.importPath.includes("@/components/ui/"),
  )

  console.log("📊 Import Analysis Results:\n")
  console.log(`UI Component imports (@/components/ui/): ${uiImports.length}`)
  console.log(`Direct component imports: ${componentImports.length}\n`)

  // Group by component
  const uiComponentUsage = {}
  const directComponentUsage = {}

  uiImports.forEach((imp) => {
    const component = imp.importPath.split("/").pop()
    if (!uiComponentUsage[component]) {
      uiComponentUsage[component] = []
    }
    uiComponentUsage[component].push(imp.file)
  })

  componentImports.forEach((imp) => {
    const component = imp.importPath.split("/").pop()
    if (!directComponentUsage[component]) {
      directComponentUsage[component] = []
    }
    directComponentUsage[component].push(imp.file)
  })

  console.log("✅ Components imported from @/components/ui/:")
  Object.entries(uiComponentUsage).forEach(([component, files]) => {
    console.log(`   ${component}: ${files.length} files`)
  })

  if (Object.keys(directComponentUsage).length > 0) {
    console.log("\n⚠️  Components imported directly from components/:")
    Object.entries(directComponentUsage).forEach(([component, files]) => {
      console.log(`   ${component}: ${files.length} files`)
      files.forEach((file) => console.log(`     - ${file}`))
    })
  } else {
    console.log("\n✅ No direct component imports found - all using @/components/ui/")
  }

  // Check for potential issues
  const issues = []

  // Look for components that might be imported from both locations
  Object.keys(uiComponentUsage).forEach((component) => {
    if (directComponentUsage[component]) {
      issues.push({
        type: "MIXED_IMPORTS",
        component,
        message: `${component} is imported from both locations`,
        uiFiles: uiComponentUsage[component],
        directFiles: directComponentUsage[component],
      })
    }
  })

  if (issues.length > 0) {
    console.log("\n🚨 ISSUES FOUND:\n")
    issues.forEach((issue) => {
      console.log(`${issue.type}: ${issue.message}`)
      console.log(`   UI imports in: ${issue.uiFiles.join(", ")}`)
      console.log(`   Direct imports in: ${issue.directFiles.join(", ")}`)
      console.log("")
    })
  } else {
    console.log("\n✅ No import conflicts detected!")
  }

  // Summary
  console.log("\n📋 VERIFICATION SUMMARY:")
  console.log(`Total UI components in use: ${Object.keys(uiComponentUsage).length}`)
  console.log(`Import conflicts: ${issues.length}`)
  console.log(
    `Consistency score: ${issues.length === 0 ? "100%" : `${Math.round((1 - issues.length / Object.keys(uiComponentUsage).length) * 100)}%`}`,
  )

  return {
    uiComponentUsage,
    directComponentUsage,
    issues,
    totalImports: allImports.length,
    uiImports: uiImports.length,
    directImports: componentImports.length,
  }
}

main().catch(console.error)
