// Import Analysis Script - DO NOT RUN, FOR ANALYSIS ONLY

interface ImportUsage {
  component: string
  importedFrom: string
  usedInFiles: string[]
  importPath: string
}

const importAnalysis: ImportUsage[] = [
  {
    component: "Card",
    importedFrom: "@/components/ui/card",
    usedInFiles: ["components/ContactForm.tsx", "components/NovaGraphFeatures.tsx", "components/QuestionsSection.tsx"],
    importPath: "@/components/ui/card",
  },
  {
    component: "Button",
    importedFrom: "@/components/ui/button",
    usedInFiles: [
      "components/ContactForm.tsx",
      "components/HeaderDesktop.tsx",
      "components/HeaderMobile.tsx",
      "components/MegaMenu.tsx",
    ],
    importPath: "@/components/ui/button",
  },
  {
    component: "Input",
    importedFrom: "@/components/ui/input",
    usedInFiles: ["components/ContactForm.tsx", "components/HeaderDesktop.tsx"],
    importPath: "@/components/ui/input",
  },
  {
    component: "Textarea",
    importedFrom: "@/components/ui/textarea",
    usedInFiles: ["components/ContactForm.tsx"],
    importPath: "@/components/ui/textarea",
  },
  {
    component: "Select",
    importedFrom: "@/components/ui/select",
    usedInFiles: ["components/ContactForm.tsx"],
    importPath: "@/components/ui/select",
  },
  {
    component: "Tabs",
    importedFrom: "@/components/ui/tabs",
    usedInFiles: ["components/NovaGraphFeatures.tsx"],
    importPath: "@/components/ui/tabs",
  },
  {
    component: "Progress",
    importedFrom: "@/components/ui/progress",
    usedInFiles: ["components/NovaGraphFeatures.tsx"],
    importPath: "@/components/ui/progress",
  },
  {
    component: "Badge",
    importedFrom: "@/components/ui/badge",
    usedInFiles: ["components/NovaGraphFeatures.tsx", "components/MegaMenu.tsx"],
    importPath: "@/components/ui/badge",
  },
  {
    component: "Accordion",
    importedFrom: "@/components/ui/accordion",
    usedInFiles: ["components/QuestionsSection.tsx"],
    importPath: "@/components/ui/accordion",
  },
  {
    component: "Sheet",
    importedFrom: "@/components/ui/sheet",
    usedInFiles: ["components/HeaderMobile.tsx", "components/MobileSidebarMenu.tsx"],
    importPath: "@/components/ui/sheet",
  },
  {
    component: "NavigationMenu",
    importedFrom: "@/components/ui/navigation-menu",
    usedInFiles: ["components/HeaderDesktop.tsx"],
    importPath: "@/components/ui/navigation-menu",
  },
  {
    component: "DropdownMenu",
    importedFrom: "@/components/ui/dropdown-menu",
    usedInFiles: ["components/HeaderDesktop.tsx", "components/MegaMenu.tsx"],
    importPath: "@/components/ui/dropdown-menu",
  },
  {
    component: "Separator",
    importedFrom: "@/components/ui/separator",
    usedInFiles: ["components/Footer.tsx", "components/MegaMenu.tsx"],
    importPath: "@/components/ui/separator",
  },
  {
    component: "Dialog",
    importedFrom: "@/components/ui/dialog",
    usedInFiles: ["components/HeaderDesktop.tsx"],
    importPath: "@/components/ui/dialog",
  },
]

// Components with NO active imports found:
const unusedDuplicates = [
  "components/aspect-ratio.tsx",
  "components/alert-dialog.tsx",
  "components/pagination.tsx",
  "components/slider.tsx",
  "components/popover.tsx",
  "components/input-otp.tsx",
  "components/chart.tsx",
  "components/hover-card.tsx",
  "components/scroll-area.tsx",
  "components/resizable.tsx",
  "components/label.tsx",
  "components/sonner.tsx",
  "components/drawer.tsx",
  "components/tooltip.tsx",
  "components/alert.tsx",
  "components/switch.tsx",
  "components/calendar.tsx",
  "components/breadcrumb.tsx",
  "components/radio-group.tsx",
  "components/command.tsx",
  "components/toggle-group.tsx",
  "components/avatar.tsx",
  "components/menubar.tsx",
  "components/table.tsx",
  "components/toggle.tsx",
  "components/toast.tsx",
  "components/checkbox.tsx",
  "components/collapsible.tsx",
  "components/skeleton.tsx",
  "components/context-menu.tsx",
  "components/form.tsx",
  "components/carousel.tsx",
]

export { importAnalysis, unusedDuplicates }
