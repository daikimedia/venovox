"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
// import Image from "next/image";

interface MenuItem {
  name: string;
  path: string;
  subItems?: SubMenuItem[];
}

interface SubMenuItem {
  name: string;
  path: string;
}

const navData = {
  logo: "/venovox-logo.png",
  endLogo: "/venovox-logo2.png",
  menuItems: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/my-en/about" },
    {
      name: "Our Services",
      path: "/my-en/our-services",
      subItems: [
        { name: "Risk Intelligence", path: "/my-en/background-screening/risk-intelligence/" },
        { name: "Due Diligence", path: "/my-en/background-screening/due-diligence/" },
        { name: "Risk & Audit", path: "/my-en/background-screening/risk-audit/" },
        { name: "Compliance", path: "/my-en/background-screening/compliance/" },
        { name: "Intellectual Property", path: "/my-en/background-screening/intellectual-property/" },
        { name: "Counter Measures", path: "/my-en/background-screening/counter-measures/" },
        { name: "Financial Crime", path: "/my-en/background-screening/financial-crime/" },
        { name: "HR Services", path: "/my-en/background-screening/hr-services/" },
        { name: "Cyber Security", path: "/my-en/background-screening/cyber-security/" }
      ]
    },
    { name: "Contact Us", path: "/my-en/contact-us" },
    { name: "Career", path: "/my-en/Career" },
    { name: "Publication", path: "/blogs" },
  ] as MenuItem[]
};

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const isActive = (path: string) => {
    if (path === "/my-en/background-screening") {
      // Home active only if exact match
      return pathname === path;
    } else {
      // For others, active if pathname starts with path
      return pathname === path || pathname.startsWith(path + "/");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const handleMenuItemClick = (item: MenuItem) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isOpen = activeSubMenu === item.name;
    setActiveSubMenu(hasSubItems ? (isOpen ? null : item.name) : null);
    if (!hasSubItems) setIsMenuOpen(false);
  };

  const handleMouseEnter = (itemName: string) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setActiveSubMenu(itemName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveSubMenu(null);
    }, 150);
    setHoverTimeout(timeout);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-[100px]">
          {/* Left Logo */}
          <Link href="/" className="flex items-center">
            <img
              src={navData.logo}
              alt="Main Logo"
              width={125}
              height={125}
              // priority
              className=""
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex space-x-6 items-center">
              {navData.menuItems.map((item) => {
                const active = isActive(item.path);
                const hasSubItems = item.subItems && item.subItems.length > 0;

                return (
                  <div key={item.name} className="relative group/nav">
                    <Link
                      href={item.path}
                      className={`px-4 py-3 text-base font-medium flex items-center hover:bg-gray-50 transition ${active
                        ? "text-red-600 font-semibold border-b-2 border-red-600"
                        : "text-gray-800 hover:text-red-600"
                        }`}
                      onMouseEnter={() => hasSubItems && handleMouseEnter(item.name)}
                      onMouseLeave={() => hasSubItems && handleMouseLeave()}
                    >
                      {item.name}
                      {hasSubItems && <ChevronDown size={16} className="ml-1" />}
                    </Link>
                    {hasSubItems && activeSubMenu === item.name && (
                      <div
                        className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-xl z-50"
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        onMouseLeave={() => handleMouseLeave()}
                      >
                        {item.subItems?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.path}
                            className={`block px-5 py-3 text-sm hover:bg-gray-50 transition ${isActive(sub.path)
                              ? "text-red-600 font-medium bg-red-50"
                              : "text-gray-700"
                              }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Right Logo */}
          <a
            href="https://hi.venovox.com"
            rel="noopener noreferrer"
            className="hidden lg:block"
          >
            <div className="h-16 w-16 relative">
              <img
                src={navData.endLogo}
                alt="End Logo"
                width={64}
                height={64}
                className="object-contain w-full h-full"
              />
            </div>
          </a>


          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-md text-gray-700 hover:text-red-600 opacity-75 transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[100px] bg-white z-[100] shadow-xl max-h-[calc(100vh-100px)] overflow-y-auto mt-[69px]">
          <div className="px-6 pt-4 pb-6 space-y-2">
            {navData.menuItems.map((item) => {
              const active = isActive(item.path);
              const isOpen = activeSubMenu === item.name;
              const hasSubItems = item.subItems && item.subItems.length > 0;

              return (
                <div key={item.name} className="border-b border-gray-100">
                  {hasSubItems ? (
                    <button
                      onClick={() => handleMenuItemClick(item)}
                      className={`w-full flex justify-between items-center px-4 py-4 rounded-lg text-lg font-medium ${active ? "text-red-600 bg-red-50" : "text-gray-800 hover:bg-gray-50"
                        }`}
                    >
                      <span>{item.name}</span>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  ) : (
                    <Link
                      href={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`w-full block px-4 py-4 rounded-lg text-lg font-medium ${active ? "text-red-600 bg-red-50" : "text-gray-800 hover:bg-gray-50"
                        }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {hasSubItems && isOpen && (
                    <div className="pl-6 space-y-2 py-2">
                      {item.subItems?.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block text-base py-3 px-4 rounded-md ${isActive(sub.path)
                            ? "text-red-600 bg-red-50 font-medium"
                            : "text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* End Logo in Mobile Menu */}
            <div className="pt-4 pb-2 flex justify-center">
              <a href="https://hi.venovox.com" onClick={() => setIsMenuOpen(false)}>
                <div className="h-16 w-16 relative">
                  <img
                    src={navData.endLogo}
                    alt="End Logo"
                    width={64}
                    height={64}
                    className="object-contain w-full h-full"
                  />
                </div>
              </a>
            </div>

            {/* Contact Button */}
            <div className="pt-4">
              <Link
                href="/my-en/contact-us"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
