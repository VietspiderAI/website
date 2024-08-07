"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { SquareLogo } from "@/components/logo";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <SquareLogo />
        <span className="hidden font-semibold tracking-wide text-primary lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/products"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Products
        </Link>
        <Link
          href="our-team"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("our-team")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Our Team
        </Link>
        <Link
          href="/contact"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/contact")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
