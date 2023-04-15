import { HTMLAttributes, ReactNode, forwardRef } from 'react'
import clsx from 'clsx'

interface Props {
  className?: string
  children?: ReactNode
}

const OuterContainer = forwardRef<HTMLDivElement, Props & HTMLAttributes<HTMLDivElement>>(
  function OuterContainer({ className, children, ...props }, ref) {
    return (
      <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
        <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
      </div>
    )
  }
)

const InnerContainer = forwardRef<HTMLDivElement, Props & HTMLAttributes<HTMLDivElement>>(
  function InnerContainer({ className, children, ...props }, ref) {
    return (
      <div ref={ref} className={clsx('relative px-4 sm:px-8 lg:px-12', className)} {...props}>
        <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
      </div>
    )
  }
)

const Container = forwardRef<HTMLDivElement, Props & HTMLAttributes<HTMLDivElement>>(
  function Container({ children, ...props }, ref) {
    return (
      <OuterContainer ref={ref} {...props}>
        <InnerContainer>{children}</InnerContainer>
      </OuterContainer>
    )
  }
)

export default Object.assign(Container, {
  Inner: InnerContainer,
  Outer: OuterContainer,
})
