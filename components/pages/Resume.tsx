import Timeline from "../Timeline";
import Skills from "../Skills";
import { education, experience, competitions } from "../data";
import { articleBase } from "./About";

interface Props {
  isActive: boolean;
}

export default function Resume({ isActive }: Props) {
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
          Resume
        </h2>
      </header>

      <Timeline heading="Education" entries={education} />
      <Timeline heading="Experience" entries={experience} />
      <Timeline heading="Competitions" entries={competitions} />
      <Skills />
    </article>
  );
}