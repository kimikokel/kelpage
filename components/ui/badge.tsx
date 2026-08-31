import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-normal tracking-[0.08em] transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-[#212327] bg-[#1a1c20] text-[#dadbdf] hover:text-white",
        secondary:
          "border-[#212327] bg-transparent text-[#dadbdf] hover:border-white/30 hover:text-white",
        destructive:
          "border-[#ff7a17]/50 bg-[#ff7a17]/15 text-[#ffc285] hover:bg-[#ff7a17]/25",
        outline: "border-white/30 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
