"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { Code2, ArrowRight } from 'lucide-react';

export default function JoinForm() {
    const router = useRouter();
    const [joinId, setJoinId] = useState('');

    const createRoom = () => {
        const roomId = uuidv4();
        router.push(`/${roomId}`);
    };

    const joinRoom = (e) => {
        e.preventDefault();
        if (joinId.trim()) {
            router.push(`/${joinId.trim()}`);
        }
    };

    return (
        <div className="z-10 w-full max-w-md relative mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <button
                onClick={createRoom}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 border border-transparent dark:bg-white text-white dark:text-gray-900 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 dark:hover:from-purple-500 dark:hover:to-pink-500 hover:text-white hover:border-transparent rounded-full text-lg font-medium transition-all duration-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] dark:shadow-[0_4px_14px_0_rgba(255,255,255,0.39)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] dark:hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:-translate-y-0.5 group"
            >
                <Code2 size={20} className="text-pink-400 dark:text-pink-600 group-hover:text-white transition-colors" />
                <span>Create a New Room</span>
            </button>

            <div className="relative flex items-center py-6">
                <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
                <span className="flex-shrink-0 mx-4 text-gray-600 dark:text-gray-300 text-sm bg-gray-50 dark:bg-[#030712] px-2">or join existing</span>
                <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
            </div>

            <form onSubmit={joinRoom} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                    <input
                        type="text"
                        placeholder="Paste Room ID"
                        value={joinId}
                        onChange={(e) => setJoinId(e.target.value)}
                        className="w-full bg-white dark:bg-[#0a0a0a]/50 backdrop-blur-sm border border-gray-300 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 rounded-full px-6 py-4 text-base outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 text-gray-900 dark:text-white shadow-sm"
                    />
                </div>
                <button
                    type="submit"
                    disabled={!joinId.trim()}
                    className="px-8 py-4 shrink-0 bg-white dark:bg-[#1f2937] border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:border-gray-400 dark:hover:border-gray-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-full text-base font-medium transition-all shadow-sm flex items-center justify-center gap-2 group"
                >
                    <span>Join</span>
                    <ArrowRight size={18} className="text-gray-400 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white group-hover:translate-x-1 transition-all" />
                </button>
            </form>
        </div>
    );
}
