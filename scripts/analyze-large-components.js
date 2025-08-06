const fs = require("fs")
const path = require("path")

// Function to count lines in a file
function countLines(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8")
    return content.split("\n").length
  } catch (error) {
    return 0
  }
}

// Function to analyze component complexity
function analyzeComponent(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8")
    const lines = content.split("\n")

    // Count different types of code blocks
    let stateVariables = 0
    let useEffects = 0
    let useCallbacks = 0
    let eventHandlers = 0
    let jsxElements = 0

    lines.forEach((line) => {
      if (line.includes("useState")) stateVariables++
      if (line.includes("useEffect")) useEffects++
      if (line.includes("useCallback")) useCallbacks++
      if (line.includes("const handle") || line.includes("function handle")) eventHandlers++
      if (line.includes("<") && line.includes(">")) jsxElements++
    })

    return {
      totalLines: lines.length,
      stateVariables,
      useEffects,
      useCallbacks,
      eventHandlers,
      jsxElements,
      complexity: stateVariables + useEffects + useCallbacks + eventHandlers,
    }
  } catch (error) {
    return null
  }
}

// Scan for large components
const componentsDir = "components"
const largeComponents = []

function scanDirectory(dir) {
  try {
    const files = fs.readdirSync(dir)

    files.forEach((file) => {
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)

      if (stat.isDirectory()) {
        scanDirectory(filePath)
      } else if (file.endsWith(".tsx") || file.endsWith(".jsx")) {
        const lineCount = countLines(filePath)
        if (lineCount > 200) {
          const analysis = analyzeComponent(filePath)
          largeComponents.push({
            file: filePath,
            lines: lineCount,
            analysis,
          })
        }
      }
    })
  } catch (error) {
    console.log(`Could not scan directory: ${dir}`)
  }
}

// Start scanning
scanDirectory(componentsDir)

// Sort by line count
largeComponents.sort((a, b) => b.lines - a.lines)

console.log("=== LARGE COMPONENTS ANALYSIS ===\n")
console.log(`Found ${largeComponents.length} components with 200+ lines:\n`)

largeComponents.forEach((component, index) => {
  console.log(`${index + 1}. ${component.file}`)
  console.log(`   Lines: ${component.lines}`)
  if (component.analysis) {
    console.log(`   State Variables: ${component.analysis.stateVariables}`)
    console.log(`   useEffects: ${component.analysis.useEffects}`)
    console.log(`   useCallbacks: ${component.analysis.useCallbacks}`)
    console.log(`   Event Handlers: ${component.analysis.eventHandlers}`)
    console.log(`   Complexity Score: ${component.analysis.complexity}`)
  }
  console.log("")
})

// Identify specific components for detailed analysis
const targetComponents = [
  "components/HeaderDesktop.tsx",
  "components/MegaMenu.tsx",
  "components/NovaGraphFeatures.tsx",
  "components/ContactForm.tsx",
  "components/Footer.tsx",
]

console.log("=== TARGET COMPONENTS DETAILED ANALYSIS ===\n")

targetComponents.forEach((componentPath) => {
  const analysis = analyzeComponent(componentPath)
  if (analysis) {
    console.log(`${componentPath}:`)
    console.log(`  Total Lines: ${analysis.totalLines}`)
    console.log(`  State Management: ${analysis.stateVariables} useState hooks`)
    console.log(`  Side Effects: ${analysis.useEffects} useEffect hooks`)
    console.log(`  Memoized Functions: ${analysis.useCallbacks} useCallback hooks`)
    console.log(`  Event Handlers: ${analysis.eventHandlers} handler functions`)
    console.log(`  JSX Complexity: ${analysis.jsxElements} JSX elements`)
    console.log(`  Overall Complexity: ${analysis.complexity}/20 (High if >15)`)
    console.log("")
  }
})
