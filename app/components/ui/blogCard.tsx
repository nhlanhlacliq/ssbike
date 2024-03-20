import { Card } from "./card";

type Props = {
  blog: {
    image: {
      src: string;
      name: string;
    };
    category: string, 
    title: string, 
    description: string, 
    author: {
      name: string,
      avatar: string,
    }
    date: string,
    length: string
  }
}

import Container from "./container";
import TextCard from "./textCard";
import { Dot } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { TypographyMuted, TypographySmall } from "./typography";
import ImageCard from "./imageCard";

const BlogCard = ({blog}: Props) => {
  return (
    <Card className="shadow-none flex flex-col -gap-1  border-0 py-4" >
      <ImageCard className="w-full h-60" src={blog.image.src} name={blog.image.name} />
      <TypographyMuted className="dark:text-accent-foreground">
        {blog.category}
      </TypographyMuted>
      <TextCard title={blog.title} 
        content={blog.description}/>
      
      <Container className="m-0">
        <Avatar>
          <AvatarImage src={blog.author.avatar} />
          <AvatarFallback>{blog.author.name.slice(0,2)}</AvatarFallback>
        </Avatar>
        <Container className="w-full flex-col pt-1 justify-center">
          <TypographySmall>{blog.author.name}</TypographySmall>
          <Container className="m-0 items-center">
            <div>
            <TypographyMuted className="text-xs"  >{blog.date}</TypographyMuted>
            </div>
            <Dot className="text-muted-foreground" />
            <div>
            <TypographyMuted className="text-xs"  >{blog.length}</TypographyMuted>
            </div>
          </Container>
        </Container>
      </Container>
    </Card>
  )
}

export default BlogCard