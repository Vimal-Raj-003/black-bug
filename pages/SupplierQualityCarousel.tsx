import { motion } from "motion/react";

const qualityPoints = [
  {
    title: "Prevention-First Quality Approach",
    desc: "We focus on stopping defects at the source, not detecting them at the end."
  },
  {
    title: "Strong Supplier Capability Validation",
    desc: "We assess real process capability and readiness before supplier approval."
  },
  {
    title: "Faster Launch with APQP / PPAP Support",
    desc: "We help suppliers achieve smoother onboarding and quicker production readiness."
  },
  {
    title: "Structured Problem Solving (RCA / 8D)",
    desc: "We ensure issues are permanently fixed with strong corrective and preventive actions."
  },
  {
    title: "Continuous Supplier Performance Improvement",
    desc: "We track scorecards and drive ongoing improvements for stable long-term quality."
  }
];

// duplicate for infinite loop
const loopData = [...qualityPoints, ...qualityPoints];

export default function SupplierQualityCarousel() {
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

        <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-12">
          Why Choose Us for Supplier Quality
        </h2>

        {/* Continuous Scroll */}
        <div className="overflow-hidden">

          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity
            }}
          >
            {loopData.map((item, i) => (
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

        </div>

      </div>
    </div>
  );
}