import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Share2, Twitter, Linkedin, Link2 } from 'lucide-react';

const BLOG_POSTS = [
    {
        slug: "how-we-built-real-time-cursors",
        category: "Engineering",
        title: "How We Built Real-Time Cursors with WebSockets",
        author: "Smith Shah",
        role: "Principal Engineer",
        date: "May 10, 2026",
        readTime: "8 min read",
        content: `
            <p>One of the most critical components of any collaborative editor is the real-time cursor. It's the primary way users sense the presence of others in the room. When we started building CodeshareLive, we knew that latency under 100ms was the threshold for "instant" feel. Anything higher, and the collaborative experience begins to break down.</p>
            
            <h3>The Architecture</h3>
            <p>We chose WebSockets (via Socket.io) as our transport layer because of its low-overhead, persistent connection model. Every cursor movement is emitted as a lightweight JSON packet containing the X/Y coordinates (line/character index) and the user's unique ID.</p>
            
            <pre><code>socket.emit('cursor_move', {\n  roomId: 'xyz-123',\n  userId: 'user-789',\n  position: { line: 12, ch: 42 }\n});</code></pre>

            <h3>Handling State Jitter</h3>
            <p>Network conditions are never perfect. We implemented a client-side interpolation strategy to smooth out the movement of remote cursors. Instead of snapping the cursor to the new position immediately, we use a 50ms transition to glide it to the new coordinate, making the multiplayer experience feel buttery smooth even on slightly unstable connections.</p>

            <p>In the next post, we'll dive into how we handle the Operational Transformation (OT) for actual text editing—the real heart of a collaborative engine.</p>
        `
    },
    {
        slug: "sandboxed-code-execution",
        category: "Engineering",
        title: "Sandboxed Code Execution: How We Run Your Code Safely",
        author: "Priya Patel",
        role: "Security Engineer",
        date: "April 28, 2026",
        readTime: "6 min read",
        content: "<p>Executing arbitrary user code safely in the browser required a paradigm shift. Discover our multi-layered isolation strategy utilizing custom isolated environments to prevent malicious execution while maintaining high performance. We utilize strict network policies and memory limits to ensure that each execution context is ephemeral and completely sandboxed from our core infrastructure.</p>"
    },
    {
        slug: "introducing-codesharelive-2-0",
        category: "Product",
        title: "Introducing CodeshareLive 2.0: Whiteboards & Multi-Language",
        author: "Jeet Nakarani",
        role: "Product Manager",
        date: "March 15, 2026",
        readTime: "4 min read",
        content: "<p>The wait is over! CodeshareLive 2.0 brings an interactive infinite canvas whiteboard and expands our native code execution engine to support over 15 modern programming languages including Rust, Go, and Python. We've redesigned the UI to be more intuitive for both seasoned engineers and beginners participating in coding bootcamps.</p>"
    },
    {
        slug: "5-tips-for-better-pair-programming",
        category: "Tutorial",
        title: "5 Tips for Better Pair Programming Sessions",
        author: "Ananya Sharma",
        role: "Lead Developer",
        date: "Feb 22, 2026",
        readTime: "5 min read",
        content: "<p>Pair programming is more than just sharing a screen. Learn effective communication strategies, how to divide driver/navigator roles, and how to use CodeshareLive to supercharge your collaborative workflow. It's about establishing context, active listening, and frequently switching roles to prevent fatigue.</p>"
    },
    {
        slug: "how-to-use-for-technical-interviews",
        category: "Tutorial",
        title: "How to Use CodeshareLive for Technical Interviews",
        author: "Riya Desai",
        role: "HR Lead",
        date: "Jan 12, 2026",
        readTime: "4 min read",
        content: "<p>A comprehensive guide for hiring managers and recruiters. Learn how to set up pre-configured interview rooms, provide boilerplate challenges, and effectively evaluate candidate problem-solving in real-time. We cover best practices for making candidates feel comfortable while accurately assessing their coding proficiency.</p>"
    },
    {
        slug: "march-2026-update",
        category: "Updates",
        title: "March 2026 Update: Performance Improvements & Bug Fixes",
        author: "Team Codeshare",
        role: "Core Team",
        date: "March 2, 2026",
        readTime: "3 min read",
        content: "<p>We've heavily optimized our core WebSocket mesh architecture and resolved critical edge cases causing cursor desynchronization on slow connections. Read the full changelog for a breakdown of all backend improvements, including a 40% reduction in initial load times and improved syntax highlighting for C++.</p>"
    }
];

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPost({ params }) {
    const post = BLOG_POSTS.find(p => p.slug === params.slug) || BLOG_POSTS[0];

    return (
        <div className="min-h-screen bg-[#030712] text-[#f8fafc] pb-20 selection:bg-[#6ee7b7]/30">
            {/* Scroll Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 z-[60]">
                <div className="h-full bg-gradient-to-r from-[#6ee7b7] to-[#3b82f6] w-[45%]" />
            </div>

            <article className="max-w-[800px] mx-auto px-6 pt-32">
                <Link 
                    href="/blog" 
                    className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#6ee7b7] transition-colors mb-12 group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                </Link>

                <header className="mb-16">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#6ee7b7]/10 text-[#6ee7b7] text-xs font-bold uppercase tracking-widest mb-6">
                        {post.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                        {post.title}
                    </h1>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm text-[#64748b] border-y border-[#1e293b] py-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-[#1e293b] flex items-center justify-center text-xs font-bold">
                                {post.author ? post.author.split(' ').map(n => n[0]).join('') : 'TC'}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[#f8fafc] font-bold">{post.author || "Team Codeshare"}</span>
                                <span className="text-[10px] uppercase tracking-tighter">{post.role || "Developer"}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{post.date || "May 1, 2026"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>{post.readTime || "5 min read"}</span>
                        </div>
                        
                        <div className="ml-auto flex items-center gap-4">
                            <button className="hover:text-[#6ee7b7] transition-colors"><Twitter size={18} /></button>
                            <button className="hover:text-[#6ee7b7] transition-colors"><Linkedin size={18} /></button>
                            <button className="hover:text-[#6ee7b7] transition-colors"><Link2 size={18} /></button>
                        </div>
                    </div>
                </header>

                <div 
                    className="max-w-none text-lg leading-relaxed text-[#64748b] 
                    [&>p]:mb-6 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-[#f8fafc] [&>h3]:mt-12 [&>h3]:mb-6
                    [&>pre]:bg-[#020817] [&>pre]:border [&>pre]:border-[#1e293b] [&>pre]:rounded-xl [&>pre]:p-6 [&>pre]:mb-8 [&>pre]:overflow-x-auto
                    [&>pre_code]:text-[#6ee7b7] [&>pre_code]:bg-transparent [&>pre_code]:p-0
                    [&>code]:text-[#6ee7b7] [&>code]:bg-[#0f172a] [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded
                    "
                    dangerouslySetInnerHTML={{ __html: post.content || "<p>Article content coming soon...</p>" }}
                />

                {/* Author Bio */}
                <footer className="mt-20 pt-12 border-t border-[#1e293b]">
                    <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6ee7b7] to-[#3b82f6] shrink-0" />
                        <div className="text-center md:text-left">
                            <h4 className="text-xl font-bold mb-2">{post.author || "Team Codeshare"}</h4>
                            <p className="text-[#64748b] text-sm leading-relaxed mb-4">
                                {post.role || "Developer"} at CodeshareLive. Passionate about real-time systems, distributed databases, and building tools that help developers move faster.
                            </p>
                            <div className="flex items-center justify-center md:justify-start gap-4">
                                <Link href="#" className="text-[#6ee7b7] text-sm font-bold hover:underline underline-offset-4">Follow on Twitter</Link>
                                <Link href="#" className="text-[#6ee7b7] text-sm font-bold hover:underline underline-offset-4">Read more posts</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </article>
        </div>
    );
}
