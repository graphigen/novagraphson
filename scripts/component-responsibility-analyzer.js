const fs = require("fs")

// Function to analyze component responsibilities
function analyzeResponsibilities(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8")
    const lines = content.split("\n")

    const responsibilities = {
      stateManagement: [],
      eventHandling: [],
      dataFetching: [],
      uiRendering: [],
      navigation: [],
      search: [],
      authentication: [],
      validation: [],
      styling: [],
    }

    lines.forEach((line, index) => {
      const lineNum = index + 1

      // State management
      if (line.includes("useState") || line.includes("useReducer")) {
        responsibilities.stateManagement.push(`Line ${lineNum}: ${line.trim()}`)
      }

      // Event handling
      if (
        line.includes("onClick") ||
        line.includes("onSubmit") ||
        line.includes("onChange") ||
        line.includes("onMouseEnter")
      ) {
        responsibilities.eventHandling.push(`Line ${lineNum}: ${line.trim()}`)
      }

      // Data fetching
      if (line.includes("fetch") || line.includes("axios") || line.includes("useQuery")) {
        responsibilities.dataFetching.push(`Line ${lineNum}: ${line.trim()}`)
      }

      // Navigation
      if (line.includes("router") || line.includes("navigate") || line.includes("Link") || line.includes("href")) {
        responsibilities.navigation.push(`Line ${lineNum}: ${line.trim()}`)
      }

      // Search functionality
      if (line.includes("search") || line.includes("Search") || line.includes("filter")) {
        responsibilities.search.push(`Line ${lineNum}: ${line.trim()}`)
      }

      // Validation
      if (line.includes("validate") || line.includes("error") || line.includes("required")) {
        responsibilities.validation.push(`Line ${lineNum}: ${line.trim()}`)
      }
    })

    return responsibilities
  } catch (error) {
    return null
  }
}

// Analyze target components
const targetComponents = ["components/HeaderDesktop.tsx", "components/MegaMenu.tsx", "components/NovaGraphFeatures.tsx"]

console.log("=== COMPONENT RESPONSIBILITY ANALYSIS ===\n")

targetComponents.forEach((componentPath) => {
  console.log(`\n${componentPath.toUpperCase()}:`)
  console.log("=".repeat(50))

  const responsibilities = analyzeResponsibilities(componentPath)
  if (responsibilities) {
    Object.entries(responsibilities).forEach(([category, items]) => {
      if (items.length > 0) {
        console.log(`\n${category.toUpperCase()}:`)
        items.slice(0, 5).forEach((item) => console.log(`  ${item}`))
        if (items.length > 5) {
          console.log(`  ... and ${items.length - 5} more`)
        }
      }
    })
  }
})
