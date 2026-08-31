import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "border-white bg-primary text-primary-foreground hover:bg-[#f2f2ef]",
        destructive:
          "border-[#ff7a17] bg-[#ff7a17] text-black hover:bg-[#ffc285]",
        outline:
          "border-white/25 bg-transparent text-white hover:border-white/45 hover:bg-white/10",
        secondary:
          "border-[#212327] bg-[#1a1c20] text-[#dadbdf] hover:bg-[#22252a] hover:text-white",
        ghost:
          "border-white/15 bg-transparent text-[#dadbdf] hover:border-white/30 hover:bg-white/5 hover:text-white",
        link: "border-transparent p-0 text-[#dadbdf] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
