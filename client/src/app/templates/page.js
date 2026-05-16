"use client";

import React, { useState, useMemo } from 'react';
import { Search, ChevronRight, Star, Code, Terminal, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const TEMPLATES = [
    {
        id: 1,
        name: "React Todo App",
        language: "JavaScript",
        framework: "React",
        difficulty: "Beginner",
        description: "A clean, functional Todo application built with React functional components and Hooks.",
        tags: ["#react", "#hooks", "#beginner"],
        uses: 1420,
        code: `function TodoList() {\n  const [todos, setTodos] = useState([]);\n  const addTodo = (text) => {\n    setTodos([...todos, { text, id: Date.now() }]);\n  };\n  return <div>...</div>;\n}`,
        color: "yellow"
    },
    {
        id: 2,
        name: "REST API Server",
        language: "Go",
        difficulty: "Intermediate",
        description: "Robust RESTful API boilerplate with routing, middleware, and JSON serialization.",
        tags: ["#api", "#rest", "#backend"],
        uses: 856,
        code: `func main() {\n  r := chi.NewRouter()\n  r.Get("/api/v1/health", func(w http.ResponseWriter, r *http.Request) {\n    json.NewEncoder(w).Encode(map[string]string{"status": "ok"})\n  })\n}`,
        color: "cyan"
    },
    {
        id: 3,
        name: "Python Web Scraper",
        language: "Python",
        difficulty: "Intermediate",
        description: "Automated scraper using BeautifulSoup4 to extract and process data from web pages.",
        tags: ["#scraping", "#data", "#automation"],
        uses: 2105,
        code: `def scrape_data(url):\n    response = requests.get(url)\n    soup = BeautifulSoup(response.text, 'html.parser')\n    items = soup.find_all('div', class_='product')\n    return [i.text for i in items]`,
        color: "green"
    },
    {
        id: 4,
        name: "TypeScript Auth Boilerplate",
        language: "TypeScript",
        difficulty: "Advanced",
        description: "Secure authentication flow with JWT, protected routes, and user management.",
        tags: ["#auth", "#jwt", "#security"],
        uses: 3421,
        code: `export const authenticate = (req: Request, res: Response, next: NextFunction) => {\n  const token = req.headers.authorization?.split(' ')[1];\n  if (!token) throw new AuthError('No token provided');\n  // ... verify token\n}`,
        color: "blue"
    },
    {
        id: 5,
        name: "Rust CLI Tool",
        language: "Rust",
        difficulty: "Advanced",
        description: "Blazing fast command-line interface tool with argument parsing and system access.",
        tags: ["#cli", "#performance", "#system"],
        uses: 562,
        code: `fn main() -> Result<(), Box<dyn Error>> {\n    let args = Cli::from_args();\n    match args.command {\n        Command::Run { input } => process(input)?,\n        _ => (),\n    }\n    Ok(())\n}`,
        color: "orange"
    },
    {
        id: 6,
        name: "Next.js Landing Page",
        language: "TypeScript",
        framework: "React",
        difficulty: "Intermediate",
        description: "Modern, responsive landing page template using Next.js 14 and Tailwind CSS.",
        tags: ["#nextjs", "#tailwind", "#marketing"],
        uses: 1890,
        code: `export default function Hero() {\n  return (\n    <section className="h-screen flex items-center">\n      <h1 className="text-6xl font-bold">Launch Faster</h1>\n    </section>\n  );\n}`,
        color: "blue"
    },
    {
        id: 7,
        name: "Python FastAPI CRUD",
        language: "Python",
        difficulty: "Intermediate",
        description: "Asynchronous CRUD API using FastAPI and SQLAlchemy for rapid development.",
        tags: ["#fastapi", "#crud", "#sql"],
        uses: 945,
        code: `@app.post("/items/", response_model=schemas.Item)\ndef create_item(item: schemas.ItemCreate, db: Session = Depends(get_db)):\n    return crud.create_user_item(db=db, item=item, user_id=user_id)`,
        color: "green"
    },
    {
        id: 8,
        name: "Java Spring Hello World",
        language: "Java",
        difficulty: "Beginner",
        description: "Standard Spring Boot starter with a simple REST controller and basic configuration.",
        tags: ["#spring", "#java", "#enterprise"],
        uses: 632,
        code: `@RestController\npublic class HelloController {\n    @GetMapping("/")\n    public String index() {\n        return "Greetings from Spring Boot!";\n    }\n}`,
        color: "red"
    },
    {
        id: 9,
        name: "Go WebSocket Server",
        language: "Go",
        difficulty: "Advanced",
        description: "Scalable WebSocket server implementation for real-time applications.",
        tags: ["#websockets", "#realtime", "#networking"],
        uses: 421,
        code: `func serveWs(hub *Hub, w http.ResponseWriter, r *http.Request) {\n    conn, err := upgrader.Upgrade(w, r, nil)\n    client := &Client{hub: hub, conn: conn, send: make(chan []byte, 256)}\n    client.hub.register <- client\n}`,
        color: "cyan"
    },
    {
        id: 10,
        name: "JavaScript Debounce & Throttle",
        language: "JavaScript",
        difficulty: "Beginner",
        description: "Essential utility functions for optimizing event listeners and API calls.",
        tags: ["#utility", "#optimization", "#web"],
        uses: 2310,
        code: `const debounce = (fn, delay) => {\n  let timeoutId;\n  return (...args) => {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => fn.apply(this, args), delay);\n  };\n};`,
        color: "yellow"
    },
    {
        id: 11,
        name: "C++ Binary Search Tree",
        language: "C++",
        difficulty: "Intermediate",
        description: "Standard implementation of a BST with insertion, deletion, and traversal methods.",
        tags: ["#dsa", "#algorithms", "#cpp"],
        uses: 782,
        code: `Node* insert(Node* node, int key) {\n    if (node == NULL) return newNode(key);\n    if (key < node->key) node->left = insert(node->left, key);\n    else node->right = insert(node->right, key);\n    return node;\n}`,
        color: "gray"
    },
    {
        id: 12,
        name: "Node.js Express API",
        language: "JavaScript",
        difficulty: "Beginner",
        description: "Quick-start Express.js server with basic middleware and route structure.",
        tags: ["#express", "#nodejs", "#backend"],
        uses: 4521,
        code: `const express = require('express');\nconst app = express();\n\napp.use(express.json());\napp.get('/', (req, res) => res.send('API Running'));\napp.listen(3000);`,
        color: "yellow"
    }
];

const LANGUAGES = ["All", "JavaScript", "TypeScript", "Python", "Go", "Rust", "React", "Java", "C++"];

export default function TemplatesPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('All');

    const filteredTemplates = useMemo(() => {
        return TEMPLATES.filter(template => {
            const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                 template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                 template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
            
            const matchesTab = activeTab === 'All' || 
                              template.language === activeTab || 
                              template.framework === activeTab;
            
            return matchesSearch && matchesTab;
        });
    }, [searchQuery, activeTab]);

    return (
        <div className="min-h-screen bg-[#030712] text-[#f8fafc] pb-20 selection:bg-[#6ee7b7]/30">
            {/* Hero Section */}
            <header className="max-w-[1200px] mx-auto px-6 pt-32 mb-16 text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#f8fafc] to-[#6ee7b7]"
                >
                    Starter Templates
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-[#64748b] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                >
                    Don't start from scratch. Pick a template, open a live room, and start collaborating in seconds.
                </motion.p>
            </header>

            {/* Sticky Search + Filter Bar */}
            <div className="sticky top-16 z-40 bg-[#030712]/80 backdrop-blur-md py-6 border-b border-[#1e293b]/50 mb-12">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="relative group max-w-3xl mx-auto mb-8">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-[#64748b] group-focus-within:text-[#6ee7b7] transition-colors">
                            <Search size={20} />
                        </div>
                        <input 
                            type="text" 
                            placeholder="Search templates..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-[#0f172a] border border-[#1e293b] rounded-full py-4 pl-12 pr-16 focus:outline-none focus:border-[#6ee7b7] focus:ring-1 focus:ring-[#6ee7b7] transition-all text-[#f8fafc] placeholder-[#64748b]"
                        />
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                            <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded bg-[#1e293b] text-[#64748b] text-xs font-medium">
                                <span>⌘</span><span>K</span>
                            </kbd>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {LANGUAGES.map((lang) => (
                            <button
                                key={lang}
                                onClick={() => setActiveTab(lang)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    activeTab === lang 
                                    ? 'bg-[#6ee7b7] text-[#030712] shadow-[0_0_20px_rgba(110,231,183,0.3)]' 
                                    : 'bg-transparent border border-[#1e293b] text-[#64748b] hover:border-[#6ee7b7] hover:text-[#f8fafc]'
                                }`}
                            >
                                {lang}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Template Grid */}
            <main className="max-w-[1200px] mx-auto px-6">
                <AnimatePresence mode="popLayout">
                    {filteredTemplates.length > 0 ? (
                        <motion.div 
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {filteredTemplates.map((template) => (
                                <motion.div
                                    layout
                                    key={template.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    whileHover={{ y: -4 }}
                                    className="group bg-[#0f172a] border border-[#1e293b] rounded-xl p-6 hover:border-[#6ee7b7]/50 transition-all duration-300 flex flex-col hover:shadow-[0_10px_30px_rgba(0,0,0,0.4),0_0_20px_rgba(110,231,183,0.05)]"
                                >
                                    {/* Top Row */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${
                                            template.color === 'yellow' ? 'bg-yellow-500/10 text-yellow-500' :
                                            template.color === 'blue' ? 'bg-blue-500/10 text-blue-500' :
                                            template.color === 'green' ? 'bg-green-500/10 text-green-500' :
                                            template.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-500' :
                                            template.color === 'orange' ? 'bg-orange-500/10 text-orange-500' :
                                            template.color === 'red' ? 'bg-red-500/10 text-red-500' :
                                            'bg-gray-500/10 text-gray-500'
                                        }`}>
                                            {template.language}
                                        </span>
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                                            template.difficulty === 'Beginner' ? 'border-green-500/30 text-green-500 bg-green-500/5' :
                                            template.difficulty === 'Intermediate' ? 'border-yellow-500/30 text-yellow-500 bg-yellow-500/5' :
                                            'border-red-500/30 text-red-500 bg-red-500/5'
                                        }`}>
                                            {template.difficulty}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#6ee7b7] transition-colors">{template.name}</h3>
                                    <p className="text-[#64748b] text-sm mb-4 line-clamp-2 min-h-[40px]">
                                        {template.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {template.tags.map(tag => (
                                            <span key={tag} className="text-[10px] text-[#64748b] font-medium px-2 py-0.5 bg-[#1e293b] rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Code Preview */}
                                    <div className="relative mb-6 rounded-lg overflow-hidden bg-[#020817] border border-[#1e293b]/50 p-4 font-mono text-[11px] leading-relaxed">
                                        <div className="text-[#6ee7b7]/80">
                                            <pre><code>{template.code}</code></pre>
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#020817] to-transparent" />
                                    </div>

                                    {/* Bottom Row */}
                                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-[#1e293b]">
                                        <span className="flex items-center gap-1.5 text-xs text-[#64748b]">
                                            <Star size={14} className="text-yellow-500 fill-yellow-500" />
                                            {template.uses} uses
                                        </span>
                                        <Link 
                                            href="/" 
                                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6ee7b7] hover:gap-2.5 transition-all"
                                        >
                                            Open in Editor <ChevronRight size={14} />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-center justify-center py-20 text-center"
                        >
                            <div className="p-6 rounded-full bg-[#0f172a] border border-[#1e293b] text-[#64748b] mb-6">
                                <Filter size={40} />
                            </div>
                            <h2 className="text-2xl font-bold mb-2">No templates found</h2>
                            <p className="text-[#64748b] mb-8">Try adjusting your search or filters to find what you're looking for.</p>
                            <button 
                                onClick={() => { setSearchQuery(''); setActiveTab('All'); }}
                                className="px-8 py-3 bg-[#6ee7b7] text-[#030712] rounded-full font-bold hover:shadow-[0_0_20px_rgba(110,231,183,0.4)] transition-all"
                            >
                                Clear All Filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}
