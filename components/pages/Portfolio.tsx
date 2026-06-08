"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, filterCategories } from "../data";
import { articleBase } from "./About";
import Link from "next/link";

interface Props {
  isActive: boolean;
}

export default function Portfolio({ isActive }: Props) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectOpen, setSelectOpen] = useState(false);

  const handleFilter = (cat: string) => {
    setActiveFilter(cat.toLowerCase());
    setSelectOpen(false);
  };

  const filtered = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <article className={[articleBase, isActive ? "block" : "hidden"].join(" ")}>
      <header>
        <h2
          className={[
            "text-white text-3xl font-bold capitalize relative pb-[10px] mb-[30px]",
            "after:content-[''] after:absolute after:bottom-0 after:left-0",
            "after:w-[30px] after:h-[4px] after:[background:var(--text-gradient-yellow)] after:rounded-[3px]",
            "sm:text-4xl sm:pb-[15px] sm:after:w-[40px] sm:after:h-[5px]",
            "md:pb-[20px]",
          ].join(" ")}
        >
          Portfolio
        </h2>
      </header>

      <section>
        <ul className="hidden md:flex justify-start items-center gap-[25px] pl-[5px] mb-[30px]">
          {filterCategories.map((cat) => {
            const isActiveFilter = activeFilter === cat.toLowerCase();
            return (
              <li key={cat}>
                <button
                  onClick={() => handleFilter(cat)}
                  className={[
                    "text-sm font-medium transition-colors duration-200 cursor-pointer",
                    isActiveFilter
                      ? "text-amber-400 font-semibold"
                      : "text-gray-400 hover:text-white",
                  ].join(" ")}
                >
                  {cat}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="relative mb-[25px] md:hidden">
          <button
            onClick={() => setSelectOpen(!selectOpen)}
            className="card text-gray-200 flex justify-between items-center w-full px-[16px] py-[12px] border border-jet rounded-[14px] text-sm font-medium focus:outline-none focus:ring-1 focus:ring-amber-400"
          >
            <span className="capitalize">
              {filterCategories.find((c) => c.toLowerCase() === activeFilter) ?? "Select category"}
            </span>
            <span
              className={[
                "transition-transform duration-200 ease-in-out text-gray-400",
                selectOpen ? "rotate-180" : "",
              ].join(" ")}
            >
              <i className="fa-solid fa-chevron-down" />
            </span>
          </button>

          <ul
            className={[
              "card-dark absolute top-[calc(100%+6px)] w-full p-[6px] border border-jet rounded-[14px] z-[2]",
              "transition-all duration-200 ease-in-out",
              selectOpen
                ? "opacity-100 visible pointer-events-auto translate-y-0"
                : "opacity-0 invisible pointer-events-none -translate-y-2",
            ].join(" ")}
          >
            {filterCategories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => handleFilter(cat)}
                  className="text-gray-200 text-sm font-normal capitalize w-full px-[12px] py-[10px] rounded-[8px] text-left hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer"
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="grid grid-cols-1 gap-y-[30px] gap-x-[25px] md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.li
                key={project.title}
                layout
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Link href={project.links} target="_blank" rel="noopener noreferrer" className="group w-full block">
                  <figure
                    className={[
                      "relative w-full rounded-[16px] overflow-hidden mb-[15px] bg-zinc-900",
                      "aspect-[15/10]",
                      "before:content-[''] before:absolute before:inset-0",
                      "before:bg-transparent before:z-[1] before:transition-colors duration-300",
                      "group-hover:before:bg-black/50",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "card text-amber-400 text-xl p-[16px] rounded-[12px]",
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                        "opacity-0 z-[2] transition-all duration-300 ease-out",
                        "scale-[0.8] group-hover:scale-100 group-hover:opacity-100",
                      ].join(" ")}
                    >
                      <i className="fa-regular fa-eye" />
                    </div>

                    <img
                      src={project.img}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </figure>

                  <h3 className="text-white text-base font-semibold capitalize leading-snug ml-[4px] mb-[3px] group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs font-normal capitalize ml-[4px]">
                    {project.category}
                  </p>
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </section>
    </article>
  );
}