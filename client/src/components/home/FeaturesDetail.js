import React from 'react';
import { Terminal, Globe2, Share2, Code2, ShieldCheck, Zap, Users } from 'lucide-react';

const FeaturesDetail = () => {
    return (
        <section className="w-full py-24 bg-gray-50 dark:bg-[#030712] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Modern Developers</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        CodeshareLive isn't just another text editor. It's a specialized environment designed to eliminate the friction of remote collaboration, providing high-fidelity tools for every stage of development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-semibold">
                            <Terminal size={16} />
                            <span>Execution Engine</span>
                        </div>
                        <h3 className="text-3xl font-bold">Native Code Execution in the Browser</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Stop switching between your editor and your terminal. CodeshareLive features a native execution environment that supports over 15 programming languages, including Python, Java, C++, and Node.js. 
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Our sandboxed execution model ensures that your code runs in a secure, isolated container. This is perfect for technical interviews where you need to verify if a candidate's solution actually works, or for mentors teaching syntax and logic to students in real-time.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                <ShieldCheck size={18} className="text-green-500" />
                                <span>Isolated sandboxed environment</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                <ShieldCheck size={18} className="text-green-500" />
                                <span>Support for complex algorithms and I/O</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                <ShieldCheck size={18} className="text-green-500" />
                                <span>Zero-configuration runtime setup</span>
                            </li>
                        </ul>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                        <div className="relative bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl p-8 shadow-xl">
                            <div className="flex gap-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <pre className="font-mono text-sm text-gray-300 overflow-hidden">
                                <code className="text-gray-400"># Output from execution</code><br />
                                <code className="text-green-400">Executing code...</code><br />
                                <code className="text-white">Hello, CodeshareLive!</code><br />
                                <code className="text-blue-400">Process finished in 0.04s</code>
                            </pre>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32 flex-row-reverse md:flex-row">
                    <div className="relative group order-2 md:order-1">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                        <div className="relative bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl p-8 shadow-xl flex flex-col gap-4">
                            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10">
                                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">A</div>
                                <div className="flex-1 h-2 bg-gray-200 dark:bg-white/10 rounded-full w-1/2"></div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 ml-8">
                                <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold">B</div>
                                <div className="flex-1 h-2 bg-gray-200 dark:bg-white/10 rounded-full w-2/3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 order-1 md:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold">
                            <Users size={16} />
                            <span>Collaboration Suite</span>
                        </div>
                        <h3 className="text-3xl font-bold">Ultra-Low Latency Collaboration</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Distance shouldn't be a barrier to high-quality engineering. Our custom WebSocket-driven communication layer synchronization engine ensures that every character you type is distributed instantly to everyone in the room.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            With live multiplayer cursors, you can follow your partner's thought process as they navigate through the codebase. No more "where are you looking?" or "which line are you on?"—it's like sitting in the same room.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                                <Zap size={20} className="text-yellow-500 mb-2" />
                                <h4 className="font-bold">Zero Latency</h4>
                                <p className="text-xs text-gray-500">Sub-50ms sync</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                                <Globe2 size={20} className="text-blue-500 mb-2" />
                                <h4 className="font-bold">Global Mesh</h4>
                                <p className="text-xs text-gray-500">Worldwide nodes</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How It Works Section */}
                <div className="py-20 border-t border-gray-200 dark:border-white/10">
                    <h2 className="text-3xl font-bold text-center mb-16">How it works in 3 easy steps</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center space-y-4">
                            <div className="w-12 h-12 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
                            <h4 className="text-xl font-bold">Create a Room</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Simply click the 'Start Coding' button. We'll generate a unique, secure URL for your collaborative session. No accounts, no onboarding, just instant access to a professional IDE.
                            </p>
                        </div>
                        <div className="text-center space-y-4">
                            <div className="w-12 h-12 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
                            <h4 className="text-xl font-bold">Share the Link</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Copy the URL and send it to your partner, student, or candidate. As soon as they open the link, they'll appear in your room with their own unique cursor and profile.
                            </p>
                        </div>
                        <div className="text-center space-y-4">
                            <div className="w-12 h-12 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
                            <h4 className="text-xl font-bold">Code Together</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Start typing, run your code, and use the interactive whiteboard to explain complex logic. Your session is temporary and private, ensuring your data stays secure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesDetail;
