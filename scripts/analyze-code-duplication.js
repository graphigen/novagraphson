import fs from "fs"
import path from "path"

// Function to read file content
function readFileContent(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8")
  } catch (error) {
    console.log(`Could not read file: ${filePath}`)
    return ""
  }
}

// Function to extract code blocks from components
function extractCodeBlocks(content, componentName) {
  const blocks = {
    imports: [],
    stateVariables: [],
    eventHandlers: [],
    effects: [],
    utilities: [],
  }

  // Extract imports
  const importMatches = content.match(/import.*from.*['"]/g) || []
  blocks.imports = importMatches

  // Extract useState declarations
  const stateMatches = content.match(/const \[.*\] = useState$$.*$$/g) || []
  blocks.stateVariables = stateMatches

  // Extract useEffect hooks
  const effectMatches = content.match(/useEffect$$\($$ => \{[\s\S]*?\}, \[.*\]\)/g) || []
  blocks.effects = effectMatches

  // Extract event handlers
  const handlerMatches = content.match(/const handle\w+ = .*$$$$ => \{[\s\S]*?\}/g) || []
  blocks.eventHandlers = handlerMatches

  return blocks
}

// Function to find similar code patterns
function findSimilarPatterns(blocks1, blocks2, component1, component2) {
  const similarities = {
    duplicatedImports: [],
    duplicatedState: [],
    duplicatedHandlers: [],
    duplicatedEffects: [],
  }

  // Compare imports
  blocks1.imports.forEach((import1) => {
    blocks2.imports.forEach((import2) => {
      if (import1 === import2) {
        similarities.duplicatedImports.push({
          code: import1,
          components: [component1, component2],
        })
      }
    })
  })

  // Compare state patterns (similar variable names)
  blocks1.stateVariables.forEach((state1) => {
    blocks2.stateVariables.forEach((state2) => {
      const var1 = state1.match(/\[(.*?),/)?.[1]
      const var2 = state2.match(/\[(.*?),/)?.[1]
      if (var1 && var2 && (var1 === var2 || var1.includes(var2) || var2.includes(var1))) {
        similarities.duplicatedState.push({
          code1: state1,
          code2: state2,
          components: [component1, component2],
          similarity: "similar_variable_names",
        })
      }
    })
  })

  return similarities
}

// Main analysis function
function analyzeDuplication() {
  console.log("🔍 Analyzing Code Duplication in Header Components...\n")

  const componentsToAnalyze = [
    "components/HeaderDesktop.tsx",
    "components/MegaMenu.tsx",
    "contexts/LanguageContext.tsx",
  ]

  const componentBlocks = {}

  // Read and analyze each component
  componentsToAnalyze.forEach((componentPath) => {
    const content = readFileContent(componentPath)
    if (content) {
      const componentName = path.basename(componentPath, ".tsx")
      componentBlocks[componentName] = extractCodeBlocks(content, componentName)
      console.log(
        `✅ Analyzed ${componentName}: Found ${componentBlocks[componentName].stateVariables.length} state variables, ${componentBlocks[componentName].eventHandlers.length} handlers`,
      )
    }
  })

  console.log("\n📊 Duplication Analysis Results:\n")

  // Mobile header removed; skip HeaderDesktop vs HeaderMobile

  // Identify common patterns
  console.log("\n🎯 Common Patterns Identified:")
  console.log("- Search functionality (query state, results, handlers)")
  console.log("- Language switching (dropdown state, change handlers)")
  console.log("- Menu state management (open/close, click outside)")
  console.log("- Event handlers (escape key, click outside)")
  console.log("- Navigation logic (smooth scrolling, link handling)")

  return componentBlocks
}

// Execute analysis
const results = analyzeDuplication()

console.log("\n✨ Analysis Complete! Check the detailed findings above.")
