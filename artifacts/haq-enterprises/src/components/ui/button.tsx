import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/85 rounded-full",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full",
        outline: "border border-[#1d1d1f]/20 text-[#1d1d1f] hover:bg-[#1d1d1f]/5 rounded-full",
        secondary: "bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed] rounded-full",
        ghost: "hover:bg-[#f5f5f7] text-[#1d1d1f] rounded-full",
        link: "text-[#0071e3] underline-offset-4 hover:underline",
        // Apple-style solid dark CTA
        goldGlow: "bg-[#1d1d1f] text-white hover:bg-[#3a3a3c] rounded-full shadow-sm hover:shadow-md transition-all",
        // Apple-style ghost/outline secondary
        glass: "border border-[#1d1d1f]/25 text-[#1d1d1f] hover:bg-[#1d1d1f]/5 rounded-full backdrop-blur-sm transition-all",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base",
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
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
