import Section from './ui/section'
import Container from './ui/container'
import { TypographyLarge, TypographyLead, TypographyMuted } from './ui/typography'
import TextCard from './ui/textCard'

import akshay from "~/assets/images/people/Akshay.jpg";
import bruce from "~/assets/images/people/Bruce.jpg";
import cliq from "~/assets/images/people/cliq.jpg";
import george from "~/assets/images/people/George.jpg";
import jb from "~/assets/images/people/Jb.jpg";
import leroy from "~/assets/images/people/Leroy.jpg";
import thami from "~/assets/images/people/Thami.jpg";
import trev from "~/assets/images/people/Trev.jpg";
import wenzo from "~/assets/images/people/Wenzo.jpg";
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { cn } from '~/lib/utils';


const membersList = [
  {
    image: akshay,
    name: 'Akshay Ramharakh',
    nickName: 'Tata',
  },
  {
    image: bruce,
    name: 'Bruce Matunga',
    nickName: '3 Business Days',
  },
  {
    image: cliq,
    name: 'Nhlanhla Masuku',
    nickName: 'Frieza',
  },
  {
    image: george,
    name: 'George Sferopoulos',
    nickName: 'Ma-poser',
  },
  {
    image: jb,
    name: 'Njabulo Madonsela',
    nickName: 'JB',
  },
  {
    image: leroy,
    name: 'Leroy Mpofu',
    nickName: 'Randy Orton',
  },
  {
    image: thami,
    name: 'Thamsanqa Gwafa',
    nickName: 'Gladiator',
  },
  {
    image: trev,
    name: 'Lesego Maake',
    nickName: 'Tesla',
  },
  {
    image: wenzo,
    name: 'Wenzokuhle Lebelo',
    nickName: 'The Lobe',
  },
]

type Props = {
  member: {
    image: string,
    name: string,
    nickName: string,
  }
  className?: string
}

const MemberCard = ({member, className}: Props) => {
  return (
    <Container className={cn("m-6 mt-4 w-60 md:m-8 md:mt-6 md:w-80", className)}>
        <Avatar className='size-20 md:size-32' >
          <AvatarImage src={member.image} className='object-cover w-full'/>
          <AvatarFallback>{member.name.slice(0,2)}</AvatarFallback>
        </Avatar>
        <Container className="w-full flex-col pt-1 justify-center">
          <TypographyLarge>{member.name.split(' ')[0]}</TypographyLarge>
          <TypographyLarge>{member.name.split(' ')[1]}</TypographyLarge>
          <Container className="m-0 items-center">
          <TypographyMuted className="dark:text-accent-foreground" >{member.nickName}</TypographyMuted>
          </Container>
        </Container>
      </Container>
  )
}

const Members = () => {
  const leftScroller = "flex gap-4 pr-4 flicker animate-loop-scroll-left-slow group-active:faster md:group-hover:faster"
  const rightScroller = "flex gap-4 pr-4 flicker animate-loop-scroll-right-slow group-active:faster md:group-hover:faster"

  return (
    <Section>
      <Container className='mx-0 flex-col'>
        <Container className='flex-col' >

          <TypographyLead>Members</TypographyLead>
          <TextCard
            variant="header"
            title="Meet the Team"
            content={`Meet the unique individuals that make up Studio Street. We are a family of ${membersList.length} who are passionate about life, technology, design, marketing, and business.`}
            />
        </Container>

        <Container className="mx-0 mt-8 mb-14 gap-4 flex-col overflow-hidden flicker-wrapper no-highlights">
          <div className="flex flicker-wrapper group">
            <div className={leftScroller}>
              {membersList.slice(0,4).map((member, i) => (
                  <MemberCard key={i} member={member} />
                  ))}
            </div>
            <div className={leftScroller}>
                {membersList.slice(0,4).map((member, i) => (
                  <MemberCard key={i} member={member} />
                  ))}
            </div>
          </div>

          <div className="flex flicker-wrapper group">
            <div className={rightScroller}>
                {membersList.slice(4).map((member, i) => (
                  <MemberCard key={i} member={member} />
                  ))}
            </div>
            <div className={rightScroller}>
                {membersList.slice(4).map((member, i) => (
                  <MemberCard key={i} member={member} />
                  ))}
            </div>
          </div>
        </Container>

      </Container>
    </Section>
  )
}

export default Members