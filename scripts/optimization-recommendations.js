// Generate optimization recommendations
function generateOptimizations() {
  const recommendations = {
    "ContactForm.tsx": [
      {
        issue: "Services and budget arrays recreated on every render",
        location: "Lines 20-22",
        fix: "Move arrays outside component or wrap in useMemo",
        impact: "High - prevents unnecessary re-renders",
      },
    ],
    "HeaderDesktop.tsx": [
      {
        issue: "navigationItems, searchData, popularSearchTerms recreated on render",
        location: "Lines 45-65",
        fix: "Wrap in useMemo or move outside component",
        impact: "High - expensive array operations",
      },
      {
        issue: "Missing dependencies in useCallback hooks",
        location: "Lines 89, 95, 101",
        fix: "Add proper dependency arrays",
        impact: "Medium - prevents stale closures",
      },
    ],
    "MegaMenu.tsx": [
      {
        issue: "solutionGroups array recreated on every render",
        location: "Lines 25-60",
        fix: "Move outside component or use useMemo",
        impact: "High - large data structure recreation",
      },
    ],
    "NovaGraphFeatures.tsx": [
      {
        issue: "Complex chart data and calculations in render",
        location: "Lines 200-350",
        fix: "Memoize chart data and expensive calculations",
        impact: "Very High - complex SVG operations",
      },
    ],
  }

  console.log("Optimization Recommendations:")
  console.log(JSON.stringify(recommendations, null, 2))

  return recommendations
}

generateOptimizations()
