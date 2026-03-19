"use client";

import { motion } from 'framer-motion';

export default function HeroBackground() {
    return (
        <>
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 select-none pointer-events-none" />

            {/* Floating Orbs */}
            <motion.div
                className="absolute top-[10%] left-[15%] w-[30rem] h-[30rem] bg-purple-600/20 rounded-full blur-[128px] pointer-events-none select-none"
                animate={{
                    y: [0, -40, 0],
                    x: [0, 30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-[10%] right-[15%] w-[30rem] h-[30rem] bg-pink-600/20 rounded-full blur-[128px] pointer-events-none select-none"
                animate={{
                    y: [0, 50, 0],
                    x: [0, -40, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
        </>
    );
}
