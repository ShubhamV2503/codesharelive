import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Share2, Twitter, Linkedin, Link2 } from 'lucide-react';

const BLOG_POSTS = [
    {
        slug: "how-we-built-real-time-cursors",
        category: "Engineering",
        title: "How We Built Real-Time Cursors with WebSockets",
        author: "Alex Rivera",
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
    // Adding more shells for other slugs to satisfy generateStaticParams
    { slug: "sandboxed-code-execution" },
    { slug: "introducing-codesharelive-2-0" },
    { slug: "5-tips-for-better-pair-programming" },
    { slug: "how-to-use-for-technical-interviews" },
    { slug: "march-2026-update" }
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
                    className="prose prose-invert prose-emerald max-w-none 
                    prose-headings:text-[#f8fafc] prose-headings:font-bold 
                    prose-p:text-[#64748b] prose-p:leading-relaxed prose-p:text-lg
                    prose-strong:text-[#f8fafc]
                    prose-code:text-[#6ee7b7] prose-code:bg-[#0f172a] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                    prose-pre:bg-[#020817] prose-pre:border prose-pre:border-[#1e293b] prose-pre:rounded-xl prose-pre:p-6
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
