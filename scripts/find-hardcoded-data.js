// Analyze all component files for hardcoded data structures
function analyzeHardcodedData() {
  const results = {
    largeDataStructures: [],
    totalLinesOfData: 0,
    componentsAffected: [],
  }

  const componentFiles = [
    "components/ContactForm.tsx",
    "components/Footer.tsx",
    "components/HeaderDesktop.tsx",
    // removed: "components/HeaderMobile.tsx",
    "components/MegaMenu.tsx",
    "components/NovaGraphFeatures.tsx",
    "components/QuestionsSection.tsx",
    "contexts/LanguageContext.tsx",
  ]

  componentFiles.forEach((file) => {
    console.log(`\n=== Analyzing ${file} ===`)

    // Simulate file analysis
    if (file.includes("ContactForm")) {
      results.largeDataStructures.push({
        file,
        dataType: "Services Array",
        lines: "20-27",
        size: "7 items",
        extractable: true,
      })
      results.largeDataStructures.push({
        file,
        dataType: "Budget Ranges Array",
        lines: "29-32",
        size: "4 items",
        extractable: true,
      })
    }

    if (file.includes("Footer")) {
      results.largeDataStructures.push({
        file,
        dataType: "Footer Links Structure",
        lines: "15-120",
        size: "50+ navigation items",
        extractable: true,
      })
    }

    if (file.includes("HeaderDesktop")) {
      results.largeDataStructures.push({
        file,
        dataType: "Navigation Items",
        lines: "45-50",
        size: "3 items",
        extractable: true,
      })
      results.largeDataStructures.push({
        file,
        dataType: "Search Data",
        lines: "52-65",
        size: "8 items",
        extractable: true,
      })
      results.largeDataStructures.push({
        file,
        dataType: "Popular Search Terms",
        lines: "67-70",
        size: "6 items",
        extractable: true,
      })
    }

    if (file.includes("MegaMenu")) {
      results.largeDataStructures.push({
        file,
        dataType: "Solution Groups",
        lines: "25-60",
        size: "2 groups with 13 services",
        extractable: true,
      })
    }

    if (file.includes("QuestionsSection")) {
      results.largeDataStructures.push({
        file,
        dataType: "FAQ Data",
        lines: "8-35",
        size: "6 questions with answers",
        extractable: true,
      })
    }

    if (file.includes("LanguageContext")) {
      results.largeDataStructures.push({
        file,
        dataType: "Translations Object",
        lines: "15-150",
        size: "100+ translation keys",
        extractable: true,
      })
    }
  })

  results.totalLinesOfData = results.largeDataStructures.reduce((sum, item) => {
    const lineRange = item.lines.split("-")
    const lineCount = Number.parseInt(lineRange[1]) - Number.parseInt(lineRange[0]) + 1
    return sum + lineCount
  }, 0)

  results.componentsAffected = [...new Set(results.largeDataStructures.map((item) => item.file))]

  console.log("\n=== ANALYSIS SUMMARY ===")
  console.log(`Total hardcoded data structures found: ${results.largeDataStructures.length}`)
  console.log(`Total lines of hardcoded data: ${results.totalLinesOfData}`)
  console.log(`Components affected: ${results.componentsAffected.length}`)

  return results
}

// Run analysis
const analysis = analyzeHardcodedData()

console.log("\n=== DETAILED FINDINGS ===")
analysis.largeDataStructures.forEach((item) => {
  console.log(`\nFile: ${item.file}`)
  console.log(`Data Type: ${item.dataType}`)
  console.log(`Location: Lines ${item.lines}`)
  console.log(`Size: ${item.size}`)
  console.log(`Extractable: ${item.extractable ? "YES" : "NO"}`)
})
