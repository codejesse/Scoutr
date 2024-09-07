import Link from "next/link";

export const navbarLinks = [
  {
    id: 0,
    name: "Scouts",
    href: "/",
  },
  {
    id: 1,
    name: "Templates",
    href: "#",
  },
  {
    id: 2,
    name: "Ui kits",
    href: "#",
  },
  {
    id: 3,
    name: "Icons",
    href: "#",
  },
];

export function NavbarLinks() {
  return (
    <div className="hidden md:flex  justify-center items-center col-span-6 gap-x-8">
      {navbarLinks.map((item) => (
        <Link href={item.href} key={item.id}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
