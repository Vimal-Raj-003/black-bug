import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Understand the Function",
    points: [
      "Focus on function over form",
      "Remove design bias",
      "Improve efficiency"
    ],
    color: "from-blue-800 to-blue-900",
    height: "h-58"
  },
  {
    id: 2,
    title: "Establish Cost Transparency",
    points: [
      "Material & process cost",
      "Manufacturing methods"
    ],
    color: "from-cyan-500 to-cyan-700",
    height: "h-62"
  },
  {
    id: 3,
    title: "Identify Value Opportunities",
    points: [
      "Over-designed features",
      "High-cost elements",
      "Simplification scope"
    ],
    color: "from-blue-800 to-blue-900",
    height: "h-68"
  },
  {
    id: 4,
    title: "Generate Better Alternatives",
    points: [
      "Design simplification",
      "Material optimization",
      "Process changes"
    ],
    color: "from-cyan-500 to-cyan-700",
    height: "h-76"
  },
  {
    id: 5,
    title: "Validate and Implement",
    points: [
      "Engineering analysis",
      "Supplier trials",
      "Cost models"
    ],
    color: "from-blue-800 to-blue-900",
    height: "h-84"
  },
  {
    id: 6,
    title: "Deliver Measurable Value",
    points: [
      "Optimized cost",
      "Improved performance",
      "Scalable savings"
    ],
    color: "from-cyan-500 to-cyan-700",
    height: "h-96"
  }
];

export default function LadderSteps() {
  return (
    <div className="w-full overflow-x-auto py-12 bg-gray-100">
      <div className="flex items-end gap-3  px-6">

        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2
            }}
            viewport={{ once: true }}

            className={`relative w-36 bg-gradient-to-b ${step.color} text-white p-2 rounded-t-xl shadow-md flex flex-col justify-end 
hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300`}
            style={{
              height: `${200 + index * 50}px`
            }}          >

            {/* Floating Number */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-4xl font-bold text-gray-400">
              {step.id}
            </div>

            {/* Content */}
            <div>
              <h3 className="font-bold mb-2 text-xs sm:text-sm md:text-sm">{step.title}</h3>
              <ul className="text-[10px] sm:text-xs md:text-xs space-y-1">
                {step.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </div>

          </motion.div>
        ))}

      </div>
    </div>
  );
}