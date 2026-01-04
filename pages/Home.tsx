
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Types
type Category = 'Costing' | 'Quality' | 'Data & AI' | 'Modeling';

const COMMODITIES = [
  { name: 'Sheet Metal', icon: 'layers' },
  { name: 'Plastic', icon: 'widgets' },
  { name: 'Extrusion', icon: 'view_stream' },
  { name: 'Casting', icon: 'format_color_fill' },
  { name: 'Machining', icon: 'settings_suggest' },
  { name: 'PCB', icon: 'memory' },
  { name: 'Secondary Process', icon: 'auto_fix_high' }
];

const TOOLS_DATA: Record<Category, string[]> = {
  'Costing': ['aPriori', 'TcPCM', 'DFMEA', 'Cleansheet', 'Costimator'],
  'Quality': ['Reliance ETQ', 'SAP', 'ORACLE', 'Windchill'],
  'Data & AI': ['Power BI & Tableau', 'Python & SQL', 'Machine Learning', 'n8n & LangChain', 'RAG Systems'],
  'Modeling': ['Creo', 'SolidWorks', 'NX CAD']
};

const CATEGORIES: Category[] = ['Costing', 'Quality', 'Data & AI', 'Modeling'];

// Components
const StatCounter: React.FC<{ target: number; suffix?: string; label: string; duration?: number }> = ({ target, suffix = "", label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasStarted) setHasStarted(true);
    }, { threshold: 0.5 });
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [hasStarted, target, duration]);

  return (
    <div ref={elementRef} className="flex flex-col items-center justify-center p-4">
      <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tabular-nums">{count}{suffix}</div>
      <div className="text-sm md:text-base text-blue-50 font-medium tracking-wide uppercase opacity-90">{label}</div>
    </div>
  );
};

const ToolBadge: React.FC<{ name: string }> = ({ name }) => (
  <div className="group relative flex items-center gap-3 px-6 py-4 mx-3 min-w-max rounded-[18px] bg-white/5 backdrop-blur-md border border-cyan-500/20 shadow-[0_0_15px_rgba(14,165,233,0.05)] hover:border-primary hover:shadow-glow transition-all duration-500 hover:-translate-y-1 cursor-default overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="w-2 h-2 rounded-full bg-primary group-hover:shadow-[0_0_8px_#0EA5E9] transition-all" />
    <span className="text-white font-medium tracking-wide relative z-10">{name}</span>
  </div>
);

const ToolsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Costing');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const autoCycleTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const pauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || !isVisible) return;
    autoCycleTimer.current = setInterval(() => {
      setActiveCategory(prev => {
        const currentIndex = CATEGORIES.indexOf(prev);
        return CATEGORIES[(currentIndex + 1) % CATEGORIES.length];
      });
    }, 5000);
    return () => { if (autoCycleTimer.current) clearInterval(autoCycleTimer.current); };
  }, [isAutoPlaying, isVisible]);

  const handleManualSwitch = (cat: Category) => {
    setActiveCategory(cat);
    setIsAutoPlaying(false);
    if (pauseTimer.current) clearTimeout(pauseTimer.current);
    pauseTimer.current = setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const activeTools = TOOLS_DATA[activeCategory];
  const extendedTools = [...activeTools, ...activeTools, ...activeTools, ...activeTools];

  return (
    <section ref={sectionRef} className="py-24 bg-[#020617] relative overflow-hidden" id="tools">
      <div 
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(14, 165, 233, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.4) 1px, transparent 1px)', 
          backgroundSize: '60px 60px' 
        }} 
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="scan-line absolute inset-x-0 h-1 bg-primary/20 blur-md pointer-events-none z-10" />

      <style>{`
        @keyframes scan { 0% { top: -10%; opacity: 0; } 5% { opacity: 0.5; } 95% { opacity: 0.5; } 100% { top: 110%; opacity: 0; } }
        .scan-line { animation: scan 12s linear infinite; }
        
        @keyframes marqueeL { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(-33.33%, 0, 0); } }
        
        .marquee-container:hover .marquee-track { animation-play-state: paused; opacity: 0.8; }
        .marquee-track { will-change: transform; }
        
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; transform: none !important; display: grid !important; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)) !important; width: 100% !important; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Our Technological Edge</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Tools We Master</h3>
          </div>
          
          <div className="flex flex-wrap gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => handleManualSwitch(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${activeCategory === cat ? 'bg-primary text-white shadow-glow' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="relative marquee-container">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden py-4">
            <div 
              className="flex marquee-track"
              style={{ 
                animation: isVisible ? `marqueeL 40s linear infinite` : 'none',
                width: 'max-content'
              }}
            >
              {extendedTools.map((tool, i) => <ToolBadge key={`${tool}-1-${i}`} name={tool} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CommodityVisualization: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [fade, setFade] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActiveIdx((prev) => (prev + 1) % COMMODITIES.length);
        setFade(true);
      }, 300);
    }, 1800);

    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isHovered]);

  const active = COMMODITIES[activeIdx];

  return (
    <div 
      className="relative w-full flex flex-col items-end"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>{`
        @keyframes labelPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(14, 165, 233, 0.2); }
          50% { box-shadow: 0 0 35px rgba(14, 165, 233, 0.5); }
        }
        .active-pill-pulse { animation: labelPulse 2s infinite ease-in-out; }
        .label-transition { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
      `}</style>

      <div className="w-full h-28 bg-[#0ea5e9] rounded-l-full rounded-r-none relative z-40 flex items-center pl-12 shadow-xl shadow-blue-500/20 transform hover:-translate-x-2 transition-transform duration-300 active-pill-pulse overflow-hidden">
        <div 
          className={`flex items-center gap-4 label-transition ${
            fade ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm shadow-inner">
            <span className="material-symbols-outlined text-2xl">{active.icon}</span>
          </div>
          <span className="text-white font-bold text-2xl tracking-tight">
            {active.name}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none"></div>
      </div>
      
      <div className="w-[92%] h-28 bg-[#3b82f6] rounded-l-full rounded-r-none -mt-14 relative z-30 opacity-90 shadow-lg transform hover:-translate-x-2 transition-transform duration-300 delay-75"></div>
      <div className="w-[84%] h-28 bg-[#60a5fa] rounded-l-full rounded-r-none -mt-14 relative z-20 opacity-80 shadow-md transform hover:-translate-x-2 transition-transform duration-300 delay-100"></div>
      <div className="w-[76%] h-28 bg-[#93c5fd] rounded-l-full rounded-r-none -mt-14 relative z-10 opacity-70 shadow-sm transform hover:-translate-x-2 transition-transform duration-300 delay-150"></div>
    </div>
  );
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-body transition-colors duration-300">
      {/* Hero Section with Cinematic Automotive Manufacturing Video */}
      <div className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover opacity-20 grayscale brightness-75 mix-blend-screen"
          >
            {/* Automotive manufacturing specifically showing parts and robotics */}
            <source src="https://cdn.pixabay.com/video/2019/04/23/23011-332308696_large.mp4" type="video/mp4" />
          </video>
          {/* Multi-layered cinematic overlays for transparency effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950 pointer-events-none"></div>
          {/* Subtle tech grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:50px_50px] opacity-[0.1] pointer-events-none"></div>
        </div>
        
        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center transition-all duration-1000 ease-out transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-cyan-500/20 bg-cyan-950/30 backdrop-blur-md mb-8 shadow-[0_0_25px_rgba(6,182,212,0.2)] group hover:border-cyan-500/40 transition-all duration-500 cursor-default">
            <div className="flex gap-1">
                <span className="w-1.5 h-3.5 bg-cyan-400 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></span>
                <span className="w-1.5 h-3.5 bg-cyan-400 rounded-full animate-[pulse_1.5s_ease-in-out_infinite_200ms]"></span>
                <span className="w-1.5 h-3.5 bg-cyan-400 rounded-full animate-[pulse_1.5s_ease-in-out_infinite_400ms]"></span>
            </div>
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] font-display">Engineering DNA</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tight leading-[1.1] mb-8">
            Innovate with <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 drop-shadow-[0_0_35px_rgba(6,182,212,0.4)]">Intelligent Precision</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed font-light max-w-2xl mx-auto border-t border-white/10 pt-8">
            BlackBuck Technologies provides high-end automotive engineering solutions, from cost modeling to advanced VAVE analysis and generative AI manufacturing implementation.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center w-full">
            <button 
              onClick={() => handleScrollToSection('services')}
              className="group relative inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_25px_rgba(37,99,235,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700"></div>
              <span className="relative">Explore Offerings</span>
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button 
              onClick={() => navigate('/case-studies')}
              className="inline-flex justify-center items-center px-8 py-4 border border-slate-700 hover:border-cyan-500/50 text-base font-bold rounded-full text-slate-300 bg-slate-900/40 hover:bg-slate-800/60 backdrop-blur-sm transition-all hover:text-white"
            >
              View Case Studies
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none"></div>
      </div>

      <section className="bg-primary py-12 md:py-16 relative z-20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-0">
            <StatCounter target={30} suffix="k+" label="Components Costed" />
            <StatCounter target={10} suffix="k+" label="Items Analyzed" />
            <StatCounter target={25} suffix="+" label="Technologies" />
            <StatCounter target={10} suffix="+" label="Global Regions" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-light dark:bg-background-dark relative" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">Our Solutions</h2>
            <h3 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">Comprehensive Engineering Services</h3>
            <p className="text-gray-600 dark:text-gray-400">End-to-end capabilities tailored to optimize your manufacturing and supply chain processes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Engineering', icon: 'fa-cogs', path: '/engineering', items: ['3D & 2D Modeling', '3D Scanning & RE', 'DFM Analysis', 'Jig/Fixture Design'] },
              { title: 'Costing', icon: 'fa-calculator', path: '/costing', items: ['Overhead Calculation', 'Custom Cost Models', 'Should Cost vs Current', 'Efficiency Analysis'] },
              { title: 'Supplier Quality', icon: 'fa-certificate', path: '/engineering', items: ['NPD Support', 'In-house QA', 'Internal & Lead Audits', 'Compliance Verification'] },
              { title: 'Sourcing', icon: 'fa-globe', path: '/sourcing', items: ['Global Supplier ID', 'Selection & Validation', 'Strategic Negotiation', 'Prototyping Procurement'] },
              { title: 'VAVE', icon: 'fa-chart-line', path: '/vave', items: ['Benchmarking', 'Teardown Analysis', 'VA & VE', 'Deep Cost Insights'] },
              { title: 'Specialized Offerings', icon: 'fa-plus', path: '/other', items: ['Sustainability Consulting', 'Automation Workflows', 'Gen AI Implementation', 'Data Analysis'] }
            ].map((service, idx) => (
              <div key={idx} onClick={() => navigate(service.path)} className="service-card group cursor-pointer bg-white dark:bg-surface-dark hover:bg-primary p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 group-hover:bg-white/10 transition-colors duration-300"></div>
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 group-hover:bg-white rounded-xl flex items-center justify-center text-primary transition-colors duration-300 mb-6 transform group-hover:scale-110">
                  <i className={`fas ${service.icon} text-2xl`}></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-white mb-4 transition-colors duration-300">{service.title}</h4>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400 group-hover:text-blue-50 text-sm transition-colors duration-300">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start"><i className="fas fa-check text-primary group-hover:text-white mt-1 mr-2 text-xs transition-colors"></i> {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-background-light dark:bg-background-dark" id="expertise">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#94a3b8 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">Deep Expertise Across Domains</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-10 leading-relaxed">Our structured approach breaks down complex manufacturing challenges into manageable layers of data and insight.</p>
              <div className="space-y-4">
                {[
                  { n: 1, t: 'Components', d: 'System level costing for 30,000+ parts.' },
                  { n: 2, t: 'Items', d: 'Should cost performed on 10,000+ items.' },
                  { n: 3, t: 'Technology', d: 'Mastery of 25+ manufacturing processes.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 items-start p-6 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-700 shadow-sm">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary font-bold">{item.n}</div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{item.t}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 w-full flex flex-col items-end justify-center py-10">
                <CommodityVisualization />
            </div>
          </div>
        </div>
      </section>

      <ToolsSection />

      <section className="py-24 bg-background-light dark:bg-background-dark" id="industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">Who We Serve</h3>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: 'Automotive', i: 'fa-car', c: 'red', d: 'Helping OEMs optimize assembly lines and cycle times.' },
              { t: 'Aerospace', i: 'fa-plane', c: 'blue', d: 'Supporting high-compliance precision machining.' },
              { t: 'Medical Devices', i: 'fa-heartbeat', c: 'purple', d: 'Ensuring regulatory-compliant precision manufacturing.' },
              { t: 'Industrial Equipment', i: 'fa-cogs', c: 'orange', d: 'Enhancing productivity for heavy machinery manufacturers.' },
              { t: 'Consumer Goods', i: 'fa-box-open', c: 'yellow', d: 'Streamlining high-volume production for market speed.' }
            ].map((ind, idx) => (
              <div key={idx} className={`bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border-t-4 border-${ind.c}-500`}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-${ind.c}-100 dark:bg-${ind.c}-900/30 rounded-full flex items-center justify-center text-${ind.c}-500 mr-4`}>
                    <i className={`fas ${ind.i} text-xl`}></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">{ind.t}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{ind.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-primary/10 dark:bg-gray-800 border-y border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">Ready to Optimize Your Engineering?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">Leverage our expertise in cost modeling, supplier quality, and advanced manufacturing.</p>
          <button 
            onClick={() => navigate('/contact')}
            className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-secondary transition-all shadow-lg shadow-primary/40"
          >
            Contact Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
