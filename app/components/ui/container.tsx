type Props = {
  children: React.ReactNode
  className: string
}

import { cn } from "~/lib/utils"

const Container = ({children, className, ...props}: Props) => {
  return (
    <div className={cn("flex px-4", className)} {...props}>
      {children}
    </div>
  )
}

export default Container