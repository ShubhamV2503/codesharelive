// Server Component — no "use client" needed
// JSON-LD structured data renders server-side for better SEO

const faqs = [
    {
        question: "Is codesharelive completely free to use?",
        answer: "Yes! codesharelive is 100% free for real-time collaboration. You can create as many rooms as you need, share links with teammates, and start coding together instantly without any subscription fees or hidden costs."
    },
    {
        question: "Do I need an account to get started with coding?",
        answer: "Not at all. We designed codesharelive to be friction-free. You can jump directly into a room and start collaborating instantly without any sign-up process, email verification, or account creation."
    },
    {
        question: "How many developers can collaborate in a single room?",
        answer: "There is no hard limit to how many developers can join a room. Whether you are pair programming with one colleague or hosting a live coding session for a large team, our engine scales to handle multiple concurrent users with ease."
    },
    {
        question: "Does codesharelive work on mobile and tablet devices?",
        answer: "Yes, the platform is built with a mobile-first responsive design. You can easily review code, participate in discussions, or even make quick edits straight from your smartphone or tablet browser."
    },
    {
        question: "What programming languages does the editor support?",
        answer: "Our editor provides professional syntax highlighting, smart indentation, and formatting for over 50 programming languages, including Python, JavaScript, TypeScript, Java, C++, Rust, Go, HTML/CSS, and many more."
    },
    {
        question: "Are my coding sessions saved permanently on your servers?",
        answer: "Rooms are temporary by design to ensure your privacy. Code exists for the duration of your active collaborative session. We recommend downloading your code or copying it to your local environment once your session is complete."
    },
    {
        question: "What makes codesharelive faster than other editors?",
        answer: "We deliver a buttery smooth, zero-latency coding experience by pairing highly optimized WebSockets with the industry-standard Monaco Editor (the engine behind VS Code). This ensures that every keystroke is synchronized across the globe in milliseconds."
    },
    {
        question: "Can I use codesharelive for technical interviews?",
        answer: "Absolutely! codesharelive is an ideal tool for technical interviews and coding assessments. It provides a clean, distraction-free environment where interviewers can watch candidates code in real-time and provide immediate feedback."
    }
];

// Schema.org structured data for FAQ — generated server-side
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
};

export const metadata = {
    title: "FAQ",
    description: "Frequently asked questions about codesharelive — the free real-time collaborative code editor.",
};

export default function FAQ() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#030712] text-gray-700 dark:text-gray-300 py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            {/* JSON-LD structured data — rendered server-side */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="max-w-3xl mx-auto bg-white dark:bg-[#0a0a0f] border border-gray-200 dark:border-[#1f2937] p-8 md:p-12 rounded-2xl shadow-xl">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h1>
                    <p className="text-gray-600 dark:text-gray-400">Everything you need to know about codesharelive.</p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-gray-100 dark:bg-[#111827] p-6 rounded-xl border border-gray-200 dark:border-[#1f2937] transition-colors duration-300">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{faq.question}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
