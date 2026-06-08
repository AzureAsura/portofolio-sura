type Page = "about" | "resume" | "portfolio" | "blog" | "contact";

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: { label: string; page: Page }[] = [
  { label: "About", page: "about" },
  { label: "Resume", page: "resume" },
  { label: "Portfolio", page: "portfolio" },
  // { label: "Blog", page: "blog" },
  { label: "Contact", page: "contact" },
];

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  return (
    <nav
      className={[
        "fixed bottom-0 left-0 w-full z-[5]",
        "card backdrop-blur-[10px]",
        "border border-jet rounded-t-[12px] [box-shadow:var(--shadow-2)]",
        "sm:rounded-t-[20px]",
        "lg:absolute lg:bottom-auto lg:top-0 lg:left-auto lg:right-0",
        "lg:w-max lg:rounded-tl-none lg:rounded-tr-[20px] lg:rounded-br-[20px] lg:rounded-bl-none lg:shadow-none",
      ].join(" ")}
    >
      <ul className="flex flex-wrap justify-center items-center px-[10px] sm:gap-[20px] lg:gap-[30px] lg:px-[30px]">
        {navItems.map(({ label, page }) => {
          const isActive = activePage === page;
          return (
            <li key={page}>
              <button
                onClick={() => onNavigate(page)}
                className={[
                  "text-sm py-[20px] px-[10px] font-medium transition-colors duration-200 block relative cursor-pointer",
                  isActive
                    ? "text-amber-400 font-semibold"
                    : "text-gray-400 hover:text-white focus:text-white",
                ].join(" ")}
              >
                {label}
                
                {isActive && (
                  <span className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}