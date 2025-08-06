// Generate proposals for shared hooks based on duplicated logic
function generateHookProposals() {
  console.log("🛠️  Generating Shared Hook Proposals...\n")

  const hookProposals = {
    useSearch: {
      purpose: "Centralize search functionality across header components",
      parameters: ["searchData: SearchResult[]", "onSearch?: (query: string) => void"],
      returnValues: [
        "searchQuery: string",
        "setSearchQuery: (query: string) => void",
        "searchResults: SearchResult[]",
        "isSearching: boolean",
        "handleSearchSubmit: (e: FormEvent) => void",
        "clearSearch: () => void",
      ],
      benefits: [
        "Eliminates 50+ lines of duplicated search logic",
        "Consistent search behavior across components",
        "Easier to add search features globally",
      ],
      usage: "const { searchQuery, searchResults, handleSearchSubmit } = useSearch(searchData);",
    },

    useLanguageDropdown: {
      purpose: "Manage language dropdown state and interactions",
      parameters: ["onLanguageChange?: (lang: Language) => void"],
      returnValues: [
        "isOpen: boolean",
        "toggleDropdown: () => void",
        "closeDropdown: () => void",
        "handleLanguageSelect: (lang: Language) => void",
      ],
      benefits: [
        "Eliminates 30+ lines of duplicated dropdown logic",
        "Consistent dropdown behavior",
        "Easier to modify dropdown interactions",
      ],
      usage: "const { isOpen, toggleDropdown, handleLanguageSelect } = useLanguageDropdown();",
    },

    useClickOutside: {
      purpose: "Generic click outside detection for any element",
      parameters: ["refs: RefObject<HTMLElement>[]", "callback: () => void"],
      returnValues: ["None (side effect only)"],
      benefits: [
        "Eliminates 20+ lines of duplicated event handling",
        "Reusable across all dropdown components",
        "Proper cleanup and memory management",
      ],
      usage: "useClickOutside([dropdownRef, triggerRef], closeDropdown);",
    },

    useEscapeKey: {
      purpose: "Handle escape key press for closing modals/dropdowns",
      parameters: ["callback: () => void", "enabled?: boolean"],
      returnValues: ["None (side effect only)"],
      benefits: [
        "Eliminates 15+ lines of duplicated key handling",
        "Consistent escape key behavior",
        "Can be conditionally enabled/disabled",
      ],
      usage: "useEscapeKey(closeAllDropdowns, isAnyDropdownOpen);",
    },

    useMenuState: {
      purpose: "Manage menu state with hover delays and timeouts",
      parameters: ["delay?: number"],
      returnValues: [
        "isOpen: boolean",
        "openMenu: () => void",
        "closeMenu: () => void",
        "handleMouseEnter: () => void",
        "handleMouseLeave: () => void",
      ],
      benefits: [
        "Eliminates 40+ lines of timeout management",
        "Consistent hover behavior across menus",
        "Configurable delay timing",
      ],
      usage: "const { isOpen, handleMouseEnter, handleMouseLeave } = useMenuState(100);",
    },

    useNavigation: {
      purpose: "Handle navigation with smooth scrolling and external links",
      parameters: ["onNavigate?: (href: string) => void"],
      returnValues: [
        "handleNavClick: (e: MouseEvent, href: string) => void",
        "smoothScrollTo: (elementId: string) => void",
      ],
      benefits: [
        "Eliminates 25+ lines of navigation logic",
        "Consistent navigation behavior",
        "Centralized scroll and link handling",
      ],
      usage: "const { handleNavClick } = useNavigation();",
    },
  }

  console.log("🎯 Proposed Shared Hooks:\n")

  Object.entries(hookProposals).forEach(([hookName, proposal]) => {
    console.log(`🪝 ${hookName}`)
    console.log(`   Purpose: ${proposal.purpose}`)
    console.log(`   Parameters: ${proposal.parameters.join(", ")}`)
    console.log(`   Returns: ${proposal.returnValues.join(", ")}`)
    console.log(`   Benefits:`)
    proposal.benefits.forEach((benefit) => console.log(`     • ${benefit}`))
    console.log(`   Usage: ${proposal.usage}`)
    console.log("")
  })

  return hookProposals
}

// Execute hook proposal generation
const hookProposals = generateHookProposals()

console.log("✨ Hook Proposals Generated Successfully!")
