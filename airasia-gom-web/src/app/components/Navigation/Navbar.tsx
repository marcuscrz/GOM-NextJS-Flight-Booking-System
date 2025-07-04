"use client";

import { logoutAtom } from "@/app/store/authStore";
import { useSetAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const logout = useSetAtom(logoutAtom);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    } else {
      return pathname.startsWith(href);
    }
  };

  const logoutAction = () => {
    logout();
    window.location.replace("/login");
  };

  useEffect(() => {
    const authData = localStorage.getItem("auth");
    const parsedAuthData = authData ? JSON.parse(authData) : undefined;
    setIsAuthenticated(parsedAuthData?.isAuthenticated);
    setUserEmail(parsedAuthData?.email);
  }, []);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-none w-1/12">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5a5dbe4632601eb31977f947/1629703651716-J8RVOTD1XO3SDINHP2RG/unnamed+%281%29.png"
              alt="Company Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>

          <div className={`${!isAuthenticated && "invisible"}  flex-grow p-4`}>
            <NavLink href="/" isActive={isActive("/")}>
              Dashboard
            </NavLink>
            <NavLink href="/new-booking" isActive={isActive("/new-booking")}>
              New Booking
            </NavLink>
            <NavLink
              href="/manage-request"
              isActive={isActive("/manage-request")}
            >
              Manage Request
            </NavLink>
            <NavLink
              href="/manage-profile"
              isActive={isActive("/manage-profile")}
            >
              Manage Profile
            </NavLink>
            <NavLink href="/reports" isActive={isActive("/reports")}>
              Reports
            </NavLink>
            <NavLink href="/supports" isActive={isActive("/supports")}>
              Support
            </NavLink>
          </div>

          <div className="flex w-1/4   items-center justify-end">
            <span className="pr-2 text-xs font-bold">English</span>
            {isAuthenticated && (
              <>
                <span className="text-xs font-bold pr-2">{userEmail}</span>

                <div
                  className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center"
                  onClick={logoutAction}
                >
                  <span className="text-xs font-medium">A</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 text-sm font-medium ${
        isActive ? "text-red-600" : "text-gray-500 hover:text-red-600"
      }
    `}
    >
      {children}
    </Link>
  );
}
