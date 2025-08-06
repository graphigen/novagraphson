import fs from "fs"

// Analyze project structure and identify organization issues
function analyzeProjectStructure() {
  const issues = {
    duplicateHooks: [],
    misplacedHooks: [],
    inconsistentExtensions: [],
    namingIssues: [],
    duplicateComponents: [],
  }

  // Check for duplicate hooks
  const hookLocations = [
    "hooks/use-mobile.ts",
    "components/ui/use-mobile.tsx",
    "hooks/use-toast.ts",
    "components/ui/use-toast.ts",
  ]

  hookLocations.forEach((location) => {
    if (fs.existsSync(location)) {
      if (location.includes("components/ui/use-")) {
        issues.misplacedHooks.push({
          file: location,
          correctLocation: location.replace("components/ui/", "hooks/").replace(".tsx", ".ts"),
          issue: "Hook in UI components directory",
        })
      }
    }
  })

  // Check for file extension inconsistencies
  const jsxFiles = [
    "components/QuestionsSection.jsx",
    "components/WhyNovaGraph.jsx",
    "components/CaseStudies.jsx",
    "components/MobileMenuButton.jsx",
    "components/App.jsx",
  ]

  jsxFiles.forEach((file) => {
    if (fs.existsSync(file)) {
      issues.inconsistentExtensions.push({
        file,
        preferredExtension: file.replace(".jsx", ".tsx"),
        issue: "JSX file should use TSX extension",
      })
    }
  })

  // Check for duplicate UI components
  const uiComponents = [
    "aspect-ratio",
    "alert-dialog",
    "pagination",
    "tabs",
    "card",
    "slider",
    "popover",
    "progress",
    "toaster",
    "input-otp",
    "chart",
    "hover-card",
    "sheet",
    "scroll-area",
    "resizable",
    "label",
    "sonner",
    "navigation-menu",
    "accordion",
    "drawer",
    "tooltip",
    "alert",
    "switch",
    "calendar",
    "breadcrumb",
    "radio-group",
    "command",
    "toggle-group",
    "avatar",
    "menubar",
    "dialog",
    "badge",
    "sidebar",
    "table",
    "separator",
    "button",
    "toggle",
    "toast",
    "checkbox",
    "collapsible",
    "dropdown-menu",
    "select",
    "textarea",
    "input",
    "skeleton",
    "context-menu",
    "form",
    "carousel",
  ]

  uiComponents.forEach((component) => {
    const rootLocation = `components/${component}.tsx`
    const uiLocation = `components/ui/${component}.tsx`

    if (fs.existsSync(rootLocation) && fs.existsSync(uiLocation)) {
      issues.duplicateComponents.push({
        duplicate: rootLocation,
        primary: uiLocation,
        action: "Remove duplicate from root components directory",
      })
    }
  })

  return issues
}

// Generate organization report
function generateOrganizationReport() {
  const issues = analyzeProjectStructure()

  console.log("=== PROJECT ORGANIZATION ANALYSIS ===\n")

  console.log("1. MISPLACED HOOKS:")
  issues.misplacedHooks.forEach((hook) => {
    console.log(`   ❌ ${hook.file}`)
    console.log(`      → Should be: ${hook.correctLocation}`)
    console.log(`      Issue: ${hook.issue}\n`)
  })

  console.log("2. INCONSISTENT FILE EXTENSIONS:")
  issues.inconsistentExtensions.forEach((file) => {
    console.log(`   ❌ ${file.file}`)
    console.log(`      → Should be: ${file.preferredExtension}`)
    console.log(`      Issue: ${file.issue}\n`)
  })

  console.log("3. DUPLICATE UI COMPONENTS:")
  issues.duplicateComponents.forEach((comp) => {
    console.log(`   ❌ ${comp.duplicate}`)
    console.log(`      → Keep: ${comp.primary}`)
    console.log(`      Action: ${comp.action}\n`)
  })

  console.log("4. SUMMARY:")
  console.log(`   - Misplaced hooks: ${issues.misplacedHooks.length}`)
  console.log(`   - Extension issues: ${issues.inconsistentExtensions.length}`)
  console.log(`   - Duplicate components: ${issues.duplicateComponents.length}`)

  return issues
}

// Run analysis
generateOrganizationReport()
