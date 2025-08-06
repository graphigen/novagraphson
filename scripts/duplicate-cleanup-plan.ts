// Duplicate Cleanup Plan - DO NOT EXECUTE, FOR PLANNING ONLY

interface CleanupAction {
  action: "DELETE" | "KEEP" | "UPDATE_IMPORTS"
  file: string
  reason: string
  affectedImports?: string[]
}

const cleanupPlan: CleanupAction[] = [
  // SAFE TO DELETE - No active imports found
  {
    action: "DELETE",
    file: "components/aspect-ratio.tsx",
    reason: "Duplicate of components/ui/aspect-ratio.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/alert-dialog.tsx",
    reason: "Duplicate of components/ui/alert-dialog.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/pagination.tsx",
    reason: "Duplicate of components/ui/pagination.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/tabs.tsx",
    reason: "Duplicate of components/ui/tabs.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/card.tsx",
    reason: "Duplicate of components/ui/card.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/slider.tsx",
    reason: "Duplicate of components/ui/slider.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/popover.tsx",
    reason: "Duplicate of components/ui/popover.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/progress.tsx",
    reason: "Duplicate of components/ui/progress.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/toaster.tsx",
    reason: "Duplicate of components/ui/toaster.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/input-otp.tsx",
    reason: "Duplicate of components/ui/input-otp.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/chart.tsx",
    reason: "Duplicate of components/ui/chart.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/hover-card.tsx",
    reason: "Duplicate of components/ui/hover-card.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/sheet.tsx",
    reason: "Duplicate of components/ui/sheet.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/scroll-area.tsx",
    reason: "Duplicate of components/ui/scroll-area.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/resizable.tsx",
    reason: "Duplicate of components/ui/resizable.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/label.tsx",
    reason: "Duplicate of components/ui/label.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/sonner.tsx",
    reason: "Duplicate of components/ui/sonner.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/navigation-menu.tsx",
    reason: "Duplicate of components/ui/navigation-menu.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/accordion.tsx",
    reason: "Duplicate of components/ui/accordion.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/drawer.tsx",
    reason: "Duplicate of components/ui/drawer.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/tooltip.tsx",
    reason: "Duplicate of components/ui/tooltip.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/alert.tsx",
    reason: "Duplicate of components/ui/alert.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/switch.tsx",
    reason: "Duplicate of components/ui/switch.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/calendar.tsx",
    reason: "Duplicate of components/ui/calendar.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/breadcrumb.tsx",
    reason: "Duplicate of components/ui/breadcrumb.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/radio-group.tsx",
    reason: "Duplicate of components/ui/radio-group.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/command.tsx",
    reason: "Duplicate of components/ui/command.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/toggle-group.tsx",
    reason: "Duplicate of components/ui/toggle-group.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/avatar.tsx",
    reason: "Duplicate of components/ui/avatar.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/menubar.tsx",
    reason: "Duplicate of components/ui/menubar.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/dialog.tsx",
    reason: "Duplicate of components/ui/dialog.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/badge.tsx",
    reason: "Duplicate of components/ui/badge.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/sidebar.tsx",
    reason: "Duplicate of components/ui/sidebar.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/table.tsx",
    reason: "Duplicate of components/ui/table.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/separator.tsx",
    reason: "Duplicate of components/ui/separator.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/button.tsx",
    reason: "Duplicate of components/ui/button.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/toggle.tsx",
    reason: "Duplicate of components/ui/toggle.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/toast.tsx",
    reason: "Duplicate of components/ui/toast.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/checkbox.tsx",
    reason: "Duplicate of components/ui/checkbox.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/collapsible.tsx",
    reason: "Duplicate of components/ui/collapsible.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/dropdown-menu.tsx",
    reason: "Duplicate of components/ui/dropdown-menu.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/select.tsx",
    reason: "Duplicate of components/ui/select.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/textarea.tsx",
    reason: "Duplicate of components/ui/textarea.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/input.tsx",
    reason: "Duplicate of components/ui/input.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/skeleton.tsx",
    reason: "Duplicate of components/ui/skeleton.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/context-menu.tsx",
    reason: "Duplicate of components/ui/context-menu.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/form.tsx",
    reason: "Duplicate of components/ui/form.tsx, no active imports",
  },
  {
    action: "DELETE",
    file: "components/carousel.tsx",
    reason: "Duplicate of components/ui/carousel.tsx, no active imports",
  },

  // KEEP - Primary implementations in components/ui/
  {
    action: "KEEP",
    file: "components/ui/*",
    reason: "Primary UI component implementations, actively imported",
  },
]

// Hook duplicates analysis
const hookDuplicates = [
  {
    action: "DELETE",
    file: "components/ui/use-mobile.tsx",
    reason: "Hook should be in hooks/ directory, duplicate of hooks/use-mobile.ts",
  },
  {
    action: "KEEP",
    file: "hooks/use-mobile.ts",
    reason: "Correct location for custom hook",
  },
  {
    action: "DELETE",
    file: "components/ui/use-toast.ts",
    reason: "Duplicate of hooks/use-toast.ts",
  },
  {
    action: "KEEP",
    file: "hooks/use-toast.ts",
    reason: "Correct location for custom hook",
  },
]

export { cleanupPlan, hookDuplicates }
