import Link from 'next/link';
import { Linkedin, Mail, Globe, Github } from 'lucide-react';


export default function Footer() {
    return (
        <footer className="w-full bg-gray-50 dark:bg-[#030712] relative mt-10 transition-colors duration-300">

            {/* Top Gradient Border */}
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">codesharelive</h2>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-w-xs">
                            The fastest way to collaborate, pair program, and debug with developers anywhere.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/company/yuki-stack-ai/?viewAsMember=true" aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="noopener noreferrer" className="rounded-full p-2.5 bg-gray-200 dark:bg-[#111827] text-gray-700 dark:text-gray-300 hover:text-white hover:bg-[#0077b5] dark:hover:bg-[#1f2937] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                                <Linkedin size={20} />
                                <span className="sr-only">LinkedIn</span>
                            </a>

                            <a href="https://yukistackai.vercel.app/" aria-label="Company Website" title="Company Website" target="_blank" rel="noopener noreferrer" className="rounded-full p-2.5 bg-gray-200 dark:bg-[#111827] text-gray-700 dark:text-gray-300 hover:text-white hover:bg-blue-600 dark:hover:bg-[#1f2937] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                                <Globe size={20} />
                                <span className="sr-only">Company Website</span>
                            </a>
                            <a href="https://github.com/ShubhamV2503/codesharelive" aria-label="GitHub Repository" title="GitHub" target="_blank" rel="noopener noreferrer" className="rounded-full p-2.5 bg-gray-200 dark:bg-[#111827] text-gray-700 dark:text-gray-300 hover:text-white hover:bg-[#333] dark:hover:bg-[#1f2937] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                                <Github size={20} />
                                <span className="sr-only">GitHub</span>
                            </a>
                            <Link href="/contact" aria-label="Contact via Email" title="Contact Us" className="rounded-full p-2.5 bg-gray-200 dark:bg-[#111827] text-gray-700 dark:text-gray-300 hover:text-white hover:bg-pink-600 dark:hover:bg-[#1f2937] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                                <Mail size={20} />
                                <span className="sr-only">Contact Us</span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Resources</h3>
                        <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                            <li><Link href="/templates" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Starter Templates</Link></li>
                            <li><Link href="/about" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">About codesharelive</Link></li>
                            <li><Link href="/blog" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Developer Blog</Link></li>
                            <li><Link href="/changelog" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Changelog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Support</h3>
                        <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">

                            <li><Link href="/faq" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">FAQ / Help Center</Link></li>
                            <li><Link href="/terms" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Terms of Service</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-gray-200 dark:border-[#1f2937] flex justify-center items-center text-sm text-gray-600 dark:text-gray-400">
                    <p>© {new Date().getFullYear()} codesharelive. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
