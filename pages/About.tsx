import React from 'react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

  const scrollToTeam = () => {
    const element = document.getElementById('leadership');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[500px] w-full p-4 bg-slate-900">
        {/* Dynamic Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-40">
            <source src="https://cdn.pixabay.com/video/2023/10/20/185834-876616428_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl text-center">
            <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-lg">
            Building the Future of Sourcing.
            </h1>
            <h2 className="text-slate-100 text-lg md:text-xl font-normal max-w-2xl leading-relaxed drop-shadow-md">
            BlackBuck Technologies combines engineering precision with global sourcing expertise to deliver unparalleled value across the supply chain.
            </h2>
            <div className="flex gap-4 mt-4">
                <button onClick={scrollToTeam} className="flex h-12 px-6 items-center justify-center rounded-lg bg-white text-primary text-base font-bold shadow-lg hover:bg-gray-100 transition-colors">
                    Meet the Team
                </button>
            </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="flex justify-center px-4 py-16 bg-white dark:bg-background-dark">
        <div className="max-w-[800px] text-center flex flex-col gap-6">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Who We Are</span>
            <h3 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">
                More than just a sourcing partner. We are your engineering arm.
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                Founded on the principles of innovation and integrity, BlackBuck Technologies has grown from a small consultancy to a global leader in Value Analysis and Value Engineering (VAVE). We don't just find parts; we optimize designs, streamline costs, and ensure quality from the drawing board to the delivery dock.
            </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="flex justify-center px-4 py-12 bg-slate-50 dark:bg-[#15202b]">
        <div className="flex flex-col max-w-[1080px] w-full gap-10">
            <div className="flex flex-col gap-4 text-center md:text-left">
                <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight">
                    Our Core Principles
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-base max-w-[720px]">
                    Driven by a commitment to efficiency, quality, and transparency in everything we do.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Mission */}
                <div className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-background-dark p-6 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-3xl">target</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-slate-900 dark:text-white text-xl font-bold">Our Mission</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            To revolutionize supply chain efficiency through expert engineering, delivering measurable value to every client we serve.
                        </p>
                    </div>
                </div>
                {/* Vision */}
                <div className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-background-dark p-6 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-3xl">visibility</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-slate-900 dark:text-white text-xl font-bold">Our Vision</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            Becoming the global benchmark for engineering quality, sourcing integrity, and sustainable industrial solutions.
                        </p>
                    </div>
                </div>
                {/* Values */}
                <div className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-background-dark p-6 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-3xl">verified</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-slate-900 dark:text-white text-xl font-bold">Our Values</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            Integrity in every deal, Innovation in every design, and Precision in every deliverable.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership" className="flex justify-center px-4 py-16 bg-white dark:bg-background-dark">
        <div className="flex flex-col max-w-[1080px] w-full gap-12">
            <div className="text-center space-y-2">
                <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold">Meet Our Leadership</h2>
                <p className="text-slate-500 dark:text-slate-400">The experts steering our global operations.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Rajesh */}
                <div className="flex flex-col items-center text-center group">
                    <div className="w-full aspect-square mb-4 overflow-hidden rounded-xl bg-gray-200">
                        <img alt="Rajesh Kumar" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOR1aWag7Flid2TetbhYkQ5EXdz9Qnc2WwLU2SqO2G6e2KrQAa0uuR6XgREXAhImmh8VovmAx58rAFKJwEGcsYjSdmFfDjVg7wLDyGTsq9cbGLZeTJL1w6xw4XipmBJX5sv3i-gtYj9DYWTruBM05n4TUiWNIU-POjzQYCpi0IwOkyXLo-jQcJZ8tG6xiN6uoxIiosPBpJZGgs2DxLmCGH1rRuOmL52EoLZiYc69K2DtLrswuTNb9zPJ842KhSXqiSMaPNaVeD2tw"/>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Rajesh Kumar</h3>
                    <span className="text-primary font-medium text-sm mb-2">Chief Executive Officer</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3">With over 20 years in automotive engineering, Rajesh leads the strategic vision of BlackBuck.</p>
                </div>
                {/* Sarah */}
                <div className="flex flex-col items-center text-center group">
                    <div className="w-full aspect-square mb-4 overflow-hidden rounded-xl bg-gray-200">
                        <img alt="Sarah Jenkins" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG0awdVoq_s8y87txx2o8Aw9ptwGnEqoMlVH3cbyUNWOQbzx01NCRsdSFTVhxnDwjQrPH7ouf4mNECbGoyn-EPMddjgGgUdKcGib7QTeboijClqDu02mm1bQbC0XxO18z2cr0tUG7kbK9NBjsujaMGvnD9KKseVU2b8ZENUOLfaxUB12vFMKexnH5WE22OLZtI2qzfZQisb3cwdenTIwsvLAY_vdyXytap7t2HIDnMsQ7lCYtLKMIXdBKEhxkqfHMW3YfbeCgz84g"/>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Sarah Jenkins</h3>
                    <span className="text-primary font-medium text-sm mb-2">VP of Global Sourcing</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3">Sarah oversees our international supplier network, ensuring quality standards are met globally.</p>
                </div>
                {/* David */}
                <div className="flex flex-col items-center text-center group">
                    <div className="w-full aspect-square mb-4 overflow-hidden rounded-xl bg-gray-200">
                        <img alt="David Chen" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWoKqQfO_QeRCT-RxGuANlk2GNkPc_uqBeLUFNgycmFEafDyHY7xZa-I7BnTB8EbO8Stp4Xv-jH0dCLvp90EL7eyDO9sLgLpoT3cMXX1WfoHhvC7ehhoRhxzUKGT__XlctxHrjEMT2BuQxFOshbefPYLmzIgpL92EswemLabo2LieXkftbcpTch6ALN2N1aM-NcovPYg-0NQzQcTJRom8H8X8wLAF13doFD-j2oWb_AUGg3lErAPNEOsJ8c-8v5VL5-8Uk3wE1bFE"/>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">David Chen</h3>
                    <span className="text-primary font-medium text-sm mb-2">Head of Engineering</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3">David brings deep expertise in VAVE and CAD optimization to drive product improvements.</p>
                </div>
                {/* Anita */}
                <div className="flex flex-col items-center text-center group">
                    <div className="w-full aspect-square mb-4 overflow-hidden rounded-xl bg-gray-200">
                        <img alt="Anita Roy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAhiIou7y_WZu_VXYv_Sbi7AQwuRWvAOuRWmNyOdh3jGaEt34Jt8t1yPqNsQuVyD7aOYFoP1Y5CMQ4lwfy9Azxq1yOcV2m7EhEgrLWR_caSDbmKoBmgPXMcX4pjooIgNsW9mVs0hgnLIlXIcpK9o9PnBqkH1cgH9sJlQ54gecIwApJzZKnkcCTBs5U22M9b2HnUlrl_53vBhKNSMKYDst65udPaGvOfwhKZhGjje3RU9x-7CvsOnlodxruxYQyyx5kBl6rg70BEzk"/>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Anita Roy</h3>
                    <span className="text-primary font-medium text-sm mb-2">Director of Quality</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3">Anita ensures that every component sourced meets rigorous ISO and industry standards.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="flex justify-center px-4 py-16 bg-slate-50 dark:bg-[#15202b]">
        <div className="flex flex-col max-w-[960px] w-full">
            <div className="mb-10 text-center">
                <h2 className="text-slate-900 dark:text-white text-3xl font-bold">Our Journey</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-2">A timeline of growth and innovation.</p>
            </div>
            <div className="grid grid-cols-[40px_1fr] gap-x-6 px-4">
                {/* 2015 */}
                <div className="flex flex-col items-center gap-1 pt-1">
                    <div className="bg-primary/10 text-primary p-2 rounded-full">
                        <span className="material-symbols-outlined text-xl">flag</span>
                    </div>
                    <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-full grow"></div>
                </div>
                <div className="flex flex-1 flex-col py-2 pb-10">
                    <div className="flex items-center gap-3 mb-1">
                        <p className="text-primary text-xl font-bold">2015</p>
                        <div className="h-px bg-slate-200 dark:bg-slate-700 flex-grow"></div>
                    </div>
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-normal">Founded</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-relaxed mt-1">BlackBuck Technologies was established with a small team of 5 engineers focused on local sourcing optimization.</p>
                </div>
                
                {/* 2017 */}
                <div className="flex flex-col items-center gap-1">
                    <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-2"></div>
                    <div className="bg-primary/10 text-primary p-2 rounded-full">
                        <span className="material-symbols-outlined text-xl">handshake</span>
                    </div>
                    <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-full grow"></div>
                </div>
                <div className="flex flex-1 flex-col py-2 pb-10">
                    <div className="flex items-center gap-3 mb-1">
                        <p className="text-primary text-xl font-bold">2017</p>
                        <div className="h-px bg-slate-200 dark:bg-slate-700 flex-grow"></div>
                    </div>
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-normal">First Major Automotive Client</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-relaxed mt-1">Secured a partnership with a Tier-1 automotive supplier, validating our quality assurance processes.</p>
                </div>

                {/* 2019 */}
                <div className="flex flex-col items-center gap-1">
                    <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-2"></div>
                    <div className="bg-primary/10 text-primary p-2 rounded-full">
                        <span className="material-symbols-outlined text-xl">engineering</span>
                    </div>
                    <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-full grow"></div>
                </div>
                <div className="flex flex-1 flex-col py-2 pb-10">
                    <div className="flex items-center gap-3 mb-1">
                        <p className="text-primary text-xl font-bold">2019</p>
                        <div className="h-px bg-slate-200 dark:bg-slate-700 flex-grow"></div>
                    </div>
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-normal">Expansion into VAVE Services</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-relaxed mt-1">Launched our dedicated Value Analysis and Value Engineering division, helping clients save an average of 15% on BOM costs.</p>
                </div>

                {/* 2023 */}
                <div className="flex flex-col items-center gap-1">
                    <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-2"></div>
                    <div className="bg-primary/10 text-primary p-2 rounded-full">
                        <span className="material-symbols-outlined text-xl">public</span>
                    </div>
                </div>
                <div className="flex flex-1 flex-col py-2">
                    <div className="flex items-center gap-3 mb-1">
                        <p className="text-primary text-xl font-bold">2023</p>
                        <div className="h-px bg-slate-200 dark:bg-slate-700 flex-grow"></div>
                    </div>
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-normal">Global Reach</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-relaxed mt-1">Expanded operations to 3 continents, establishing a truly global sourcing and support network.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background-light dark:bg-[#0f172a] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">The BlackBuck Advantage</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4">Why Global Enterprises Choose Us</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">We deliver more than just parts. We deliver a competitive advantage through a unique combination of speed, quality, and engineering intelligence.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center text-primary mb-6">
                        <span className="material-symbols-outlined text-3xl">speed</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Unmatched Speed</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        From quote to delivery, our digital workflows and pre-vetted supplier network reduce lead times by up to 40% compared to traditional sourcing.
                    </p>
                </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                     <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center text-primary mb-6">
                        <span className="material-symbols-outlined text-3xl">engineering</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Engineering DNA</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        We aren't just brokers. Our team consists of qualified mechanical and industrial engineers who ensure DFM compliance and optimal material selection.
                    </p>
                </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                     <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center text-primary mb-6">
                        <span className="material-symbols-outlined text-3xl">verified_user</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Risk-Free Sourcing</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        We take ownership of quality. With our boots-on-the-ground quality engineers and ISO-certified processes, we guarantee zero defects.
                    </p>
                </div>
            </div>
            
             {/* Card 4 */}
            <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                     <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center text-primary mb-6">
                        <span className="material-symbols-outlined text-3xl">savings</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Strategic Cost Savings</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Leverage our aggregated buying power and low-cost country sourcing expertise to realize savings of 15-30% without quality compromise.
                    </p>
                </div>
            </div>

             {/* Card 5 */}
            <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                     <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center text-primary mb-6">
                        <span className="material-symbols-outlined text-3xl">public</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Global Scalability</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Scale from prototype to mass production effortlessly. Our network spans diverse manufacturing technologies and geographies.
                    </p>
                </div>
            </div>

             {/* Card 6 */}
            <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                     <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center text-primary mb-6">
                        <span className="material-symbols-outlined text-3xl">support_agent</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Dedicated Support</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Your project is managed by a dedicated account team available 24/7, providing real-time updates and proactive communication.
                    </p>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Us */}
      <section className="flex justify-center px-4 py-20 bg-white dark:bg-background-dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[1080px] w-full items-center">
            <div>
                <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold mb-6">Why Industry Leaders Trust Us</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
                    We bring a unique blend of engineering DNA and commercial acumen. Our clients don't just get parts; they get optimized solutions.
                </p>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-start">
                        <div className="mt-1 text-primary">
                            <span className="material-symbols-outlined">check_circle</span>
                        </div>
                        <div>
                            <h4 className="text-slate-900 dark:text-white font-bold text-lg">End-to-End Quality Control</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Rigorous inspection at every stage, from raw material to final shipment.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="mt-1 text-primary">
                            <span className="material-symbols-outlined">check_circle</span>
                        </div>
                        <div>
                            <h4 className="text-slate-900 dark:text-white font-bold text-lg">Cost Transparency</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Open book costing models that build trust and long-term partnerships.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="mt-1 text-primary">
                            <span className="material-symbols-outlined">check_circle</span>
                        </div>
                        <div>
                            <h4 className="text-slate-900 dark:text-white font-bold text-lg">Agile Engineering</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Rapid prototyping and design iteration capabilities to speed up time-to-market.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[400px] w-full bg-slate-200 rounded-xl overflow-hidden relative">
                <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_XJ6uzeDAKK3-Za0RiUSt9tPFvQEHDV0-t5ccxyly8qUPB6m4wrSDnV6QFH1wp9WYmq9mbQqiNMaP-VJbKEqRRNuTIEDE1406gtpvC3sLXW5MEr9b3stAEWpl8DD3-n8fZ4n3tkFMxFZoUdAp8V2uGL6MyvcO2SFA50iazVRcWbUALot0XcRb6p4_9zezh_t5lE1pV2vMi2rZ3ugiaTyNwGSDooPK_rtQ4eqoVv8x7XT9hrPN4ekl7eZvJsJUjhcAqT7WNe4VQgw")'}}
                ></div>
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <section className="w-full bg-primary text-white py-16 px-4">
        <div className="max-w-[1080px] mx-auto text-center flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Optimize Your Supply Chain?</h2>
            <p className="text-blue-100 max-w-2xl text-lg">
                Join the hundreds of companies that have streamlined their sourcing and engineering with BlackBuck Technologies.
            </p>
            <div className="flex gap-4 mt-4">
                <button onClick={() => navigate('/contact')} className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition-colors">
                    Contact Us
                </button>
                <button onClick={() => navigate('/sourcing')} className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-colors">
                    View Services
                </button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;