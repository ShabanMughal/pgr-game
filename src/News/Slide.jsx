import { useState, useEffect } from "react";

export default function Slide({
  children: slides,
  autoSlide = true,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="relative">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides}
        </div>
      </div>
      <div className="absolute top-[105%] left-[45%] lg:left-[63%]">
        <div className="flex items-center justify-center gap-5">
          {slides.map((_, i) => (
            <div key={i}
              className={`
              transition-all w-2 h-2 bg-white 
              ${curr === i ? "p-1 border-redwhite-600 border-2 bg-red-600" : "bg-opacity-50"}
            `}
            />
          ))
          }
        </div>
      </div>
    </div>
  );
}
