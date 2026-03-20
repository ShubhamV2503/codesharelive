"use client";

import { Code2 } from 'lucide-react';

export default function MockEditor() {
    return (
        <div className="w-full lg:w-[50%] mt-12 lg:mt-0 perspective-[2000px] animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="relative w-full aspect-[4/3] max-w-xl mx-auto animate-float-3d">
                {/* Huge glow behind the window */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-[30px] blur-3xl opacity-50 dark:opacity-80"></div>

                {/* macOS Window */}
                <div className="relative w-full h-full bg-[#f6f8fa] dark:bg-[#0d1117] border border-gray-300 dark:border-[#30363d] rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col ring-1 ring-white/10 transition-colors duration-300">
                    {/* Window Header */}
                    <div className="bg-gray-200 dark:bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-gray-300 dark:border-[#30363d] transition-colors duration-300">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="bg-white dark:bg-[#0d1117] px-4 py-1 rounded-md text-xs font-mono text-gray-500 border border-gray-300 dark:border-[#30363d] shadow-sm flex items-center gap-2 transition-colors duration-300">
                                <Code2 size={12} className="text-blue-500" />
                                <span>codeshare-demo.js</span>
                            </div>
                        </div>
                    </div>

                    {/* Editor Body */}
                    <div className="flex-1 p-5 font-mono text-sm overflow-hidden relative leading-relaxed bg-white dark:bg-[#0d1117] transition-colors duration-300">
                        {/* Line numbers */}
                        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-50 dark:bg-[#0d1117] border-r border-gray-200 dark:border-[#30363d] pt-5 text-right pr-3 text-xs text-gray-400 dark:text-gray-600 select-none flex flex-col gap-[0.4rem] transition-colors duration-300">
                            <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
                        </div>

                        <div className="pl-10">
                            <div className="flex text-gray-800 dark:text-gray-300 mb-2">
                                <span className="text-pink-600 dark:text-pink-400 mr-2">import</span>
                                <span>{'{ useState, useEffect }'}</span>
                                <span className="text-pink-600 dark:text-pink-400 mx-2">from</span>
                                <span className="text-emerald-600 dark:text-emerald-400">'react'</span>;
                            </div>
                            <div className="flex text-gray-800 dark:text-gray-300 mb-4">
                                <span className="text-pink-600 dark:text-pink-400 mr-2">export default function</span>
                                <span className="text-blue-600 dark:text-blue-400">Collaboration()</span> {'{'}
                            </div>

                            <div className="text-gray-800 dark:text-gray-300 pl-4 mb-2 flex">
                                <span className="text-purple-600 dark:text-purple-400 mr-2">const</span>
                                <span>[code, setCode] =</span>
                                <span className="text-blue-600 dark:text-blue-400 mx-2">useState</span>(<span className="text-emerald-600 dark:text-emerald-400">''</span>);
                            </div>

                            {/* Animated typing row */}
                            <div className="relative pl-4 h-6 mb-2">
                                {/* Remote cursor and tag */}
                                <div className="absolute top-0 left-4 bottom-0 flex flex-col pointer-events-none z-20 animate-cursor-x">
                                    <div className="relative h-full flex items-center">
                                        <div className="h-5 w-[2px] bg-pink-600 dark:bg-pink-500 animate-pulse"></div>
                                        <div className="absolute top-[-22px] left-[-6px] bg-pink-700 dark:bg-pink-600 text-white text-[10px] px-2 py-0.5 rounded shadow-sm whitespace-nowrap font-sans font-medium hidden sm:block">
                                            Sarah
                                        </div>
                                    </div>
                                </div>

                                {/* Animated Text */}
                                <div className="overflow-hidden whitespace-nowrap text-gray-800 dark:text-gray-300 h-full flex items-center animate-typing-reveal">
                                    <span className="text-gray-800 dark:text-gray-300">
                                        <span className="text-purple-600 dark:text-purple-400 mr-2">await</span>
                                        <span className="text-blue-600 dark:text-blue-400">syncData</span>();
                                    </span>
                                </div>
                            </div>

                            <div className="text-gray-800 dark:text-gray-300 pl-4 mb-2 mt-4">
                                <span className="text-pink-600 dark:text-pink-400">return</span> (
                            </div>
                            <div className="text-gray-800 dark:text-gray-300 pl-8 mb-2">
                                {'<div className="sync-active">'}
                            </div>
                            <div className="text-gray-400 dark:text-gray-500 pl-12 mb-2 italic">
                                {'// Real-time magic happens here! ✨'}
                            </div>
                            <div className="text-gray-800 dark:text-gray-300 pl-8 mb-2">
                                {'</div>'}
                            </div>
                            <div className="text-gray-800 dark:text-gray-300 pl-4 mb-2">
                                );
                            </div>
                            <div className="text-gray-800 dark:text-gray-300">
                                {'}'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
