<div align="center">

# 🌸 Cyber Sakura — Personal Portfolio

### Muhammad Sharoz · Agentic AI Engineer & Fullstack Developer

*Building autonomous AI systems and full-stack experiences that ship.*

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0080?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

[💼 LinkedIn](https://www.linkedin.com/in/muhammad-sharoz-219353295/) · [🐦 X](https://x.com/MuhammadSh7870) · [💻 GitHub](https://github.com/024ahmad) · [✉️ Email](mailto:ar339497hmad@gmail.com)

</div>

---

## 👋 About Me

Hey, I'm **Muhammad Sharoz** — an **Agentic AI Engineer** and **Fullstack Developer** based in 🇵🇰 **Karachi, Pakistan**.

I design and build:

- 🤖 **Autonomous AI agents** that reason, plan, and use tools to solve real-world problems
- 🧠 **RAG pipelines** with hybrid search, re-ranking, and streaming responses
- ⚡ **Fullstack web apps** using Next.js (frontend) and FastAPI (backend)
- 🎨 **Polished interfaces** that feel as good as they look — performance, accessibility, and aesthetics in equal measure

I love the intersection where serious AI engineering meets pixel-perfect UX. From LLM tool-use orchestration to production-grade APIs and beautiful frontends — I deliver **end-to-end**.

> 💬 **Currently available for new projects** — Agentic AI, fullstack web apps, AI integrations, and portfolio/landing pages.

---

## ✨ About This Portfolio

A modern, responsive, animation-rich portfolio with a distinctive **Cyber Sakura** aesthetic — hot pink neon, dark cyberpunk vibes, animated grid backgrounds, and falling sakura petals 🌸. Built to showcase my work and reflect my personality as a builder.

### 🎯 Highlights

- 🌸 **Cyber Sakura Theme** — Hot pink + dark + animated grid + sakura petals
- ⚡ **Typewriter Hero** — Headings type out letter-by-letter on load
- 🎭 **Smooth Animations** — Framer Motion throughout
- 📱 **Fully Responsive** — Mobile menu, fluid typography, breakpoint polish
- 📧 **Working Contact Form** — Real emails via Resend API with beautiful HTML templates
- ♿ **Accessible** — Focus rings, ARIA labels, semantic HTML, keyboard navigation
- 🚀 **SEO Ready** — Metadata, OG tags, optimized images
- 🌗 **Dark-first Design** — Confident dark aesthetic, no theme toggle clutter

---

## 🛠️ Tech Stack

<table>
<tr>
<td valign="top" width="50%">

### 🤖 Agentic AI

- LLM Orchestration
- Tool Use / Function Calling
- RAG Pipelines
- Vector DBs (Pinecone, Qdrant)
- LangChain / LangGraph
- Anthropic SDK · OpenAI SDK
- Multi-Agent Systems

### 🐍 Backend

- FastAPI · Python
- Node.js
- PostgreSQL · Redis
- Pydantic · SQLAlchemy
- WebSockets

</td>
<td valign="top" width="50%">

### 🎨 Frontend

- Next.js 16 (App Router, RSC)
- React 19 · TypeScript
- Tailwind CSS v4
- Framer Motion
- shadcn/ui
- Zustand · TanStack Query

### ☁️ DevOps & Cloud

- Docker
- Vercel · AWS · GCP
- GitHub Actions
- Nginx · Cloudflare
- Supabase · Stripe

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20+ and npm
- A **Resend account** (free) for the contact form — [resend.com](https://resend.com)

### Installation

```bash
# Clone the repository
git clone https://github.com/024ahmad/Personal-Portfolio.git
cd Personal-Portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local and add your Resend API key

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 🔧 Configuration

### 🔑 Environment Variables

Create a `.env.local` file in the root:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_TO_EMAIL=your-email@example.com
CONTACT_FROM_EMAIL=onboarding@resend.dev
```

> 💡 Use `onboarding@resend.dev` until you verify your own domain on Resend, then switch to `contact@yourdomain.com` for a more professional sender address.

### 📝 Content Customization

All site content lives in **`src/lib/data.ts`** — one file, fully typed:

| Export | What it controls |
|---|---|
| `siteConfig` | Name, role, bio, email, social links |
| `skills` | Categorized tech stack (4 categories) |
| `projects` | Featured & secondary project cards |
| `services` | What you offer to clients |
| `experience` | Timeline entries |
| `stats` | Hero section counter cards |

### 🎨 Theme Customization

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --pink: #ff2d87;       /* Primary brand color */
  --pink-soft: #ff6fb5;
  --cyan: #22e1ff;       /* Accent color */
  --background: #08060a;
  --foreground: #f5e6f0;
}
```

---

## 📂 Project Structure

```
Personal-Portfolio/
├── public/
│   └── avatar.jpg              # Profile photo
├── src/
│   ├── app/
│   │   ├── actions.ts          # Server actions (contact form)
│   │   ├── globals.css         # Theme + animations
│   │   ├── layout.tsx          # Root layout, metadata, fonts
│   │   └── page.tsx            # Home page composition
│   ├── components/
│   │   ├── sections/           # Hero, About, Skills, Projects, Services, Contact
│   │   ├── icons.tsx           # GitHub/LinkedIn/X SVG icons
│   │   ├── navbar.tsx          # Sticky nav + mobile menu
│   │   ├── sakura-petals.tsx   # Falling petals animation
│   │   ├── typewriter.tsx      # Typewriter effect components
│   │   └── section-heading.tsx
│   └── lib/
│       ├── data.ts             # 🎯 All site content lives here
│       └── utils.ts            # cn() helper
├── .env.local.example
└── package.json
```

---

## 🎬 Sections

| Section | Purpose |
|---|---|
| 🏠 **Hero** | Animated intro with typewriter, floating tech tags, profile photo, stats |
| 👤 **About** | Bio + highlight cards covering specialties |
| ⚡ **Skills** | Categorized tech grid — Agentic AI / Frontend / Backend / DevOps |
| 💼 **Projects** | Featured cards + secondary grid with tags and links |
| 🎯 **Services & Experience** | Service offerings + career timeline |
| 📬 **Contact** | Real working form (Resend) + social links |

---

## 📬 Contact Form

The contact form sends real emails using **Resend** — a modern, reliable email API.

- ✉️ Beautiful HTML email template matching the site aesthetic
- 🔒 Server actions (no exposed API keys)
- ✅ Validation + error handling
- 🎁 Free tier: 100 emails/day, 3000/month

---

## 🌐 Deployment

### 🚀 Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Add environment variables in the project settings:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL`
4. Hit **Deploy** — done in 60 seconds ⚡

### 🐳 Build for Production

```bash
npm run build
npm start
```

---

## 🤝 Connect With Me

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-024ahmad-181717?style=for-the-badge&logo=github)](https://github.com/024ahmad)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Muhammad_Sharoz-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/muhammad-sharoz-219353295/)
[![X](https://img.shields.io/badge/X-@MuhammadSh7870-000000?style=for-the-badge&logo=x)](https://x.com/MuhammadSh7870)
[![Email](https://img.shields.io/badge/Email-ar339497hmad@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ar339497hmad@gmail.com)

</div>

---

## 📜 License

This project is open source and available for personal use. Feel free to fork it as a starting point for your own portfolio — a star ⭐ would be appreciated!

---

<div align="center">

### 💖 Crafted with care in Karachi, Pakistan 🇵🇰

*Have an idea? Let's build something extraordinary together.*

**[⬆ Back to top](#-cyber-sakura--personal-portfolio)**

</div>
