import { useEffect, useState } from "react";

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

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);

  // Auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // change every 4 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 w-full relative">
      <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Text Content */}
        <div className="absolute inset-0 z-20 flex items-center p-8 md:p-12 text-white">
  <h2 className="text-2xl md:text-4xl font-bold leading-snug max-w-xl">
    {slides[index].title}
  </h2>
           {/* <p className="text-sm md:text-lg max-w-md">
            {slides[index].desc}
          </p> */}
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}