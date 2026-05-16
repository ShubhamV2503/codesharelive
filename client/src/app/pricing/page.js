"use client";

import React, { useState } from 'react';
import { Check, X, ChevronDown, MessageSquare, Zap, Shield, Users, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const FAQ_ITEMS = [
    {
        q: "Can I use CodeshareLive without creating an account?",
        a: "Yes! You can create a temporary room and start coding instantly. Accounts are only required if you want to persist your rooms, save your session history, or manage a team."
    },
    {
        q: "What happens to my room after 24 hours on the free plan?",
        a: "On the Free plan, rooms are automatically deleted after 24 hours of inactivity to ensure system performance. If you need rooms that stay active forever, our Pro plan offers persistent rooms."
    },
    {
        q: "How does billing work for the Team plan?",
        a: "The Team plan is billed per seat. You pay a flat rate for each team member you add to your dashboard, giving everyone access to Pro features and a shared collaborative space."
    },
    {
        q: "Can I cancel my subscription anytime?",
        a: "Absolutely. You can cancel your Pro or Team subscription at any time from your billing dashboard. You will retain access to your plan's features until the end of your current billing cycle."
    },
    {
        q: "Is my code private and secure?",
        a: "Security is our priority. All rooms use end-to-end encrypted WebSocket connections. For Pro users, we offer password protection for rooms, and on the Team plan, you can restrict access to specific domain members."
    },
    {
        q: "Do you offer student or open source discounts?",
        a: "Yes! We support the next generation of developers. If you're a student or working on a non-commercial open source project, contact our support team for a 50% discount on the Pro plan."
    }
];

const COMPARISON_FEATURES = [
    {
        category: "Collaboration",
        features: [
            { name: "Live Multi-cursor", free: "✓", pro: "✓", team: "✓" },
            { name: "Max Collaborators", free: "2", pro: "10", team: "Unlimited" },
            { name: "Interactive Whiteboard", free: "✓", pro: "✓", team: "✓" },
            { name: "Shared Dashboard", free: "✗", pro: "✗", team: "✓" },
        ]
    },
    {
        category: "Execution & Language",
        features: [
            { name: "Supported Languages", free: "5", pro: "15+", team: "15+" },
            { name: "Compiler Access", free: "✓", pro: "✓", team: "✓" },
            { name: "Custom Run Configs", free: "✗", pro: "✓", team: "✓" },
            { name: "API Access", free: "✗", pro: "✓", team: "✓" },
        ]
    },
    {
        category: "Security & Management",
        features: [
            { name: "Room Expiry", free: "24 Hours", pro: "Never", team: "Never" },
            { name: "Password Protection", free: "✗", pro: "✓", team: "✓" },
            { name: "Session Replay", free: "✗", pro: "✓", team: "✓" },
            { name: "Admin Permissions", free: "✗", pro: "✗", team: "✓" },
        ]
    }
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-[#1e293b]">
        <button 
            onClick={onClick}
            className="w-full py-6 flex items-center justify-between text-left hover:text-[#6ee7b7] transition-colors"
        >
            <span className="text-lg font-semibold pr-8">{question}</span>
            <ChevronDown className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#6ee7b7]' : 'text-[#64748b]'}`} size={20} />
        </button>
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                >
                    <p className="pb-6 text-[#64748b] leading-relaxed">
                        {answer}
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

export default function PricingPage() {
    const [billingCycle, setBillingCycle] = useState('monthly');
    const [openFaq, setOpenFaq] = useState(null);

    const isYearly = billingCycle === 'yearly';

    return (
        <div className="min-h-screen bg-[#030712] text-[#f8fafc] pb-20 selection:bg-[#6ee7b7]/30">
            {/* Hero Section */}
            <header className="max-w-[1100px] mx-auto px-6 pt-32 mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#6ee7b7]/30 bg-[#6ee7b7]/5 text-[#6ee7b7] text-sm font-bold uppercase tracking-widest mb-6"
                >
                    Pricing
                </motion.div>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#f8fafc] via-[#6ee7b7] to-[#3b82f6]"
                >
                    Simple, Transparent Pricing
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-[#64748b] text-lg md:text-xl max-w-2xl mx-auto mb-12"
                >
                    Start for free. Upgrade when your team needs more power.
                </motion.p>

                {/* Billing Toggle */}
                <div className="flex items-center justify-center gap-4 mb-16">
                    <span className={`text-sm font-medium ${!isYearly ? 'text-[#f8fafc]' : 'text-[#64748b]'}`}>Monthly</span>
                    <button 
                        onClick={() => setBillingCycle(isYearly ? 'monthly' : 'yearly')}
                        className="relative w-14 h-7 rounded-full bg-[#1e293b] p-1 transition-colors hover:bg-[#2d3a4f]"
                    >
                        <motion.div 
                            animate={{ x: isYearly ? 28 : 0 }}
                            className="w-5 h-5 rounded-full bg-[#6ee7b7] shadow-[0_0_10px_rgba(110,231,183,0.5)]"
                        />
                    </button>
                    <div className="flex items-center gap-2">
                        <span className={`text-sm font-medium ${isYearly ? 'text-[#f8fafc]' : 'text-[#64748b]'}`}>Yearly</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-[#6ee7b7] text-[10px] font-bold">Save 20%</span>
                    </div>
                </div>
            </header>

            {/* Pricing Cards */}
            <main className="max-w-[1100px] mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Free Plan */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-8 flex flex-col h-full relative group transition-all hover:border-[#1e293b]/80"
                    >
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4">Free</h3>
                            <div className="flex items-baseline gap-1 mb-2">
                                <span className="text-4xl font-bold">$0</span>
                                <span className="text-[#64748b] text-sm">/forever</span>
                            </div>
                            <p className="text-[#64748b] text-sm">Perfect for quick debugging sessions.</p>
                        </div>
                        <div className="h-px bg-[#1e293b] mb-8" />
                        <ul className="space-y-4 mb-10 text-sm">
                            <li className="flex items-center gap-3">
                                <Check size={18} className="text-[#6ee7b7]" />
                                <span>Rooms expire in 24 hours</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check size={18} className="text-[#6ee7b7]" />
                                <span>Up to 2 collaborators</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check size={18} className="text-[#6ee7b7]" />
                                <span>5 supported languages</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check size={18} className="text-[#6ee7b7]" />
                                <span>No login required</span>
                            </li>
                            <li className="flex items-center gap-3 text-[#64748b] line-through">
                                <X size={18} />
                                <span>Persistent rooms</span>
                            </li>
                            <li className="flex items-center gap-3 text-[#64748b] line-through">
                                <X size={18} />
                                <span>Session history</span>
                            </li>
                        </ul>
                        <button className="mt-auto w-full py-4 rounded-lg border border-[#1e293b] font-bold text-sm hover:bg-[#1e293b] transition-all">
                            Start for Free
                        </button>
                    </motion.div>

                    {/* Pro Plan */}
                    <motion.div 
                        initial={{ scale: 1.05 }}
                        whileHover={{ y: -5, scale: 1.06 }}
                        className="bg-[#0f172a] border-2 border-[#6ee7b7] rounded-2xl p-8 flex flex-col h-full relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(110,231,183,0.1)]"
                    >
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#6ee7b7] text-[#030712] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                            Most Popular
                        </div>
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-[#6ee7b7]">Pro</h3>
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-4xl font-bold">${isYearly ? '6.40' : '8'}</span>
                                {isYearly && <span className="text-[#64748b] line-through text-lg">$8</span>}
                                <span className="text-[#64748b] text-sm">/month</span>
                            </div>
                            <p className="text-[#64748b] text-sm italic">For power users and mentors.</p>
                        </div>
                        <div className="h-px bg-[#1e293b] mb-8" />
                        <ul className="space-y-4 mb-10 text-sm">
                            <li className="flex items-center gap-3">
                                <Check size={18} className="text-[#6ee7b7]" />
                                <span className="font-semibold text-[#f8fafc]">Persistent rooms (never expire)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check size={18} className="text-[#6ee7b7]" />
                                <span>Up to 10 collaborators</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check size={18} className="text-[#6ee7b7]" />
                                <span>All languages supported</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check size={18} className="text-[#6ee7b7]" />
                                <span>Room password protection</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check size={18} className="text-[#6ee7b7]" />
                                <span>Session history & replay</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check size={18} className="text-[#6ee7b7]" />
                                <span>Priority support</span>
                            </li>
                        </ul>
                        <button className="mt-auto w-full py-4 rounded-lg bg-[#6ee7b7] text-[#030712] font-bold text-sm hover:shadow-[0_0_20px_rgba(110,231,183,0.5)] transition-all">
                            Upgrade to Pro
                        </button>
                    </motion.div>

                    {/* Team Plan */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-8 flex flex-col h-full relative transition-all hover:border-[#1e293b]/80"
                    >
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4">Team</h3>
                            <div className="flex items-baseline gap-1 mb-2">
                                <span className="text-4xl font-bold">${isYearly ? '16' : '20'}</span>
                                <span className="text-[#64748b] text-sm">/month per seat</span>
                            </div>
                            <p className="text-[#64748b] text-sm">Best for organizations.</p>
                        </div>
                        <div className="h-px bg-[#1e293b] mb-8" />
                        <ul className="space-y-4 mb-10 text-sm">
                            <li className="flex items-center gap-3">
                                <Check size={18} className="text-[#6ee7b7]" />
                                <span className="font-semibold text-[#f8fafc]">Everything in Pro</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check size={18} className="text-[#6ee7b7]" />
                                <span>Unlimited collaborators</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check size={18} className="text-[#6ee7b7]" />
                                <span>Shared team dashboard</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check size={18} className="text-[#6ee7b7]" />
                                <span>Admin controls & permissions</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check size={18} className="text-[#6ee7b7]" />
                                <span>Usage analytics</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check size={18} className="text-[#6ee7b7]" />
                                <span>Dedicated support manager</span>
                            </li>
                        </ul>
                        <button className="mt-auto w-full py-4 rounded-lg border border-[#1e293b] font-bold text-sm hover:bg-[#1e293b] transition-all">
                            Contact Sales
                        </button>
                    </motion.div>
                </div>
            </main>

            {/* Comparison Table */}
            <section className="max-w-[1100px] mx-auto px-6 mb-32">
                <h2 className="text-3xl font-bold mb-12 text-center">Compare Features</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-[#1e293b]">
                                <th className="py-6 px-4 text-[#64748b] text-sm font-medium uppercase tracking-widest">Feature</th>
                                <th className="py-6 px-4 text-center font-bold">Free</th>
                                <th className="py-6 px-4 text-center font-bold text-[#6ee7b7]">Pro</th>
                                <th className="py-6 px-4 text-center font-bold">Team</th>
                            </tr>
                        </thead>
                        <tbody>
                            {COMPARISON_FEATURES.map((section) => (
                                <React.Fragment key={section.category}>
                                    <tr className="bg-[#1e293b]/20">
                                        <td colSpan={4} className="py-4 px-4 text-xs font-black uppercase tracking-widest text-[#64748b]">
                                            {section.category}
                                        </td>
                                    </tr>
                                    {section.features.map((feature, idx) => (
                                        <tr key={idx} className="border-b border-[#1e293b] hover:bg-white/[0.02] transition-colors">
                                            <td className="py-5 px-4 text-sm font-medium">{feature.name}</td>
                                            <td className={`py-5 px-4 text-center text-sm ${feature.free === '✗' ? 'text-red-500/50' : 'text-[#64748b]'}`}>{feature.free}</td>
                                            <td className="py-5 px-4 text-center text-sm font-bold text-[#6ee7b7]">{feature.pro}</td>
                                            <td className="py-5 px-4 text-center text-sm font-bold">{feature.team}</td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="max-w-[800px] mx-auto px-6 mb-32">
                <div className="text-center mb-16">
                    <HelpCircle className="w-12 h-12 text-[#6ee7b7] mx-auto mb-6" />
                    <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-2">
                    {FAQ_ITEMS.map((item, idx) => (
                        <AccordionItem 
                            key={idx}
                            question={item.q}
                            answer={item.a}
                            isOpen={openFaq === idx}
                            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        />
                    ))}
                </div>
            </section>

            {/* Bottom CTA Banner */}
            <section className="w-full py-20 bg-[#0f172a] border-t border-[#1e293b]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Still not sure? Try it free — no credit card required.</h2>
                    <p className="text-[#64748b] mb-10 text-lg">Experience the power of real-time collaboration with up to 2 developers for as long as you need.</p>
                    <Link 
                        href="/" 
                        className="inline-flex items-center px-10 py-4 bg-[#6ee7b7] text-[#030712] rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(110,231,183,0.4)] transition-all hover:scale-105"
                    >
                        Create a Room Now
                    </Link>
                </div>
            </section>
        </div>
    );
}
