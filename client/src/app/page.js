import Link from 'next/link';
import { ChevronRight, Zap, Users, Shield } from 'lucide-react';
import dynamic from 'next/dynamic';
import JoinForm from '../components/home/JoinForm';
import AnimatedContainer, { AnimatedItem } from '../components/home/AnimatedContainer';

const HeroBackground = dynamic(() => import('../components/home/HeroBackground'));
const MockEditor = dynamic(() => import('../components/home/MockEditor'));

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-[#030712] text-gray-900 dark:text-[#f9fafb] relative overflow-x-hidden transition-colors duration-300">
            <HeroBackground />

            <AnimatedContainer className="z-10 w-full flex flex-col lg:flex-row items-center justify-between max-w-7xl px-4 pt-16 md:pt-24 mb-20 gap-12 lg:gap-8">
                {/* LEFT COLUMN: Text & Actions */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[45%]">
                    <AnimatedItem className="mb-10 w-full">
                        <style dangerouslySetInnerHTML={{
                            __html: `
                            @keyframes gradient-x {
                                0%, 100% { background-position: 0% 50%; }
                                50% { background-position: 100% 50%; }
                            }
                            .animate-gradient-x {
                                background-size: 200% 200%;
                                animation: gradient-x 4s ease infinite;
                            }
                            @keyframes shimmer {
                                0% { background-position: -200% 0; }
                                100% { background-position: 200% 0; }
                            }
                            .animate-shimmer {
                                background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0) 100%);
                                background-size: 200% 100%;
                                animation: shimmer 3s infinite linear;
                            }
                            @keyframes floatY {
                                0%, 100% { transform: translateY(0px) rotateX(2deg) rotateY(-5deg); }
                                50% { transform: translateY(-15px) rotateX(5deg) rotateY(-8deg); }
                            }
                            .animate-float-3d {
                                animation: floatY 6s ease-in-out infinite;
                                transform-style: preserve-3d;
                            }
                        `}} />
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 flex flex-col items-center lg:items-start max-w-[15ch] mx-auto lg:mx-0 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-400 pb-2 animate-gradient-x drop-shadow-[0_0_20px_rgba(236,72,153,0.2)] dark:drop-shadow-[0_0_20px_rgba(236,72,153,0.4)] leading-tight">
                            codesharelive
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed pr-0 lg:pr-6">
                            Stop sharing screenshots. Start sharing <span className="text-gray-900 dark:text-white font-medium">live code</span>. The fastest way to collaborate, pair program, and debug with developers anywhere.
                        </p>
                    </AnimatedItem>

                    <JoinForm />
                </div>

                <MockEditor />
            </AnimatedContainer>

            {/* NEW SECTION: SEO Internal Links & Features - CARD BASED */}
            <section className="w-full py-24 bg-white dark:bg-[#050a18] border-t border-gray-100 dark:border-white/5 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none" />
                
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="group p-8 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 hover:border-purple-500/50 dark:hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col items-start gap-6">
                            <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                <Zap size={24} />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Why codesharelive?</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Built for speed and simplicity. Whether you are learning to code or a senior engineer pair-programming, we provide the tools you need.
                                </p>
                                <Link href="/about" className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:gap-2 transition-all pt-2">
                                    Learn more <ChevronRight size={18} />
                                </Link>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group p-8 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 hover:border-pink-500/50 dark:hover:border-pink-400/50 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-300 flex flex-col items-start gap-6">
                            <div className="p-3 rounded-xl bg-pink-100 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                <Users size={24} />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Real-time Collaboration</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    See every keystroke in real-time. Our zero-latency engine ensures that your collaborative sessions are buttery smooth.
                                </p>
                                <Link href="/faq" className="inline-flex items-center text-pink-600 dark:text-pink-400 font-medium hover:gap-2 transition-all pt-2">
                                    View FAQ <ChevronRight size={18} />
                                </Link>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group p-8 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 hover:border-indigo-500/50 dark:hover:border-indigo-400/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col items-start gap-6">
                            <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                <Shield size={24} />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Secure & Private</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Rooms are temporary and private. We never index your code sessions, keeping your sensitive data between you and your team.
                                </p>
                                <Link href="/contact" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:gap-2 transition-all pt-2">
                                    Get in touch <ChevronRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
