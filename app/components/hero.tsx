import { Button } from "./ui/button";
import Container from "./ui/container";
import ImageCard from "./ui/imageCard";

import image1 from "~/assets/images/1.jpeg";
import image9 from "~/assets/images/9.jpeg";
import image3 from "~/assets/images/3.jpeg";
import image4 from "~/assets/images/4.jpeg";
import image5 from "~/assets/images/5.jpeg";
import image6 from "~/assets/images/6.jpeg";
import image7 from "~/assets/images/7.jpeg";
import image8 from "~/assets/images/8.jpeg";
import Section from "./ui/section";

const imagesList = [
  {
    src: image1,
    name: "1"
  },
  {
    src: image9,
    name: "9"
  },
  {
    src: image3,
    name: "3"
  },
  {
    src: image4,
    name: "4"
  },
  {
    src: image5,
    name: "5"
  },
  {
    src: image6,
    name: "6"
  },
  {
    src: image7,
    name: "7"
  },
  {
    src: image8,
    name: "8"
  },
];

const Hero = () => {
  const leftScroller = "flex gap-4 pr-4 flicker animate-loop-scroll-left group-active:paused md:group-hover:paused"
  const rightScroller = "flex gap-4 pr-4 flicker animate-loop-scroll-right group-active:paused md:group-hover:paused"

  return (
    <Section>
      <Container className="mt-14 flex flex-col items-center">
        <h1 className="text-center text-balance">
          Unleash Your Inner <span className="dark:text-accent-foreground" >Adventurer</span> on the Trails
        </h1>
        <p className="mx-0 text-center text-pretty">
          Embark on thrilling mountain biking adventures and explore
          breathtaking trails.
        </p>
        <div className="m-6 flex gap-4">
          <Button>Organize!</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </Container>

      <Container className="mx-0 mt-8 mb-14 gap-4 flex-col overflow-hidden flicker-wrapper no-highlights">
        <div className="flex flicker-wrapper group">
          <div className={leftScroller}>
            {imagesList.slice(0,4).map((image, i) => (
                <ImageCard className=" w-60 h-40 md:w-80 md:h-60" key={i} src={image.src} name={image.name} />
                ))}
          </div>
          <div className={leftScroller}>
              {imagesList.slice(0,4).map((image, i) => (
                <ImageCard className="w-60 h-40 md:w-80 md:h-60" key={i} src={image.src} name={image.name} />
                ))}
          </div>
        </div>

        <div className="flex flicker-wrapper group">
          <div className={rightScroller}>
              {imagesList.slice(4).map((image, i) => (
                <ImageCard className="w-60 h-40 md:w-80 md:h-60" key={i} src={image.src} name={image.name} />
                ))}
          </div>
          <div className={rightScroller}>
              {imagesList.slice(4).map((image, i) => (
                <ImageCard className="w-60 h-40 md:w-80 md:h-60" key={i} src={image.src} name={image.name} />
                ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
