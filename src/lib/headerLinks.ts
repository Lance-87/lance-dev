interface HeaderLink {
  label: String;
  href: string;
}

const headerLinks: Array<HeaderLink> = [
  {
    label: "Projects",
    href:"/projects"
  },
  {
    label: "Contact",
    href:"/contact"
  },
  {
    label:"Resume",
    href:"/resume"
  },
  
];

export default headerLinks;
