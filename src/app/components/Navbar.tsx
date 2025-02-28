import Link from "next/link";
import { Hammer } from "lucide-react";
import { DropdownNav } from "./DropdownNav";

export function Navbar() {

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "SHOP", href: "/shop" },
    { label: "SERVICES", href: "/services" },
    { label: "PORTFOLIO", href: "/portfolio" },
    { label: "TESTIMONIALS", href: "/testimonials" },
    { label: "LATEST NEWS", href: "/news" },
    { label: "CONTACT US", href: "/contact" },
  ];

  return (
    <nav className="bg-secondary text-white fixed w-full z-50">
      <div className="grid grid-cols-[min-content_1fr] items-center justify-between min-h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 flex items-center min-h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Hammer className="h-8 w-8 text-yellow-400" />
            <span className="text-xl font-bold">RENOVATION</span>
          </Link>
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex ml-10 items-center space-x-8 justify-self-end">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
        {/* Mobile menu */}
        <DropdownNav navItems={navItems} />
      </div>
    </nav>
  );
}
