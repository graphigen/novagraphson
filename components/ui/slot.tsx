"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean
}

const SlotComponent = React.forwardRef<HTMLElement, SlotProps>(
  ({ asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "span"
    return <Comp ref={ref} {...props} />
  }
)
SlotComponent.displayName = "Slot"

export { SlotComponent as Slot }

