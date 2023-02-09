import NavbarLargeScreen from "./NavbarLargeScreen";
import NavbarMobileScreen from "./NavbarMobileScreen";

type navItems = {
  itemName: string;
  active: boolean;
  link: string;
  button: boolean;
};

const navItems: navItems[] = [
  { itemName: "Home", active: true, link: "/home", button: false },
  { itemName: "About", active: false, link: "/about", button: false },
  { itemName: "Projects", active: false, link: "/projects", button: false },
  { itemName: "Resume", active: false, link: "/resume", button: true },
];

const Navbar = () => {
  return (
    <div className="overflow-hidden">
      <NavbarLargeScreen navItems={navItems} />
      <NavbarMobileScreen navItems={navItems} />
    </div>
  );
};

export default Navbar;
