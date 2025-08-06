import fs from "fs"
import path from "path"

// Performance analysis script for React components
function analyzePerformanceIssues() {
  const componentsDir = "components"
  const issues = []

  function analyzeFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, "utf8")
      const fileName = path.basename(filePath)
      const lines = content.split("\n")

      // Check for expensive operations in render
      lines.forEach((line, index) => {
        const lineNum = index + 1

        // Large arrays/objects created in render
        if (line.includes("const ") && (line.includes("[") || line.includes("{"))) {
          if (!line.includes("useMemo") && !line.includes("useState")) {
            issues.push({
              file: fileName,
              line: lineNum,
              type: "Expensive Operation",
              issue: "Array/Object created on every render",
              code: line.trim(),
            })
          }
        }

        // Missing dependency arrays
        if (line.includes("useCallback") || line.includes("useEffect")) {
          const nextLine = lines[index + 1]
          if (nextLine && !nextLine.includes("], [")) {
            issues.push({
              file: fileName,
              line: lineNum,
              type: "Missing Dependencies",
              issue: "Hook missing dependency array",
              code: line.trim(),
            })
          }
        }

        // Potential memory leaks
        if (line.includes("setTimeout") || line.includes("setInterval")) {
          issues.push({
            file: fileName,
            line: lineNum,
            type: "Memory Leak Risk",
            issue: "Timer not cleaned up",
            code: line.trim(),
          })
        }
      })
    } catch (error) {
      console.error(`Error analyzing ${filePath}:`, error.message)
    }
  }

  // Analyze all component files
  function walkDir(dir) {
    const files = fs.readdirSync(dir)
    files.forEach((file) => {
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)

      if (stat.isDirectory()) {
        walkDir(filePath)
      } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
        analyzeFile(filePath)
      }
    })
  }

  walkDir(componentsDir)

  // Group issues by type
  const groupedIssues = issues.reduce((acc, issue) => {
    if (!acc[issue.type]) acc[issue.type] = []
    acc[issue.type].push(issue)
    return acc
  }, {})

  console.log("Performance Issues Found:")
  console.log(JSON.stringify(groupedIssues, null, 2))

  return groupedIssues
}

analyzePerformanceIssues()
