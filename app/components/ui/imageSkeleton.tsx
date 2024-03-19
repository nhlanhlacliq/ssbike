import { Card } from "./card"
import { Skeleton } from "./skeleton"

const ImageSkeleton = () => {
  return (
    <Card className={`p-2 justify-between flex-shrink-0 w-60 h-40 md:w-80 md:h-60 rounded-none border-0`}>
      <Skeleton className="h-full w-full"/>
    </Card>
  )
}

export default ImageSkeleton