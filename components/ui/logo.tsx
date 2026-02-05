import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const logoVariants = cva('inline-flex items-center gap-2 font-semibold transition-all duration-200', {
  variants: {
    size: {
      sm: 'text-lg',
      default: 'text-xl',
      lg: 'text-2xl',
      xl: 'text-3xl',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

const iconSizes = {
  sm: 'h-6 w-6',
  default: 'h-8 w-8',
  lg: 'h-10 w-10',
  xl: 'h-12 w-12',
}

export interface LogoProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof logoVariants> {
  showText?: boolean
  iconOnly?: boolean
}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ className, size = 'default', showText = true, iconOnly = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(logoVariants({ size }), className)}
        {...props}
      >
        {/* QuickFeed Icon - Lightning bolt in a speech bubble */}
        <div className={cn('relative', iconSizes[size || 'default'])}>
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
          >
            {/* Gradient definition */}
            <defs>
              <linearGradient id="quickfeed-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(252 100% 67%)" />
                <stop offset="100%" stopColor="hsl(252 100% 80%)" />
              </linearGradient>
              <linearGradient id="quickfeed-gradient-dark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(252 100% 60%)" />
                <stop offset="100%" stopColor="hsl(252 100% 70%)" />
              </linearGradient>
            </defs>
            
            {/* Speech bubble background */}
            <path
              d="M4 10C4 6.68629 6.68629 4 10 4H22C25.3137 4 28 6.68629 28 10V18C28 21.3137 25.3137 24 22 24H18L12 28V24H10C6.68629 24 4 21.3137 4 18V10Z"
              fill="url(#quickfeed-gradient)"
              className="drop-shadow-lg"
            />
            
            {/* Lightning bolt */}
            <path
              d="M17.5 8L12 16H15L14.5 22L20 14H17L17.5 8Z"
              fill="hsl(222 47% 6%)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Text */}
        {showText && !iconOnly && (
          <span className="text-foreground">
            Quick<span className="text-gradient-brand">Feed</span>
          </span>
        )}
      </div>
    )
  }
)
Logo.displayName = 'Logo'

// Simplified icon-only version for favicons, etc.
const LogoIcon = React.forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-8 w-8', className)}
      {...props}
    >
      <defs>
        <linearGradient id="quickfeed-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(252 100% 67%)" />
          <stop offset="100%" stopColor="hsl(252 100% 80%)" />
        </linearGradient>
      </defs>
      <path
        d="M4 10C4 6.68629 6.68629 4 10 4H22C25.3137 4 28 6.68629 28 10V18C28 21.3137 25.3137 24 22 24H18L12 28V24H10C6.68629 24 4 21.3137 4 18V10Z"
        fill="url(#quickfeed-icon-gradient)"
      />
      <path
        d="M17.5 8L12 16H15L14.5 22L20 14H17L17.5 8Z"
        fill="hsl(222 47% 6%)"
      />
    </svg>
  )
)
LogoIcon.displayName = 'LogoIcon'

export { Logo, LogoIcon, logoVariants }
