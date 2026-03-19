import HeroBackground from '../components/home/HeroBackground';
import JoinForm from '../components/home/JoinForm';
import MockEditor from '../components/home/MockEditor';
import AnimatedContainer, { AnimatedItem } from '../components/home/AnimatedContainer';

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
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed pr-0 lg:pr-6">
                            Stop sharing screenshots. Start sharing <span className="text-gray-900 dark:text-white font-medium">live code</span>. The fastest way to collaborate, pair program, and debug with developers anywhere.
                        </p>
                    </AnimatedItem>

                    <JoinForm />
                </div>

                <MockEditor />
            </AnimatedContainer>
        </div>
    );
}
