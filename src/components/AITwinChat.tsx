import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Cpu, Sliders, ChevronRight, MessageSquare, AlertCircle, Sparkles, CheckCircle } from "lucide-react";
import { ChatMessage } from "../types";

export default function AITwinChat() {
  // Configurator states
  const [projectType, setProjectType] = useState<string>("Academic Portal (SIS)");
  const [projectScale, setProjectScale] = useState<string>("SME / Regional Local Org");
  const [selectedModules, setSelectedModules] = useState<string[]>(["Core Portal Interface", "Relation DB Setup"]);
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>(["MySQL Cloud Relational"]);

  // Chat states
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "twin",
      text: "Selamat datang! I am Bagus's Digital Solutions Twin. I see your interactive project configuration. I can detail specific database schemas, Laravel routing patterns, and overall architectural guidelines for you. What would you like to build?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputVal, setInputVal] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const prevMessagesLength = useRef(messages.length);

  useEffect(() => {
    if (messages.length > prevMessagesLength.current) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    prevMessagesLength.current = messages.length;
  }, [messages]);

  // Handle planner module selection
  const toggleModule = (mod: string) => {
    setSelectedModules((prev) =>
      prev.includes(mod) ? prev.filter((m) => m !== mod) : [...prev, mod]
    );
  };

  // Handle planner integration selection
  const toggleIntegration = (ing: string) => {
    setSelectedIntegrations((prev) =>
      prev.includes(ing) ? prev.filter((i) => i !== ing) : [...prev, ing]
    );
  };

  // Send interactive planner brief directly to AI
  const handleSyncBriefToAI = async () => {
    setIsLoading(true);
    setApiError(null);

    const brief = {
      type: projectType,
      scale: projectScale,
      modules: selectedModules,
      integrations: selectedIntegrations,
    };

    const payloadText = `I have updated my Solution Brief: I am building a ${brief.type} at a ${brief.scale} scale. My desired modules are: ${brief.modules.join(", ")}, with integrations: ${brief.integrations.join(", ")}. Can you provide an architectural estimate or recommended modular setup based on Bagus's expertise?`;

    // Add user's syncing action visually
    const userMsg: ChatMessage = {
      sender: "user",
      text: `🔄 Synced Solution Brief to Consultant Twin:\n• Type: ${brief.type}\n• Scale: ${brief.scale}\n• Modules: ${brief.modules.join(", ")}\n• Integrations: ${brief.integrations.join(", ")}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: payloadText,
          projectBrief: brief 
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to talk with AI Twin.");

      const twinMsg: ChatMessage = {
        sender: "twin",
        text: data.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, twinMsg]);
    } catch (err: any) {
      setApiError(err.message);
      setMessages((prev) => [
        ...prev,
        {
          sender: "twin",
          text: "My solutions mainframe is calibrating. Please verify if the developer secrets (GEMINI_API_KEY) are configured so we can start our interactive technical advisory session! In the meantime, feel free to fill out our manual scope template.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Send typed query
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userText = inputVal;
    setInputVal("");
    setIsLoading(true);
    setApiError(null);

    const userMsg: ChatMessage = {
      sender: "user",
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, userMsg]);

    const activeBrief = {
      type: projectType,
      scale: projectScale,
      modules: selectedModules,
      integrations: selectedIntegrations,
    };

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: userText, 
          projectBrief: activeBrief 
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to process message.");

      const twinMsg: ChatMessage = {
        sender: "twin",
        text: data.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, twinMsg]);
    } catch (err: any) {
      setApiError(err.message);
      setMessages((prev) => [
        ...prev,
        {
          sender: "twin",
          text: "The Consultation Twin is calibrating. Ensure your GEMINI_API_KEY is saved in the Secrets panel! Meanwhile, our manual planner captures your brief perfectly.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
      {/* 1. Solution Planner Panel */}
      <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col justify-between shadow-lg backdrop-blur-md">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Sliders className="w-4 h-4 text-brand-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate-400 font-bold">
              SOLUTIONS CONFIGURATOR
            </span>
          </div>
          
          <h3 className="font-display text-lg font-bold text-white mb-6 uppercase tracking-tight">
            Blueprint Customizer
          </h3>

          <div className="space-y-5">
            {/* Project Type */}
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-[#5d6880] block mb-2 font-bold">
                Project System Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Academic Portal (SIS)",
                  "Village Civil Portal",
                  "Enterprise Custom ERP",
                  "Modular API Service"
                ].map((type) => (
                  <button
                    key={type}
                    onClick={() => setProjectType(type)}
                    className={`py-2 px-3 rounded-lg text-left text-[11px] transition-all pointer-events-auto cursor-pointer border uppercase tracking-wider font-semibold font-mono ${
                      projectType === type
                        ? "bg-brand-accent/20 border-brand-accent text-white"
                        : "bg-[#0b1222] border-white/10 text-slate-400 hover:text-white"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Scope Scale */}
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-[#5d6880] block mb-2 font-bold">
                Operational Scope Scale
              </label>
              <select
                value={projectScale}
                onChange={(e) => setProjectScale(e.target.value)}
                className="w-full py-2 px-3 rounded-lg text-[11px] bg-[#0b1222] border border-white/10 text-white focus:outline-none focus:border-brand-accent"
              >
                <option value="SME / Regional Local Org">SME / Regional Local Org</option>
                <option value="Academic Institution (1000+ Students)">Academic Institution (1000+ Students)</option>
                <option value="Multi-Location Enterprise System">Multi-Location Enterprise System</option>
                <option value="Local Government / Civic Precinct">Local Government / Civic Precinct</option>
              </select>
            </div>

            {/* Modules Checkboxes */}
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-[#5d6880] block mb-2">
                Desired Functional Modules
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  "Multi-Role Dashboard",
                  "Secure Gradebook Ledger",
                  "Village Census Index",
                  "WhatsApp SOAP Gateway",
                  "Asynchronous Queue Sync",
                  "Query Index Optimization"
                ].map((mod) => {
                  const isChecked = selectedModules.includes(mod);
                  return (
                    <button
                      key={mod}
                      onClick={() => toggleModule(mod)}
                      className={`py-1.5 px-3 rounded-full text-[11px] transition-all cursor-pointer border ${
                        isChecked
                          ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300"
                          : "bg-white/[0.01] border-white/[0.04] text-slate-400 hover:text-slate-300"
                      }`}
                    >
                      {isChecked ? "✓ " : ""}
                      {mod}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Integration Nodes */}
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-[#5d6880] block mb-2">
                Specialized Integrations
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  "MySQL Cloud Relational",
                  "Legacy SAP Bridge",
                  "Bespoke REST Gateway",
                  "Offline-Sync Support"
                ].map((ing) => {
                  const isChecked = selectedIntegrations.includes(ing);
                  return (
                    <button
                      key={ing}
                      onClick={() => toggleIntegration(ing)}
                      className={`py-1.5 px-3 rounded-full text-[11px] transition-all cursor-pointer border ${
                        isChecked
                          ? "bg-purple-500/20 border-purple-500/40 text-purple-300"
                          : "bg-white/[0.01] border-white/[0.04] text-slate-400 hover:text-slate-300"
                      }`}
                    >
                      {isChecked ? "✓ " : ""}
                      {ing}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/10">
          <button
            onClick={handleSyncBriefToAI}
            className="w-full py-3 px-4 rounded-xl bg-brand-accent text-white font-mono text-[11px] tracking-wider uppercase font-bold hover:bg-brand-accent/95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <Sparkles className="w-4 h-4" />
            Analyze Blueprint with AI Twin
          </button>
        </div>
      </div>

      {/* 2. Interactive Digital Twin Conversation Terminal */}
      <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-xl flex flex-col justify-between h-[520px] shadow-2xl relative overflow-hidden backdrop-blur-md">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#0b1222]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-[pulse_2s_infinite]" />
            <p className="font-display text-[11px] text-white font-semibold uppercase tracking-wider">
              Bagus Batra AI Solutions Assistant
            </p>
          </div>
          <p className="font-mono text-[9px] text-[#5d6880] uppercase tracking-wider font-bold">
            POWERED BY GEMINI 3.5 FLASH
          </p>
        </div>

        {/* Messages List Area */}
        <div className="flex-grow overflow-y-auto p-5 space-y-4">
          {messages.map((msg, index) => {
            const isTwin = msg.sender === "twin";
            return (
              <div
                key={index}
                className={`flex ${isTwin ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl p-4 text-[11px] leading-relaxed space-y-2
                    ${isTwin 
                      ? "bg-[#0b1222] text-slate-300 border border-white/10" 
                      : "bg-brand-accent text-white"
                    }`}
                >
                  <p className="whitespace-pre-line font-sans">{msg.text}</p>
                  <span className="block text-[8px] opacity-45 font-mono text-right mt-1">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            );
          })}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#0b1222] border border-white/10 rounded-xl p-4 text-[11px] max-w-[80px] flex items-center justify-center">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}

          {apiError && (
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-lg text-[11px] flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block font-mono">Status Indicator</span>
                Live consultant chat relies on a configured API secret. Please make sure the <code className="font-mono bg-white/10 px-1 rounded text-white text-[10px]">GEMINI_API_KEY</code> is loaded in Settings Secrets!
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion actions */}
        <div className="px-5 py-2 flex flex-wrap gap-2 border-t border-white/10 bg-[#0b1222] overflow-x-auto whitespace-nowrap scrollbar-none">
          {[
            "Describe School Portal architecture",
            "Explain Village Platform sync loop",
            "What benefits are in Laravel ERP over spreadsheets?",
            "Plan a custom SAP database sync"
          ].map((sugg) => (
            <button
              key={sugg}
              onClick={() => setInputVal(sugg)}
              className="py-1 px-3 bg-[#0b1222] border border-white/10 hover:border-brand-accent/50 text-[10px] text-slate-400 hover:text-white rounded-full transition-all cursor-pointer whitespace-nowrap text-left"
            >
              {sugg}
            </button>
          ))}
        </div>

        {/* Input box */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10 flex items-center gap-3 bg-[#0b1222]">
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Discuss specialized structures, tech stack queries, availability..."
            className="flex-grow py-2 px-3 bg-[#0b1222] border border-white/10 focus:border-brand-accent focus:outline-none rounded-xl text-[11px] text-white placeholder-slate-500"
          />
          <button
            type="submit"
            disabled={isLoading || !inputVal.trim()}
            className="p-2 bg-brand-accent text-white rounded-xl hover:bg-brand-accent/90 transition-all text-[11px] disabled:opacity-40 select-none cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
