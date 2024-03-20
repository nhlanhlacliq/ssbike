type Props = {
  children: React.ReactNode
  className?: string
}

import { cn } from "~/lib/utils"

const Section = ({children, className, ...props}: Props) => {
  return (
    <main className={cn("my-16 md:my-24 mx-auto max-w-screen-xl", className)} {...props}>
      {children}
    </main>
  )
}

export default Section