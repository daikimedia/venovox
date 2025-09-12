"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

// Capitalize each word's first letter and remove hyphens
const capitalizeWords = (str: string) =>
    str
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");

export default function PageBanner() {
    const pathname = usePathname();

    // Split and clean path segments
    const pathSegments = pathname.split("/").filter(Boolean);

    // Get only the last segment as the current page
    const currentPage = pathSegments[pathSegments.length - 1] || "Home";

    return (
        <div className="w-full">
            {/* Top banner with title */}
            <div className="bg-gradient-to-r from-black/70 to-black/40 py-20 text-center mt-20">
                <h1 className="text-white text-4xl md:text-6xl font-bold">
                    {capitalizeWords(currentPage)}
                </h1>
            </div>

            {/* Breadcrumb section */}
            <div className="bg-gray-100 py-3 px-6">
                <div className="text-sm text-gray-600 flex flex-wrap items-center gap-1">
                    <Link href="/" className="hover:underline text-blue-500">
                        Home
                    </Link>
                    <span>/</span>
                    <span className="text-black font-semibold">
                        {capitalizeWords(currentPage)}
                    </span>
                </div>
            </div>
        </div>
    );
}
