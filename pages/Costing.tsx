
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./css/costing.css";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isMobile;
};



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
      title: "Know what a product should cost — before you negotiate what it will cost"
    },
    {
      image: "https://images.unsplash.com/photo-1581091215367-59ab6b1f3c9c",
      title: "First-principles costing built from material, process, and manufacturing reality."
    },
    {
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
      title: "Transparent, fact-based cost structures that replace assumptions with data."
    },
    {
      image: "https://images.unsplash.com/photo-1581091215367-59ab6b1f3c9c",
      title: "Engineering-driven cost models that reflect how parts are actually made"
    },
    {
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
      title: "Turn supplier quotes into structured, negotiation-ready cost intelligence"
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
                    Cost Modeling & Estimation
                  </h1>
                  <h2 className="text-slate-300 text-lg font-normal leading-relaxed drop-shadow-md">
                    Should-Costing defines what a product should cost by breaking it down into material, process, and overhead—based on facts, not supplier quotes.
                  </h2>
                </div>

                <div className="flex  gap-4 mt-2 justify-center lg:justify-start">
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


const WhyweChooseCarousel: React.FC = () => {

  const qualityPoints = [
    {
      title: "Engineering-Driven Cost Logic",
      desc: "Our models are built from how products are actually designed and manufactured, ensuring realistic and defensible cost outputs."
    },
    {
      title: "Bottom-Up, Fact-Based Models",
      desc: "We rely on material physics, process data, cycle times, and market inputs—not supplier quotes or assumptions."
    },
    {
      title: "Transparent & Auditable Outputs",
      desc: "Every cost element is clearly structured and traceable, enabling internal validation, supplier discussions, and leadership confidence."
    },
    {
      title: "Practical Manufacturing Insight",
      desc: "Our experience across sheet metal, plastics, casting, machining, and assemblies ensures the models reflect shop-floor realities."
    },
    {
      title: "Strong Link to VAVE & Sourcing",
      desc: "Our cost models directly support VAVE initiatives, target costing, and negotiation strategies, turning insight into action."
    },
    {
      title: "Region-Aware Cost Intelligence",
      desc: "We factor in regional manufacturing economics, labor rates, and supply chain conditions, enabling accurate global comparisons."
    }
  ];

  // duplicate for infinite loop
  const loopData = [...qualityPoints, ...qualityPoints];
  const isMobile = useIsMobile();

  return (
    <div className="w-full bg-gradient-to-br from-[#003366] via-[#004080] to-[#001a33] py-10 relative overflow-hidden">

      {/* Background */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}
      ></div>

      <div className="w-full px-6 relative z-10">

        <h2 className="text-white text-3xl md:text-3xl font-bold text-center mb-12">
          Why Choose Us for Cost Modeling & Estimation
        </h2>

        {/* Continuous Scroll */}
        <div className="overflow-hidden">

          {isMobile ? (

            // MOBILE VIEW 
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
              pagination={{ clickable: true }}
            >
              {loopData.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                    <h3 className="text-white text-lg font-semibold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-blue-100 text-sm">{item.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          ) : (
            // DESKTOP VIEW 

            <motion.div
              className="flex gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 20,
                repeat: Infinity
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {[...loopData, ...loopData].map((item, i) => (
                <div
                  key={i}
                  className="min-w-[280px] md:min-w-[350px] bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20"
                >
                  <h3 className="text-white text-lg font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-blue-100 text-sm">{item.desc}</p>
                </div>
              ))}
            </motion.div>

          )}

        </div>

      </div>
    </div>
  );
};


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

      <BannerCarousel />


      {/* Methodology Section */}
      <section className="bg-gray-50 py-8 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Our Process
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">


            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                Cost Modeling & Estimation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Cost Modeling & Estimation creates a transparent, fact-based breakdown of product cost by analyzing materials, manufacturing processes, labor, overheads, and supply chain factors.
              </p>
              <p className="text-gray-600 mt-4">
                It enables informed decisions in design, sourcing, and supplier negotiations.
              </p>
            </div>


            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                Our Cost Modeling & Estimation Approach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We follow a structured, bottom-up approach to build <b>transparent and defensible cost models</b> based on how a product should be manufactured—not on supplier quotations.
              </p>
            </div>

          </div>

        </div>
      </section>


      <section className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-semibold text-gray-700 mb-10">
            Optimizing Manufacturing Costs
          </h2>

          <svg viewBox="0 0 1200 320" className="w-full h-auto">

            <text x="350" y="40" font-size="14" fill="#555" text-anchor="middle">
              Determine the most appropriate route
            </text>
            <text x="600" y="40" font-size="14" fill="#555" text-anchor="middle">
              Use realistic assumptions and data
            </text>
            <text x="850" y="40" font-size="14" fill="#555" text-anchor="middle">
              Factor in regional manufacturing
            </text>

            <line x1="100" y1="80" x2="1100" y2="80"
              stroke="#888" stroke-dasharray="5,5" />

            <polygon points="300,80 290,75 290,85" fill="#888" />
            <polygon points="550,80 540,75 540,85" fill="#888" />
            <polygon points="800,80 790,75 790,85" fill="#888" />


            <polygon points="120,120 200,100 280,120 280,200 200,220 120,200"
              fill="#4F83E3" />
            <text x="200" y="155" fill="white" font-size="12" text-anchor="middle">
              High Manufacturing
            </text>
            <text x="200" y="170" fill="white" font-size="12" text-anchor="middle">
              Costs
            </text>

            <polygon points="320,120 400,100 480,120 480,200 400,220 320,200"
              fill="#2F66D0" />
            <text x="400" y="150" fill="white" font-size="12" text-anchor="middle">
              Define Manufacturing
            </text>
            <text x="400" y="170" fill="white" font-size="12" text-anchor="middle">
              Route
            </text>

            <polygon points="520,120 600,100 680,120 680,200 600,220 520,200"
              fill="#4F83E3" />
            <text x="600" y="160" fill="white" font-size="12" text-anchor="middle">
              Model Costs
            </text>

            <polygon points="720,120 800,100 880,120 880,200 800,220 720,200"
              fill="#9BB8E8" />
            <text x="800" y="150" fill="white" font-size="12" text-anchor="middle">
              Consider Regional
            </text>
            <text x="800" y="170" fill="white" font-size="12" text-anchor="middle">
              Conditions
            </text>

            <polygon points="920,120 1000,100 1080,120 1080,200 1000,220 920,200"
              fill="#2F66D0" />
            <text x="1000" y="150" fill="white" font-size="12" text-anchor="middle">
              Optimized Manufacturing
            </text>
            <text x="1000" y="170" fill="white" font-size="12" text-anchor="middle">
              Costs
            </text>

            <line x1="100" y1="240" x2="1100" y2="240"
              stroke="#888" stroke-dasharray="5,5" />

            <polygon points="300,240 290,235 290,245" fill="#888" />
            <polygon points="550,240 540,235 540,245" fill="#888" />
            <polygon points="800,240 790,235 790,245" fill="#888" />

            <text x="170" y="280" font-size="14" fill="#666" text-anchor="middle">
              Unrealistic cost assumptions
            </text>

            <text x="970" y="280" font-size="14" fill="#666" text-anchor="middle">
              Realistic cost assumptions are made
            </text>

          </svg>

        </div>
      </section>

      <section className="bg-white dark:bg-background-dark py-10">
        <div className="max-w-7xl mx-auto flex flex-col justify-center px-6 lg:px-20">
          <h2 className="text-3xl font-semibold text-gray-700 mb-10 ">
            Our Cost Modeling & Estimation Offerings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group flex flex-col justify-between bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-[#dbe0e6] dark:border-gray-700 shadow-soft hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <h4 className="text-2xl font-bold text-[#111418] dark:text-white mb-3 group-hover:text-primary transition-colors">Part-Level Should-Cost Models</h4>
              <p className="text-[#617589] dark:text-gray-300 mb-6 leading-relaxed">
                We build detailed, bottom-up should-cost models at part level, covering material, manufacturing processes, labor, overheads, scrap, margins, and region-specific assumptions.              </p>
              <div className="">
                <div className="flex flex-wrap gap-2 mb-6">
                  <h2 className="text-2l font-bold text-[#111418] dark:text-white mb-3  transition-colors">Value we deliver :</h2>

                </div>
                <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Clear visibility into true part-level cost structures</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Fact-based cost benchmarks independent of supplier quotes</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Strong foundation for sourcing, VAVE, and cost-reduction programs</li>
                </ul>
              </div>
            </div>

            <div className="group flex flex-col justify-between bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-[#dbe0e6] dark:border-gray-700 shadow-soft hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <h4 className="text-2xl font-bold text-[#111418] dark:text-white mb-3 group-hover:text-primary transition-colors">Supplier Quote Validation & Gap Analysis</h4>
              <p className="text-[#617589] dark:text-gray-300 mb-6 leading-relaxed">
                We compare supplier quotations against should-cost models to identify cost gaps and explain variances across material, process, and overhead drivers.              </p>
              <div className="">
                <div className="flex flex-wrap gap-2 mb-6">
                  <h2 className="text-2l font-bold text-[#111418] dark:text-white mb-3 transition-colors">Value we deliver :</h2>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Identification of overpricing and hidden cost buffers</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Transparent, data-backed inputs for negotiations</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Improved commercial outcomes without quality or supply risk</li>
                </ul>
              </div>
            </div>

            <div className="group flex flex-col justify-between bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-[#dbe0e6] dark:border-gray-700 shadow-soft hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <h4 className="text-2xl font-bold text-[#111418] dark:text-white mb-3 group-hover:text-primary transition-colors">Parametric & Early-Design Costing</h4>
              <p className="text-[#617589] dark:text-gray-300 mb-6 leading-relaxed">
                We provide rapid cost estimates in early design stages using key parameters such as weight, size, complexity, and production volume, enabling scenario-based cost evaluation.              </p>
              <div className="">
                <div className="flex flex-wrap gap-2 mb-6">
                  <h2 className="text-2l font-bold text-[#111418] dark:text-white mb-3 transition-colors">Value we deliver :</h2>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Early cost visibility before design freeze</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Faster decision-making during concept and RFQ phases</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Reduced risk of late-stage cost surprises</li>
                </ul>
              </div>
            </div>

            <div className="group flex flex-col justify-between bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-[#dbe0e6] dark:border-gray-700 shadow-soft hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <h4 className="text-2xl font-bold text-[#111418] dark:text-white mb-3 group-hover:text-primary transition-colors">Design-to-Cost (DTC) Support</h4>
              <p className="text-[#617589] dark:text-gray-300 mb-6 leading-relaxed">
                We assess the cost impact of design choices by analyzing geometry, tolerances, materials, and manufacturing feasibility to support cost-aware design decisions.              </p>
              <div className="">
                <div className="flex flex-wrap gap-2 mb-6">
                  <h2 className="text-2l font-bold text-[#111418] dark:text-white mb-3 transition-colors">Value we deliver :</h2>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-[#617589] dark:text-gray-400">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Optimized balance between performance and cost</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Improved manufacturability and supplier acceptance</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Direct linkage between engineering decisions and cost impact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyweChooseCarousel />

      <div className="bg-gradient-to-r from-blue-50 to-white py-5 px-6 md:px-24 text-center rounded-2xl shadow-sm">
        <h2 className="text-3xl md:text-3xl font-semibold text-gray-900 mb-6">
          Our Commitment
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Cost clarity that enables smarter design, stronger negotiations, and sustainable value creation.
        </p>
      </div>

    </div>
  );
};

export default Costing;
