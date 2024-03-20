import { cn } from "~/lib/utils"
import { Card } from "./card"
import { Skeleton } from "./skeleton"

type Props = {
  className: string
}

const ImageSkeleton = ({className}: Props) => {
  return (
    <Card className={cn('shadow-none flex-shrink-0 rounded-none border-0', className)}>
      <Skeleton className="h-full w-full rounded-none"/>
    </Card>
  )
}

export default ImageSkeleton