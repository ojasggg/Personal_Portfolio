interface navItemInterface {
  itemName: string;
  active: boolean;
  link: string;
}

export const navItems: navItemInterface[] = [
  { itemName: "Home", active: true, link: "/home" },
  { itemName: "Projects", active: false, link: "/#projects" },
  { itemName: "About me", active: false, link: "/#about-me" },
  { itemName: "Achievements", active: false, link: "/#achievements" },
  { itemName: "Education", active: false, link: "/#education" },
  { itemName: "Experience", active: false, link: "/#experience" },
];
