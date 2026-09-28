"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  Code2,
  Link,
  Bot,
  Smile,
  BarChart2,
  Activity,
  Layers,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ToolBadgeProps { name: string; highlight?: boolean; }
interface SectionTitleProps { label: string; title: string; }
interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  delay?: number;
}
interface ProjectCardProps {
  title: string;
  description: string[];
  index: number;
}

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

// ─── Sub-components ───────────────────────────────────────────────────────────
function ToolBadge({ name, highlight }: ToolBadgeProps) {
  return (
    <motion.span
      variants={fadeUp}
      whileHover={{ scale: 1.06, y: -2 }}
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border transition-colors duration-300 cursor-default ${
        highlight
          ? "border-[#6366f1]/25 bg-[#6366f1]/06 text-[#818cf8] hover:border-[#6366f1]/60 hover:bg-[#6366f1]/12"
          : "border-[#2a2a2a] bg-[#141414] text-[#a0a0a0] hover:border-[#6366f1]/50 hover:text-[#818cf8]"
      }`}
    >
      {name}
    </motion.span>
  );
}

function SectionTitle({ label, title }: SectionTitleProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className="mb-14">
      <motion.p
        initial={{ opacity: 0, x: -16 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-[10px] uppercase tracking-[0.25em] text-[#6366f1] font-semibold mb-3"
      >
        {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl sm:text-4xl font-bold text-white leading-tight"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="mt-4 h-px w-16 bg-gradient-to-r from-[#6366f1] to-transparent origin-left"
      />
    </div>
  );
}

function ExpertiseCard({ icon, title, items, delay = 0 }: ExpertiseCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, borderColor: "rgba(99,102,241,0.4)" }}
      className="group relative p-6 rounded-2xl border border-[#1e1e1e] bg-[#0d0d0d] overflow-hidden transition-colors duration-300"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366f1]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="w-9 h-9 rounded-xl bg-[#6366f1]/10 flex items-center justify-center mb-5 text-[#818cf8]">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-[#6b6b6b] leading-relaxed">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-[#6366f1]/60 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ProjectCard({ title, description, index }: ProjectCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.01 }}
      className="group relative p-7 rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#6366f1]/70 font-medium">
          Project {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-2 text-lg font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          {title}
        </h3>
        <ul className="space-y-2">
          {description.map((d) => (
            <li key={d} className="text-sm text-[#5e5e5e] leading-relaxed flex items-start gap-2">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#6366f1]/50 flex-shrink-0" />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const expertise = [
  {
    icon: <Search size={16} strokeWidth={1.8} />,
    title: "Search Engine Optimization",
    items: [
      "On-Page SEO — content optimization, keyword strategy, internal linking",
      "Off-Page SEO — link building, outreach, authority growth",
      "Technical SEO — site audits, crawlability, indexing, Core Web Vitals",
      "Website health monitoring and SEO scoring",
    ],
  },
  {
    icon: <Code2 size={16} strokeWidth={1.8} />,
    title: "Web Development",
    items: [
      "Junior / Assistant Web Developer",
      "WordPress development and customization",
      "Page builder optimization (performance + UX)",
      "Basic PHP development and debugging",
    ],
  },
  {
    icon: <Link size={16} strokeWidth={1.8} />,
    title: "Link Building",
    items: [
      "Outreach strategy and execution",
      "Backlink acquisition and tracking",
      "Competitor backlink analysis",
    ],
  },
  {
    icon: <Bot size={16} strokeWidth={1.8} />,
    title: "AI Automation",
    items: [
      "Workflow automation using AI tools",
      "Process optimization for marketing and operations",
      "Building internal tools for efficiency (SEO monitoring, dashboards)",
    ],
  },
  {
    icon: <Smile size={16} strokeWidth={1.8} />,
    title: "Web Design",
    items: [
      "Midget (Minimalist) Web Design approach",
      "Conversion-focused UI/UX",
      "Performance-first design thinking",
    ],
  },
];

const toolGroups = [
  { category: "Design & Content", tools: ["Photoshop", "Canva"] },
  { category: "Web Development", tools: ["WordPress", "Divi Builder", "Elementor", "PHP", "VS Code", "GitHub"] },
  { category: "SEO Tools", tools: ["Screaming Frog", "Ahrefs", "Rank Math", "Yoast SEO", "Imagify", "FastPixel"] },
  { category: "Productivity & Data", tools: ["Excel", "Google Sheets", "Google Docs"] },
  { category: "AI & Automation", tools: ["Claude", "ChatGPT", "Gemini", "Antigravity"] },
];

const strengths = [
  "Strong understanding of technical SEO + development integration",
  "Ability to analyze, fix, and optimize website performance",
  "Experience in building scalable SEO and automation systems",
  "Focused on real business impact, not just metrics",
  "Fast learner with a mindset for continuous improvement",
];

const projects = [
  {
    title: "SEO Monitoring Dashboard",
    description: [
      "Built a system to track website performance, health status, and SEO scores",
      "Integrated PageSpeed insights and technical audit metrics",
    ],
  },
  {
    title: "WordPress Optimization Projects",
    description: [
      "Improved site speed and Core Web Vitals",
      "Implemented structured SEO strategies using Rank Math & Yoast",
    ],
  },
  {
    title: "Link Building Campaigns",
    description: [
      "Executed outreach campaigns to increase domain authority",
      "Analyzed competitor backlink profiles and replicated high-value links",
    ],
  },
];

const workApproach = [
  { step: "01", label: "Analyze",  detail: "Audit + identify issues",                   icon: <Search size={14} strokeWidth={1.8} /> },
  { step: "02", label: "Optimize", detail: "SEO + performance improvements",             icon: <Activity size={14} strokeWidth={1.8} /> },
  { step: "03", label: "Automate", detail: "Reduce manual work using AI tools",          icon: <Layers size={14} strokeWidth={1.8} /> },
  { step: "04", label: "Scale",    detail: "Build systems that grow with the business",  icon: <BarChart2 size={14} strokeWidth={1.8} /> },
];

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <main className="min-h-screen text-white" style={{ background: "#080808", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');
        ::selection { background: #6366f130; color: #818cf8; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #080808; }
        ::-webkit-scrollbar-thumb { background: #1e1e1e; border-radius: 2px; }
      `}</style>

      {/* Background grid */}
      <div className="fixed inset-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)`, backgroundSize: "64px 64px" }} />

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Hero photo — place hero.png in /public */}
        <div
          className="absolute inset-0 bg-cover bg-right bg-no-repeat"
          style={{ backgroundImage: "url('/hero.png')" }}
        />
        {/* Overlay: solid black left → transparent right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #080808 0%, #080808 38%, rgba(8,8,8,0.82) 52%, rgba(8,8,8,0.25) 72%, rgba(8,8,8,0.05) 100%)",
          }}
        />
        {/* Bottom vignette to blend into the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 py-32">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-8">
            <span className="w-6 h-px bg-[#6366f1]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#6366f1] font-semibold">Portfolio</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            About <em className="not-italic" style={{ color: "#818cf8" }}>Me</em>
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="flex flex-wrap gap-2 mb-10">
            {["SEO Specialist", "Web Developer", "AI Automation Engineer"].map((role) => (
              <span key={role} className="px-4 py-1.5 rounded-full text-sm border border-[#222] text-[#888]">{role}</span>
            ))}
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }} className="max-w-2xl text-[#5a5a5a] text-lg leading-relaxed mb-4">
            I&apos;m a results-driven digital professional with a strong foundation in SEO, web development, and AI-powered automation. I specialize in improving website visibility, optimizing performance, and building systems that streamline workflows and increase efficiency.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }} className="max-w-2xl text-[#4a4a4a] text-base leading-relaxed">
            With hands-on experience across On-Page, Off-Page, and Technical SEO, combined with development skills, I bridge the gap between marketing and engineering — ensuring strategies are not just planned, but properly executed.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#333]">Scroll</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }} className="w-px h-8 bg-gradient-to-b from-[#333] to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className="relative py-28 px-6 sm:px-10 border-t border-[#111]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle label="What I Do" title="Core Expertise" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertise.map((card, i) => (
              <ExpertiseCard key={card.title} icon={card.icon} title={card.title} items={card.items} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section className="relative py-28 px-6 sm:px-10 border-t border-[#0f0f0f]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle label="Tech Stack" title="Tools & Technologies" />
          <div className="space-y-10">
            {toolGroups.map((group) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: "-60px" });
              return (
                <div key={group.category} ref={ref}>
                  <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }} className="text-[10px] uppercase tracking-[0.25em] text-[#3a3a3a] font-medium mb-4">
                    {group.category}
                  </motion.p>
                  <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"} className="flex flex-wrap gap-2">
                    {group.tools.map((tool) => <ToolBadge key={tool} name={tool} highlight={group.category === "AI & Automation"} />)}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STRENGTHS ── */}
      <section className="relative py-28 px-6 sm:px-10 border-t border-[#0f0f0f]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle label="Why Me" title="Key Strengths" />
          <div className="space-y-0">
            {strengths.map((s, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: "-40px" });
              return (
                <motion.div key={s} ref={ref} initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: i * 0.08 }} className="group flex items-start gap-5 py-5 border-b border-[#141414] last:border-0">
                  <span className="flex-shrink-0 text-[10px] font-mono text-[#2a2a2a] pt-0.5 group-hover:text-[#6366f1]/50 transition-colors duration-300" style={{ fontFamily: "'DM Mono', monospace" }}>{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-[#4d4d4d] text-sm leading-relaxed group-hover:text-[#8a8a8a] transition-colors duration-300">{s}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="relative py-28 px-6 sm:px-10 border-t border-[#0f0f0f]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle label="Work" title="Projects" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((p, i) => <ProjectCard key={p.title} title={p.title} description={p.description} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── WORK APPROACH ── */}
      <section className="relative py-28 px-6 sm:px-10 border-t border-[#0f0f0f]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle label="Process" title="Work Approach" />
          <p className="text-[#3d3d3d] text-sm mb-12 -mt-6">I combine data, strategy, and execution.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workApproach.map((w, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: "-60px" });
              return (
                <motion.div key={w.step} ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }} whileHover={{ y: -4 }} className="relative p-6 rounded-2xl border border-[#151515] bg-[#090909] group">
                  <div className="absolute top-4 right-4 text-[10px] font-mono text-[#1e1e1e] group-hover:text-[#6366f1]/30 transition-colors duration-300" style={{ fontFamily: "'DM Mono', monospace" }}>{w.step}</div>
                  <div className="w-8 h-8 rounded-xl bg-[#6366f1]/10 flex items-center justify-center mb-4 text-[#818cf8]">{w.icon}</div>
                  <h3 className="text-base font-semibold text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{w.label}</h3>
                  <p className="text-xs text-[#3e3e3e] leading-relaxed">{w.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative py-16 px-6 sm:px-10 border-t border-[#111]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#2a2a2a]">SEO Specialist · Web Developer · AI Automation Engineer</p>
          <p className="text-[10px] text-[#222]" style={{ fontFamily: "'DM Mono', monospace" }}>Built with Next.js 14</p>
        </div>
      </footer>
    </main>
  );
}
