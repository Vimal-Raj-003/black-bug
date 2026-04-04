
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import StepFlowChart from "./StepFlowChart"
import { useState, useEffect } from "react";

const BannerCarousel: React.FC = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [transitionClass, setTransitionClass] = useState('opacity-100');
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
      title: "Engineering Value Beyond Cost Reduction"
    },
    {
      image: "https://images.unsplash.com/photo-1581091215367-59ab6b1f3c9c",
      title: "Where Function, Cost, and Performance Align"
    },
    {
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
      title: "Optimizing Value Without Compromising Performance"
    },
    {
      image: "https://images.unsplash.com/photo-1581091215367-59ab6b1f3c9c",
      title: "Smarter Designs. Transparent Costs. Real Value"
    },
    {
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
      title: "Because Cost Reduction Should Never Reduce Value"
    }
  ];

  const goToSlide = (index: number) => {
    setTransitionClass('opacity-0');
    setTimeout(() => {
      setCurrentSlide(index);
      setTransitionClass('opacity-100');
    }, 300);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
    setIsAutoplay(false);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
    setIsAutoplay(false);
  };

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoplay) return;

    const timer = setInterval(() => {
      setTransitionClass('opacity-0');
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTransitionClass('opacity-100');
      }, 300);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, [isAutoplay]);

  // Resume autoplay after 10 seconds of inactivity
  useEffect(() => {
    if (isAutoplay) return;

    const timer = setTimeout(() => {
      setIsAutoplay(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [isAutoplay]);

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full bg-slate-900 overflow-hidden">
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
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl drop-shadow-lg">
                    Cost Optimization & Value Engineering
                  </h1>
                  <h2 className="text-slate-300 text-lg font-normal leading-relaxed drop-shadow-md">
                    VAVE improves product value by delivering the required function at the lowest total cost, without compromising quality or performance.
                  </h2>
                </div>

              </div>

              <div className="w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden shadow-2xl relative group mt-8 lg:mt-0 border border-white/10">

                {/* DARK OVERLAY (IMPORTANT) */}
                <div className="absolute inset-0 bg-black/50 z-10"></div>

                {/* IMAGES */}
                {slides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide.image}
                    alt="banner"
                    className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                      }`}
                  />
                ))}

                {/* TEXT CONTENT */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">

                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2 drop-shadow-lg">
                    {slides[current].title}
                  </h3>

                </div>

                {/* DOT NAVIGATION */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`w-2 h-2 rounded-full ${current === index ? "bg-white" : "bg-white/40"
                        }`}
                    />
                  ))}
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


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
              <span className="text-[#111418] dark:text-white text-sm font-bold leading-normal">Cost Optimization & Value Engineering</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <BannerCarousel />


      <div className="w-full px-4 md:px-10 py-12 flex justify-center bg-background-light dark:bg-background-dark">
        <div className="max-w-[1200px] w-full flex flex-col gap-4">
          <div className="text-center max-w-[800px] mx-auto mb-4">
            <h2 className="text-[#111418] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-4">VAVE Offerings</h2>
            <p className="text-[#617589] dark:text-gray-400 text-lg">
              We deliver structured Value Analysis & Value Engineering (VAVE) services that help organizations achieve measurable cost optimization without compromising performance or quality.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 bg-white dark:bg-[#1a2632] p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="w-full lg:w-1/2 rounded-xl overflow-hidden h-[300px] lg:h-auto relative">
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-md z-10 text-xs font-bold uppercase tracking-wider text-[#111418] dark:text-white flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-sm">manage_search</span> Analysis
              </div>
              <div className="w-full h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("./images/benchmarking&teardown.png")' }}>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-6">
              <div>
                <h3 className="text-2xl font-bold text-[#111418] dark:text-white mb-2">Benchmarking & Teardown</h3>
                <p className="text-[#617589] dark:text-gray-300 text-base leading-relaxed">
                  We use structured benchmarking and physical teardown to uncover hidden value opportunities and challenge existing design and cost assumptions.
                </p>
              </div>
              <div className="">
                <div className="flex flex-wrap gap-2 mb-6">
                  <h2 className="text-2l font-bold text-[#111418] dark:text-white mb-3  transition-colors">Value we deliver :</h2>

                </div>
                <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Detailed teardown and functional comparison of competitor products</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Identification of design, material, and process differences</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Cost driver and architecture benchmarking</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Best-practice insights from industry and cross-sector products</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Fact-based inputs for VAVE ideation and decision-making</li>

                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse items-stretch gap-8 lg:gap-12 bg-white dark:bg-[#1a2632] p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="w-full lg:w-1/2 rounded-xl overflow-hidden h-[300px] lg:h-auto relative">
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-md z-10 text-xs font-bold uppercase tracking-wider text-[#111418] dark:text-white flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-sm">precision_manufacturing</span> Engineering
              </div>
              <div className="w-full h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("./images/ValueEngineering.png")' }}>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-6">
              <div>
                <h3 className="text-2xl font-bold text-[#111418] dark:text-white mb-2">Function-Driven Design & Value Engineering</h3>
                <p className="text-[#617589] dark:text-gray-300 text-base leading-relaxed">
                  We analyze product and process functions to eliminate over-design, simplify solutions, and deliver the required performance at optimal cost.                </p>
              </div>
              <div className="">
                <div className="flex flex-wrap gap-2 mb-6">
                  <h2 className="text-2l font-bold text-[#111418] dark:text-white mb-3  transition-colors">Value we deliver :</h2>

                </div>
                <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Clear understanding of product and process functions</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Elimination of over-design and non-value-added features</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Simplified, performance-neutral design solutions</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Improved manufacturability and robustness</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 bg-white dark:bg-[#1a2632] p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="w-full lg:w-1/2 rounded-xl overflow-hidden h-[300px] lg:h-auto relative">
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-md z-10 text-xs font-bold uppercase tracking-wider text-[#111418] dark:text-white flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-sm">trending_down</span> Savings
              </div>
              <div className="w-full h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("./images/Strategic_Cost_Insights.png")' }}>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-6">
              <div>
                <h3 className="text-2xl font-bold text-[#111418] dark:text-white mb-2">Strategic Cost Insights</h3>
                <p className="text-[#617589] dark:text-gray-300 text-base leading-relaxed">
                  Data-driven cost modeling empowers your sourcing teams. We provide "should-cost" models and supplier negotiation support based on real-world market data and manufacturing overheads.
                </p>
              </div>
              <div className="">
                <div className="flex flex-wrap gap-2 mb-6">
                  <h2 className="text-2l font-bold text-[#111418] dark:text-white mb-3  transition-colors">Value we deliver :</h2>

                </div>
                <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Feasibility and risk validation of VAVE ideas</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Support for design changes and supplier alignment</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Controlled implementation without quality or performance impact</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Measurable and sustainable cost savings</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-stretch gap-8 lg:gap-12 bg-white dark:bg-[#1a2632] p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="w-full lg:w-1/2 rounded-xl overflow-hidden h-[300px] lg:h-auto relative">
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-md z-10 text-xs font-bold uppercase tracking-wider text-[#111418] dark:text-white flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-sm">fact_check</span> Validation
              </div>
              <div className="w-full h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("./images/VAVEImplementation_ValueRealization.webp")' }}>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-6">
              <div>
                <h3 className="text-2xl font-bold text-[#111418] dark:text-white mb-2">VAVE Implementation & Value Realization</h3>
                <p className="text-[#617589] dark:text-gray-300 text-base leading-relaxed">
                  We validate, implement, and track VAVE ideas to ensure sustainable, measurable cost savings with controlled technical and business risk.                </p>
              </div>
              <div className="">
                <div className="flex flex-wrap gap-2 mb-6">
                  <h2 className="text-2l font-bold text-[#111418] dark:text-white mb-3  transition-colors">Value we deliver :</h2>

                </div>
                <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Feasibility and risk validation of VAVE ideas</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Support for design changes and supplier alignment</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Controlled implementation without quality or performance impact</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Measurable and sustainable cost savings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white dark:bg-[#1a2632] py-5 border-t border-gray-100 dark:border-gray-800">
        <div className="px-4 md:px-10 flex justify-center">

          <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-[0.4fr_1.6fr] gap-12 items-center">

            {/* LEFT SIDE - TEXT */}
            <div className="flex flex-col  text-center lg:text-left">

              <span className="text-primary font-bold tracking-wider text-sm uppercase">
                Our Process
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-[#111418] dark:text-white leading-tight">
                The VAVE Methodology
              </h2>

              <p className="text-[#617589] dark:text-gray-400 mt-2 max-w-md">
                Deliver the right function, at the right cost, with the right level of risk.
              </p>

            </div>

            {/* RIGHT SIDE - CHART */}
            <div className="w-full overflow-x-auto flex justify-center">
              <StepFlowChart />
            </div>

          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="w-full bg-background-light dark:bg-background-dark py-16">
        <div className="px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="max-w-[960px] w-full flex flex-col gap-10">
            <div className="flex flex-col gap-4 text-center items-center">
              <h2 className="text-[#111418] dark:text-white text-3xl font-bold leading-tight md:text-4xl max-w-[720px]">
                Why Choose Us for VAVE
              </h2>
              <p className="text-[#617589] dark:text-gray-400 text-base font-normal leading-normal max-w-[720px]">
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-4 rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a222c] p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-600">
                  <span className="material-symbols-outlined text-[32px]">engineering</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111418] dark:text-white text-lg font-bold">Engineering-Led, Not Procurement-Driven</h3>
                  <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed">
                    Our VAVE approach starts with function and engineering fundamentals, ensuring cost optimization without compromising performance, quality, or reliability.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a222c] p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-600">
                  <span className="material-symbols-outlined text-[32px]">query_stats</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111418] dark:text-white text-lg font-bold">Fact-Based Cost Transparency</h3>
                  <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed">
                    We use <b>bottom-up should-costing and teardown insights</b> to eliminate guesswork and enable data-driven value decisions</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a222c] p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-600">
                  <span className="material-symbols-outlined text-[32px]">build</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111418] dark:text-white text-lg font-bold">Practical, Implementable Solutions</h3>
                  <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed">
                    We focus on <b>what can actually be manufactured, validated, and implemented</b>—not theoretical ideas.</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a222c] p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-600">
                  <span className="material-symbols-outlined text-[32px]">track_changes</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111418] dark:text-white text-lg font-bold">End-to-End Value Ownership</h3>
                  <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed">
                    From opportunity identification to implementation and savings tracking, we stay accountable for realized value, not just concepts.</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a222c] p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-600">
                  <span className="material-symbols-outlined text-[32px]">manufacturing</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111418] dark:text-white text-lg font-bold">Proven Across Manufacturing Domains</h3>
                  <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed">
                    Our experience spans <b>sheet metal, plastics, casting, machining, and electromechanical assemblies,</b> enabling cross-industry value insights.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-white py-20 px-6 md:px-24 text-center rounded-2xl shadow-sm">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
          Our VAVE Promise
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Real value engineering, delivered responsibly and measurably.
        </p>
      </div>



    </div>
  );
};

export default Vave;
