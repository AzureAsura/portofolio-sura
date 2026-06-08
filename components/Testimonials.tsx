"use client";

import { testimonials } from "./data";

export default function Testimonials() {
  return (
    <section className="mb-[30px]">
      <h3 className="text-white text-2xl font-bold capitalize mb-[20px] sm:mb-[25px]">
        Testimonials
      </h3>

      <ul
        className={[
          "flex justify-start items-start gap-[15px]",
          "mx-[-15px] px-[15px] pt-[25px] pb-[35px]",
          "overflow-x-auto scroll-smooth overscroll-x-contain [scroll-snap-type:inline_mandatory]",
          "sm:gap-[30px] sm:mx-[-30px] sm:px-[30px] sm:pt-[30px]",
          "lg:[--item-min-width:calc(50%-15px)]",
          "[&::-webkit-scrollbar]:h-[6px]", 
          "[&::-webkit-scrollbar-track]:bg-transparent", 
          "[&::-webkit-scrollbar-thumb]:bg-white/40", 
          "[&::-webkit-scrollbar-thumb]:rounded-full", 
          "hover:[&::-webkit-scrollbar-thumb]:bg-white/70", 
        ].join(" ")}
      >
        {testimonials.map((item) => (
          <li
            key={item.name}
            className="min-w-full [scroll-snap-align:center] lg:min-w-[calc(50%-15px)]"
          >
            <div
              className={[
                "card relative p-[15px] pt-[45px]",
                "rounded-[14px] z-[1]",
                "sm:p-[30px] sm:pt-[25px]",
              ].join(" ")}
            >
              <figure
                className={[
                  "absolute top-0 left-0 translate-x-[15px] -translate-y-[25px]",
                  "card rounded-[14px] [box-shadow:var(--shadow-1)]",
                  "sm:translate-x-[30px] sm:-translate-y-[30px] sm:rounded-[20px] overflow-hidden",
                ].join(" ")}
              >
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-cover"
                />
              </figure>

              <h4
                className={[
                  "text-white text-lg font-semibold capitalize mb-[7px]",
                  "sm:mb-[10px] sm:ml-[95px]",
                ].join(" ")}
              >
                {item.name}
              </h4>

              <div className="text-gray-200 text-sm font-normal leading-relaxed tracking-wide">
                <p>{item.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}