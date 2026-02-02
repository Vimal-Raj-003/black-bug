
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Vave: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-background-light dark:bg-background-dark">
      
      {/* Breadcrumbs */}
      <div className="w-full bg-white dark:bg-[#1a2632]">
        <div className="px-4 md:px-10 flex justify-center py-2">
          <div className="max-w-[1200px] w-full">
            <div className="flex flex-wrap gap-2 items-center">
              <Link to="/" className="text-[#617589] hover:text-primary text-sm font-medium leading-normal">Home</Link>
              <span className="material-symbols-outlined text-[#617589] text-sm">chevron_right</span>
              <span className="text-[#617589] text-sm font-medium leading-normal">Services</span>
              <span className="material-symbols-outlined text-[#617589] text-sm">chevron_right</span>
              <span className="text-[#111418] dark:text-white text-sm font-bold leading-normal">VAVE Services</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full bg-slate-900 pb-10 overflow-hidden">
        {/* Dynamic Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-40">
            <source src="https://cdn.pixabay.com/video/2023/10/20/185834-876616428_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
        </div>

        <div className="px-4 md:px-10 flex flex-1 justify-center py-5 relative z-10">
          <div className="flex flex-col max-w-[1200px] flex-1">
            <div className="@container">
              <div className="flex flex-col gap-6 py-10 lg:flex-row items-center">
                <div className="flex flex-col gap-6 lg:justify-center flex-1">
                  <div className="flex flex-col gap-4 text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 w-fit backdrop-blur-sm">
                      <span className="material-symbols-outlined text-primary text-sm">engineering</span>
                      <span className="text-primary text-xs font-bold uppercase tracking-wide">Engineering Excellence</span>
                    </div>
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl drop-shadow-lg">
                      Strategic Value Analysis & Engineering
                    </h1>
                    <h2 className="text-slate-300 text-lg font-normal leading-relaxed drop-shadow-md">
                      Driving product efficiency and cost optimization through rigorous teardowns, data-driven insights, and innovative engineering solutions.
                    </h2>
                  </div>
                  <div className="flex gap-4 flex-wrap">
                    <button onClick={() => navigate('/contact')} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary hover:bg-blue-700 transition-all text-white text-base font-bold leading-normal tracking-[0.015em] shadow-xl shadow-primary/20">
                      <span className="truncate">Start Your VAVE Project</span>
                    </button>
                    <button onClick={() => navigate('/case-studies')} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 border border-white/20 backdrop-blur-md hover:bg-white/10 transition-all text-white text-base font-bold leading-normal tracking-[0.015em]">
                      <span className="truncate">View Case Studies</span>
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden shadow-2xl relative group mt-8 lg:mt-0 border border-white/10">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                  <div className="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-105 transition-transform duration-700" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBHfLF4QtLrZb4MGHgiNEjgG2HQtxJ9AmXLA2Hjqc6GpgYaoyiQq6mY3u7x3y7UM0q_gvjQNeFakibtWsiXEyZuskrkx27vjd38OZsgI5H0uzHCcm2PmpvKZ3L1Ai2QwcnG1a_1Bg4dsha2VSk3XY18bNQtXXWZceKRtVAzv-HwvS7m-wsw6iNxYiuY1fRNEJA3xPMbfsx6pBQ1qEKk2QiQH4UHAuK6pi5gDhgQ5N0RWgrwt5E16PQx8nHAmdzRT6fxkqK9SRtgeg8")'}}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-10 py-12 flex justify-center bg-background-light dark:bg-background-dark">
        <div className="max-w-[1200px] w-full flex flex-col gap-16">
          <div className="text-center max-w-[800px] mx-auto mb-4">
            <h2 className="text-[#111418] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-4">Core VAVE Capabilities</h2>
            <p className="text-[#617589] dark:text-gray-400 text-lg">
              We combine technical expertise with commercial intelligence to deliver measurable value across the entire product lifecycle.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 bg-white dark:bg-[#1a2632] p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="w-full lg:w-1/2 rounded-xl overflow-hidden h-[300px] lg:h-auto relative">
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-md z-10 text-xs font-bold uppercase tracking-wider text-[#111418] dark:text-white flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-sm">manage_search</span> Analysis
              </div>
              <div className="w-full h-full bg-center bg-no-repeat bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDq0_uT9vGy-IXL54VnqPDo2xh81_tz8HXFIbuZhBBYM1efRV3gAeeLHxtrwD8S1I93Hz6YtlJLY_VsP4oPmXCs7YXctPNe3QZ8BuG-ld_R56froHdtPzX4DhfKoWm1jeO4hz1EQNDgtzMKNNa1JizcqoVTIgQHA9tFkN4ceFWR7cr_meEfMK_kSO4DdrkLkBzTeIQhP7HXiYjsjUECnI5owuoIbPdTDIVTQxvuZE9K0iXVPJL34xe66b9i_qU64knBc_Zdj0s_a5Y")'}}>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-6">
              <div>
                <h3 className="text-2xl font-bold text-[#111418] dark:text-white mb-2">Benchmarking & Teardown</h3>
                <p className="text-[#617589] dark:text-gray-300 text-base leading-relaxed">
                  Our comprehensive teardown analysis goes beyond simple observation. We systematically dismantle competitor products to understand their design philosophy, material choices, and manufacturing processes.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-xl">compare_arrows</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#111418] dark:text-white">Feature Gap Analysis</h4>
                    <p className="text-xs text-[#617589] dark:text-gray-400 mt-1">Identify market differentiators and parities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-xl">science</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#111418] dark:text-white">Material Identification</h4>
                    <p className="text-xs text-[#617589] dark:text-gray-400 mt-1">Lab-grade material composition testing.</p>
                  </div>
                </div>
              </div>
              <button className="flex items-center gap-2 text-primary font-bold text-sm hover:underline mt-2 group">
                Explore Methodology 
                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse items-stretch gap-8 lg:gap-12 bg-white dark:bg-[#1a2632] p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="w-full lg:w-1/2 rounded-xl overflow-hidden h-[300px] lg:h-auto relative">
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-md z-10 text-xs font-bold uppercase tracking-wider text-[#111418] dark:text-white flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-sm">precision_manufacturing</span> Engineering
              </div>
              <div className="w-full h-full bg-center bg-no-repeat bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBM9iNjRU5yGEzP3YK-hyVNSIpnq8FlOWqe0JQK0p_lULJlVEcP4Qio0rW4SLN7JpFAvUkBuE9ekz1UnKoZXqn6wKNyvBT49QJXtrbH6IbMSXtc3SN9qBkrAckwn3wRFae-3ySBQD-3GGfNOyuYwOz8v3BclbDni2KGxSyTNygoUaCCIVgsOFkyqmOEZ8d9zvwH-WZZz4YXYZ5J37t40YJLoJlLmhaIcmfdycvW48gt9W4sQ1LsKM-Y0OoJAvh0M0zhr0B_JjQcdEQ")'}}>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-6">
              <div>
                <h3 className="text-2xl font-bold text-[#111418] dark:text-white mb-2">Value Analysis & Engineering (VA/VE)</h3>
                <p className="text-[#617589] dark:text-gray-300 text-base leading-relaxed">
                  We redesign for value. Our engineering team optimizes your product's function-to-cost ratio, reducing weight and complexity without compromising performance or quality.
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-green-500">check_circle</span>
                  <span className="text-sm font-medium text-[#111418] dark:text-gray-200">Weight reduction & topology optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-green-500">check_circle</span>
                  <span className="text-sm font-medium text-[#111418] dark:text-gray-200">Manufacturing process simplification (DFMA)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-green-500">check_circle</span>
                  <span className="text-sm font-medium text-[#111418] dark:text-gray-200">Alternative material validation</span>
                </li>
              </ul>
              <button className="flex items-center gap-2 text-primary font-bold text-sm hover:underline mt-2 group">
                View Success Stories
                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 bg-white dark:bg-[#1a2632] p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="w-full lg:w-1/2 rounded-xl overflow-hidden h-[300px] lg:h-auto relative">
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-md z-10 text-xs font-bold uppercase tracking-wider text-[#111418] dark:text-white flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-sm">trending_down</span> Savings
              </div>
              <div className="w-full h-full bg-center bg-no-repeat bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEDHQMIBEWlizS_yHhgE93EGv0rn3M4H6ofqhof2FKB3YWe9tXyEPLtE4Sq1IL8THz6r5b5U3pZRaGATZ-ITKPoVxOdDA_89pOdbp3n_eQl-UGycC2pO5neuFd96qRNDqUKAkww3f6sC9eNqK4N7lC0zzAV_VDllSaBiEBEEFyRi8lQ2n3E5uEl6B3Cu2rNqXMwrNIwlWDFGmbM3MUlVQls-V0R9riwVR4iOdm2tAZtvReCLwOj6yFPE0ibaUiNGE7Ak3kK5RgUDw")'}}>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-6">
              <div>
                <h3 className="text-2xl font-bold text-[#111418] dark:text-white mb-2">Strategic Cost Insights</h3>
                <p className="text-[#617589] dark:text-gray-300 text-base leading-relaxed">
                  Data-driven cost modeling empowers your sourcing teams. We provide "should-cost" models and supplier negotiation support based on real-world market data and manufacturing overheads.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 p-4 bg-background-light dark:bg-[#101922] rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-3xl font-bold text-primary mb-1">15-25%</p>
                  <p className="text-xs font-medium text-[#617589] dark:text-gray-400 uppercase tracking-wide">Avg. Cost Reduction</p>
                </div>
                <div className="flex-1 p-4 bg-background-light dark:bg-[#101922] rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-3xl font-bold text-primary mb-1">100%</p>
                  <p className="text-xs font-medium text-[#617589] dark:text-gray-400 uppercase tracking-wide">Data Transparency</p>
                </div>
              </div>
              <button className="flex items-center gap-2 text-primary font-bold text-sm hover:underline mt-2 group">
                Request a Cost Audit
                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white dark:bg-[#1a2632] py-20 border-t border-gray-100 dark:border-gray-800">
        <div className="px-4 md:px-10 flex flex-col items-center">
          <div className="max-w-[1200px] w-full">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Our Process</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111418] dark:text-white">The VAVE Methodology</h2>
              <p className="text-[#617589] dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                A systematic approach designed to uncover hidden value and eliminate waste at every stage of the product lifecycle.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-background-light dark:hover:bg-[#202d3a] transition-colors group">
                <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">analytics</span>
                </div>
                <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-3">1. Analyze</h3>
                <p className="text-sm text-[#617589] dark:text-gray-400 leading-relaxed">
                  Data collection, functional analysis, and cost targeting to establish a baseline.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-background-light dark:hover:bg-[#202d3a] transition-colors group">
                <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">lightbulb</span>
                </div>
                <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-3">2. Brainstorm</h3>
                <p className="text-sm text-[#617589] dark:text-gray-400 leading-relaxed">
                  Creative ideation workshops to generate alternative solutions for each function.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-background-light dark:hover:bg-[#202d3a] transition-colors group">
                <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">construction</span>
                </div>
                <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-3">3. Develop</h3>
                <p className="text-sm text-[#617589] dark:text-gray-400 leading-relaxed">
                  Technical validation, prototyping, and feasibility studies of selected ideas.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-background-light dark:hover:bg-[#202d3a] transition-colors group">
                <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">rocket_launch</span>
                </div>
                <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-3">4. Implement</h3>
                <p className="text-sm text-[#617589] dark:text-gray-400 leading-relaxed">
                  Execution support, supplier onboarding, and final cost verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-primary py-16">
        <div className="px-4 md:px-10 flex justify-center">
          <div className="max-w-[1200px] w-full flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="flex flex-col gap-2 max-w-2xl">
              <h2 className="text-white text-3xl font-bold tracking-tight">Ready to optimize your product costs?</h2>
              <p className="text-blue-100 text-lg">
                Partner with Hexuno Technologies to uncover hidden value in your supply chain.
              </p>
            </div>
            <div className="flex gap-4">
              <button onClick={() => navigate('/contact')} className="bg-white text-primary hover:bg-gray-100 transition-colors font-bold py-3 px-8 rounded-lg shadow-lg text-sm uppercase tracking-wider">
                Contact Us
              </button>
              <button onClick={() => navigate('/about')} className="border border-white text-white hover:bg-white/10 transition-colors font-bold py-3 px-8 rounded-lg text-sm uppercase tracking-wider">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vave;
