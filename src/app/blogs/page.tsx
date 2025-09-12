'use client';

import Link from "next/link";
import { blogData } from "@/data/blogsData";
import { useState, useEffect } from "react";

export default function BlogsPage() {

    const BLOGS_PER_PAGE = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(blogData.length / BLOGS_PER_PAGE);

    const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
    const endIndex = startIndex + BLOGS_PER_PAGE;
    const currentBlogs = blogData.slice(startIndex, endIndex);


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);


    const getPaginationNumbers = () => {
        const numbers = [];
        const maxVisible = 5;

        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) {
                numbers.push(i);
            }
        } else {
            numbers.push(1);
            if (currentPage > 3) {
                numbers.push('...');
            }
            const startPage = Math.max(2, currentPage - 1);
            const endPage = Math.min(totalPages - 1, currentPage + 1);
            for (let i = startPage; i <= endPage; i++) {
                numbers.push(i);
            }
            if (currentPage < totalPages - 2) {
                numbers.push('...');
            }
            numbers.push(totalPages);
        }
        return numbers;
    };

    const handlePageChange = (page: number | string) => {
        if (typeof page === 'number' && page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };


    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };


    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>
            <div className="bg-white">
                <section className="relative bg-black text-white overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <div className="relative container mx-auto px-6 pt-32 pb-12">
                        <div className="text-center space-y-8 py-12">
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                                <span className="text-white">Our Latest </span>
                                <span className="text-red-600">Blog Posts</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                Discover insights, tips, and expert advice to help you stay ahead in the digital world.
                            </p>
                            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto"></div>
                        </div>
                    </div>
                </section>

                <main className="container mx-auto px-6 py-20">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentBlogs.map((blog) => (
                            <article
                                key={blog.slug}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-1"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={blog.featuredImage}
                                        alt={blog.altTag}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                <div className="p-6 space-y-4">
                                    <h2 className="text-xl font-bold text-gray-900 leading-tight line-clamp-2 group-hover:text-red-600 transition-colors duration-300">
                                        {blog.h1}
                                    </h2>

                                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                        {blog.seo.metaDescription}
                                    </p>

                                    <div className="pt-4 flex items-center justify-between">
                                        <Link
                                            href={`/blogs/${blog.slug}`}
                                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-lg group"
                                        >
                                            Read More
                                            <svg
                                                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </Link>

                                        <Link
                                            href="/author"
                                            className="flex items-center gap-2 text-right cursor-pointer"
                                        >
                                            <img
                                                src="/venovox-author1.png"
                                                alt="Author"
                                                className="w-9 h-9 rounded-full object-cover "
                                            />
                                            <div className="hidden sm:block">
                                                <h4 className="text-sm font-semibold">Dato' Venodevan</h4>
                                                <p className="text-xs text-gray-500 line-clamp-1">
                                                    Risk is an opportunity
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex justify-center items-center mt-16 space-x-2">
                            <button
                                onClick={handlePrevious}
                                disabled={currentPage === 1}
                                className={`flex items-center justify-center w-12 h-12 rounded-xl border transition-all duration-300 ${currentPage === 1
                                    ? 'border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50'
                                    : 'border-gray-300 text-gray-600 hover:border-red-600 hover:text-red-600 hover:bg-red-50 cursor-pointer'
                                    }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {getPaginationNumbers().map((number, index) => (
                                <div key={index}>
                                    {number === '...' ? (
                                        <span className="flex items-center justify-center w-12 h-12 text-gray-500 font-medium">
                                            ...
                                        </span>
                                    ) : (
                                        <button
                                            onClick={() => handlePageChange(number)}
                                            className={`flex items-center justify-center w-12 h-12 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${currentPage === number
                                                ? 'bg-red-600 text-white shadow-md'
                                                : 'border border-gray-300 text-gray-600 hover:border-red-600 hover:text-red-600 hover:bg-red-50'
                                                }`}
                                        >
                                            {number}
                                        </button>
                                    )}
                                </div>
                            ))}

                            <button
                                onClick={handleNext}
                                disabled={currentPage === totalPages}
                                className={`flex items-center justify-center w-12 h-12 rounded-xl border transition-all duration-300 ${currentPage === totalPages
                                    ? 'border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50'
                                    : 'border-gray-300 text-gray-600 hover:border-red-600 hover:text-red-600 hover:bg-red-50 cursor-pointer'
                                    }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    )}

                    {blogData.length === 0 && (
                        <div className="text-center py-20">
                            <div className="space-y-4">
                                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                                    <svg
                                        className="w-10 h-10 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">No Blog Posts Yet</h3>
                                <p className="text-gray-600 max-w-md mx-auto">
                                    We're working on creating amazing content for you. Check back soon!
                                </p>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </>
    );
}