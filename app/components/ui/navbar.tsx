import { NavLink } from "@remix-run/react";
import { Drawer, DrawerContent, DrawerTrigger } from "./drawer";
import { MenuIcon } from "lucide-react";
import { Button } from "./button";
import Logo from "./logo";
import { ModeToggle } from "../mode-toggle";

import { NavLinks } from "~/config/config";

// const getActiveLink = ({isActive}) => isActive ? "bg-primary text-secondary" : ""

const PrimaryButton = () => <Button> Organize! </Button>
const SecondaryButton = () => <Button variant="secondary" > Learn More </Button>

const Navbar = () => {
  return (
    <div className="flex justify-end flex-grow">
    {/*Desktop Menu */}
      <div className="hidden md:block my-auto flex-grow">
        <div className="flex justify-between">
          <div className="flex gap-1" >            
            {NavLinks.map((link, i) => (
              <NavLink key={i} to={link.href}>
                <div className="text-left h-full mx-4 py-2">
                  {link.title}
                </div>
              </NavLink>
            ))}
          </div>
          <div className="flex gap-4" >
            <ModeToggle/>
            <PrimaryButton />
            <SecondaryButton />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex gap-4 my-auto pt-1">
        <ModeToggle/>
        <Drawer direction="right">
          <DrawerTrigger>
            <MenuIcon />
          </DrawerTrigger>

          <DrawerContent className="flex flex-col gap-8 p-8 overflow-y-auto">
            <Logo />
            {NavLinks.map((link, i) => (
              <NavLink key={i} to={link.href}>
                <div className="text-left h-full mx-4 py-2">
                  {link.title}
                </div>
              </NavLink>
            ))}
            <PrimaryButton />
            <SecondaryButton />
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
