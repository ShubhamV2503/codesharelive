import React from 'react';
import Link from 'next/link';
import { ChevronRight, Calendar, User, Clock } from 'lucide-react';

const BlogIndex = () => {
    const posts = [
        {
            id: 1,
            title: "Best Practices for Remote Pair Programming in 2024",
            excerpt: "Discover how to maintain high productivity while coding remotely. From communication tools to synchronous editing strategies, learn how to pair program like a pro.",
            date: "May 15, 2024",
            author: "CodeshareLive Team",
            readTime: "8 min read",
            category: "Guides"
        },
        {
            id: 2,
            title: "How to Conduct a Smooth Technical Interview Online",
            excerpt: "Technical interviews can be stressful for both candidates and interviewers. Learn how to create a supportive environment using live code sharing tools.",
            date: "May 12, 2024",
            author: "Engineering Lead",
            readTime: "12 min read",
            category: "Interviews"
        },
        {
            id: 3,
            title: "Why Native Code Execution Matters for Learning",
            excerpt: "Static code sharing is great, but running code is better. Explore how real-time compilers help students understand logic and syntax faster.",
            date: "May 10, 2024",
            author: "Dev Educator",
            readTime: "10 min read",
            category: "Education"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#030712] text-gray-900 dark:text-white pt-32 pb-20 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Developer Resource Hub</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        In-depth guides, industry insights, and best practices for the modern collaborative developer.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {posts.map((post) => (
                        <div key={post.id} className="group bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 p-8 md:p-12 rounded-3xl hover:shadow-2xl transition-all duration-300">
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                                <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider text-xs">
                                    {post.category}
                                </span>
                                <div className="flex items-center gap-1">
                                    <Calendar size={14} />
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock size={14} />
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                            
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                {post.title}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-lg">
                                {post.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                                        <User size={16} />
                                    </div>
                                    <span className="font-medium text-sm">{post.author}</span>
                                </div>
                                <Link href={`/blog`} className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold group-hover:gap-4 transition-all">
                                    Read Article <ChevronRight size={18} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogIndex;
