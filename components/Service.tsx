import { services } from "./data";

export default function Service() {
  return (
    <section className="mb-[35px]">
      <h3 className="text-white text-2xl font-bold capitalize mb-[25px]">
        What I&apos;m Doing
      </h3>

      <ul className="grid grid-cols-1 gap-[20px] lg:grid-cols-2 lg:gap-x-[25px]">
        {services.map(({ icon, alt, title, text }) => (
          <li
            key={title}
            className={[
              "card p-[20px] rounded-[14px]",
              "z-[1]",
              "sm:flex sm:justify-start sm:items-start sm:gap-[18px] sm:p-[30px]",
            ].join(" ")}
          >
            <div className="flex-shrink-0 mb-[12px] sm:mb-0 sm:mt-[5px]">
              <img src={icon} alt={alt} width="40" className="mx-auto sm:mx-0" />
            </div>

            <div className="text-center sm:text-left">
              <h4 className="text-white text-lg font-semibold capitalize mb-[8px]">
                {title}
              </h4>
              <p className="text-gray-200 text-sm font-normal leading-relaxed tracking-wide">
                {text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}