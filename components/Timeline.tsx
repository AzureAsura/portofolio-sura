interface TimelineEntry {
  title: string;
  period: string;
  text: string;
}

interface TimelineProps {
  heading: string;
  entries: TimelineEntry[];
}

export default function Timeline({ heading, entries }: TimelineProps) {
  return (
    <section className="mb-[30px]">
      <div className="flex items-center gap-[15px] mb-[25px]">
        <div
          className={[
            "card flex-shrink-0 w-[36px] h-[36px] rounded-[10px]",
            "flex justify-center items-center text-sm text-amber-400",
            "sm:w-[48px] sm:h-[48px] sm:rounded-[12px] sm:text-lg",
          ].join(" ")}
        >
          <i className="fa-solid fa-book-open" />
        </div>
        <h3 className="text-white text-2xl font-bold capitalize">{heading}</h3>
      </div>

      <ol className="text-sm ml-[45px] sm:ml-[65px]">
        {entries.map((entry, idx) => {
          const isLast = idx === entries.length - 1;
          return (
            <li
              key={entry.title}
              className={[
                "relative",
                "after:content-[''] after:absolute after:top-[6px] after:left-[-30px]",
                "after:h-[8px] after:w-[8px] after:bg-gradient-to-br after:from-amber-400 after:to-orange-500",
                "after:rounded-full after:ring-[4px] after:ring-zinc-800",
                "sm:after:top-[6px] sm:after:left-[-41px]",
                
                !isLast
                  ? [
                      "before:content-[''] before:absolute before:top-[20px] before:left-[-27px]",
                      "before:w-px before:h-[calc(100%+10px)] before:bg-jet",
                      "sm:before:left-[-38px]",
                    ].join(" ")
                  : "",
                
                !isLast ? "mb-[25px] sm:mb-[30px]" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <h4 className="text-white text-base font-semibold leading-snug mb-[5px] capitalize">
                {entry.title}
              </h4>
              
              <span className="text-amber-400/90 font-medium text-xs leading-relaxed block mb-[8px]">
                {entry.period}
              </span>
              
              <p className="text-gray-200 text-sm font-normal leading-relaxed tracking-wide xl:max-w-[700px]">
                {entry.text}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}