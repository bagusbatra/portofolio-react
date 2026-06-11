import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Database, Cpu, Globe, Users, HardDrive, ShieldCheck, HelpCircle, Activity } from "lucide-react";

interface NodeItem {
  id: string;
  label: string;
  x: number; // Percentages for coordinates
  y: number;
  icon: any;
  category: "core" | "framework" | "endpoint" | "sync";
  details: {
    purpose: string;
    challengeSolved: string;
    keyConcept: string;
    bagusOptim: string;
  };
}

export default function ProjectEcosystem() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("laravel");
  const [activeSignal, setActiveSignal] = useState<boolean>(true);

  const nodes: NodeItem[] = [
    {
      id: "mysql",
      label: "MySQL Relational DB",
      x: 50,
      y: 65,
      icon: Database,
      category: "core",
      details: {
        purpose: "Single-source structured storage with robust multi-tenant partitioning.",
        challengeSolved: "Monolithic query lag and index locking under heavy traffic.",
        keyConcept: "Strategic multi-column indexes combined with relational query optimization.",
        bagusOptim: "Achieved a 4.2x optimization factor for academic SIS platforms."
      }
    },
    {
      id: "laravel",
      label: "Laravel REST Engine",
      x: 50,
      y: 35,
      icon: Cpu,
      category: "framework",
      details: {
        purpose: "Clean, robust API gateway routing and request sanitization.",
        challengeSolved: "Unstructured codebases translating to high security risks and manual deployment drift.",
        keyConcept: "Service repositories, JWT verification middleware, and strict request-response typing.",
        bagusOptim: "Reduced code implementation vulnerability while accelerating routing speeds by 30%."
      }
    },
    {
      id: "sis",
      label: "Academic Admin (SIS)",
      x: 20,
      y: 20,
      icon: Users,
      category: "endpoint",
      details: {
        purpose: "Modular portal managing multi-tier roles (admins, parents, students).",
        challengeSolved: "Fragmented spreadsheets creating administrative grade drift and communication voids.",
        keyConcept: "Real-time query pipelines synced to student records with automated grade exports.",
        bagusOptim: "Fitted automatic report processing for over 4,550+ concurrent users."
      }
    },
    {
      id: "village",
      label: "Village Registry Portal",
      x: 80,
      y: 20,
      icon: Globe,
      category: "endpoint",
      details: {
        purpose: "Light, low-compute portal to run vital public community records.",
        challengeSolved: "Remote regional districts lacking cloud networks or high-spec hardware hosts.",
        keyConcept: "Ultra-accessible UI architectures combined with custom client sqlite data synchronization loops.",
        bagusOptim: "Delivered electronic certification services processing in under 3 minutes."
      }
    },
    {
      id: "sap",
      label: "Asynchronous SAP Middleware",
      x: 18,
      y: 75,
      icon: HardDrive,
      category: "sync",
      details: {
        purpose: "Secure operational buffer pushing synchronous ledger updates.",
        challengeSolved: "Heavy HQ legacy SAP servers bogging down instant local operational clicks.",
        keyConcept: "Token-backed custom Express query caching systems handling decoupled transactions.",
        bagusOptim: "Avoided double-entry workloads and lowered database transaction lag by 90%."
      }
    },
    {
      id: "whatsapp",
      label: "REST Queue Triggers",
      x: 82,
      y: 75,
      icon: Activity,
      category: "sync",
      details: {
        purpose: "Automated event alerts (WhatsApp status updates, grades, or administrative actions).",
        challengeSolved: "Parents and citizens missing critical time-sensitive schedules.",
        keyConcept: "Decoupled job pipelines pulling event messages asynchronously without slowing key UI threads.",
        bagusOptim: "Boosted system reliability and community interaction rates by over 3x."
      }
    }
  ];

  const selectedNode = nodes.find((n) => n.id === selectedNodeId) || nodes[1];

  // Quick connector coordinates linking endpoints to main Laravel engine in CSS percentages
  const connections = [
    { from: "laravel", to: "mysql", color: "from-brand-accent/40 to-slate-500/20" },
    { from: "sis", to: "laravel", color: "from-blue-500/30 to-brand-accent/40" },
    { from: "village", to: "laravel", color: "from-green-500/30 to-brand-accent/40" },
    { from: "sap", to: "mysql", color: "from-purple-500/30 to-slate-500/20" },
    { from: "whatsapp", to: "mysql", color: "from-pink-500/30 to-slate-500/20" }
  ];

  return (
    <div id="project-ecosystem-visual" className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
      {/* Dynamic Architecture Interactive Map */}
      <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-xl p-6 relative overflow-hidden flex flex-col justify-between min-h-[420px] shadow-2xl backdrop-blur-md">
        
        {/* Aesthetic design framing */}
        <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse" />
            <span className="font-mono text-[11px] tracking-widest text-[#5d6880] uppercase font-bold">
              LIVE SYSTEM ARCHITECTURE MAP
            </span>
          </div>
          <button 
            onClick={() => {
              setActiveSignal(prev => !prev);
            }}
            className="font-mono text-[10px] text-brand-accent/80 hover:text-brand-accent flex items-center gap-1 transition-colors px-2 py-0.5 rounded bg-white/5 font-bold uppercase"
          >
            <Activity className="w-3 h-3 animate-pulse" />
            {activeSignal ? "LIVE PROTOCOL ENABLED" : "PAUSE SIGNALS"}
          </button>
        </div>

        {/* Visual Stage */}
        <div className="relative w-full flex-grow py-12 flex items-center justify-center">
          {/* Connector SVGs */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minHeight: '100%' }}>
            {connections.map((conn, idx) => {
              const fromN = nodes.find(n => n.id === conn.from);
              const toN = nodes.find(n => n.id === conn.to);
              if (!fromN || !toN) return null;
              
              return (
                <g key={idx}>
                  <line 
                    x1={`${fromN.x}%`} 
                    y1={`${fromN.y}%`} 
                    x2={`${toN.x}%`} 
                    y2={`${toN.y}%`}
                    stroke="rgba(30, 96, 255, 0.15)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  {activeSignal && (
                    <circle r="4" fill="#1e60ff" className="animate-[pulse_1.5s_infinite]">
                      <animateMotion 
                        path={`M ${fromN.x * 4},${fromN.y * 3.5} L ${toN.x * 4},${toN.y * 3.5}`} 
                        dur="3s" 
                        repeatCount="indefinite" 
                      />
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Render Nodes */}
          {nodes.map((node) => {
            const Icon = node.icon;
            const isSelected = node.id === selectedNodeId;

            return (
              <motion.button
                id={`eco-node-${node.id}`}
                key={node.id}
                onClick={() => setSelectedNodeId(node.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  position: "absolute",
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 z-10 cursor-pointer min-w-[120px] max-w-[150px]
                  ${isSelected 
                    ? "bg-brand-accent text-white shadow-[0_0_20px_var(--color-brand-accent-glow)] border border-white/20" 
                    : "bg-[#050505] text-[#adc3ff]/70 hover:text-white border border-white/10 hover:border-brand-accent/40"
                  }`}
              >
                <div className={`p-1.5 rounded-lg mb-1.5 ${isSelected ? "bg-white/20" : "bg-white/5"}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-display font-medium text-[11px] tracking-wide text-center leading-tight">
                  {node.label}
                </span>
                
                {/* Visual Category Label */}
                <span className={`text-[8px] font-mono mt-1 px-1.5 py-0.5 rounded ${
                  isSelected ? "bg-white/20 text-white" : "bg-white/[0.04] text-[#5d6880]"
                }`}>
                  {node.category.toUpperCase()}
                </span>
              </motion.button>
            );
          })}
        </div>

        <div className="text-center font-mono text-[10px] text-[#5d6880] mt-4 border-t border-white/10 pt-2 uppercase tracking-wide font-bold">
          💡 Click any system node above to analyze Bagus's engineering optimization layers.
        </div>
      </div>

      {/* Detail Showcase Panel */}
      <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-xl p-6 relative overflow-hidden flex flex-col justify-between backdrop-blur-md">
        
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-[11px] text-brand-accent">
            <span className="text-xs uppercase font-bold tracking-widest">✓ SYSTEM NODE SPEC</span>
          </div>

          <h3 className="font-display text-2xl font-semibold text-white tracking-tight mb-4 uppercase">
            {selectedNode.label}
          </h3>

          <div className="space-y-4 mb-6">
            <div>
              <span className="text-[10px] font-mono text-[#5d6880] uppercase tracking-wider block font-bold">
                Primary Purpose
              </span>
              <p className="text-sm text-slate-300 mt-1 leading-relaxed font-sans">
                {selectedNode.details.purpose}
              </p>
            </div>

            <div>
              <span className="text-[10px] font-mono text-amber-500/80 uppercase tracking-wider block font-bold">
                Core Real-World Challenge Solved
              </span>
              <p className="text-sm text-slate-300 mt-1 leading-relaxed font-sans">
                {selectedNode.details.challengeSolved}
              </p>
            </div>

            <div>
              <span className="text-[10px] font-mono text-brand-accent uppercase tracking-wider block font-bold">
                Engineering Blueprint
              </span>
              <p className="text-sm text-slate-300 mt-1 leading-relaxed font-sans font-mono text-[12px] bg-[#050505] p-2 rounded border border-white/10">
                {selectedNode.details.keyConcept}
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Metrics / Bagus Proof block */}
        <div className="bg-white/5 border border-white/10 p-4 rounded-xl mt-auto relative overflow-hidden">
          <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-brand-accent/5 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[10px] uppercase tracking-widest mb-1 font-bold">
            <ShieldCheck className="w-4 h-4" />
            Bagus's Optimization Audit
          </div>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            {selectedNode.details.bagusOptim}
          </p>
        </div>
      </div>
    </div>
  );
}
