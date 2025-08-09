function generateExtractionPlan() {
  console.log("=== DATA EXTRACTION PLAN GENERATOR ===\n")

  const extractionPlan = {
    configFiles: [
      {
        filename: "data/services.json",
        description: "Contact form services and budget ranges",
        sourceComponents: ["ContactForm.tsx"],
        dataTypes: ["services array", "budget ranges"],
      },
      {
        filename: "data/navigation.json",
        description: "All navigation menus and links",
        sourceComponents: ["HeaderDesktop.tsx", "Footer.tsx"],
        dataTypes: ["navigation items", "footer links", "quick links"],
      },
      {
        filename: "data/search.json",
        description: "Search data and popular terms",
        sourceComponents: ["HeaderDesktop.tsx"],
        dataTypes: ["search results", "popular search terms"],
      },
      {
        filename: "data/solutions.json",
        description: "Service solutions and mega menu data",
        sourceComponents: ["MegaMenu.tsx"],
        dataTypes: ["solution groups", "services list"],
      },
      {
        filename: "data/faq.json",
        description: "Frequently asked questions",
        sourceComponents: ["QuestionsSection.tsx"],
        dataTypes: ["FAQ items"],
      },
      {
        filename: "data/translations.json",
        description: "Multi-language translations",
        sourceComponents: ["LanguageContext.tsx"],
        dataTypes: ["translation keys", "language mappings"],
      },
    ],
    utilityFiles: [
      {
        filename: "lib/data-loader.ts",
        description: "Utility functions for loading and caching data",
        purpose: "Centralized data loading with type safety",
      },
      {
        filename: "types/data.ts",
        description: "TypeScript interfaces for all data structures",
        purpose: "Type definitions for extracted data",
      },
    ],
  }

  console.log("PROPOSED CONFIG FILES:")
  extractionPlan.configFiles.forEach((file) => {
    console.log(`\n📁 ${file.filename}`)
    console.log(`   Description: ${file.description}`)
    console.log(`   Source Components: ${file.sourceComponents.join(", ")}`)
    console.log(`   Data Types: ${file.dataTypes.join(", ")}`)
  })

  console.log("\n\nPROPOSED UTILITY FILES:")
  extractionPlan.utilityFiles.forEach((file) => {
    console.log(`\n📄 ${file.filename}`)
    console.log(`   Description: ${file.description}`)
    console.log(`   Purpose: ${file.purpose}`)
  })

  return extractionPlan
}

// Generate the plan
const plan = generateExtractionPlan()

console.log("\n=== IMPLEMENTATION PHASES ===")
console.log("Phase 1: Create data files and type definitions")
console.log("Phase 2: Create utility functions for data loading")
console.log("Phase 3: Update components to use external data")
console.log("Phase 4: Test and validate all functionality")
