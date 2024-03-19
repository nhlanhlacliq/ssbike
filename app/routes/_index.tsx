import type { MetaFunction } from "@remix-run/node";
import Feature from "~/components/feature";
import Header from "~/components/header";
import Hero from "~/components/hero";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Header/>
      <Hero/>
      <Feature/>
    </>
    );
}
