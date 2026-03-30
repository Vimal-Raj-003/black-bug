
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Target, 
  Lightbulb, 
  Cpu, 
  Settings, 
  BarChart3, 
  Factory, 
  ShieldCheck, 
  Database
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import "./css/whoweare.css";


const WhoWeAre: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="">
    {/* Hero Section */}
    <section className="relative h-[75vh] flex items-center overflow-hidden bg-brand-blue text-white">
      <div className="absolute">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070" 
          alt="Engineering background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-6 has-white-color">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold tracking-widest uppercase mb-6" style={{ display :"none"}}>
            About Us
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Engineering-Led Decision Intelligence for Modern Industry
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed " style={{ display :"none"}}>
            HEXUNO Technologies is an engineering-led consulting and solutions firm where innovation, cost intelligence, and sustainability converge.
          </p>
          <div className="flex flex-wrap gap-4" style={{ display :"none"}}>
            <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-secondary text-white text-base font-bold transition-all shadow-lg shadow-blue-500/20">
             
             
              Learn More <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Intro Section */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-blue">
              Confident, Fact-Based Decisions
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            HEXUNO Technologies is an engineering-led consulting and solutions firm where innovation, cost intelligence, and sustainability converge.
             </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We support manufacturing OEMs, Tier-1 suppliers, and technology-driven organizations in making confident, fact-based decisions across design, sourcing, quality, and growth.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              In today’s industrial landscape, many critical decisions — around cost, manufacturing feasibility, and sourcing — are still driven by assumptions, fragmented data, or late-stage supplier quotes.
            </p>
            <div className="p-6 bg-brand-gray border-l-4 border-brand-blue rounded-r-xl">
              <p className="text-xl font-medium italic text-brand-blue">
                "At HEXUNO, we exist to change that."
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000" className="rounded-2xl h-64 w-full object-cover" referrerPolicy="no-referrer" />
              <div className="bg-brand-blue p-8 rounded-2xl text-white">
                <h3 className="text-4xl font-bold mb-2">15+</h3>
                <p className="text-sm opacity-80 uppercase tracking-wider">Years Experience</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-gray-100 p-8 rounded-2xl" style ={{ display : "none"}}>
                <h3 className="text-4xl font-bold mb-2 text-brand-blue">50+</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Global Clients</p>
              </div>
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000" className="rounded-2xl h-64 w-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="py-12 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100"
          >
            <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center mb-8">
              <Target size={32} />
            </div>
            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To build a future where engineering decisions are confident, data-driven, and manufacturing-aware — enabling humans to solve complex industrial problems faster and better.
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100"
          >
            <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center mb-8">
              <Lightbulb size={32} />
            </div>
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To help engineering, cost, and sourcing teams make accurate and timely decisions by integrating deep manufacturing expertise, intelligent automation, and practical tools across design, cost, sourcing, and supplier quality.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Philosophy */}
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative">
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-12 text-brand-blue">Our Philosophy</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="mt-1 p-2 bg-brand-blue text-white rounded-lg">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-4">We don’t believe technology should replace engineers.</h4>
                  <p className="text-lg text-gray-600">
                    We believe engineers should make better decisions — with the right systems supporting them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Purpose / Intersection */}
    <section className="py-24 bg-brand-dark text-white" style={{ color: "white", background: "darkslategrey" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-7xl mx-auto mb-10">
          <h2 className="text-4xl font-bold mb-6">Our Purpose</h2>
          <p className="text-xl ">
            We bring together deep manufacturing knowledge, data-driven analysis, intelligent automation, and practical execution to help organizations make better decisions across the product lifecycle. 
          </p>
        </div>
         <div className="text-center max-w-3xl mx-auto mb-10">
        <p className="text-xl text-gray-400">
            HEXUNO is an Engineering Decision Intelligence company, working at the intersection of critical industrial domains.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {[
            { icon: <Cpu/>, title: "Engineering", desc: "Design optimization and technical feasibility." },
            { icon: <BarChart3 />, title: "Cost & Value", desc: "Transparent cost structures and value engineering." },
            { icon: <Factory />, title: "Manufacturing", desc: "Manufacturing-aware design and process optimization." },
            { icon: <Settings />, title: "Sourcing & Quality", desc: "Responsible sourcing and supplier quality management." },
            { icon: <Database />, title: "Intelligent Systems", desc: "Data-driven analysis and intelligent automation." },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors text-center"
            >
              <div className="w-12 h-12 mx-auto mb-6 text-brand-blue flex items-center justify-center rounded-xl">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-brand-blue rounded-3xl text-center">
          <p className="text-2xl font-medium max-w-4xl mx-auto leading-relaxed">
            Our work is rooted in real-world engineering, transparent cost structures, and responsible sourcing practices — helping clients build competitive, sustainable, and future-ready products.
          </p>
        </div>
      </div>
    </section>
  </div>
  );
};

export default WhoWeAre;
