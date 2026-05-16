"use client";

import React, { useState } from 'react';
import { Rocket, Bell, CheckCircle2, Info, AlertTriangle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CHANGELOG_ENTRIES = [
    {
        version: "v2.1.0",
        date: "May 2026",
        title: "Whiteboards & Rust Support",
        types: ["New", "Improved"],
        changes: [
            { type: "New", text: "Interactive whiteboard added to all rooms for visual architecture planning." },
            { type: "New", text: "Full compilation support for the Rust programming language." },
            { type: "Improved", text: "Editor load time reduced by 40% through heavy tree-shaking." },
            { type: "Improved", text: "Refined mobile layout for better experience on small screens." }
        ]
    },
    {
        version: "v2.0.0",
        date: "March 2026",
        title: "Major Performance Overhaul",
        types: ["New"],
        changes: [
            { type: "New", text: "Multi-language execution engine (Python, Go, Java, C++)." },
            { type: "New", text: "Room password protection for enhanced security." },
            { type: "New", text: "Template library with 12 professional starter templates." }
        ]
    },
    {
        version: "v1.3.0",
        date: "January 2026",
        title: "Latency & Syntax",
        types: ["Improved", "Fixed"],
        changes: [
            { type: "Improved", text: "Real-time sync latency reduced to <50ms globally." },
            { type: "Improved", text: "Upgraded syntax highlighting for 10+ major languages." },
            { type: "Fixed", text: "Resolved persistent cursor desync on slow 3G connections." },
            { type: "Fixed", text: "Fixed room link copy button reliability on Firefox mobile." }
        ]
    },
    {
        version: "v1.2.0",
        date: "November 2025",
        title: "Visual Presence",
        types: ["New", "Fixed"],
        changes: [
            { type: "New", text: "Live cursors now feature username labels for better clarity." },
            { type: "New", text: "Global keyboard shortcuts panel added (Ctrl/Cmd + /)." },
            { type: "Fixed", text: "Code no longer clears on rare page refresh edge cases." }
        ]
    },
    {
        version: "v1.1.0",
        date: "September 2025",
        title: "Editor Engine Upgrade",
        types: ["Improved"],
        changes: [
            { type: "Improved", text: "Editor core migrated to CodeMirror 6 for better performance." },
            { type: "Improved", text: "Significantly improved dark theme contrast for accessibility." },
            { type: "Improved", text: "Reduced room creation speed to sub-100ms." }
        ]
    },
    {
        version: "v1.0.0",
        date: "August 2025",
        title: "Initial Launch",
        types: ["New"],
        changes: [
            { type: "New", text: "Official launch of CodeshareLive collaborative editor." },
            { type: "New", text: "Instant room creation with zero login required." },
            { type: "New", text: "WebSocket-based real-time document synchronization." }
        ]
    }
];

const TypeBadge = ({ type }) => {
    const colors = {
        New: "bg-green-500/10 text-green-500 border-green-500/20",
        Improved: "bg-blue-500/10 text-blue-500 border-blue-500/20",
        Fixed: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
        Removed: "bg-red-500/10 text-red-500 border-red-500/20",
    };
    return (
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest border ${colors[type] || colors.New}`}>
            {type}
        </span>
    );
};

export default function ChangelogPage() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
        }
    };

    return (
        <div className="min-h-screen bg-[#030712] text-[#f8fafc] pb-20 selection:bg-[#6ee7b7]/30">
            {/* Hero Section */}
            <header className="max-w-[800px] mx-auto px-6 pt-32 mb-20 text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#f8fafc] to-[#6ee7b7]"
                >
                    What's New
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-[#64748b] text-lg mb-12"
                >
                    Every update, improvement, and fix — all in one place.
                </motion.p>

                {/* Subscription Form */}
                <div className="max-w-md mx-auto">
                    <form onSubmit={handleSubscribe} className="flex gap-2 p-1.5 rounded-full bg-[#0f172a] border border-[#1e293b] focus-within:border-[#6ee7b7]/50 transition-all">
                        <input 
                            type="email" 
                            required
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-4 py-2"
                        />
                        <button className="bg-[#6ee7b7] text-[#030712] px-6 py-2 rounded-full font-bold text-sm hover:shadow-[0_0_15px_rgba(110,231,183,0.4)] transition-all flex items-center gap-2">
                            {subscribed ? 'Subscribed!' : 'Notify Me'}
                            <Bell size={14} />
                        </button>
                    </form>
                    <p className="mt-4 text-xs text-[#64748b] flex items-center justify-center gap-1.5">
                        <CheckCircle2 size={12} className="text-[#6ee7b7]" />
                        Join 1,200+ developers getting update emails
                    </p>
                </div>
            </header>

            {/* Timeline Section */}
            <main className="max-w-[800px] mx-auto px-6 relative">
                {/* Vertical Line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#6ee7b7] via-[#1e293b] to-transparent hidden md:block" />
                <div className="space-y-20">
                    {CHANGELOG_ENTRIES.map((entry, idx) => {
                        const isEven = idx % 2 === 0;
                        const isNew = entry.types.includes('New');
                        const isImproved = entry.types.includes('Improved');
                        
                        return (
                            <motion.div 
                                key={entry.version}
                                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col ${isEven ? 'md:items-start' : 'md:items-end'}`}
                            >
                                {/* Dot on timeline */}
                                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 top-4 w-3 h-3 rounded-full bg-[#6ee7b7] shadow-[0_0_10px_rgba(110,231,183,1)] z-10 hidden md:block" />

                                <div className={`w-full md:w-[45%] bg-[#0f172a] border border-[#1e293b] rounded-2xl p-8 hover:border-[#6ee7b7]/30 transition-all group ${
                                    isNew ? 'border-l-4 border-l-green-500' : 
                                    isImproved ? 'border-l-4 border-l-blue-500' :
                                    'border-l-4 border-l-yellow-500'
                                }`}>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-[#6ee7b7] font-black text-xl">{entry.version}</span>
                                        <span className="text-[#64748b] text-sm font-medium">{entry.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-[#6ee7b7] transition-colors">{entry.title}</h3>
                                    
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {entry.types.map(t => <TypeBadge key={t} type={t} />)}
                                    </div>

                                    <ul className="space-y-4">
                                        {entry.changes.map((change, cIdx) => (
                                            <li key={cIdx} className="flex gap-3 text-sm leading-relaxed">
                                                <div className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full ${
                                                    change.type === 'New' ? 'bg-green-500' : 
                                                    change.type === 'Improved' ? 'bg-blue-500' : 
                                                    'bg-yellow-500'
                                                }`} />
                                                <span className="text-[#64748b]">
                                                    <span className="text-[#f8fafc] font-semibold">{change.type}:</span> {change.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Final Message */}
                <div className="mt-32 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0f172a] border border-[#1e293b] text-[#64748b] text-sm">
                        <Rocket size={18} className="text-[#6ee7b7]" />
                        You're all caught up!
                    </div>
                    <div className="mt-8 flex flex-col items-center gap-4">

                        <Link href="/" className="group text-[#6ee7b7] font-bold flex items-center gap-2">
                            Go back to coding <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
