import "./globals.css";

export const metadata = {
    title: {
        default: "CodeshareLive - Real-time Collaborative Code Editor",
        template: "%s | CodeshareLive"
    },
    description: "Experience coding without boundaries. A lightning-fast, zero-friction workspace built for modern pair programming, featuring live cursors, sandboxed multi-language execution, and interactive whiteboards.",
    keywords: ["codesharelive", "live code sharing", "online code editor", "multiplayer programming", "real-time whiteboard", "pair programming", "run python online", "run java online"],
    authors: [{ name: "joyboy" }],
    creator: "joyboy",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: process.env.NEXT_PUBLIC_APP_URL || "https://codesharelive.com",
        title: "CodeshareLive - Real-time Collaborative Code Editor",
        description: "Lightning-fast, zero-friction workspace built for modern pair programming with live cursors and native browser execution.",
        siteName: "CodeshareLive"
    },
    twitter: {
        card: "summary_large_image",
        title: "CodeshareLive - Live Pair Programming",
        description: "Code seamlessly with live cursors, sandboxed execution, and an interactive whiteboard.",
    },
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
    },
};

import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning className="antialiased font-sans bg-white dark:bg-[#030712] text-gray-900 dark:text-purple-50 min-h-screen selection:bg-purple-500/30 flex flex-col transition-colors duration-300">
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                    <Header />
                    <main className="flex-1 flex flex-col">
                        {children}
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
