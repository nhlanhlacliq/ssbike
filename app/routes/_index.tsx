import type { MetaFunction } from "@remix-run/node";
import Benefits from "~/components/benefits";
import BlogList from "~/components/bloglist";
import CTA from "~/components/cta";
import Feature from "~/components/feature";
import Footer from "~/components/footer";
import Header from "~/components/header";
import Hero from "~/components/hero";
import Members from "~/components/members";

export const meta: MetaFunction = () => {
  return [
    { title: "Studio Street" },
    { name: "description", content: "You Must Organise!" },
  ];
};

export default function Index() {
  return (
    <>
      <Header/>
      <Hero/>
      <Feature/>
      <BlogList/>
      <CTA/>
      <Benefits/>
      <Members/>
      <Footer/>
    </>
    );
}
