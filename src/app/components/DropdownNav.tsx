"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function DropdownNav({
  navItems,
}: {
  navItems: { label: string; href: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Mobile menu */}
      <div
        className="md:hidden justify-self-end "
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-6 w-6 hover:text-primary transition-colors" />
        ) : (
          <Menu className="h-6 w-6 hover:text-primary transition-colors" />
        )}
      </div>
      {isOpen && (
        <div className="md:hidden w-full col-span-2">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-base hover:text-yellow-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
