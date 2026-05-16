"use client";

import React, { useState } from 'react';
import { Calendar, User, Clock, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const BLOG_POSTS = [
    {
        slug: "how-we-built-real-time-cursors",
        category: "Engineering",
        title: "How We Built Real-Time Cursors with WebSockets",
        excerpt: "Dive into the technical architecture behind our zero-latency cursor synchronization engine. Learn how we handle state collisions and network jitter.",
        author: "Alex Rivera",
        authorInitials: "AR",
        date: "May 10, 2026",
        readTime: "8 min read",
        color: "from-blue-500 to-purple-600",
        featured: true
    },
    {
        slug: "sandboxed-code-execution",
        category: "Engineering",
        title: "Sandboxed Code Execution: How We Run Your Code Safely",
        excerpt: "Security is paramount when running untrusted code. Discover our multi-layered isolation strategy using gVisor and custom OCI runtimes.",
        author: "Sarah Chen",
        authorInitials: "SC",
        date: "April 28, 2026",
        readTime: "6 min read",
        color: "from-blue-500 to-indigo-600",
    },
    {
        slug: "introducing-codesharelive-2-0",
        category: "Product",
        title: "Introducing CodeshareLive 2.0: Whiteboards & Multi-Language Support",
        excerpt: "Our biggest update yet is here. Explore the new interactive whiteboard and our expanded execution engine supporting 15+ languages.",
        author: "Jason Smyth",
        authorInitials: "JS",
        date: "March 15, 2026",
        readTime: "4 min read",
        color: "from-emerald-500 to-cyan-600",
    },
    {
        slug: "5-tips-for-better-pair-programming",
        category: "Tutorial",
        title: "5 Tips for Better Pair Programming Sessions",
        excerpt: "Collaboration is an art. Learn how to communicate effectively and divide responsibilities to get the most out of your shared coding time.",
        author: "Maria Garcia",
        authorInitials: "MG",
        date: "Feb 22, 2026",
        readTime: "5 min read",
        color: "from-orange-500 to-yellow-600",
    },
    {
        slug: "how-to-use-for-technical-interviews",
        category: "Tutorial",
        title: "How to Use CodeshareLive for Technical Interviews",
        excerpt: "A guide for hiring managers on setting up interview rooms, providing boilerplate code, and evaluating candidates in real-time.",
        author: "David Park",
        authorInitials: "DP",
        date: "Jan 12, 2026",
        readTime: "4 min read",
        color: "from-orange-500 to-red-600",
    },
    {
        slug: "march-2026-update",
        category: "Updates",
        title: "March 2026 Update: Performance Improvements & Bug Fixes",
        excerpt: "We've optimized our WebSocket mesh and fixed critical cursor desync issues. Read the full changelog for all the details.",
        author: "Team Codeshare",
        authorInitials: "TC",
        date: "March 2, 2026",
        readTime: "3 min read",
        color: "from-pink-500 to-rose-600",
    }
];

const CATEGORIES = ["All", "Engineering", "Product", "Tutorial", "Updates"];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredPosts = BLOG_POSTS.filter(post => 
        activeCategory === 'All' || post.category === activeCategory
    );

    const featuredPost = BLOG_POSTS.find(p => p.featured);

    return (
        <div className="min-h-screen bg-[#030712] text-[#f8fafc] pb-20 selection:bg-[#6ee7b7]/30">
            {/* Hero Section */}
            <header className="max-w-[1200px] mx-auto px-6 pt-32 mb-16">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#f8fafc] to-[#6ee7b7]"
                >
                    From the Team
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-[#64748b] text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
                >
                    Engineering deep-dives, product updates, and tips for better collaboration.
                </motion.p>

                {/* Category Filters */}
                <div className="flex flex-wrap items-center gap-2">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                activeCategory === cat 
                                ? 'bg-[#6ee7b7] text-[#030712] shadow-[0_0_20px_rgba(110,231,183,0.3)]' 
                                : 'bg-[#0f172a] border border-[#1e293b] text-[#64748b] hover:border-[#6ee7b7] hover:text-[#f8fafc]'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </header>

            <main className="max-w-[1200px] mx-auto px-6">
                {/* Featured Post */}
                {activeCategory === 'All' && featuredPost && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16"
                    >
                        <Link href={`/blog/${featuredPost.slug}`} className="group block relative overflow-hidden rounded-3xl bg-[#0f172a] border border-[#1e293b] hover:border-[#6ee7b7]/50 transition-all duration-500">
                            <div className="flex flex-col lg:flex-row min-h-[400px]">
                                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                                    <span className="inline-block px-3 py-1 rounded-full bg-[#6ee7b7]/10 text-[#6ee7b7] text-xs font-bold uppercase tracking-widest mb-6">
                                        {featuredPost.category}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-[#6ee7b7] transition-colors leading-tight">
                                        {featuredPost.title}
                                    </h2>
                                    <p className="text-[#64748b] text-lg mb-8 line-clamp-3">
                                        {featuredPost.excerpt}
                                    </p>
                                    <div className="flex items-center gap-4 text-sm text-[#64748b] mb-8">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6ee7b7] to-[#3b82f6] flex items-center justify-center text-[#030712] font-black text-[10px]">
                                                {featuredPost.authorInitials}
                                            </div>
                                            <span className="text-[#f8fafc] font-medium">{featuredPost.author}</span>
                                        </div>
                                        <span>•</span>
                                        <span>{featuredPost.date}</span>
                                        <span>•</span>
                                        <span>{featuredPost.readTime}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#6ee7b7] font-bold">
                                        Read Article <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                                <div className={`lg:w-1/3 bg-gradient-to-br ${featuredPost.color} opacity-40 group-hover:opacity-60 transition-opacity`} />
                            </div>
                        </Link>
                    </motion.div>
                )}

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.filter(p => activeCategory !== 'All' || !p.featured).map((post, idx) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ y: -6 }}
                            className="group flex flex-col h-full bg-[#0f172a] border border-[#1e293b] rounded-2xl overflow-hidden hover:border-[#6ee7b7]/50 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(110,231,183,0.05)]"
                        >
                            <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                                <div className={`h-48 bg-gradient-to-br ${post.color} opacity-30 group-hover:opacity-50 transition-opacity`} />
                                <div className="p-8 flex flex-col flex-1">
                                    <span className="inline-block px-2.5 py-1 rounded-md bg-[#1e293b] text-[#64748b] text-[10px] font-bold uppercase tracking-widest mb-4">
                                        {post.category}
                                    </span>
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-[#6ee7b7] transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-[#64748b] text-sm mb-8 line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-[#1e293b]">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-[#1e293b] flex items-center justify-center text-[8px] font-black">
                                                {post.authorInitials}
                                            </div>
                                            <span className="text-xs font-medium text-[#f8fafc]">{post.author}</span>
                                        </div>
                                        <span className="text-[10px] text-[#64748b]">{post.date}</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </main>
        </div>
    );
}
