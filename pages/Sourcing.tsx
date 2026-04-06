import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';



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
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
      title: "Sourcing is not finding suppliers — it’s finding the right partners"
    },
    {
      image: "https://images.unsplash.com/photo-1581091215367-59ab6b1f3c9c",
      title: "Good sourcing saves money. Smart sourcing saves the business"
    },
    {
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
      title: "The best sourcing decision is the one that delivers quality, cost, and consistency"
    },
    {
      image: "https://images.unsplash.com/photo-1581091215367-59ab6b1f3c9c",
      title: "Strategic sourcing isn’t about buying cheaper — it’s about buying smarter"
    },
    {
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
      title: "Strategic sourcing turns procurement into profit."
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
                    Strategic Sourcing & Supplier Discovery
                  </h1>
                  <h2 className="text-slate-300 text-lg font-normal leading-relaxed drop-shadow-md">
                    A systematic sourcing methodology transforms procurement from a transactional function into a strategic value center. Our proven framework ensures optimal supplier selection, risk mitigation, and maximum value realization across all procurement activities.                   </h2>
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

const Sourcing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white">

      {/* Breadcrumbs */}
      <div className="layout-container flex w-full flex-col bg-white dark:bg-[#1a222c]">
        <div className="px-4 md:px-10 lg:px-40 flex justify-center py-2 border-b border-[#f0f2f4] dark:border-[#2a3441]">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap gap-2 py-2 items-center">
              <Link to="/" className="text-[#617589] dark:text-gray-400 text-sm font-medium leading-normal hover:text-blue-600">Home</Link>
              <span className="text-[#617589] dark:text-gray-400 text-sm font-medium leading-normal">/</span>
              <span className="text-[#617589] dark:text-gray-400 text-sm font-medium leading-normal">Services</span>
              <span className="text-[#617589] dark:text-gray-400 text-sm font-medium leading-normal">/</span>
              <span className="text-[#111418] dark:text-white text-sm font-bold leading-normal">Sourcing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Carousel */}

      {/* Hero Section */}
      <BannerCarousel />


      {/* Process Overview (Timeline) */}
      <div className="w-full bg-background-light dark:bg-background-dark py-12" id="processes">
        <div className="px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="max-w-[960px] w-full flex flex-col gap-10">
            <div className="text-center mb-4">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Our Methodology</span>
              <h2 className="text-[#111418] dark:text-white text-3xl font-bold mt-2">We don’t just find suppliers, we help you build a <b>cost-effective, reliable, and scalable supply base.</b> Our sourcing approach is structured, data-driven, and focused on long-term value.</h2>
            </div>

          </div>
        </div>
      </div>

      <div className="py-8 px-6 md:px-16 bg-white text-center">


        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-10">
          Sourcing process stages from understanding to optimization.
        </h2>


        <div className="flex flex-col md:flex-row items-center justify-center gap-4">

          <div className="hidden md:block w-0 h-0 border-t-[70px] border-b-[70px] border-r-[60px] border-t-transparent border-b-transparent border-r-yellow-400"></div>

          <div className="bg-yellow-400 text-white p-4 w-32 h-20 md:h-28 flex flex-col justify-center items-center rounded-lg">
            <span className="text-sm font-semibold">Requirement</span>
            <span className="text-sm">Understanding</span>
          </div>

<div className="w-1 h-6 bg-gray-300 md:hidden"></div>

          <div className="bg-orange-400 text-white p-4 w-32 h-20 md:h-28 flex flex-col justify-center items-center rounded-lg">
            <span className="text-sm font-semibold">Supply Market</span>
            <span className="text-sm">Mapping</span>
          </div>

<div className="w-1 h-6 bg-gray-300 md:hidden"></div>
          <div className="bg-red-400 text-white p-4 w-32 h-20 md:h-28 flex flex-col justify-center items-center rounded-lg">
            <span className="text-sm font-semibold">Technical</span>
            <span className="text-sm">Evaluation</span>
          </div>
<div className="w-1 h-6 bg-gray-300 md:hidden"></div>

          <div className="bg-pink-400 text-white p-4 w-32 h-20 md:h-28 flex flex-col justify-center items-center rounded-lg">
            <span className="text-sm font-semibold">Cost</span>
            <span className="text-sm">Structuring</span>
          </div>
<div className="w-1 h-6 bg-gray-300 md:hidden"></div>

          <div className="bg-purple-400 text-white p-4 w-32 h-20 md:h-28 flex flex-col justify-center items-center rounded-lg">
            <span className="text-sm font-semibold">Commercial</span>
            <span className="text-sm">Sourcing</span>
          </div>
<div className="w-1 h-6 bg-gray-300 md:hidden"></div>

          <div className="bg-indigo-400 text-white p-4 w-32 h-20 md:h-28 flex flex-col justify-center items-center rounded-lg">
            <span className="text-sm font-semibold">Risk</span>
            <span className="text-sm">Assessment</span>
          </div>
<div className="w-1 h-6 bg-gray-300 md:hidden"></div>

          <div className="bg-blue-400 text-white p-4 w-32 h-20 md:h-28 flex flex-col justify-center items-center rounded-lg">
            <span className="text-sm font-semibold">Supplier</span>
            <span className="text-sm">Selection</span>
          </div>

<div className="w-1 h-6 bg-gray-300 md:hidden"></div>
          <div className="bg-cyan-400 text-white p-4 w-32 h-20 md:h-28 flex flex-col justify-center items-center rounded-lg">
            <span className="text-sm font-semibold">Continuous</span>
            <span className="text-sm">Improvement</span>
          </div>

          <div className="hidden md:block w-0 h-0 border-t-[70px] border-b-[70px] border-l-[60px] border-t-transparent border-b-transparent border-l-cyan-400"></div>

        </div>

      </div>

      {/* Detailed Services Section */}
      <div className="flex flex-col w-full">
        <div className="w-full bg-white dark:bg-[#1a222c] py-4 lg:py-6 border-b border-gray-100 dark:border-gray-800">
          <div className="px-4 md:px-10 lg:px-40 flex justify-center">
            <div className="max-w-[1000px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="flex flex-col gap-6 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-xs">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  Phase 01
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#111418] dark:text-white leading-tight">Supplier Identification & Shortlisting</h2>
                <p className="text-[#617589] dark:text-gray-300 text-lg leading-relaxed">
                  Our AI-enhanced sourcing engine systematically identifies suitable suppliers by analyzing your part requirements, manufacturing processes, and business priorities. It evaluates and compares suppliers across regions, applying smart filters to shortlist only those meeting your defined benchmarks for quality, capability, and scalability.                </p>

                <div className="">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <h2 className="text-2l font-bold text-[#111418] dark:text-white mb-3 transition-colors">Value we deliver :</h2>
                  </div>
                  <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Faster supplier discovery</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Reduced sourcing effort</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Right-fit supplier selection</li>
                  </ul>
                </div>

              </div>
              <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 group">
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/0 transition-all duration-500 z-10"></div>
                <img className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUjc_SszPJrRuYi34MdOjzpR8mFXP-sM6Iz5RTvcmRvrnsMvrXroU2HCEJz1H6R1hVQZaf3gngszHbAKKcjI-5-AXjnh7TTpb9tZgm6zT0mJ5zkONakvZILx2rOL-JRAMDQcHBdwfJ40CF9EQWRRBy5q3OHGX5F3PrqUIu6576d06QNRgS-RFeoTphn8zQWIRyy7A2D3x4HodCx9N_ucwbSn0tpESoOkBZrlcikAq3zaKMozoVzkJBPLyGumloGRTaf2PPD4Tma4E" alt="Digital map highlighting global network connections and data nodes" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-background-light dark:bg-background-dark py-4 lg:py-6 border-b border-gray-100 dark:border-gray-800">
          <div className="px-4 md:px-10 lg:px-40 flex justify-center">
            <div className="max-w-[1000px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 group">
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/0 transition-all duration-500 z-10"></div>
                <img className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_F6YRJza_NNEMwYUDXFoSS4iruC2H4FhdSafPASlpKi-ZojguoEbB4pdLPtK5K-2AII139xJIDQvIlklfzHIE4PfD5fQPgRIeQ8HrZRaLixJKuEohdykruhhLq_uBvV55DiWUrVUQV7v6N5L7YAFSP8PKLEntmfe18jT-JmAF1bZ8H6T9pboEJQc0q1lpYu8YHkr0VbqHiftfFHSq1x37an6dZ1Zv0c3B49tM4Z8UipiCZq4eKB0ogvToeG4e4O3S686CJ9dIAEE" alt="Close up of an engineer inspecting a technical component with a checklist" />
              </div>
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-xs">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  Phase 02
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#111418] dark:text-white leading-tight">RFQ / RFP Management</h2>
                <p className="text-[#617589] dark:text-gray-300 text-lg leading-relaxed">
                  We manage the complete RFQ/RFP process from preparation to supplier communication and quote collection. We ensure all suppliers quote on the same scope to avoid confusion and hidden costs.                </p>
                <div className="">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <h2 className="text-2l font-bold text-[#111418] dark:text-white mb-3 transition-colors">Value we deliver :</h2>
                  </div>
                  <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Faster turnaround</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Clean quote comparison</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Smooth sourcing execution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white dark:bg-[#1a222c] py-4 lg:py-6">
          <div className="px-4 md:px-10 lg:px-40 flex justify-center">
            <div className="max-w-[1000px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="flex flex-col gap-6 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-xs">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  Phase 03
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#111418] dark:text-white leading-tight">Supplier Capability Assessment</h2>
                <p className="text-[#617589] dark:text-gray-300 text-lg leading-relaxed">
                  We assess supplier manufacturing strength beyond pricing by validating process capability, machine capacity, quality systems, and engineering support. This ensures suppliers can consistently meet your technical and delivery expectations.
                </p>
                <div className="">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <h2 className="text-2l font-bold text-[#111418] dark:text-white mb-3 transition-colors">Value we deliver :</h2>
                  </div>
                  <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Reduced supplier risk</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Improved quality reliability</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Stable production readiness</li>
                  </ul>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 group">
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/0 transition-all duration-500 z-10"></div>
                <img className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjk_NR3H8H5DZ_6r8w5jodV9wjsFdpTjTEtVCd6spdlmMeZbiPKZKkn1yBTRWZfIdYi9Ul33iMEh1zaF1t1PgCMnJrngeM0b62SWZqnA1FblhycE1zO_5UrKsTTDB2X0ZiiBFvSClubLieq8Y5biScej57fvj_LX0bFOlRxYoAjNcxkQHlE-XswMZpL4JC2TmcZYeaLNtrVO-G44BV3dSsFgqtbP5LnJg41XfF2FWdkxXgRKsBdMqNufEk0c6lkglRAm0iE-bQ90M" alt="Business professionals shaking hands over a sleek conference table" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-background-light dark:bg-background-dark py-4 lg:py-6 border-b border-gray-100 dark:border-gray-800">
          <div className="px-4 md:px-10 lg:px-40 flex justify-center">
            <div className="max-w-[1000px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 group">
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/0 transition-all duration-500 z-10"></div>
                <img className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700" src="/images/Cost Benchmarking & Should-Cost Analysis.webp" alt="Close up of an engineer inspecting a technical component with a checklist" />
              </div>
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-xs">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  Phase 04
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#111418] dark:text-white leading-tight">Cost Benchmarking & Should-Cost Analysis</h2>
                <p className="text-[#617589] dark:text-gray-300 text-lg leading-relaxed">
                  We break down supplier pricing into material, process, labor, overheads, and yield losses to identify cost gaps. Our should-cost benchmarking helps you understand what a part should realistically cost in different regions. </p>
                <div className="">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <h2 className="text-2l font-bold text-[#111418] dark:text-white mb-3 transition-colors">Value we deliver :</h2>
                  </div>
                  <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Strong negotiation leverage</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Cost transparency</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Measurable cost reduction opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white dark:bg-[#1a222c] py-4 lg:py-6">
          <div className="px-4 md:px-10 lg:px-40 flex justify-center">
            <div className="max-w-[1000px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="flex flex-col gap-6 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-xs">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  Phase 05
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#111418] dark:text-white leading-tight">Commercial Negotiation Support</h2>
                <p className="text-[#617589] dark:text-gray-300 text-lg leading-relaxed">
                  We support commercial negotiations using data-backed benchmarks and structured strategies. We help build cost-down roadmaps, volume leverage plans, and long-term pricing models aligned with business goals.
                </p>
                <div className="">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <h2 className="text-2l font-bold text-[#111418] dark:text-white mb-3 transition-colors">Value we deliver :</h2>
                  </div>
                  <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Better pricing outcomes</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Long-term cost control</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Improved supplier commercial terms.</li>
                  </ul>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 group">
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/0 transition-all duration-500 z-10"></div>
                <img className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700" src="/images/Commercial Negotiation Support.jpg" alt="Business professionals shaking hands over a sleek conference table" />
              </div>
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
                Why Choose Us for Sourcing
              </h2>
              <p className="text-[#617589] dark:text-gray-400 text-base font-normal leading-normal max-w-[720px]">
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-4 rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a222c] p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-600">
                  <span className="material-symbols-outlined text-[32px]">groups</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111418] dark:text-white text-lg font-bold">Right-Fit Supplier Selection</h3>
                  <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed">We shortlist suppliers based on capability, quality, and scalability — not just price.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a222c] p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-600">
                  <span className="material-symbols-outlined text-[32px]">speed</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111418] dark:text-white text-lg font-bold">Faster RFQ to Finalization</h3>
                  <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed">
                    Our structured process reduces delays and speeds up sourcing decisions.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a222c] p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-600">
                  <span className="material-symbols-outlined text-[32px]">monitoring</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111418] dark:text-white text-lg font-bold">Cost Transparency & Benchmarking</h3>
                  <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed">
                    We validate supplier quotes using should-cost and cost breakdown for strong negotiation power.</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a222c] p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-600">
                  <span className="material-symbols-outlined text-[32px]">shield</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111418] dark:text-white text-lg font-bold">Risk-Controlled Sourcing Strategy</h3>
                  <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed">
                    We reduce dependency through alternate sourcing, localization, and continuity planning.</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a222c] p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-600">
                  <span className="material-symbols-outlined text-[32px]">hub</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111418] dark:text-white text-lg font-bold">End-to-End Execution Support</h3>
                  <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed">
                    From supplier discovery to onboarding and launch — we ensure smooth implementation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-white py-5 px-6 md:px-24 text-center rounded-2xl shadow-sm">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
          Our Commitment
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          We source smarter, reduce cost, and build supplier partnerships you can trust.
        </p>
      </div>

    </div>
  );
};

export default Sourcing;
