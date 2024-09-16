"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "block px-4 py-2 rounded-md transition-colors",
        isActive ? "text-neutral-800" : "text-gray-400 hover:text-neutral-600"
      )}
    >
      {children}
    </Link>
  );
};

const Sidenav = () => {
  return (
    <nav className="w-64 bg-gray-100 rounded-lg p-4">
      <ul className="space-y-2">
        <li>
          <NavLink href="/">Status Titles</NavLink>
        </li>
        <li>
          <NavLink href="/tag">Tags</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
