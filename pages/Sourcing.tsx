
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Sourcing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white">
      
      {/* Breadcrumbs */}
      <div className="layout-container flex w-full flex-col bg-white dark:bg-[#1a222c]">
        <div className="px-4 md:px-10 lg:px-40 flex justify-center py-2 border-b border-[#f0f2f4] dark:border-[#2a3441]">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap gap-2 py-2 items-center">
              <Link to="/" className="text-[#617589] dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary">Home</Link>
              <span className="text-[#617589] dark:text-gray-400 text-sm font-medium leading-normal">/</span>
              <span className="text-[#617589] dark:text-gray-400 text-sm font-medium leading-normal">Services</span>
              <span className="text-[#617589] dark:text-gray-400 text-sm font-medium leading-normal">/</span>
              <span className="text-[#111418] dark:text-white text-sm font-bold leading-normal">Sourcing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full bg-slate-900 relative overflow-hidden">
        {/* Dynamic Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-50">
            <source src="https://cdn.pixabay.com/video/2023/10/20/185834-876616428_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950/90"></div>
        </div>

        <div className="layout-container flex flex-col items-center relative z-10">
          <div className="w-full px-4 md:px-10 lg:px-40 py-8 lg:py-16 flex justify-center">
            <div className="max-w-[1100px] w-full">
              <div className="rounded-xl overflow-hidden relative min-h-[440px] flex flex-col items-center justify-center text-center p-8 lg:p-16 gap-6 border border-white/5 backdrop-blur-[2px]">
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] max-w-[800px] drop-shadow-2xl">
                  Strategic Sourcing Solutions
                </h1>
                <h2 className="text-slate-200 text-base md:text-lg font-normal leading-relaxed max-w-[600px] drop-shadow-lg">
                  Optimizing your supply chain through expert supplier identification, validation, and negotiation. We connect you with the world's best partners.
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <button onClick={() => navigate('/contact')} className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-all shadow-xl shadow-primary/20">
                    <span className="truncate">Start Your Sourcing Journey</span>
                  </button>
                  <button onClick={() => navigate('/contact')} className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-white/10 backdrop-blur-md text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-white/20 transition-all border border-white/30">
                    <span className="truncate">Explore Processes</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Overview (Timeline) */}
      <div className="w-full bg-background-light dark:bg-background-dark py-12">
        <div className="px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="max-w-[960px] w-full flex flex-col gap-10">
            <div className="text-center mb-4">
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Methodology</span>
              <h2 className="text-[#111418] dark:text-white text-3xl font-bold mt-2">The Sourcing Lifecycle</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-0.5 bg-gray-200 dark:bg-gray-700 -z-10"></div>
              <div className="flex flex-col items-center text-center gap-4 bg-white dark:bg-[#1a222c] p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 md:bg-transparent md:shadow-none md:border-none md:dark:bg-transparent">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30">
                  <span className="material-symbols-outlined">travel_explore</span>
                </div>
                <h3 className="text-lg font-bold text-[#111418] dark:text-white">Identification</h3>
                <p className="text-sm text-[#617589] dark:text-gray-400">Locating high-potential partners across global markets.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-4 bg-white dark:bg-[#1a222c] p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 md:bg-transparent md:shadow-none md:border-none md:dark:bg-transparent">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-[#2a3441] border-2 border-primary text-primary flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <h3 className="text-lg font-bold text-[#111418] dark:text-white">Selection & Validation</h3>
                <p className="text-sm text-[#617589] dark:text-gray-400">Rigorous vetting to ensure quality and compliance.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-4 bg-white dark:bg-[#1a222c] p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 md:bg-transparent md:shadow-none md:border-none md:dark:bg-transparent">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-[#2a3441] border-2 border-primary text-primary flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined">handshake</span>
                </div>
                <h3 className="text-lg font-bold text-[#111418] dark:text-white">Negotiation</h3>
                <p className="text-sm text-[#617589] dark:text-gray-400">Optimizing terms and prototyping for success.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Services Section */}
      <div className="flex flex-col w-full">
        <div className="w-full bg-white dark:bg-[#1a222c] py-16 lg:py-24 border-b border-gray-100 dark:border-gray-800">
          <div className="px-4 md:px-10 lg:px-40 flex justify-center">
            <div className="max-w-[1000px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="flex flex-col gap-6 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Phase 01
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#111418] dark:text-white leading-tight">Supplier Identification</h2>
                <p className="text-[#617589] dark:text-gray-300 text-lg leading-relaxed">
                  We don't just find suppliers; we discover partners. Leveraging our vast global database and industry networks, we identify manufacturers that align with your technical requirements, volume needs, and strategic goals.
                </p>
                <ul className="flex flex-col gap-3 mt-2">
                  <li className="flex items-center gap-3 text-[#111418] dark:text-gray-200 font-medium">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    Global Market Scans
                  </li>
                  <li className="flex items-center gap-3 text-[#111418] dark:text-gray-200 font-medium">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    Technical Capability Matching
                  </li>
                  <li className="flex items-center gap-3 text-[#111418] dark:text-gray-200 font-medium">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    Initial RFI/RFQ Management
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 group">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-all duration-500 z-10"></div>
                <img className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUjc_SszPJrRuYi34MdOjzpR8mFXP-sM6Iz5RTvcmRvrnsMvrXroU2HCEJz1H6R1hVQZaf3gngszHbAKKcjI-5-AXjnh7TTpb9tZgm6zT0mJ5zkONakvZILx2rOL-JRAMDQcHBdwfJ40CF9EQWRRBy5q3OHGX5F3PrqUIu6576d06QNRgS-RFeoTphn8zQWIRyy7A2D3x4HodCx9N_ucwbSn0tpESoOkBZrlcikAq3zaKMozoVzkJBPLyGumloGRTaf2PPD4Tma4E" alt="Digital map highlighting global network connections and data nodes" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-background-light dark:bg-background-dark py-16 lg:py-24 border-b border-gray-100 dark:border-gray-800">
          <div className="px-4 md:px-10 lg:px-40 flex justify-center">
            <div className="max-w-[1000px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 group">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-all duration-500 z-10"></div>
                <img className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_F6YRJza_NNEMwYUDXFoSS4iruC2H4FhdSafPASlpKi-ZojguoEbB4pdLPtK5K-2AII139xJIDQvIlklfzHIE4PfD5fQPgRIeQ8HrZRaLixJKuEohdykruhhLq_uBvV55DiWUrVUQV7v6N5L7YAFSP8PKLEntmfe18jT-JmAF1bZ8H6T9pboEJQc0q1lpYu8YHkr0VbqHiftfFHSq1x37an6dZ1Zv0c3B49tM4Z8UipiCZq4eKB0ogvToeG4e4O3S686CJ9dIAEE" alt="Close up of an engineer inspecting a technical component with a checklist" />
              </div>
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Phase 02
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#111418] dark:text-white leading-tight">Selection & Validation</h2>
                <p className="text-[#617589] dark:text-gray-300 text-lg leading-relaxed">
                  Mitigate risk before it begins. Our team conducts rigorous on-site audits and financial health checks to ensure your potential suppliers can deliver quality consistency and business continuity.
                </p>
                <ul className="flex flex-col gap-3 mt-2">
                  <li className="flex items-center gap-3 text-[#111418] dark:text-gray-200 font-medium">
                    <span className="material-symbols-outlined text-primary">verified</span>
                    On-Site Facility Audits
                  </li>
                  <li className="flex items-center gap-3 text-[#111418] dark:text-gray-200 font-medium">
                    <span className="material-symbols-outlined text-primary">verified</span>
                    Quality Management System (QMS) Review
                  </li>
                  <li className="flex items-center gap-3 text-[#111418] dark:text-gray-200 font-medium">
                    <span className="material-symbols-outlined text-primary">verified</span>
                    Financial & Operational Risk Assessment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white dark:bg-[#1a222c] py-16 lg:py-24">
          <div className="px-4 md:px-10 lg:px-40 flex justify-center">
            <div className="max-w-[1000px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="flex flex-col gap-6 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Phase 03
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#111418] dark:text-white leading-tight">Negotiation Prototyping</h2>
                <p className="text-[#617589] dark:text-gray-300 text-lg leading-relaxed">
                  We go beyond price to secure value. From prototyping early samples to finalizing contract terms, we structure agreements that foster innovation, protect IP, and ensure favorable long-term economics.
                </p>
                <ul className="flex flex-col gap-3 mt-2">
                  <li className="flex items-center gap-3 text-[#111418] dark:text-gray-200 font-medium">
                    <span className="material-symbols-outlined text-primary">trending_up</span>
                    Cost Structure Analysis
                  </li>
                  <li className="flex items-center gap-3 text-[#111418] dark:text-gray-200 font-medium">
                    <span className="material-symbols-outlined text-primary">trending_up</span>
                    First Article Inspection (FAI)
                  </li>
                  <li className="flex items-center gap-3 text-[#111418] dark:text-gray-200 font-medium">
                    <span className="material-symbols-outlined text-primary">trending_up</span>
                    Contract & Terms Finalization
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 group">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-all duration-500 z-10"></div>
                <img className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjk_NR3H8H5DZ_6r8w5jodV9wjsFdpTjTEtVCd6spdlmMeZbiPKZKkn1yBTRWZfIdYi9Ul33iMEh1zaF1t1PgCMnJrngeM0b62SWZqnA1FblhycE1zO_5UrKsTTDB2X0ZiiBFvSClubLieq8Y5biScej57fvj_LX0bFOlRxYoAjNcxkQHlE-XswMZpL4JC2TmcZYeaLNtrVO-G44BV3dSsFgqtbP5LnJg41XfF2FWdkxXgRKsBdMqNufEk0c6lkglRAm0iE-bQ90M" alt="Business professionals shaking hands over a sleek conference table" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-background-light dark:bg-background-dark py-16">
        <div className="px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="max-w-[960px] w-full flex flex-col gap-10">
            <div className="flex flex-col gap-4 text-center items-center">
              <h2 className="text-[#111418] dark:text-white text-3xl font-bold leading-tight md:text-4xl max-w-[720px]">
                Why Choose Hexuno Technologies?
              </h2>
              <p className="text-[#617589] dark:text-gray-400 text-base font-normal leading-normal max-w-[720px]">
                We deliver end-to-end value by optimizing every step of the procurement process, backed by engineering expertise.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-4 rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a222c] p-6 hover:shadow-lg transition-shadow">
                <div className="text-primary">
                  <span className="material-symbols-outlined text-[32px]">trending_down</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111418] dark:text-white text-lg font-bold">Cost Reduction</h3>
                  <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed">Achieve significant savings through strategic negotiation and volume consolidation across our network.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a222c] p-6 hover:shadow-lg transition-shadow">
                <div className="text-primary">
                  <span className="material-symbols-outlined text-[32px]">shield</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111418] dark:text-white text-lg font-bold">Risk Mitigation</h3>
                  <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed">Ensure compliance and stability with rigorous supplier audits, financial checks, and backup strategies.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a222c] p-6 hover:shadow-lg transition-shadow">
                <div className="text-primary">
                  <span className="material-symbols-outlined text-[32px]">bolt</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111418] dark:text-white text-lg font-bold">Speed to Market</h3>
                  <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed">Accelerate your product launch with our pre-vetted global supplier network and rapid prototyping.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-primary py-16">
        <div className="px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="max-w-[960px] w-full flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="flex flex-col gap-3">
              <h2 className="text-white text-3xl font-bold leading-tight">Ready to Optimize Your Sourcing?</h2>
              <p className="text-blue-100 text-lg max-w-[500px]">Get a complimentary analysis of your current supply chain and discover hidden value.</p>
            </div>
            <button onClick={() => navigate('/contact')} className="shrink-0 flex items-center justify-center rounded-lg h-14 px-8 bg-white text-primary text-base font-bold leading-normal tracking-wide hover:bg-gray-50 transition-colors shadow-lg">
              Request Consultation
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Sourcing;
