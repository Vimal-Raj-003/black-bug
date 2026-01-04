import React from 'react';
import { useNavigate } from 'react-router-dom';

const OtherOfferings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full font-display bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center min-h-[600px] w-full bg-slate-900 p-4 sm:p-10 overflow-hidden">
        {/* Dynamic Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-50">
            <source src="https://cdn.pixabay.com/video/2023/10/20/185834-876616428_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950/90"></div>
        </div>

        <div className="relative z-10 flex max-w-[800px] flex-col gap-6 text-center text-white">
            <span className="text-blue-100 font-bold tracking-widest uppercase text-sm drop-shadow-md">Beyond Engineering</span>
            <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl md:text-6xl drop-shadow-2xl">
                Shaping Tomorrow, Today
            </h1>
            <h2 className="text-blue-50 text-xl font-normal leading-relaxed sm:text-2xl max-w-[700px] mx-auto drop-shadow-lg">
                Igniting transformation with visionary solutions in AI, Automation, and Sustainability.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <button onClick={() => navigate('/contact')} className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/20">
                    <span className="truncate">Begin Your Journey</span>
                </button>
            </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="relative flex items-center justify-center min-h-[70vh] w-full bg-cover bg-center bg-no-repeat p-8 md:p-16 text-white" style={{backgroundImage: 'linear-gradient(rgba(17, 115, 212, 0.7) 0%, rgba(16, 25, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA57v-F6yWaagJPlpt9FSSp7gExJ1fsyym6YKx1ssngB1WGIJrQaxedPzJZaDUFHAXIKip0IRQkz93KFVjqx4UHTh_0fl4IeDfUPO03_OxnOmAFc-JcPH0ZoAeUjPjvoo-pxAoEYseI1hocrChieXKtnPzKEQaKh_YMa8VDS0dBwgbdabdvROe9OnmktetoUIqtF37Cf9u_RgtrLJFhJ-WLUk_4K88godCMPOj3MDyW1a8KoGZFK3mHMpn0P1x5ibbVERkbKjAnqUo")'}}>
            <div className="relative z-10 max-w-[800px] text-center flex flex-col gap-4">
                <span className="material-symbols-outlined text-6xl text-blue-300 mb-4">psychology</span>
                <h3 className="text-4xl font-black leading-tight tracking-[-0.02em]">Cognitive Leaps with Gen AI</h3>
                <p className="text-xl leading-relaxed text-blue-100">
                    Harnessing custom LLMs for predictive foresight, automated intelligence, and groundbreaking decisions across your enterprise.
                </p>
                <button onClick={() => navigate('/contact')} className="group flex items-center justify-center gap-2 text-primary font-bold mt-6 w-fit mx-auto h-12 px-6 bg-white rounded-lg hover:bg-blue-50 transition-colors">
                    Discover AI Insights
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 text-sm">arrow_forward</span>
                </button>
            </div>
        </div>

        <div className="relative flex items-center justify-center min-h-[70vh] w-full bg-cover bg-center bg-no-repeat p-8 md:p-16 text-white" style={{backgroundImage: 'linear-gradient(rgba(16, 25, 34, 0.8) 0%, rgba(17, 115, 212, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCR9BNXahko0kgo_sWNlE8mu5bA8ftSo-rFbydElz-6lLILcZXYV8osXOHcmfQkksKcAYoVcyqdfFMDSxuHubNJXCiCL9ObZsWEZkTa7MuD1OP3E2wZUhExPn312TavoqAdZdRyLreJ8k3rNSTWz2X3TchKw4DKsavEXROBpyiOipmuR9ZtQpIx3Pb9uxlQFDeCDzANKK3UNqEYRp6NHG1MfFSLYUS5tm4mk4O2cpGm_Ilr8Yu5INIGojIbX-hshvjiLzIvImXeyqs")'}}>
            <div className="relative z-10 max-w-[800px] text-center flex flex-col gap-4">
                <span className="material-symbols-outlined text-6xl text-blue-300 mb-4">precision_manufacturing</span>
                <h3 className="text-4xl font-black leading-tight tracking-[-0.02em]">Orchestrating Efficiency with Automation</h3>
                <p className="text-xl leading-relaxed text-blue-100">
                    Streamline complex operations into fluid, error-free workflows, liberating your teams to innovate.
                </p>
                <button onClick={() => navigate('/contact')} className="group flex items-center justify-center gap-2 text-primary font-bold mt-6 w-fit mx-auto h-12 px-6 bg-white rounded-lg hover:bg-blue-50 transition-colors">
                    Automate Your Future
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 text-sm">arrow_forward</span>
                </button>
            </div>
        </div>

        <div className="relative flex items-center justify-center min-h-[70vh] w-full bg-cover bg-center bg-no-repeat p-8 md:p-16 text-white" style={{backgroundImage: 'linear-gradient(rgba(17, 115, 212, 0.7) 0%, rgba(16, 25, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAeDw3LVbGjSBN0licspCVR_DYR0r8P7C46MZOh9BCnFByguvfCozcY4ubc7IT9eA9ngQN6GbJRqCpe5Kg10ytrHDtrp8AlQVs65n7gDyuiv-CttOgGdKb9tktsF8tTmFwlqMaNdm43LFagIXWLc_xcSqhbAdylBJI5g-XsdwSNE_fPLl8Ttrj44TQJdk2lrhkKIfhRC0rH88I0FfS7r9JtxDtCriK20p4vH-VlY60Xq2KmF01_2nb0_ZIiewdftK9AFaJ8hsF6e24")'}}>
            <div className="relative z-10 max-w-[800px] text-center flex flex-col gap-4">
                <span className="material-symbols-outlined text-6xl text-green-300 mb-4">eco</span>
                <h3 className="text-4xl font-black leading-tight tracking-[-0.02em]">Green Horizons: Engineering Sustainability</h3>
                <p className="text-xl leading-relaxed text-blue-100">
                    Pioneering Green Engineering to forge a resilient, responsible, and circular future for your operations.
                </p>
                <button onClick={() => navigate('/contact')} className="group flex items-center justify-center gap-2 text-primary font-bold mt-6 w-fit mx-auto h-12 px-6 bg-white rounded-lg hover:bg-blue-50 transition-colors">
                    Explore Green Tech
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 text-sm">arrow_forward</span>
                </button>
            </div>
        </div>

        <div className="relative flex items-center justify-center min-h-[70vh] w-full bg-cover bg-center bg-no-repeat p-8 md:p-16 text-white" style={{backgroundImage: 'linear-gradient(rgba(16, 25, 34, 0.8) 0%, rgba(17, 115, 212, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNOx4ckogxx7kmNGgcuLRqzSZIB5K1Ijqw0VuinWeRvc7KLxNlANR_pJwq1V_qXoF4VmGOjT0KBIiSAflBOlWwvj7YaLEI2v3cslCDkzsSboTmCHuZJiRa0ogb84WxA-X4b7q23uUEu8QJBeQZp2_YiG3Ig68ngens9wmFnUX1d2SA2A0aEEaG6871iq_KZWfBA5MgQ-kPF9f1LR6rwrUt4D-NT1nb81jEBrJSpb6f4tgODa_M1m_3LYgfdt1igNiY7v1EwIoN5A0")'}}>
            <div className="relative z-10 max-w-[800px] text-center flex flex-col gap-4">
                <span className="material-symbols-outlined text-6xl text-blue-300 mb-4">code</span>
                <h3 className="text-4xl font-black leading-tight tracking-[-0.02em]">Crafting Digital Experiences: Web Development</h3>
                <p className="text-xl leading-relaxed text-blue-100">
                    Building robust, intuitive platforms that empower your digital presence and connect you with the world.
                </p>
                <button onClick={() => navigate('/contact')} className="group flex items-center justify-center gap-2 text-primary font-bold mt-6 w-fit mx-auto h-12 px-6 bg-white rounded-lg hover:bg-blue-50 transition-colors">
                    View Digital Portfolio
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 text-sm">arrow_forward</span>
                </button>
            </div>
        </div>

        <div className="relative flex items-center justify-center min-h-[70vh] w-full bg-cover bg-center bg-no-repeat p-8 md:p-16 text-white" style={{backgroundImage: 'linear-gradient(rgba(17, 115, 212, 0.7) 0%, rgba(16, 25, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCry5m6u2r59clW_vWmKubYchN6JHfFV1oCHe7dRAYq7uS5A8hT_ZYTQ9gXkpkrq13idX7QiWdsAK0k4WJJ64kppqKZU6V9pi4aKsbrPVgoL78sPOHuMwp-w7Wz45pA6OWPJj-bN8xvb9rDGaaTwnYoANsvNGr4qMWuKzIOsnIG8rzp0VQoTJcZOp3xTfZE6s6GcXfrrA4rGdnDyhISMu8U_VQkyZ0XOjdB5mja3sZDxXj3fWM3E5JwHsM3sNSoD5Z_j0LcinApAko")'}}>
            <div className="relative z-10 max-w-[800px] text-center flex flex-col gap-4">
                <span className="material-symbols-outlined text-6xl text-indigo-300 mb-4">analytics</span>
                <h3 className="text-4xl font-black leading-tight tracking-[-0.02em]">Unlocking Intelligence: Data Analysis</h3>
                <p className="text-xl leading-relaxed text-blue-100">
                    Transforming raw data into actionable insights, revealing hidden opportunities and driving smart growth.
                </p>
                <button onClick={() => navigate('/contact')} className="group flex items-center justify-center gap-2 text-primary font-bold mt-6 w-fit mx-auto h-12 px-6 bg-white rounded-lg hover:bg-blue-50 transition-colors">
                    Explore Data Solutions
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 text-sm">arrow_forward</span>
                </button>
            </div>
        </div>

        <div className="flex flex-col items-center gap-6 py-16 px-4 bg-background-light dark:bg-background-dark">
            <h2 className="text-[#111418] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] text-center">Our Technological Foundation</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg text-center mb-8">Building the future with cutting-edge tools and platforms.</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-3xl">cloud</span>
                    <span className="font-bold text-lg">AWS</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-3xl">data_object</span>
                    <span className="font-bold text-lg">Python</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-3xl">html</span>
                    <span className="font-bold text-lg">React</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-3xl">smart_toy</span>
                    <span className="font-bold text-lg">TensorFlow</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-3xl">dataset</span>
                    <span className="font-bold text-lg">Tableau</span>
                </div>
            </div>
        </div>

        <div className="w-full bg-primary py-16 px-4">
            <div className="max-w-[960px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-white">
                <div className="flex flex-col gap-2 max-w-lg text-center md:text-left">
                    <h2 className="text-3xl font-bold">Ready to redefine your future?</h2>
                    <p className="text-blue-100">Connect with our experts to craft bespoke solutions that drive innovation and competitive advantage.</p>
                </div>
                <button onClick={() => navigate('/contact')} className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white text-primary text-base font-bold leading-normal hover:bg-blue-50 transition-colors shadow-xl">
                    Schedule a Discovery Call
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OtherOfferings;