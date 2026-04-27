import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
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

            {/* NEW SECTION: SEO Internal Links & Features */}
            <section className="w-full py-24 bg-white dark:bg-[#050a18] border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Why codesharelive?</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Our platform is built for speed and simplicity. Whether you are a student learning to code or a senior engineer pair-programming across continents, we provide the tools you need to succeed.
                            </p>
                            <Link href="/about" className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:gap-2 transition-all">
                                Learn more about our mission <ChevronRight size={18} />
                            </Link>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Real-time Collaboration</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                See every keystroke in real-time. Our ultra-low latency WebSocket engine ensures that your collaborative sessions are buttery smooth, even with multiple developers in the same room.
                            </p>
                            <Link href="/faq" className="inline-flex items-center text-pink-600 dark:text-pink-400 font-medium hover:gap-2 transition-all">
                                View common questions <ChevronRight size={18} />
                            </Link>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Secure & Private</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Your privacy is our priority. Rooms are temporary and accessible only via unique URLs. We never index your code sessions in search engines, keeping your data between you and your team.
                            </p>
                            <Link href="/contact" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:gap-2 transition-all">
                                Get in touch with us <ChevronRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
