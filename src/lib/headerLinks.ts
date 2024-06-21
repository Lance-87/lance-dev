interface HeaderLink {
  label: String;
  href: string;
}

const headerLinks: Array<HeaderLink> = [
  {
    label: "About Me",
    href: "/about",
  },
  {
    label: "Projects",
    href:"/projects"
  },
  {
    label: "Contact",
    href:"/contact"
  }
];

export default headerLinks;
