import { readdir, readFile, stat } from "fs/promises"
import { join, extname, basename } from "path"

async function findFiles(dir, extension = ".tsx") {
  const files = []

  try {
    const items = await readdir(dir)

    for (const item of items) {
      const fullPath = join(dir, item)
      const stats = await stat(fullPath)

      if (stats.isDirectory()) {
        const subFiles = await findFiles(fullPath, extension)
        files.push(...subFiles)
      } else if (extname(item) === extension) {
        files.push(fullPath)
      }
    }
  } catch (error) {
    console.log(`Directory not found: ${dir}`)
  }

  return files
}

async function analyzeImports(filePath) {
  try {
    const content = await readFile(filePath, "utf-8")
    const imports = []

    // Match import statements
    const importRegex = /import\s+(?:{[^}]*}|\*\s+as\s+\w+|\w+)\s+from\s+['"]([^'"]+)['"]/g
    let match

    while ((match = importRegex.exec(content)) !== null) {
      imports.push({
        statement: match[0],
        path: match[1],
        file: filePath,
      })
    }

    return imports
  } catch (error) {
    console.log(`Error reading file ${filePath}: ${error.message}`)
    return []
  }
}

async function main() {
  console.log("🔍 Analyzing duplicate UI components...\n")

  // Find all component files
  const componentsFiles = await findFiles("components")
  const uiFiles = await findFiles("components/ui")
  const appFiles = await findFiles("app")

  console.log(`Found ${componentsFiles.length} files in components/`)
  console.log(`Found ${uiFiles.length} files in components/ui/`)
  console.log(`Found ${appFiles.length} files in app/\n`)

  // Find duplicates by comparing filenames
  const duplicates = []
  const componentsBasenames = componentsFiles.map((f) => ({
    basename: basename(f),
    fullPath: f,
  }))

  const uiBasenames = uiFiles.map((f) => ({
    basename: basename(f),
    fullPath: f,
  }))

  for (const comp of componentsBasenames) {
    const duplicate = uiBasenames.find((ui) => ui.basename === comp.basename)
    if (duplicate) {
      duplicates.push({
        component: comp.basename,
        componentsPath: comp.fullPath,
        uiPath: duplicate.fullPath,
      })
    }
  }

  console.log(`📋 Found ${duplicates.length} duplicate components:\n`)

  duplicates.forEach((dup, index) => {
    console.log(`${index + 1}. ${dup.component}`)
    console.log(`   - components/${dup.component}`)
    console.log(`   - components/ui/${dup.component}\n`)
  })

  // Analyze imports across all files
  console.log("🔍 Analyzing import usage...\n")

  const allFiles = [...componentsFiles, ...uiFiles, ...appFiles]
  const allImports = []

  for (const file of allFiles) {
    const imports = await analyzeImports(file)
    allImports.push(...imports)
  }

  // Check which duplicates are actually imported
  const importUsage = {}

  for (const dup of duplicates) {
    const componentName = dup.component.replace(".tsx", "")

    const componentsImports = allImports.filter(
      (imp) => imp.path.includes(`components/${componentName}`) || imp.path.includes(`./components/${componentName}`),
    )

    const uiImports = allImports.filter(
      (imp) =>
        imp.path.includes(`components/ui/${componentName}`) || imp.path.includes(`@/components/ui/${componentName}`),
    )

    importUsage[componentName] = {
      component: dup.component,
      componentsImports: componentsImports.length,
      uiImports: uiImports.length,
      componentsFiles: componentsImports.map((imp) => imp.file),
      uiFiles: uiImports.map((imp) => imp.file),
    }
  }

  console.log("📊 Import Usage Analysis:\n")

  const safeToRemove = []
  const needsAttention = []

  Object.entries(importUsage).forEach(([name, usage]) => {
    console.log(`${usage.component}:`)
    console.log(`  - components/ imports: ${usage.componentsImports}`)
    console.log(`  - components/ui/ imports: ${usage.uiImports}`)

    if (usage.componentsImports === 0 && usage.uiImports > 0) {
      console.log(`  ✅ SAFE TO REMOVE: components/${usage.component}`)
      safeToRemove.push(usage.component)
    } else if (usage.componentsImports > 0 && usage.uiImports > 0) {
      console.log(`  ⚠️  NEEDS ATTENTION: Both versions are imported`)
      needsAttention.push(usage)
    } else if (usage.componentsImports > 0 && usage.uiImports === 0) {
      console.log(`  🔄 REFACTOR NEEDED: Only components/ version is used`)
      needsAttention.push(usage)
    }
    console.log("")
  })

  console.log(`\n📋 SUMMARY:`)
  console.log(`Total duplicates found: ${duplicates.length}`)
  console.log(`Safe to remove: ${safeToRemove.length}`)
  console.log(`Need attention: ${needsAttention.length}`)

  console.log(`\n✅ Files safe to remove:`)
  safeToRemove.forEach((file) => {
    console.log(`   - components/${file}`)
  })

  if (needsAttention.length > 0) {
    console.log(`\n⚠️  Files needing attention:`)
    needsAttention.forEach((usage) => {
      console.log(`   - ${usage.component}`)
      if (usage.componentsFiles.length > 0) {
        console.log(`     Imported from components/ in: ${usage.componentsFiles.join(", ")}`)
      }
      if (usage.uiFiles.length > 0) {
        console.log(`     Imported from components/ui/ in: ${usage.uiFiles.join(", ")}`)
      }
    })
  }
}

main().catch(console.error)
