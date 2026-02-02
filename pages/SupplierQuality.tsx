
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SupplierQuality: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden antialiased">
      {/* Hero Section */}
      <div className="relative w-full bg-surface-light dark:bg-surface-dark border-b border-[#f0f2f4] dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-20">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1 flex flex-col gap-6 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 w-fit">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-xs font-bold text-primary dark:text-blue-300 uppercase tracking-wide">Proactive Quality Management</span>
              </div>
              <h1 className="text-[#111418] dark:text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                Your <span className="text-primary">Supplier Quality</span> Diagnostic Hub
              </h1>
              <p className="text-[#617589] dark:text-gray-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
                Are you facing supply chain disruptions, product defects, or compliance challenges? Identify your pain points and discover tailored solutions to elevate your supplier performance.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => navigate('/contact')}
                  className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-blue-700 text-white text-base font-bold transition-all shadow-lg shadow-blue-500/20"
                >
                  Start a Diagnostic
                </button>
                <button 
                  onClick={() => {
                    const el = document.getElementById('solutions');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center justify-center rounded-lg h-12 px-8 bg-white dark:bg-surface-dark border border-[#dbe0e6] dark:border-gray-700 hover:border-primary text-[#111418] dark:text-white text-base font-bold transition-all"
                >
                  Explore Solutions
                </button>
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 mix-blend-multiply"></div>
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBujNWflp7yY7tii8_cp_F_0t-pzaO6HJsB6vJsYDKaSMKck1A2cDFLutcSDoLzTz8fAPJjhyAycD-qWO5qhjIRDodZg-keoYLpYBxTOx7QDdI82qMKzf0PecTNTGrdGK_c0uPn-UlX1XnMzG5UF5tV9oDomL8aRX_DsBdmYTZ1OSz64Vw_8hxh3gnVlkrX0Qms01WXbnG2sFzdpbiv5lOQbpK1akea0BgeaEsxCJOu4tQm_zhLopedgaqOQc-9ahbPNDvQFwgOxpU")' }}
                ></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg z-20 flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">gpp_good</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase">Certified Excellence</p>
                    <p className="text-sm font-medium text-[#111418] dark:text-white">ISO 9001 & IATF 16949 Compliant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-b border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-1">
              <h3 className="text-3xl font-bold text-[#111418] dark:text-white">0</h3>
              <p className="text-sm text-[#617589] dark:text-gray-400 font-medium">Defects Goal</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-3xl font-bold text-[#111418] dark:text-white">200+</h3>
              <p className="text-sm text-[#617589] dark:text-gray-400 font-medium">Audits Conducted</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-3xl font-bold text-[#111418] dark:text-white">Global</h3>
              <p className="text-sm text-[#617589] dark:text-gray-400 font-medium">Supplier Network</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-3xl font-bold text-[#111418] dark:text-white">100%</h3>
              <p className="text-sm text-[#617589] dark:text-gray-400 font-medium">Traceability</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div id="solutions" className="w-full py-16 md:py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col gap-16">
          <div className="flex flex-col gap-4 max-w-3xl text-center mx-auto">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Facing a Supplier Quality Challenge?</h2>
            <h3 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-bold leading-tight">Identify Your Pain Point, Find Your Solution</h3>
            <p className="text-[#617589] dark:text-gray-300 text-lg">
              Hexuno Technologies offers targeted expertise to address your most critical supplier quality issues, from design to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* NPD Support Card */}
            <div className="group flex flex-col bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-[#dbe0e6] dark:border-gray-700 shadow-soft hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <div className="mb-4 text-primary text-xl font-bold">"Are product launches consistently delayed by quality issues?"</div>
              <div className="mb-6 w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[32px]">design_services</span>
              </div>
              <h4 className="text-2xl font-bold text-[#111418] dark:text-white mb-3 group-hover:text-primary transition-colors">New Product Development (NPD) Support</h4>
              <p className="text-[#617589] dark:text-gray-300 mb-6 leading-relaxed">
                **Solution:** Ensure robust quality planning from day one. We bridge the gap between engineering and manufacturing to launch products right the first time, preventing costly rework and delays.
              </p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-bold text-[#111418] dark:text-gray-200">APQP</span>
                  <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-bold text-[#111418] dark:text-gray-200">PPAP</span>
                  <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-bold text-[#111418] dark:text-gray-200">FMEA</span>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Process capability validation</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Control plan development</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Design feasibility review</li>
                </ul>
                <button onClick={() => navigate('/contact')} className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary hover:bg-blue-700 text-white text-sm font-bold w-full mt-4">
                  Optimize Your NPD
                </button>
              </div>
            </div>

            {/* Quality Assurance Card */}
            <div className="group flex flex-col bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-[#dbe0e6] dark:border-gray-700 shadow-soft hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <div className="mb-4 text-primary text-xl font-bold">"Are non-conforming parts reaching your assembly line?"</div>
              <div className="mb-6 w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[32px]">rule</span>
              </div>
              <h4 className="text-2xl font-bold text-[#111418] dark:text-white mb-3 group-hover:text-primary transition-colors">In-house Quality Assurance</h4>
              <p className="text-[#617589] dark:text-gray-300 mb-6 leading-relaxed">
                **Solution:** Act as your quality firewall. Our dedicated teams perform rigorous inspections to stop non-conforming parts before they reach your assembly line, saving you from costly recalls and customer dissatisfaction.
              </p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-bold text-[#111418] dark:text-gray-200">Incoming Inspection</span>
                  <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-bold text-[#111418] dark:text-gray-200">Final QA</span>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Lot acceptance sampling</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Non-conformance management</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Visual & dimensional checks</li>
                </ul>
                <button onClick={() => navigate('/contact')} className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary hover:bg-blue-700 text-white text-sm font-bold w-full mt-4">
                  Strengthen QA
                </button>
              </div>
            </div>

            {/* Audits Card */}
            <div className="group flex flex-col bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-[#dbe0e6] dark:border-gray-700 shadow-soft hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <div className="mb-4 text-primary text-xl font-bold">"Is your supplier network truly compliant and reliable?"</div>
              <div className="mb-6 w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[32px]">fact_check</span>
              </div>
              <h4 className="text-2xl font-bold text-[#111418] dark:text-white mb-3 group-hover:text-primary transition-colors">Audits & Assessment (Internal & Lead)</h4>
              <p className="text-[#617589] dark:text-gray-300 mb-6 leading-relaxed">
                **Solution:** We validate supplier capability and compliance through systematic auditing. Whether for new supplier selection or routine surveillance, our certified auditors ensure your supply chain meets international standards and mitigate risks.
              </p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-bold text-[#111418] dark:text-gray-200">VDA 6.3</span>
                  <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-bold text-[#111418] dark:text-gray-200">ISO 9001</span>
                  <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-bold text-[#111418] dark:text-gray-200">IATF 16949</span>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Process and System Audits</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Supplier Risk Assessment</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Corrective Action Verification</li>
                </ul>
                <button onClick={() => navigate('/contact')} className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary hover:bg-blue-700 text-white text-sm font-bold w-full mt-4">
                  Schedule an Audit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Standards Section */}
      <div className="w-full bg-surface-light dark:bg-surface-dark py-12 border-t border-[#f0f2f4] dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <h3 className="text-center text-[#111418] dark:text-white text-xl font-bold mb-10">Adhering to Global Quality Standards</h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-80">
            <div className="flex items-center gap-2 text-[#617589] dark:text-gray-400 font-bold text-xl">
              <span className="material-symbols-outlined">verified</span> ISO 9001
            </div>
            <div className="flex items-center gap-2 text-[#617589] dark:text-gray-400 font-bold text-xl">
              <span className="material-symbols-outlined">workspace_premium</span> IATF 16949
            </div>
            <div className="flex items-center gap-2 text-[#617589] dark:text-gray-400 font-bold text-xl">
              <span className="material-symbols-outlined">checklist_rtl</span> VDA 6.3
            </div>
            <div className="flex items-center gap-2 text-[#617589] dark:text-gray-400 font-bold text-xl">
              <span className="material-symbols-outlined">bar_chart</span> Six Sigma
            </div>
            <div className="flex items-center gap-2 text-[#617589] dark:text-gray-400 font-bold text-xl">
              <span className="material-symbols-outlined">groups</span> AIAG
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-primary py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-6">Elevate your supplier performance today</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Don't let quality issues disrupt your supply chain. Our experts are ready to audit, assess, and improve your supplier network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contact')} className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-8 py-3 rounded-lg shadow-lg transition-colors">
              Get Quality Assessment
            </button>
            <button onClick={() => navigate('/contact')} className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-3 rounded-lg transition-colors">
              Contact Quality Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierQuality;
