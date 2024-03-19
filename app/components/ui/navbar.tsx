import { NavLink } from "@remix-run/react";
import { Drawer, DrawerContent, DrawerFooter, DrawerTrigger } from "./drawer";
import { MenuIcon } from "lucide-react";
import { Button } from "./button";
import Logo from "./logo";

const NavLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Link",
    href: "/",
  },
  {
    title: "Link",
    href: "/",
  },
  {
    title: "Link",
    href: "/",
  },
];

const Navbar = () => {
  return (
    <div className="flex justify-end flex-grow">
    {/*Desktop Menu */}
      <div className="hidden md:block my-auto flex-grow">
        <div className="flex items-center justify-between">
          <div className="flex gap-8" >            
            {NavLinks.map((link, i) => (
              <NavLink key={i} to={link.href}>
                {link.title}
              </NavLink>
            ))}
          </div>
          <div className="flex gap-4" >
            <Button> Primary </Button>
            <Button variant={"secondary"}> Secondary </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden my-auto pt-1">
        <Drawer direction="right">
          <DrawerTrigger>
            <MenuIcon />
          </DrawerTrigger>

          <DrawerContent className="flex flex-col gap-8 p-8">
            <Logo />
            {NavLinks.map((link, i) => (
              <NavLink key={i} to={link.href}>
                {link.title}
              </NavLink>
            ))}
            <Button> Primary </Button>
            <Button variant={"secondary"}> Secondary </Button>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
