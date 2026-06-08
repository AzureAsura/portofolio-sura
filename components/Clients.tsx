import { clients } from "./data";

export default function Clients() {
  return (
    <section className="mb-[15px]">
      <h3 className="text-white text-2xl font-bold capitalize mb-[20px]">
        Clients
      </h3>

      <ul
        className={[
          "flex justify-start items-center gap-[25px]",
          "mx-[-15px] p-[25px] overflow-x-auto scroll-smooth overscroll-x-contain",
          "[scroll-snap-type:inline_mandatory] [scroll-padding-inline:25px]",
          "sm:gap-[50px] sm:mx-[-30px] sm:p-[45px] sm:[scroll-padding-inline:45px]",
          "[&::-webkit-scrollbar]:h-[6px]",
          "[&::-webkit-scrollbar-track]:bg-transparent",
          "[&::-webkit-scrollbar-thumb]:bg-white/40",
          "[&::-webkit-scrollbar-thumb]:rounded-full",
          "hover:[&::-webkit-scrollbar-thumb]:bg-white/70",
        ].join(" ")}
      >
         {clients.map(({ src, alt }) => (
          <li
            key={src}
            className="flex-shrink-0 flex justify-center items-center [scroll-snap-align:start]"
          >
            <div className="block h-[65px] sm:h-[100px] w-auto">
              <img
                src={src}
                alt={alt}
                className="w-auto h-full max-w-none object-contain  opacity-70 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </li>
        ))}
        
      </ul>
    </section>
  );
}