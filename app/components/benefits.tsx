import Container from "./ui/container";
import TextCard from "./ui/textCard";

import group2 from "~/assets/images/group2.jpeg";
import Section from "./ui/section";
import ImageCard from "./ui/imageCard";

const Benefits = () => {
  return (
    <Section>
      <Container className="mx-0 flex flex-col md:flex-row-reverse">
        <Container className="my-8  flex-col sm:basis-1/2">
          {/* <TypographyLead>Adventure</TypographyLead> */}
          <TextCard
            variant="header"
            title="Discover the Health and Social Benefits of Joining the Mountain Bike Community"
            content="Joining the mountain bike community offers numerous health and social benefits. It's a great way to stay active, connect with like-minded individuals, and explore the outdoors."
          />
          
          <Container className="m-0 flex flex-col sm:grid sm:grid-cols-2">
            <TextCard
              title="Stay Active"
              content="Mountain biking is a fun and challenging activity that keeps you physically fit."
              />
            <TextCard
              title="Connect & Socialize"
              content="Join a vibrant community of mountain bikers and make new friends along the way."
              />
          </Container>
        </Container>

        <Container className="mb-8 sm:mt-4 md:my-8 md:basis-1/2">
          <ImageCard src={group2} className="w-full h-80 md:h-full" />
        </Container>
      </Container>
    </Section>
  );
};

export default Benefits;
