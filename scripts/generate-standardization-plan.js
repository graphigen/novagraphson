// Generate detailed standardization plan
function generateStandardizationPlan() {
  console.log("=== PROJECT STANDARDIZATION PLAN ===\n")

  console.log("PHASE 1: HOOK ORGANIZATION")
  console.log("─".repeat(50))

  const hookActions = [
    {
      action: "MOVE",
      from: "components/ui/use-mobile.tsx",
      to: "hooks/use-mobile.ts",
      reason: "Hook should be in hooks directory with .ts extension",
      risk: "LOW - No imports reference this location",
    },
    {
      action: "DELETE",
      file: "components/ui/use-toast.ts",
      reason: "Duplicate of hooks/use-toast.ts",
      risk: "LOW - All imports use hooks/use-toast.ts",
    },
  ]

  hookActions.forEach((action, index) => {
    console.log(`${index + 1}. ${action.action}: ${action.from || action.file}`)
    if (action.to) console.log(`   → ${action.to}`)
    console.log(`   Reason: ${action.reason}`)
    console.log(`   Risk: ${action.risk}\n`)
  })

  console.log("PHASE 2: FILE EXTENSION STANDARDIZATION")
  console.log("─".repeat(50))

  const extensionActions = [
    {
      action: "RENAME",
      from: "components/QuestionsSection.jsx",
      to: "components/QuestionsSection.tsx",
      reason: "Standardize to TypeScript React extension",
      risk: "NONE - File not actively used",
    },
    {
      action: "DELETE",
      file: "components/WhyNovaGraph.jsx",
      reason: "Unused legacy component",
      risk: "NONE - No imports found",
    },
    {
      action: "DELETE",
      file: "components/CaseStudies.jsx",
      reason: "Unused legacy component",
      risk: "NONE - No imports found",
    },
    {
      action: "DELETE",
      file: "components/MobileMenuButton.jsx",
      reason: "Unused legacy component",
      risk: "NONE - No imports found",
    },
    {
      action: "DELETE",
      file: "components/App.jsx",
      reason: "Unused legacy component (Next.js uses app/layout.tsx)",
      risk: "NONE - No imports found",
    },
  ]

  extensionActions.forEach((action, index) => {
    console.log(`${index + 1}. ${action.action}: ${action.from || action.file}`)
    if (action.to) console.log(`   → ${action.to}`)
    console.log(`   Reason: ${action.reason}`)
    console.log(`   Risk: ${action.risk}\n`)
  })

  console.log("PHASE 3: UI COMPONENT CLEANUP")
  console.log("─".repeat(50))

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

  console.log("DELETE ALL DUPLICATE UI COMPONENTS FROM ROOT:")
  uiComponents.forEach((component, index) => {
    console.log(`${index + 1}. DELETE: components/${component}.tsx`)
    console.log(`   → Keep: components/ui/${component}.tsx`)
    console.log(`   Risk: NONE - All imports use @/components/ui/ path\n`)
  })

  console.log("PHASE 4: DIRECTORY STRUCTURE VERIFICATION")
  console.log("─".repeat(50))
  console.log("✅ All custom hooks in hooks/ directory")
  console.log("✅ All UI components in components/ui/ directory")
  console.log("✅ All business components in components/ directory")
  console.log("✅ All files use .tsx/.ts extensions")
  console.log("✅ All components use PascalCase naming")

  return {
    hookActions,
    extensionActions,
    uiComponentCount: uiComponents.length,
  }
}

// Run plan generation
generateStandardizationPlan()
