import React from 'react';
import { useNavigate } from 'react-router-dom';

const CaseStudies: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-sans text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <main>
          {/* Hero Section */}
          <section className="relative text-center py-16 md:py-32 bg-slate-900 rounded-b-[40px] overflow-hidden">
            {/* Dynamic Video Background */}
            <div className="absolute inset-0 z-0">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-40">
                <source src="https://cdn.pixabay.com/video/2023/10/20/185834-876616428_large.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/40 to-slate-950"></div>
            </div>

            <div className="relative z-10 px-4">
              <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl font-display">
                Real Results for Manufacturing<br />Leaders
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300 drop-shadow-md">
                Explore how BlackBuck helps innovative companies streamline sourcing and accelerate production with data-backed case studies.
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-2">
                <button className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm transition-all shadow-lg shadow-primary/20">All Industries</button>
                <button className="bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full font-medium text-sm border border-white/20 hover:bg-white/20 transition-all">Automotive</button>
                <button className="bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full font-medium text-sm border border-white/20 hover:bg-white/20 transition-all">Aerospace</button>
                <button className="bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full font-medium text-sm border border-white/20 hover:bg-white/20 transition-all">Medical Devices</button>
                <button className="bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full font-medium text-sm border border-white/20 hover:bg-white/20 transition-all">Consumer Goods</button>
              </div>
            </div>
          </section>

          {/* Featured Case Study */}
          <section className="bg-white dark:bg-gray-800/50 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700/50 mb-16 mt-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img 
                alt="A dark green, cylindrical machined part" 
                className="rounded-lg w-full h-auto object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo1vD9vBeS7FvHcKZQh9vZIZLRyPLQk1d9SYZe98Pr1LYD3aGz01Z9Tfy-TFrpx3oYxLzi8BDCnM2wpl65hR1dwC8WA2qIDXdbgJw6tzc7-VXjywn-4hTByoVRKT_7VKJUJO-uSYkPsSSj1H-cUwuBclKlVgX1j3Pz_DLvmyX5RegtwnbgcaQ0xBt6oJaGDtpOqwjY0_lA5f1WKaZIINkVgFLqWUR-vD671G2x5ZdpDgpWO0v_0Faoty09eLAnjeYgmbVwB-CHvPM"
              />
              <div>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 font-medium space-x-4">
                  <span className="text-primary bg-primary/10 px-2 py-1 rounded font-bold uppercase tracking-wider">AEROSPACE</span>
                  <span>JUNE 12, 2023</span>
                </div>
                <h2 className="text-3xl font-bold mt-4 text-gray-900 dark:text-white font-display">Titan Aerospace Cuts Lead Time by 40%</h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Learn how a leading aerospace manufacturer leveraged BlackBuck's network to source precision-machined turbine components in record time, bypassing traditional supply chain bottlenecks.
                </p>
                <div className="flex items-center space-x-12 mt-8">
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-12 bg-primary rounded-full"></div>
                    <div>
                      <p className="text-3xl font-bold text-gray-900 dark:text-white">40%</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Faster Delivery</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-12 bg-primary rounded-full"></div>
                    <div>
                      <p className="text-3xl font-bold text-gray-900 dark:text-white">$2.4M</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Inventory Savings</p>
                    </div>
                  </div>
                </div>
                <button className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-bold mt-8 hover:bg-secondary transition-all shadow-lg shadow-primary/20">
                  Read Full Story
                  <span className="material-symbols-outlined ml-2 text-xl">arrow_forward</span>
                </button>
              </div>
            </div>
          </section>

          {/* Recent Success Stories Grid */}
          <section className="py-8 md:py-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-display">Recent Success Stories</h2>
              <button className="text-primary font-bold hover:underline">View All Archives</button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700/50 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                <div className="relative">
                  <img alt="A green concept sports car with an abstract chart overlay" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZw0z2Psf3vdlIY-HPtbY68Oe9ZmsMA6c6lbY3NqPV6hoJ7jcQfozEg3PuYxNplSf8F2ty_kYUWBB8TuibBtjYwDNXqWPY0BPD-XUBpSf5Rp3LOSWVTAgtV1xW8tASL3FPjDUxxcevUsC1gqJO3hulLG8J79X4AVzWKnkxYzREWNDx9WeaaS32cFXWfyTmo-pTeIoaRVY5pLhiSiBZPMflpqXezWdc9GGY7jOGkrPeObzDZNxxfQBZZGQzNOFIeQh2VFxn8vMrceg"/>
                  <span className="absolute top-4 left-4 text-xs font-bold bg-gray-900/70 text-white px-3 py-1 rounded-full backdrop-blur-sm">30% Cost Reduction</span>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">AUTOMOTIVE</span>
                    <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 text-xl">verified</span>
                  </div>
                  <h3 className="text-xl font-bold mt-2 text-gray-900 dark:text-white font-display">EV Battery Housing Optimization</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm flex-grow">How we consolidated vendors to deliver precision aluminum parts under tight deadlines for a major EV startup.</p>
                  <button className="inline-flex items-center text-primary font-bold mt-4 text-sm group">
                    Read Case Study
                    <span className="material-symbols-outlined ml-1 text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700/50 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                <div className="relative">
                  <img alt="A white medical device with a screen and buttons" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZKNKBNm4Tzv_u8JDuiEBnxBGjNC0Bk2ctj76nhx8edbs9YD2Eb5j6xwj6XgB6ofd6WtD9Y7168zjzRiElOJvjI6oxbcooF_rlJavX11hziCv-DrQ2W7NPwRGd1-o3VSdy4NbcAIjEvIzTR9cr6ZD_3tMq8X2Ns1DPE7reCdWEUzqiPGi9sdcXlWmTr7VpdlzjSBHFfFIjJBOj0PzDws4HBu8TWuTzcgRVxma7aH2TWpnU0EdOcb07ZKwDPBUo0WRnN5vCQHCZNVs"/>
                  <span className="absolute top-4 left-4 text-xs font-bold bg-gray-900/70 text-white px-3 py-1 rounded-full backdrop-blur-sm">2x Speed to Market</span>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">MEDICAL DEVICES</span>
                    <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 text-xl">verified</span>
                  </div>
                  <h3 className="text-xl font-bold mt-2 text-gray-900 dark:text-white font-display">Rapid Prototyping for Surgical Robotics</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm flex-grow">Accelerating the iteration cycle for a Class III medical device using our on-demand CNC network.</p>
                  <button className="inline-flex items-center text-primary font-bold mt-4 text-sm group">
                    Read Case Study
                    <span className="material-symbols-outlined ml-1 text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700/50 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                <div className="relative">
                  <img alt="A white smart home electronic device on a table" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaXURrSdxnGzMx7Zkr79eEflqy4xCiCERpUuMKEUNsl0Ew-8Rjm3fBBOEgHMjAx0JRunSxFnxrIIV3fH5djdWYdfU2WT2wjG3jvh4eh5UarAZkbIhbtMgRklMLw9KJrqJ954LqbQyi5miH1tvKmC44rgt2UeC5pLDZy1Ap2nsSoBk8OoTINVP44LS8hCTCzILFWQ1UX2aWcqMPVsPfLIHhY1VlD8JNCozRhcLXfd8IoSjM5ARaZMgsdeu0sb80lLUo-ixCxSsVjVY"/>
                  <span className="absolute top-4 left-4 text-xs font-bold bg-gray-900/70 text-white px-3 py-1 rounded-full backdrop-blur-sm">Zero Defects</span>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">CONSUMER ELECTRONICS</span>
                    <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 text-xl">verified</span>
                  </div>
                  <h3 className="text-xl font-bold mt-2 text-gray-900 dark:text-white font-display">Scaling IoT Enclosure Production</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm flex-grow">Achieving Six Sigma quality standards for a smart home device launch with 100k+ unit volume.</p>
                  <button className="inline-flex items-center text-primary font-bold mt-4 text-sm group">
                    Read Case Study
                    <span className="material-symbols-outlined ml-1 text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </button>
                </div>
              </div>

            </div>
          </section>
        </main>
      </div>

      {/* Testimonial Section */}
      <div className="bg-gray-900 dark:bg-gray-800/50 py-16 md:py-24 mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <svg className="mx-auto h-12 w-12 text-primary" fill="currentColor" viewBox="0 0 448 512">
            <path d="M96 224C84.72 224 75.54 228.1 68.61 235.1C61.68 242.1 57.53 251.3 57.53 262.5C57.53 285.1 66.23 305.1 83.64 323.8C101.1 342.5 121.1 351.1 143.6 351.1C164.8 351.1 183.3 342.4 199.2 324.9C215.1 307.4 223.1 287.5 223.1 265C223.1 254.1 219.7 244.6 212.8 236.6C205.9 228.6 197.3 224.6 187.2 224.6H175.1C165.5 224.6 157.3 228.2 150.5 235.4C143.7 242.6 139.7 251.2 139.7 261.3C139.7 278.4 146.1 292.5 158.9 303.8C147.2 312.4 133.4 317 117.3 317C107.5 317 99.41 313.9 92.93 307.8C86.46 301.7 83.22 293.7 83.22 283.8C83.22 273.1 86.84 264.4 94.07 257.6C101.3 250.8 109.9 247.4 119.8 247.4H129.2V224.5C129.2 224.2 129.2 224 129.2 224H96zM320 224C308.7 224 299.5 228.1 292.6 235.1C285.7 242.1 281.5 251.3 281.5 262.5C281.5 285.1 290.2 305.1 307.6 323.8C325.1 342.5 345.1 351.1 367.6 351.1C388.8 351.1 407.3 342.4 423.2 324.9C439.1 307.4 447.1 287.5 447.1 265C447.1 254.1 443.7 244.6 436.8 236.6C429.9 228.6 421.3 224.6 411.2 224.6H399.1C389.5 224.6 381.3 228.2 374.5 235.4C367.7 242.6 363.7 251.2 363.7 261.3C363.7 278.4 370.1 292.5 382.9 303.8C371.2 312.4 357.4 317 341.3 317C331.5 317 323.4 313.9 316.9 307.8C310.5 301.7 307.2 293.7 307.2 283.8C307.2 273.1 310.8 264.4 318.1 257.6C325.3 250.8 333.9 247.4 343.8 247.4H353.2V224.5C353.2 224.2 353.2 224 353.2 224H320z"></path>
          </svg>
          <blockquote className="mt-8 text-3xl font-bold text-white font-display">
            "BlackBuck didn't just manufacture our parts; they re-engineered our entire procurement process. We're now moving faster than we ever thought possible."
          </blockquote>
          <div className="mt-8 flex items-center justify-center space-x-4">
            <img alt="Headshot of David Chen" className="h-14 w-14 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdN9GAeNY1zLXiSSKDaR4I_LhdL4uBWUg9tl-cynQLNQpArnQ7IbyzEH4gQXNGqVb7GoZypoIhUGNWaToYM0YJO_tdwbI-TjLscDW8vxjbqdNe7o2vIIZ7tkbDbun9mlJBPr6EdiMhhm7YDL0nn0eDqUSkk-lpMDjdqSXTc_VzGXrwXLt3Pq2J_ADzcpUJwD_dkocZY_pvPkYbQu1U2rksA1t9dP1eAjy1-j40Cxd7xfp67vaCu4Le2jMEiO1GDC2q3EXrplrmCu8"/>
            <div className="text-left">
              <p className="font-bold text-white">David Chen</p>
              <p className="text-gray-400">VP of Operations, Kinetic Motors</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white dark:bg-background-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background-light dark:bg-gray-800/50 p-12 rounded-2xl text-center border border-gray-200 dark:border-gray-700/50">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white font-display">Ready to Write Your Success Story?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">Join hundreds of manufacturing leaders who trust BlackBuck to deliver quality parts on time.</p>
            <div className="mt-8 flex justify-center items-center space-x-4">
              <button onClick={() => navigate('/contact')} className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-secondary transition-all shadow-lg shadow-primary/20">Start Your Project</button>
              <button onClick={() => navigate('/contact')} className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-8 py-3 rounded-lg font-bold border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">Contact Sales</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;