
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SupplierQualityCarousel from "./SupplierQualityCarousel";
import "./css/supplierquality.css";
import { useState, useEffect } from "react";




const BannerCarousel: React.FC = () => {


  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [transitionClass, setTransitionClass] = useState('opacity-100');
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBujNWflp7yY7tii8_cp_F_0t-pzaO6HJsB6vJsYDKaSMKck1A2cDFLutcSDoLzTz8fAPJjhyAycD-qWO5qhjIRDodZg-keoYLpYBxTOx7QDdI82qMKzf0PecTNTGrdGK_c0uPn-UlX1XnMzG5UF5tV9oDomL8aRX_DsBdmYTZ1OSz64Vw_8hxh3gnVlkrX0Qms01WXbnG2sFzdpbiv5lOQbpK1akea0BgeaEsxCJOu4tQm_zhLopedgaqOQc-9ahbPNDvQFwgOxpU",
      title: "Quality isn’t inspected in — it’s built in."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBujNWflp7yY7tii8_cp_F_0t-pzaO6HJsB6vJsYDKaSMKck1A2cDFLutcSDoLzTz8fAPJjhyAycD-qWO5qhjIRDodZg-keoYLpYBxTOx7QDdI82qMKzf0PecTNTGrdGK_c0uPn-UlX1XnMzG5UF5tV9oDomL8aRX_DsBdmYTZ1OSz64Vw_8hxh3gnVlkrX0Qms01WXbnG2sFzdpbiv5lOQbpK1akea0BgeaEsxCJOu4tQm_zhLopedgaqOQc-9ahbPNDvQFwgOxpU",
      title: "Strong suppliers build strong brands."
    },
    {
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
      title: "Quality is the cheapest investment, and the costliest mistake to ignore."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBujNWflp7yY7tii8_cp_F_0t-pzaO6HJsB6vJsYDKaSMKck1A2cDFLutcSDoLzTz8fAPJjhyAycD-qWO5qhjIRDodZg-keoYLpYBxTOx7QDdI82qMKzf0PecTNTGrdGK_c0uPn-UlX1XnMzG5UF5tV9oDomL8aRX_DsBdmYTZ1OSz64Vw_8hxh3gnVlkrX0Qms01WXbnG2sFzdpbiv5lOQbpK1akea0BgeaEsxCJOu4tQm_zhLopedgaqOQc-9ahbPNDvQFwgOxpU",
      title: "Consistent quality creates consistent customers."
    },
    {
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      title: "We don’t just manage quality — we protect your reputation."
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 sec

    return () => clearInterval(interval);
  }, [slides.length]);



  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // swipe left → next
      setCurrent((prev) => (prev + 1) % slides.length);
    }

    if (touchStart - touchEnd < -50) {
      // swipe right → prev
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  const handleClick = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };



  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);



  return (
    <div className="relative w-full bg-slate-900 overflow-hidden">
      {/* Dynamic Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
      </div>

      <div className="px-4 md:px-10 flex flex-1 justify-center py-5 relative z-10">
        <div className="flex flex-col max-w-[1200px] flex-1">
          <div className="@container">
            <div className="flex flex-col gap-6 py-1 lg:flex-row items-center">
              <div className="flex flex-col gap-6 lg:justify-center flex-1">
                <div className="flex flex-col gap-4 text-left">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl drop-shadow-lg">
                    Supplier Quality
                  </h1>
                  <h2 className="text-slate-300 text-lg font-normal leading-relaxed drop-shadow-md">
                    Supplier Quality is our commitment to ensure every supplier delivers consistent quality, reliable performance, and zero disruption to your production.
                  </h2>
                </div>

              </div>

              <div
                className="w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden shadow-2xl relative group mt-8 lg:mt-0 border border-white/10"
                onClick={handleClick}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
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


const SupplierQuality: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden antialiased">
      {/* Hero Section */}
      <BannerCarousel />

      {/* Stats Bar */}
      <div className="border-b border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-surface-dark" style={{ display: "none" }}>
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
      <div id="solutions" className="w-full py-8 md:py-10 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col gap-16">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm">
                Our Methodology
              </h2>
              <h3 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-bold mt-2">
                Product Development & Supplier Quality Process
              </h3>
              <p className="text-[#617589] dark:text-gray-300 mt-4">
                We follow a structured supplier quality methodology to ensure consistent quality, reduced defects, and stable supplier performance from onboarding to mass production.
              </p>
            </div>

            {/* FLOW */}
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">

              {/* Dotted Line */}
              <div className="hidden md:block absolute left-0 w-full border-t-2 border-dotted border-gray-400 z-0"
                style={{ top: "24px" }}>

                <div className="flow-dot absolute left-0 top-0 w-3 h-3 bg-blue-500 rounded-full animate-flow-step z-10 -translate-y-1/2"></div>

              </div>
              {/* Step 1 */}
              <div id="step1" className="flex flex-col items-center text-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">1</div>
                <p className="mt-3 font-semibold text-purple-600">Understand Requirements</p>
              </div>

              {/* Step 2 */}
              <div id="step2" className="flex flex-col items-center text-center relative z-10 md:mt-10">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">2</div>
                <p className="mt-3 font-semibold text-blue-600">Supplier Evaluation</p>
              </div>

              {/* Step 3 */}
              <div id="step3" className="flex flex-col items-center text-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">3</div>
                <p className="mt-3 font-semibold text-cyan-600">Process Validation</p>
              </div>

              {/* Step 4 */}
              <div id="step4" className="flex flex-col items-center text-center relative z-10 md:mt-10">
                <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">4</div>
                <p className="mt-3 font-semibold text-green-600">APQP / PPAP & Launch Readiness</p>
              </div>

              {/* Step 5 */}
              <div id="step5" className="flex flex-col items-center text-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">5</div>
                <p className="mt-3 font-semibold text-orange-600">Issue Control & Corrective Actions</p>
              </div>

              {/* Step 6 */}
              <div id="step6" className="flex flex-col items-center text-center relative z-10 md:mt-10">
                <div className="w-12 h-12 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">6</div>
                <p className="mt-3 font-semibold text-yellow-500">Performance Monitoring & Improvement</p>
              </div>

            </div>

            {/* Bottom Text */}
            <p className="text-center text-[#617589] dark:text-gray-400 max-w-3xl mx-auto">
              We work through a simple flow: understand requirements, evaluate suppliers, validate processes, support launch readiness, resolve quality issues, and continuously improve supplier performance.
            </p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* NPD Support Card */}
            <div className="group flex flex-col justify-between bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-[#dbe0e6] dark:border-gray-700 shadow-soft hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <h4 className="text-2xl font-bold text-[#111418] dark:text-white mb-3 group-hover:text-primary transition-colors">Supplier Qualification & Approval</h4>
              <p className="text-[#617589] dark:text-gray-300 mb-6 leading-relaxed">
                We evaluate suppliers before onboarding to ensure they can meet your quality, process, and compliance requirements. This includes capability review, quality system readiness, and risk evaluation.
              </p>
              <div className="">
                <div className="flex flex-wrap gap-2 mb-6">
                  <h2 className="text-2l font-bold text-[#111418] dark:text-white mb-3  transition-colors">Value we deliver :</h2>

                </div>
                <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Right supplier selection</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Reduced onboarding risk</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Fewer future quality failures</li>
                </ul>
              </div>
            </div>

            {/* Quality Assurance Card */}
            <div className="group flex flex-col justify-between bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-[#dbe0e6] dark:border-gray-700 shadow-soft hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <h4 className="text-2xl font-bold text-[#111418] dark:text-white mb-3 group-hover:text-primary transition-colors">Supplier Audits & Gap Closure</h4>
              <p className="text-[#617589] dark:text-gray-300 mb-6 leading-relaxed">
                We conduct structured supplier audits to identify gaps in process control, quality systems, and compliance. We also track closure actions to ensure improvements are implemented on time.
              </p>
              <div className="">
                <div className="flex flex-wrap gap-2 mb-6">
                  <h2 className="text-2l font-bold text-[#111418] dark:text-white mb-3 transition-colors">Value we deliver :</h2>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Stronger supplier systems</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Improved compliance</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Reduced repeat issues</li>
                </ul>
              </div>
            </div>

            {/* Audits Card */}
            <div className="group flex flex-col justify-between bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-[#dbe0e6] dark:border-gray-700 shadow-soft hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <h4 className="text-2xl font-bold text-[#111418] dark:text-white mb-3 group-hover:text-primary transition-colors">APQP / PPAP Support</h4>
              <p className="text-[#617589] dark:text-gray-300 mb-6 leading-relaxed">
                We support suppliers in preparing and validating APQP/PPAP requirements for smooth production launch. This ensures all documents and validations are aligned with customer expectations.
              </p>
              <div className="">
                <div className="flex flex-wrap gap-2 mb-6">
                  <h2 className="text-2l font-bold text-[#111418] dark:text-white mb-3 transition-colors">Value we deliver :</h2>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Faster approvals</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Smooth ramp-up</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Reduced launch delays and rejections</li>
                </ul>
              </div>
            </div>

            <div className="group flex flex-col justify-between bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-[#dbe0e6] dark:border-gray-700 shadow-soft hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <h4 className="text-2xl font-bold text-[#111418] dark:text-white mb-3 group-hover:text-primary transition-colors">Control Plan & Inspection Strategy</h4>
              <p className="text-[#617589] dark:text-gray-300 mb-6 leading-relaxed">
                We define CTQs, inspection checkpoints, sampling plans, and acceptance criteria based on risk and criticality. This helps prevent defects from reaching your production line.
              </p>
              <div className="">
                <div className="flex flex-wrap gap-2 mb-6">
                  <h2 className="text-2l font-bold text-[#111418] dark:text-white mb-3 transition-colors">Value we deliver :</h2>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Better defect control</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Improved incoming quality</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Reduced production disruptions</li>
                </ul>
              </div>
            </div>

            <div className="group flex flex-col justify-between bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-[#dbe0e6] dark:border-gray-700 shadow-soft hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <h4 className="text-2xl font-bold text-[#111418] dark:text-white mb-3 group-hover:text-primary transition-colors">Supplier Issue Management (RCA / 8D)</h4>
              <p className="text-[#617589] dark:text-gray-300 mb-6 leading-relaxed">
                We manage supplier quality issues using structured root cause analysis and 8D methodology. We ensure corrective and preventive actions are implemented and verified for effectiveness.
              </p>
              <div className="">
                <div className="flex flex-wrap gap-2 mb-6">
                  <h2 className="text-2l font-bold text-[#111418] dark:text-white mb-3 transition-colors">Value we deliver :</h2>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Faster issue closure</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Reduced repeat defects</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Improved supplier accountability</li>
                </ul>
              </div>
            </div>


            <div className="group flex flex-col justify-between bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-[#dbe0e6] dark:border-gray-700 shadow-soft hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <h4 className="text-2xl font-bold text-[#111418] dark:text-white mb-3 group-hover:text-primary transition-colors">Supplier Performance Monitoring</h4>
              <p className="text-[#617589] dark:text-gray-300 mb-6 leading-relaxed">
                We track supplier performance using scorecards for quality, delivery, responsiveness, and improvement actions. This helps maintain consistent performance and clear supplier accountability.
              </p>
              <div className="">
                <div className="flex flex-wrap gap-2 mb-6">
                  <h2 className="text-2l font-bold text-[#111418] dark:text-white mb-3 transition-colors">Value we deliver :</h2>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Predictable supplier performance</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Improved reliability</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Stronger supplier governance</li>
                </ul>
              </div>
            </div>

            <div className="group flex flex-col justify-between bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-[#dbe0e6] dark:border-gray-700 shadow-soft hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <h4 className="text-2xl font-bold text-[#111418] dark:text-white mb-3 group-hover:text-primary transition-colors">Supplier Development & Continuous Improvement</h4>
              <p className="text-[#617589] dark:text-gray-300 mb-6 leading-relaxed">
                We work with suppliers to improve process stability, yield, and quality maturity through continuous improvement initiatives. This ensures long-term improvements instead of temporary fixes.
              </p>
              <div className="">
                <div className="flex flex-wrap gap-2 mb-6">
                  <h2 className="text-2l font-bold text-[#111418] dark:text-white mb-3 transition-colors">Value we deliver :</h2>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Sustained quality improvement</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Long-term cost savings</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Stronger supplier partnerships</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Global Standards Section */}
      <div className="w-full bg-surface-light dark:bg-surface-dark py-12 border-t border-[#f0f2f4] dark:border-gray-800" style={{ display: "none" }}>
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
      <div className="w-full py-5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-9xl mx-auto px-4 text-center relative z-10">
          <SupplierQualityCarousel />
        </div>
      </div>
    </div>


  );
};

export default SupplierQuality;
