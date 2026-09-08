"use client";

import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={[
        "card border border-jet rounded-[20px] p-[15px] [box-shadow:var(--shadow-1)] z-[1]",
        "mb-[15px] overflow-hidden transition-[max-height] duration-500 ease-in-out",
        isOpen ? "max-h-[405px]" : "max-h-[112px]",
        "sm:w-[520px] sm:mx-auto sm:p-[30px] sm:mb-[30px]",
        isOpen ? "sm:max-h-[584px]" : "sm:max-h-[180px]",
        "md:w-[700px]",
        "lg:w-[950px]",
        "xl:w-auto xl:sticky xl:top-[60px] xl:max-h-none xl:h-full xl:pt-[60px] xl:z-[10]",
      ].join(" ")}
    >
      <div className="relative flex justify-start items-center gap-[15px] sm:gap-[25px] xl:flex-col">
        <figure className="card rounded-[20px] overflow-hidden sm:rounded-[30px]">
          <img src="/foto.jpg" width="80" alt="Made Paramasura" className="sm:w-[120px] xl:w-[150px]" />
        </figure>

        <div className="info-contents">
          <h1
            className="text-white text-xl font-bold tracking-tight mb-[6px] sm:mb-[10px] xl:whitespace-nowrap xl:text-center"
            title="Made Paramasura"
          >
            Made Paramasura
          </h1>
          <p className="text-gray-200 card text-xs font-normal w-max px-[12px] py-[4px] rounded-[8px] sm:px-[18px] sm:py-[6px] xl:mx-auto">
            Fullstack Developer
          </p>
        </div>




        <button
          onClick={() => setIsOpen(!isOpen)}
          className={[
            "absolute -top-[15px] -right-[15px] rounded-tr-[15px] rounded-bl-[15px]",
            "text-xs font-medium text-amber-400 z-[1]",
            "card", 
            "p-[12px] px-[16px] [box-shadow:var(--shadow-2)] transition-all duration-300",
            "hover:bg-gradient-to-br hover:from-amber-400 hover:to-orange-500 hover:text-zinc-950 hover:border-transparent", 
            "focus:outline-none focus:ring-1 focus:ring-amber-400",
            "sm:-top-[30px] sm:-right-[30px] sm:px-[20px]",
            "xl:hidden",
          ].join(" ")}
        >
          <span className="hidden sm:block">Show Contacts</span>
          <i className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"} sm:hidden`} />
        </button>
      </div>

      <div
        className={[
          "transition-all duration-500 ease-in-out",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible",
          "xl:opacity-100 xl:visible",
        ].join(" ")}
      >
        <div className="w-full h-px bg-jet my-[16px] sm:my-[32px]" />

        <ul className="grid grid-cols-1 gap-[16px] sm:gap-[20px] md:grid-cols-2 xl:grid-cols-1">

          <li className="min-w-full flex items-center gap-[16px]">
            <div className="card flex-shrink-0 w-[36px] h-[36px] rounded-[10px] flex justify-center items-center text-sm text-amber-400 sm:w-[48px] sm:h-[48px] sm:rounded-[12px] sm:text-lg">
              <i className="fa-solid fa-envelope" />
            </div>
            <div className="max-w-[calc(100%-52px)] w-[calc(100%-52px)] sm:max-w-[calc(100%-64px)] sm:w-[calc(100%-64px)]">
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-[2px]">Email</p>
              <a
                href="mailto:paramasuraqutay@gmail.com"
                className="text-white text-sm font-normal block overflow-hidden text-ellipsis whitespace-nowrap transition-colors hover:text-amber-400"
              >
                paramasuraqutay@gmail.com
              </a>
            </div>
          </li>

          <li className="min-w-full flex items-center gap-[16px]">
            <div className="card flex-shrink-0 w-[36px] h-[36px] rounded-[10px] flex justify-center items-center text-sm text-amber-400 sm:w-[48px] sm:h-[48px] sm:rounded-[12px] sm:text-lg">
              <i className="fa-solid fa-phone" />
            </div>
            <div className="max-w-[calc(100%-52px)] w-[calc(100%-52px)] sm:max-w-[calc(100%-64px)] sm:w-[calc(100%-64px)]">
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-[2px]">Phone</p>
              <a href="tel:+6287784078923" className="text-white text-sm font-normal transition-colors hover:text-amber-400">
                +62 877-840-789-23
              </a>
            </div>
          </li>

          <li className="min-w-full flex items-center gap-[16px]">
            <div className="card flex-shrink-0 w-[36px] h-[36px] rounded-[10px] flex justify-center items-center text-sm text-amber-400 sm:w-[48px] sm:h-[48px] sm:rounded-[12px] sm:text-lg">
              <i className="fa-solid fa-calendar-day" />
            </div>
            <div className="max-w-[calc(100%-52px)] w-[calc(100%-52px)] sm:max-w-[calc(100%-64px)] sm:w-[calc(100%-64px)]">
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-[2px]">Birthday</p>
              <time dateTime="2006-07-04" className="text-white text-sm font-normal">
                July 4, 2006
              </time>
            </div>
          </li>

          <li className="min-w-full flex items-center gap-[16px]">
            <div className="card flex-shrink-0 w-[36px] h-[36px] rounded-[10px] flex justify-center items-center text-sm text-amber-400 sm:w-[48px] sm:h-[48px] sm:rounded-[12px] sm:text-lg">
              <i className="fa-solid fa-location-dot" />
            </div>
            <div className="max-w-[calc(100%-52px)] w-[calc(100%-52px)] sm:max-w-[calc(100%-64px)] sm:w-[calc(100%-64px)]">
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-[2px]">Location</p>
              <address className="text-white text-sm font-normal not-italic">
                Sidakarya, Denpasar, Bali, Indonesia
              </address>
            </div>
          </li>
        </ul>

        <div className="w-full h-px bg-jet my-[16px] sm:my-[32px] xl:my-[25px] xl:block" />

        <ul className="flex justify-start items-center gap-[20px] pb-[4px] pl-[4px] xl:justify-center">
          {[
            { icon: "fa-brands fa-facebook", href: "#" },
            { icon: "fa-brands fa-x-twitter", href: "#" },
            { icon: "fa-brands fa-youtube", href: "#" },
            { icon: "fa-brands fa-telegram", href: "#" },
            { icon: "fa-brands fa-instagram", href: "https://www.instagram.com/mdsuraa_/" },
          ].map(({ icon, href }) => (
            <li key={icon}>
              <a
                href={href}
                target="_blank"
                className="text-gray-400 text-lg hover:text-white transition-colors duration-200"
              >
                <i className={icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}