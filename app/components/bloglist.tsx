import BlogCard from "./ui/blogCard";
import Container from "./ui/container";
import Section from "./ui/section";
import { TypographyLead } from "./ui/typography";

import wenzo from "~/assets/images/people/Wenzo.jpg";
import trev from "~/assets/images/people/Trev.jpg";
import thami from "~/assets/images/people/Thami.jpg";

import trails from "~/assets/images/trails.jpeg";
import bike from "~/assets/images/bike.jpeg";
import fixing from "~/assets/images/fixing.jpeg";
import TextCard from "./ui/textCard";
import { Button } from "./ui/button";

const BlogList = () => {

  const blogs = [
    {
      image: trails,
      title: "Conquer the trails with confidence",
      description: "Learn about the best gear, trails, and techniques for mountain biking",
      category: "Riding",
      author: {
        name: "Wenzo",
        avatar: wenzo,
      },
      date: "12 Mar 2024",
      length: "5min read",
    },
    {
      image: bike,
      title: "The new buyer's guide to the mountain biking",
      description: "Get expert tips and tricks to sail through your first mountain bike purchase.",
      category: "Mountain Bike",
      author: {
        name: "Thami",
        avatar: thami,
      },
      date: "12 Mar 2024",
      length: "7min read",
    },
    {
      image: fixing,
      title: "Bike repair & maintenance: It's crucial",
      description: "Learn how to organise! Essential repair and maintenance procedures. You must organise!",
      category: "Maintenance",
      author: {
        name: "Trevor",
        avatar: trev,
      },
      date: "12 Mar 2024",
      length: "8min read",
    },
  ]

  return (
    <Section>
      <Container className="my-8 flex-col">
        <Container className="m-0 items-center justify-between" >
          <Container className="mx-0 flex-col">
            <TypographyLead>Content</TypographyLead>
            <TextCard
              variant="header"
              title="Explore the Wilderness"
              content="Discover the latest mountain bike adventures and tips with Studio Street."
              />
          </Container>
          <Container className="mx-0 hidden sm:block sm:ml-4" >
            <Button variant="outline" className="">Read more</Button>
          </Container>
        </Container>

        <Container className="m-0 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 " >
          {blogs.map((blog, i) => (
            <BlogCard key={i} blog={blog} />
          ))}
        </Container>
        <Container className="mx-0 my-4 sm:hidden">
          <Button variant="outline" className="" >View all</Button>
        </Container>
      </Container>
    </Section>
  );
};

export default BlogList;
