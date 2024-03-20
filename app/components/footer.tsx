import { NavLinks } from "~/config/config";
import Section from "./ui/section";
import Container from "./ui/container";
import { NavLink } from "@remix-run/react";
import Logo from "./ui/logo";
import { Instagram, Twitter, Youtube } from "lucide-react";
import { TypographyMuted } from "./ui/typography";

const Footer = () => {
  return (
    <Section>
      <Container className="grid grid-cols-2">
        <Container className="mx-0 pt-2 flex-col gap-4">

          <TypographyMuted className="" >Links</TypographyMuted>
          <Container className="mx-0 flex-col gap-4 md:grid md:grid-cols-2" >

          {NavLinks.map((link, i) => (
            <NavLink key={i} to={link.href}>
              <TypographyMuted className="">{link.title}</TypographyMuted>
            </NavLink>
          ))}
          </Container>
        </Container>

        <Container className="mx-0 flex-col gap-4 md:grid md:grid-cols-2 justify-end">
          <Container className="mx-0 flex-col w-fit gap-4 justify-end">
            <Logo className="-mr-11" />

            <Container className="mx-0 w-full justify-between">
              <Instagram />
              <Twitter />
              <Youtube />
            </Container>
          </Container>

          <Container className="mx-0 flex-col md:pt-2 md:justify-end lg:items-end">
            <TypographyMuted className="">
              © Copyright 2024 Studio Street
            </TypographyMuted>
            <div>
            <TypographyMuted className="">All Rights Reserved</TypographyMuted>
            </div>
          </Container>
        </Container>
      </Container>
    </Section>
  );
};

export default Footer;
