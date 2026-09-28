import Service from "../Service";
import Testimonials from "../Testimonials";
import Clients from "../Clients";

// Shared article-container classes dengan custom class .card
export const articleBase = [
  "card border border-jet rounded-[20px] p-[15px]",
  "[box-shadow:var(--shadow-1)] z-[1]",
  "sm:w-[520px] sm:mx-auto sm:p-[30px]",
  "md:w-[700px]",
  "lg:w-[950px] lg:[box-shadow:var(--shadow-5)]",
  "xl:w-auto xl:min-h-full",
].join(" ");

interface Props {
  isActive: boolean;
}

export default function About({ isActive }: Props) {
  return (
    <article className={[articleBase, isActive ? "block" : "hidden"].join(" ")}>
      <header>
        <h2
          className={[
            "text-white text-3xl font-bold capitalize relative pb-[10px] mb-[20px]",
            "after:content-[''] after:absolute after:bottom-0 after:left-0",
            "after:w-[30px] after:h-[4px] after:[background:var(--text-gradient-yellow)] after:rounded-[3px]",
            "sm:text-4xl sm:pb-[15px] sm:mb-[25px] sm:after:w-[40px] sm:after:h-[5px]",
            "md:pb-[20px]",
          ].join(" ")}
        >
          About me
        </h2>
      </header>

      <section className="text-gray-200 text-base font-normal leading-relaxed tracking-wide space-y-4 mb-8 sm:mb-[40px]">
        <p>
          Full-stack developer working across Web2 and Web3, from polished front-end interfaces to backend systems, smart contracts, and AI-powered features.
        </p>
        <p>
          I write in JavaScript, TypeScript, Python, Go, and PHP, and I'm comfortable with ORMs like Prisma and Mongoose. On the Web3 side, I've shipped smart contracts across EVM chains (Ethereum, Base, BNB Chain), plus Solana (Rust) and Aptos. I also have hands-on experience as an AI engineer.
        </p>
        <p>
          A regular at hackathons and an active member of the Web3 Bali community, I enjoy turning ideas into fast, reliable, and maintainable products.
        </p>
      </section>

      <Service />
      <Testimonials />
      <Clients />
    </article>
  );
}