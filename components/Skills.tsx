import { skills } from "./data";

export default function Skills() {
  return (
    <section>
      <h3 className="text-white text-2xl font-bold capitalize mb-[20px]">
        My Skills
      </h3>

      <ul className="card-dark p-[20px] rounded-[14px] z-[1]">
        {skills.map(({ name, value }, idx) => (
          <li
            key={name}
            className={idx !== skills.length - 1 ? "mb-[18px] sm:mb-[25px]" : ""}
          >
            <div className="flex items-center gap-[5px] mb-[8px]">
              <h5 className="text-white text-sm font-semibold capitalize flex-1">
                {name}
              </h5>
              <data
                value={value}
                className="text-gray-300 text-sm font-medium"
              >
                {value}%
              </data>
            </div>

            <div className="bg-zinc-800 w-full h-[8px] rounded-[10px] overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-400 to-orange-500 h-full rounded-[inherit]"
                style={{ width: `${value}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}