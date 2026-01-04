import React from 'react';
import { useNavigate } from 'react-router-dom';

const Engineering: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <div className="relative w-full bg-slate-900 overflow-hidden">
        {/* Dynamic Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-40">
            <source src="https://cdn.pixabay.com/video/2023/10/20/185834-876616428_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-24 relative z-10">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 w-fit backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-bold text-primary dark:text-blue-300 uppercase tracking-wide">Premium Engineering Solutions</span>
              </div>
              <h1 className="text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                Engineering Excellence <br/><span className="text-primary">From Concept to Reality</span>
              </h1>
              <p className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
                We deliver precision-driven engineering services including 3D modeling, reverse engineering, DFM analysis, and rapid prototyping to accelerate your product development lifecycle.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button onClick={() => navigate('/contact')} className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-secondary text-white text-base font-bold transition-all shadow-lg shadow-blue-500/20">
                  Request Consultation
                </button>
                <button onClick={() => navigate('/case-studies')} className="flex items-center justify-center rounded-lg h-12 px-8 bg-white/10 backdrop-blur-md border border-white/20 hover:border-primary text-white text-base font-bold transition-all">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 group border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBujNWflp7yY7tii8_cp_F_0t-pzaO6HJsB6vJsYDKaSMKck1A2cDFLutcSDoLzTz8fAPJjhyAycD-qWO5qhjIRDodZg-keoYLpYBxTOx7QDdI82qMKzf0PecTNTGrdGK_c0uPn-UlX1XnMzG5UF5tV9oDomL8aRX_DsBdmYTZ1OSz64Vw_8hxh3gnVlkrX0Qms01WXbnG2sFzdpbiv5lOQbpK1akea0BgeaEsxCJOu4tQm_zhLopedgaqOQc-9ahbPNDvQFwgOxpU")'}}>
                </div>
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg z-20 flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">precision_manufacturing</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase">Latest Tech</p>
                    <p className="text-sm font-medium text-[#111418] dark:text-white">Utilizing SIMSCAN & Geomagic Design X</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-y border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-1">
              <h3 className="text-3xl font-bold text-[#111418] dark:text-white">100%</h3>
              <p className="text-sm text-[#617589] dark:text-gray-400 font-medium">DFM Compliance</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-3xl font-bold text-[#111418] dark:text-white">50+</h3>
              <p className="text-sm text-[#617589] dark:text-gray-400 font-medium">Expert Engineers</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-3xl font-bold text-[#111418] dark:text-white">ISO</h3>
              <p className="text-sm text-[#617589] dark:text-gray-400 font-medium">Standard Quality</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-3xl font-bold text-[#111418] dark:text-white">24h</h3>
              <p className="text-sm text-[#617589] dark:text-gray-400 font-medium">Quote Turnaround</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="w-full py-16 md:py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col gap-16">
          <div className="flex flex-col gap-4 max-w-3xl">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Our Expertise</h2>
            <h3 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-bold leading-tight">Comprehensive Engineering Services</h3>
            <p className="text-[#617589] dark:text-gray-300 text-lg">
              We combine advanced software with manufacturing know-how to solve complex engineering challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="group flex flex-col bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-[#dbe0e6] dark:border-gray-700 shadow-soft hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <div className="mb-6 w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[32px]">view_in_ar</span>
              </div>
              <h4 className="text-2xl font-bold text-[#111418] dark:text-white mb-3 group-hover:text-primary transition-colors">3D & 2D Modeling</h4>
              <p className="text-[#617589] dark:text-gray-300 mb-6 leading-relaxed">
                High-fidelity CAD services transforming concepts into production-ready designs. We specialize in parametric modeling and detailed drafting.
              </p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-bold text-[#111418] dark:text-gray-200">CREO</span>
                  <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-bold text-[#111418] dark:text-gray-200">SolidWorks</span>
                  <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-bold text-[#111418] dark:text-gray-200">Drafting</span>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Full parametric 3D CAD design</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Complex assembly management</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Drawing creation per standards</li>
                </ul>
              </div>
            </div>
            <div className="group flex flex-col bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-[#dbe0e6] dark:border-gray-700 shadow-soft hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <div className="mb-6 w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[32px]">qr_code_scanner</span>
              </div>
              <h4 className="text-2xl font-bold text-[#111418] dark:text-white mb-3 group-hover:text-primary transition-colors">Reverse Engineering</h4>
              <p className="text-[#617589] dark:text-gray-300 mb-6 leading-relaxed">
                Accurate reconstruction of physical parts into digital 3D models using state-of-the-art laser scanning technology.
              </p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-bold text-[#111418] dark:text-gray-200">SIMSCAN Laser</span>
                  <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-bold text-[#111418] dark:text-gray-200">Geomagic Design X</span>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>High-precision point cloud data</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Surface reconstruction & analysis</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Deviation reporting & inspection</li>
                </ul>
              </div>
            </div>
            <div className="group flex flex-col bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-[#dbe0e6] dark:border-gray-700 shadow-soft hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <div className="mb-6 w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[32px]">analytics</span>
              </div>
              <h4 className="text-2xl font-bold text-[#111418] dark:text-white mb-3 group-hover:text-primary transition-colors">Design Analysis (DFM & GD&T)</h4>
              <p className="text-[#617589] dark:text-gray-300 mb-6 leading-relaxed">
                Optimizing designs for manufacturability and assembly to reduce costs and ensure quality standards are met.
              </p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-bold text-[#111418] dark:text-gray-200">Tolerance Analysis</span>
                  <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-bold text-[#111418] dark:text-gray-200">VAVE</span>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Tolerance stack-up analysis</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Geometric Dimensioning & Tolerancing</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Cost reduction through VAVE</li>
                </ul>
              </div>
            </div>
            <div className="group flex flex-col bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-[#dbe0e6] dark:border-gray-700 shadow-soft hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <div className="mb-6 w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[32px]">settings_input_component</span>
              </div>
              <h4 className="text-2xl font-bold text-[#111418] dark:text-white mb-3 group-hover:text-primary transition-colors">Jig & Fixture Design</h4>
              <p className="text-[#617589] dark:text-gray-300 mb-6 leading-relaxed">
                Custom tooling solutions to streamline manufacturing processes, improve repeatability, and ensure part quality.
              </p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-bold text-[#111418] dark:text-gray-200">Workholding</span>
                  <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-bold text-[#111418] dark:text-gray-200">Assembly Aids</span>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Welding & machining fixtures</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Inspection gauges (Go/No-Go)</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Ergonomic assembly tools</li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-2 group flex flex-col md:flex-row bg-surface-light dark:bg-surface-dark p-0 rounded-2xl border border-[#dbe0e6] dark:border-gray-700 shadow-soft hover:shadow-xl hover:border-primary/50 transition-all duration-300 overflow-hidden">
              <div className="flex-1 p-8 flex flex-col">
                <div className="mb-6 w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[32px]">print</span>
                </div>
                <h4 className="text-2xl font-bold text-[#111418] dark:text-white mb-3 group-hover:text-primary transition-colors">Prototyping Development</h4>
                <p className="text-[#617589] dark:text-gray-300 mb-6 leading-relaxed">
                  Fast-track your product launch with our comprehensive rapid prototyping services. From initial plastic concepts to functional metal parts, we validate your designs physically.
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-bold text-[#111418] dark:text-gray-200">Metal Printing</span>
                    <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-bold text-[#111418] dark:text-gray-200">Plastic 3D Printing</span>
                    <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-bold text-[#111418] dark:text-gray-200">Casting</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/5 min-h-[300px] bg-cover bg-center relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRrxHWM9iSlQZsLM_tiz9UDBc34cDsSkK_GKU_Ntso-DQIK925rlmV-r5W8QrATn2BjOWvXBJL0bMW5wfMtWXNCAVHH3MvSOeO3oOjTlcpu0lduO2ZR4rAmpnF-aTsd8nUFySRBweRpgtikL2VHRgy7ws1n3ahmVJstbckyosGUjz4Paq1XDDu1rn4skfIw0cDSswdx-9fE7TBr1E8lEl5RqVCGx1rQ_4LiFxd7SSSoXET_Hx-k2n4rKj2JQhvOm0vV5RkGPRv7w4")'}}>
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="w-full bg-surface-light dark:bg-surface-dark py-12 border-t border-[#f0f2f4] dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <h3 className="text-center text-[#111418] dark:text-white text-xl font-bold mb-10">Powered by Industry Leading Technology</h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-80">
            <div className="flex items-center gap-2 text-[#617589] dark:text-gray-400 font-bold text-xl">
              <span className="material-symbols-outlined">deployed_code</span> SolidWorks
            </div>
            <div className="flex items-center gap-2 text-[#617589] dark:text-gray-400 font-bold text-xl">
              <span className="material-symbols-outlined">architecture</span> PTC Creo
            </div>
            <div className="flex items-center gap-2 text-[#617589] dark:text-gray-400 font-bold text-xl">
              <span className="material-symbols-outlined">scanner</span> Geomagic
            </div>
            <div className="flex items-center gap-2 text-[#617589] dark:text-gray-400 font-bold text-xl">
              <span className="material-symbols-outlined">hub</span> SIMSCAN
            </div>
            <div className="flex items-center gap-2 text-[#617589] dark:text-gray-400 font-bold text-xl">
              <span className="material-symbols-outlined">factory</span> AutoDesk
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-primary py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-6">Ready to engineer your next breakthrough?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Our team of experts is ready to assist you with modeling, analysis, and prototyping. Get a quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contact')} className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-8 py-3 rounded-lg shadow-lg transition-colors">
              Start Your Project
            </button>
            <button onClick={() => navigate('/contact')} className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-3 rounded-lg transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engineering;