import { useState } from "react";
import { Card } from "./card";
import ImageSkeleton from "./imageSkeleton";

// import { Image } from "canvas";

type Props = {
  src: string;
};

const ImageCard = ({ src }: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const possibleImages = [
    "bg-[url(/app/assets/images/1.jpeg)]",
    "bg-[url(/app/assets/images/2.jpeg)]",
    "bg-[url(/app/assets/images/3.jpeg)]",
    "bg-[url(/app/assets/images/4.jpeg)]",
    "bg-[url(/app/assets/images/5.jpeg)]",
    "bg-[url(/app/assets/images/6.jpeg)]",
    "bg-[url(/app/assets/images/7.jpeg)]",
    "bg-[url(/app/assets/images/8.jpeg)]",
    "bg-[url(/app/assets/images/9.jpeg)]",
    "bg-[url(/app/assets/images/10.jpeg)]",
    "bg-[url(/app/assets/images/11.jpeg)]",
    "bg-[url(/app/assets/images/12.jpeg)]",
  ];

  return (
    <>
      <img src={src} alt="" onLoad={() => setImageLoaded(true)} className="hidden"/>
      {imageLoaded ? (
      <Card
        className={`flex-shrink-0 w-60 h-40 md:w-80 md:h-60 rounded-none border-0 bg-[url(${src})] bg-cover bg-center flicker-child`}
      ></Card>
      ) : (
      <ImageSkeleton />
      )}
    </>
  );
};

export default ImageCard;
