"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import About from "@/components/pages/About";
import Resume from "@/components/pages/Resume";
import Portfolio from "@/components/pages/Portfolio";
import Blog from "@/components/pages/Blog";
import Contact from "@/components/pages/Contact";

type Page = "about" | "resume" | "portfolio" | "blog" | "contact";

export default function Home() {
  const [activePage, setActivePage] = useState<Page>("about");

  const navigate = (page: Page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  return (
    <main
      className={[
        "mx-[12px] mt-[15px] mb-[75px] min-w-[259px]",
        "sm:mt-[60px] sm:mb-[100px]",
        "lg:mb-[60px]",
        "xl:max-w-[1200px] xl:mx-auto xl:flex xl:justify-center xl:items-stretch xl:gap-[25px]",
      ].join(" ")}
    >
      <Sidebar />

      <div
        className={[
          "lg:relative lg:w-max lg:mx-auto",
          "xl:min-w-[75%] xl:w-[75%] xl:m-0",
        ].join(" ")}
      >
        <Navbar activePage={activePage} onNavigate={navigate} />

        <About isActive={activePage === "about"} />
        <Resume isActive={activePage === "resume"} />
        <Portfolio isActive={activePage === "portfolio"} />
        <Blog isActive={activePage === "blog"} />
        <Contact isActive={activePage === "contact"} />
      </div>
    </main>
  );
}
