export const siteConfig = {
  name: "Sharoz",
  role: "Agentic AI Engineer & Fullstack Developer",
  tagline: "Building autonomous AI systems and full-stack experiences that ship.",
  bio: "I design and build agentic AI systems, fullstack web apps with Next.js & FastAPI, and polished interfaces that feel as good as they look. From LLM tool-use orchestration to production-grade APIs — I deliver end-to-end.",
  location: "Karachi, Pakistan",
  email: "ar339497hmad@gmail.com",
  social: {
    github: "https://github.com/024ahmad",
    linkedin: "https://www.linkedin.com/in/muhammad-sharoz-219353295/",
    twitter: "https://x.com/MuhammadSh7870",
  },
};

export const skills = [
  {
    category: "Agentic AI",
    items: [
      "LLM Orchestration",
      "Tool Use / Function Calling",
      "RAG Pipelines",
      "Vector DBs (Pinecone, Qdrant)",
      "LangChain / LangGraph",
      "Anthropic SDK",
      "OpenAI SDK",
      "Multi-Agent Systems",
    ],
  },
  {
    category: "Frontend",
    items: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
      "Zustand",
      "TanStack Query",
    ],
  },
  {
    category: "Backend",
    items: [
      "FastAPI",
      "Python",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Pydantic",
      "SQLAlchemy",
      "WebSockets",
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      "Docker",
      "Vercel",
      "AWS / GCP",
      "GitHub Actions",
      "Nginx",
      "Cloudflare",
      "Supabase",
      "Stripe",
    ],
  },
];

export const projects = [
  {
    title: "Autonomous Research Agent",
    description:
      "Multi-agent system that autonomously researches topics, scrapes sources, and produces cited reports using LangGraph + Claude.",
    tags: ["LangGraph", "Claude API", "FastAPI", "Next.js"],
    image: "/projects/agent.svg",
    live: "#",
    code: "#",
    featured: true,
  },
  {
    title: "RAG Knowledge Assistant",
    description:
      "Production RAG pipeline with hybrid search, re-ranking, and streaming responses over a custom knowledge base.",
    tags: ["RAG", "Qdrant", "FastAPI", "OpenAI"],
    image: "/projects/rag.svg",
    live: "#",
    code: "#",
    featured: true,
  },
  {
    title: "AI Code Review Bot",
    description:
      "GitHub bot that reviews PRs using tool-calling agents — runs tests, checks security, suggests refactors.",
    tags: ["Agents", "Tool Use", "Node.js", "GitHub API"],
    image: "/projects/bot.svg",
    live: "#",
    code: "#",
    featured: true,
  },
  {
    title: "Realtime Analytics Dashboard",
    description:
      "Fullstack analytics dashboard with WebSocket streaming, custom charts, and role-based access.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "WS"],
    image: "/projects/dash.svg",
    live: "#",
    code: "#",
    featured: false,
  },
  {
    title: "E-commerce Platform",
    description:
      "Headless commerce with Stripe, server actions, and a custom admin panel.",
    tags: ["Next.js", "Stripe", "Postgres"],
    image: "/projects/shop.svg",
    live: "#",
    code: "#",
    featured: false,
  },
  {
    title: "AI Voice Companion",
    description:
      "Realtime voice AI assistant with streaming STT/TTS and tool calling.",
    tags: ["Realtime", "WebRTC", "Python"],
    image: "/projects/voice.svg",
    live: "#",
    code: "#",
    featured: false,
  },
];

export const services = [
  {
    title: "Agentic AI Systems",
    description:
      "Custom autonomous agents — research, automation, customer support, code review. Tool calling, multi-agent orchestration, RAG.",
    icon: "Bot",
  },
  {
    title: "Fullstack Web Apps",
    description:
      "Production-grade Next.js + FastAPI apps. Auth, payments, dashboards, realtime — built to scale.",
    icon: "Code2",
  },
  {
    title: "AI Integration",
    description:
      "Drop AI into your existing product — chatbots, summarization, semantic search, content generation.",
    icon: "Sparkles",
  },
  {
    title: "Portfolio & Landing Pages",
    description:
      "Beautiful, fast, conversion-focused sites. Animations, SEO, and pixel-perfect design.",
    icon: "Layout",
  },
];

export const experience = [
  {
    role: "Agentic AI Engineer",
    company: "Freelance / Independent",
    period: "2024 — Present",
    description:
      "Building autonomous AI systems and fullstack apps for startups and agencies. Specialized in LLM orchestration, RAG, and production AI deployment.",
  },
  {
    role: "Fullstack Developer",
    company: "Various Clients",
    period: "2022 — 2024",
    description:
      "Shipped 20+ web apps using Next.js, FastAPI, and modern cloud infra. Focus on performance, DX, and clean architecture.",
  },
  {
    role: "Open Source Contributor",
    company: "GitHub",
    period: "Ongoing",
    description:
      "Contributing to AI tooling, devtools, and design system libraries.",
  },
];

export const stats = [
  { label: "Projects Shipped", value: "30+" },
  { label: "Happy Clients", value: "20+" },
  { label: "AI Agents Built", value: "15+" },
  { label: "Years Coding", value: "5+" },
];
