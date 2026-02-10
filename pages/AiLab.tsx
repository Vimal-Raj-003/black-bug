
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AiLab: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen font-sans bg-background-light dark:bg-background-dark transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black/80 to-black z-10"></div>
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60">
             <source src="https://cdn.pixabay.com/video/2020/05/25/40139-424072233_large.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative z-20 text-center max-w-4xl px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Hexuno AI Lab</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Intelligence</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We bridge the gap between traditional manufacturing and generative AI, creating autonomous workflows that optimize cost, quality, and speed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button onClick={() => navigate('/contact')} className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all">
              Deploy AI Solutions
            </button>
            <button onClick={() => document.getElementById('capabilities')?.scrollIntoView({behavior: 'smooth'})} className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm">
              Explore Capabilities
            </button>
          </div>
        </div>
      </section>

      {/* Stats/Ticker */}
      <div className="border-y border-white/5 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                    <div className="text-3xl font-bold text-white mb-1">24/7</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">Automated Processing</div>
                </div>
                <div>
                    <div className="text-3xl font-bold text-white mb-1">99%</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">Data Accuracy</div>
                </div>
                <div>
                    <div className="text-3xl font-bold text-white mb-1">10x</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">Faster Quotes</div>
                </div>
                <div>
                    <div className="text-3xl font-bold text-white mb-1">Zero</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">Hallucinations</div>
                </div>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <section id="capabilities" className="py-24 bg-surface-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Capabilities</h2>
                <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: "Automated Quoting", icon: "request_quote", desc: "Ingest PDF drawings and CAD files to automatically generate line-item cost estimates using RAG (Retrieval Augmented Generation)." },
                    { title: "Supply Chain Risk", icon: "warning", desc: "Predictive modeling of supplier failure risks based on geopolitical data, financial news, and historical performance." },
                    { title: "Visual Inspection", icon: "visibility", desc: "Computer vision models deployed on edge devices to detect surface defects in real-time on the assembly line." },
                    { title: "Technical RAG", icon: "description", desc: "Chat with your technical documentation. Instant retrieval of specs, standards (ASTM, ISO), and historical engineering data." },
                    { title: "Inventory Optimization", icon: "inventory_2", desc: "Time-series forecasting to optimize stock levels, reducing carrying costs while preventing stockouts." },
                    { title: "Generative Design", icon: "architecture", desc: "AI-driven topology optimization to reduce part weight while maintaining structural integrity." }
                ].map((item, i) => (
                    <div key={i} className="p-8 rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all group hover:shadow-2xl hover:shadow-blue-500/10">
                        <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to automate the future?</h2>
            <p className="text-blue-100 text-lg mb-8">Book a demo of our AI capabilities and see how we can transform your engineering workflow.</p>
            <button onClick={() => navigate('/contact')} className="px-8 py-3 bg-white text-primary font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
                Schedule Demo
            </button>
        </div>
      </section>

    </div>
  );
};

export default AiLab;
