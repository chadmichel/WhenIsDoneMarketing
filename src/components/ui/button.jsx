import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border px-4 py-2 text-sm font-medium transition disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-[#1f6feb] bg-[#238636] text-white hover:bg-[#2ea043]',
        outline: 'border-[#30363d] bg-[#0d1117] text-[#c9d1d9] hover:bg-[#161b22]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const Button = React.forwardRef(({ className, variant, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'

  return <Comp className={cn(buttonVariants({ variant, className }))} ref={ref} {...props} />
})

Button.displayName = 'Button'

export { Button }
