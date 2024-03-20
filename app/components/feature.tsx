import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Container from "./ui/container";
import TextCard from "./ui/textCard";
import { TypographyLead } from "./ui/typography";

import image2 from "~/assets/images/2.jpeg";
import Section from "./ui/section";
import ImageCard from "./ui/imageCard";

const Feature = () => {
  return (
    <Section>
      <Container className="mx-0 flex flex-col md:flex-row">
        <Container className="my-8  flex-col sm:basis-1/2">
          <TypographyLead>Adventure</TypographyLead>
          <TextCard
            variant="header"
            title="Explore the Thrill of Mountain Biking"
            content="Join us on our exhilarating mountain bike adventures and experience the thrill of the great outdoors. From breathtaking trails to stunning landscapes, we'll take you on a journey like no other."
          />
          
          <Container className="m-0 flex flex-col sm:grid sm:grid-cols-2">
            <TextCard
              title="Discover More"
              content="Unleash your inner adventurer and conquer the trails with Studio Street."
              />
            <TextCard
              title="Join us"
              content="Embark on unforgettable mountain biking journeys with a community of like-minded enthusiasts."
              />
          </Container>
          
          <Container className="mx-0 gap-2">
            <Button variant="outline">Learn More</Button>
            <Button variant="ghost">
              Organize {<span className="w-2" />} {<ChevronRight size={15} />}
            </Button>
          </Container>
        </Container>
        <Container className="mb-8 sm:mt-4 md:my-8 md:basis-1/2">
          <ImageCard src={image2} name={"2"} className="w-full h-80 md:h-full" />
        </Container>
      </Container>
    </Section>
  );
};

export default Feature;
