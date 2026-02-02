
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Costing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-200 font-body">
      <style>{`
        @keyframes pulse-custom {
          0% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(0.8); opacity: 0.5; }
        }
        .data-node {
          animation: pulse-custom 3s infinite ease-in-out;
        }
        .line-flow {
          background: linear-gradient(90deg, #1173d4, #3b82f6, #1173d4);
          background-size: 200% 100%;
          animation: flow-custom 4s linear infinite;
        }
        @keyframes flow-custom {
          0% { background-position: 0% 0%; }
          100% { background-position: -200% 0%; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-slate-900 py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Dynamic Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-50">
            <source src="https://cdn.pixabay.com/video/2023/10/20/185834-876616428_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
        </div>

        <div className="layout-container relative z-10">
          <div className="layout-content-container flex flex-col lg:flex-row max-w-[1200px] mx-auto w-full px-6 lg:px-20 xl:px-40 items-center justify-between">
            <div className="flex flex-col gap-8 text-center lg:text-left lg:w-3/5">
              <div className="flex flex-col gap-4">
                <span className="text-primary font-bold tracking-wider text-sm uppercase">Costing Services</span>
                <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-[-0.033em] font-display drop-shadow-lg">
                  Precision Costing for Engineering Excellence
                </h1>
                <h2 className="text-slate-200 text-lg lg:text-xl font-normal leading-relaxed drop-shadow-md">
                  Drive profitability with data-backed cost modeling and efficiency analysis tailored to your manufacturing reality.
                </h2>
              </div>
              <div className="flex flex-wrap gap-4 mt-2 justify-center lg:justify-start">
                <button 
                  onClick={() => {
                    const el = document.getElementById('methodology');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex h-12 items-center justify-center rounded-lg px-8 bg-primary text-white text-base font-bold transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 shadow-xl shadow-primary/20">
                  <span className="truncate">Explore Services</span>
                </button>
                <button onClick={() => navigate('/contact')} className="flex h-12 items-center justify-center rounded-lg px-8 bg-white/10 backdrop-blur-md border border-white/20 text-white text-base font-bold transition-all hover:bg-white/20">
                  <span className="truncate">Contact Sales</span>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-6 mt-12 lg:mt-0 lg:w-2/5 lg:pl-16">
              <div className="flex items-center gap-6 justify-center lg:justify-start pt-4 lg:pt-0">
                <div className="flex flex-col p-4 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 shadow-md">
                  <span className="text-3xl font-bold text-primary">15%</span>
                  <span className="text-sm text-slate-400">Avg. Savings Identified</span>
                </div>
                <div className="w-px h-16 bg-white/10 hidden lg:block"></div>
                <div className="flex flex-col p-4 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 shadow-md">
                  <span className="text-3xl font-bold text-primary">500+</span>
                  <span className="text-sm text-slate-400">Models Generated</span>
                </div>
              </div>
              <div className="hidden lg:block relative p-6 bg-slate-900/80 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl max-w-sm mx-auto lg:mx-0 lg:ml-auto">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">network_node</span>
                  </div>
                  <div>
                    <p className="font-bold text-white">Predictive Cost Analytics</p>
                    <p className="text-xs text-slate-400">Leveraging AI for proactive cost optimization.</p>
                  </div>
                </div>
                <div className="h-16 mt-4 relative">
                  <div className="absolute inset-0 bg-primary/20 via-primary/50 to-primary/20 rounded-full blur-sm opacity-70"></div>
                  <div className="absolute inset-y-0 left-0 w-2/3 h-full bg-primary/70 rounded-full flex items-center justify-end pr-2 text-white text-xs font-bold shadow-inner">Cost Efficiency</div>
                  <div className="absolute inset-y-0 right-0 w-1/3 h-full bg-primary/30 rounded-full flex items-center justify-start pl-2 text-primary text-xs font-bold shadow-inner">Risk Factor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="bg-slate-50 dark:bg-slate-900 py-16 border-y border-slate-200 dark:border-slate-800">
        <div className="layout-container flex flex-col justify-center px-6 lg:px-20 xl:px-40">
          <div className="layout-content-container flex flex-col max-w-[960px] mx-auto text-center">
            <span className="text-primary font-bold tracking-wider text-xs uppercase mb-3">Our Methodology</span>
            <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-6 font-display">
              Comprehensive Cost Analysis from Every Angle
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
              We don't just estimate prices; we engineer costs. Our team dissects every element of your spend—from raw materials and labor to overhead and logistics—providing granular visibility into your cost structures.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="bg-white dark:bg-background-dark py-20">
        <div className="layout-container flex flex-col justify-center px-6 lg:px-20 xl:px-40">
          <div className="layout-content-container max-w-[1200px] mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 01 */}
              <div className="service-card group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[28px]">calculate</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500">01</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors font-display">Overhead & Indirect Cost Rates</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    Precise calculation of shop floor burden and indirect overhead rates. We analyze facility expenses to determine accurate hourly rates for machines and labor, ensuring no hidden costs.
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-3/4 rounded-full"></div>
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                    <span>Direct</span>
                    <span>Indirect</span>
                  </div>
                </div>
              </div>
              {/* Card 02 */}
              <div className="service-card group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[28px]">factory</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500">02</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors font-display">Customized Cost Models</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    Tailoring models to specific facility actual costs. We move beyond generic industry averages to build models reflecting your specific geography, equipment vintage, and labor agreements.
                  </p>
                </div>
                <div className="mt-auto pt-4 flex gap-2">
                  <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-[10px] font-bold text-slate-500 uppercase">Facility Specific</span>
                  <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-[10px] font-bold text-slate-500 uppercase">Geo-Located</span>
                </div>
              </div>
              {/* Card 03 */}
              <div className="service-card group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[28px]">lightbulb</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500">03</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors font-display">Could Cost Models</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    Theoretical costing for components to determine potential savings. We explore "what-if" scenarios with alternative materials or relaxed tolerances to find the lowest viable cost.
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <span className="material-symbols-outlined text-sm">trending_down</span> Potential Savings Identified
                  </div>
                </div>
              </div>
              {/* Card 04 */}
              <div className="service-card group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[28px]">gavel</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500">04</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors font-display">Should Cost Models</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    Benchmark costing based on optimal manufacturing processes. We define what a part <em>should</em> cost in a best-in-class environment, empowering your negotiation strategy.
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full border-2 border-primary flex items-center justify-center text-[10px] font-bold text-primary">Target</div>
                    <div className="h-px bg-slate-200 flex-1 dark:bg-slate-700"></div>
                    <div className="text-xs text-slate-500 font-medium">Optimal Process</div>
                  </div>
                </div>
              </div>
              {/* Card 05 */}
              <div className="service-card group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[28px]">difference</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500">05</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors font-display">Gap Analysis</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    Evaluation of current cost structure versus should cost. We identify the delta between what you pay and what you should pay, highlighting specific areas for renegotiation or process improvement.
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <div className="flex gap-1 h-12 items-end">
                    <div className="w-8 bg-slate-300 dark:bg-slate-600 rounded-t h-10 relative group-hover:bg-slate-400 transition-colors"></div>
                    <div className="w-8 bg-primary rounded-t h-6 relative"></div>
                    <div className="text-[10px] text-primary font-bold ml-2 self-center">The Gap</div>
                  </div>
                </div>
              </div>
              {/* Card 06 */}
              <div className="service-card group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[28px]">pie_chart</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500">06</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors font-display">Cost Structure Efficiency</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    Deep dive into cost structure efficiency. We analyze the ratio of material, labor, and overhead to identify imbalances and waste within the total cost of ownership.
                  </p>
                </div>
                <div className="mt-auto pt-4 flex gap-2">
                  <div className="h-4 w-4 rounded-full bg-primary"></div>
                  <div className="h-4 w-4 rounded-full bg-primary/60"></div>
                  <div className="h-4 w-4 rounded-full bg-primary/30"></div>
                  <span className="text-xs text-slate-500 ml-2">Breakdown Analysis</span>
                </div>
              </div>
              {/* Card 07 */}
              <div className="service-card group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[28px]">engineering</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500">07</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors font-display">Labor & Process Efficiency</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    Time-motion studies and labor optimization. We assess the efficiency of manual operations and machine cycle times to reduce labor content per unit.
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span>Cycle Time</span>
                    <span className="text-primary font-bold">-12%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full">
                    <div className="h-full bg-green-500 w-4/5 rounded-full"></div>
                  </div>
                </div>
              </div>
              {/* Card 08 */}
              <div className="service-card group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[28px]">query_stats</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500">08</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors font-display">Sensitivity Analysis</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    "What-if" scenario planning. We model how fluctuations in raw material prices, exchange rates, or volume changes impact your unit cost, preparing you for market volatility.
                  </p>
                </div>
                <div className="mt-auto pt-4 grid grid-cols-3 gap-1">
                  <div className="h-6 bg-slate-100 dark:bg-slate-700 rounded flex items-center justify-center text-[8px] text-slate-400">Low</div>
                  <div className="h-6 bg-primary/20 rounded flex items-center justify-center text-[8px] text-primary font-bold">Mid</div>
                  <div className="h-6 bg-slate-100 dark:bg-slate-700 rounded flex items-center justify-center text-[8px] text-slate-400">High</div>
                </div>
              </div>
              {/* Card 09 */}
              <div className="service-card group flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[28px]">construction</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500">09</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors font-display">Tooling Cost</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    Amortization and CapEx analysis. We validate tooling quotes against industry standards for complexity and tonnage, optimizing your upfront capital expenditure.
                  </p>
                </div>
                <div className="mt-auto pt-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-slate-400">straighten</span>
                  <span className="text-xs text-slate-500">Design • Build • Tryout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Breakdown Section */}
      <section className="bg-slate-50 dark:bg-slate-900 py-20 overflow-hidden">
        <div className="layout-container flex flex-col justify-center px-6 lg:px-20 xl:px-40">
          <div className="layout-content-container max-w-[1200px] mx-auto w-full">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2 relative">
                <div className="relative w-full aspect-square md:aspect-video lg:aspect-square bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white font-display">Cost Breakdown Analysis</h3>
                    <div className="flex gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <div className="h-2 w-2 rounded-full bg-slate-300"></div>
                    </div>
                  </div>
                  <div className="flex-1 flex items-end gap-4 justify-between px-4 pb-4">
                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-t-lg relative group h-[40%] hover:h-[45%] transition-all duration-500">
                      <div className="absolute bottom-0 w-full bg-slate-300 dark:bg-slate-600 rounded-t-lg h-full"></div>
                      <span className="absolute -top-6 w-full text-center text-xs text-slate-500 font-bold">Current</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-t-lg relative group h-[85%] hover:h-[90%] transition-all duration-500">
                      <div className="absolute bottom-0 w-full bg-primary rounded-t-lg h-[70%] shadow-lg shadow-primary/20"></div> 
                      <div className="absolute bottom-[70%] w-full bg-primary/30 h-[30%]"></div>
                      <span className="absolute -top-6 w-full text-center text-xs text-slate-500 font-bold">Optimized</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Our <span className="text-primary font-bold">Should Cost</span> models identify an average of 15-20% savings opportunities in complex assemblies.</p>
                  </div>
                </div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col gap-8">
                <div>
                  <span className="text-primary font-bold tracking-wider text-xs uppercase mb-2 block">Why Choose Hexuno Technologies</span>
                  <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] font-display">
                    Analytical Expertise Meets Manufacturing Reality
                  </h2>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4">
                    <div className="flex-none mt-1">
                      <div className="bg-white dark:bg-slate-800 p-2 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm text-primary">
                        <span className="material-symbols-outlined">psychology</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-display">Engineering-First Approach</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        We don't just look at spreadsheets. Our team comprises engineers who understand DFM (Design for Manufacturing), ensuring cost reductions don't compromise quality.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-none mt-1">
                      <div className="bg-white dark:bg-slate-800 p-2 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm text-primary">
                        <span className="material-symbols-outlined">database</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-display">Global Data Benchmarks</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        Leverage our proprietary database of global labor rates, machine hour rates, and material indices across 30+ countries.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-none mt-1">
                      <div className="bg-white dark:bg-slate-800 p-2 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm text-primary">
                        <span className="material-symbols-outlined">handshake</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-display">Negotiation Support</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        Armed with our detailed cost breakdowns, your procurement team can engage in fact-based negotiations, moving away from price haggling to value partnership.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 md:py-24">
        <div className="layout-container flex flex-col justify-center px-6 lg:px-40">
          <div className="layout-content-container max-w-[800px] mx-auto text-center flex flex-col gap-8 items-center">
            <h2 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-[-0.015em] font-display">
              Ready to optimize your spend?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl font-medium max-w-xl">
              Start your journey towards cost transparency and higher profitability today. Get a complimentary consultation on your top 5 spend items.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <button onClick={() => navigate('/contact')} className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-white text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-slate-50 transition-colors shadow-lg">
                Request Cost Analysis
              </button>
              <button onClick={() => navigate('/contact')} className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-blue-800 text-white text-base font-bold leading-normal tracking-[0.015em] border border-blue-600 hover:bg-blue-900 transition-colors">
                Talk to an Engineer
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Costing;
