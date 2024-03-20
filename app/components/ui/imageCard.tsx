import { useState } from "react";
import { Card } from "./card";
import ImageSkeleton from "./imageSkeleton";
import { cn } from "~/lib/utils";

// import { Image } from "canvas";

type Props = {
  src: string;
  name: string;
  className: string;
  children?: React.ReactNode;
};

const ImageCard = ({ src, name, className, children, ...props }: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const possibleImages = [
    "bg-1",
    "bg-2",
    "bg-3",
    "bg-4",
    "bg-5",
    "bg-6",
    "bg-7",
    "bg-8",
    "bg-9",
    "bg-10",
    "bg-11",
    "bg-12",
    "bg-bike",    
    "bg-fixing",    
    "bg-group2",    
    "bg-trails",    
    "bg-woods",    
  ]

  return (
    <>
      <img src={src} alt="" onLoad={() => setImageLoaded(true)} className="hidden"/>
      {imageLoaded ? (
      <Card
        className={cn(`bg-${name} flex-shrink-0 rounded-none border-0 bg-cover bg-center flicker-child`, className)}
        {...props}
      >
        {children}
      </Card>
      ) : (
      <ImageSkeleton className={className} />
      )}
    </>
  );
};

export default ImageCard;
