import fs from "fs"
import path from "path"

// Memory leak detection script
function detectMemoryLeaks() {
  const leakPatterns = [
    {
      pattern: /setTimeout|setInterval/g,
      cleanup: /clearTimeout|clearInterval/g,
      type: "Timer Leak",
    },
    {
      pattern: /addEventListener/g,
      cleanup: /removeEventListener/g,
      type: "Event Listener Leak",
    },
    {
      pattern: /useRef.*current/g,
      cleanup: /current\s*=\s*null/g,
      type: "Ref Leak",
    },
  ]

  const issues = []

  function analyzeFile(filePath) {
    const content = fs.readFileSync(filePath, "utf8")
    const fileName = path.basename(filePath)

    leakPatterns.forEach(({ pattern, cleanup, type }) => {
      const matches = content.match(pattern)
      const cleanups = content.match(cleanup)

      if (matches && (!cleanups || matches.length > cleanups.length)) {
        issues.push({
          file: fileName,
          type,
          issue: `${matches.length} ${type.toLowerCase()}(s) found, ${cleanups ? cleanups.length : 0} cleanup(s)`,
          severity: "High",
        })
      }
    })
  }

  // Scan all component files
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

  walkDir("components")

  console.log("Memory Leak Analysis:")
  console.log(JSON.stringify(issues, null, 2))

  return issues
}

detectMemoryLeaks()
