import { blogPosts } from "../data";
import { articleBase } from "./About";

interface Props {
  isActive: boolean;
}

export default function Blog({ isActive }: Props) {
  return (
    <article className={[articleBase, isActive ? "block" : "hidden"].join(" ")}>
      <header>
        {/* Judul Utama */}
        <h2
          className={[
            "text-white text-3xl font-bold capitalize relative pb-[10px] mb-[30px]",
            "after:content-[''] after:absolute after:bottom-0 after:left-0",
            "after:w-[30px] after:h-[4px] after:[background:var(--text-gradient-yellow)] after:rounded-[3px]",
            "sm:text-4xl sm:pb-[15px] sm:after:w-[40px] sm:after:h-[5px]",
            "md:pb-[20px]",
          ].join(" ")}
        >
          Blog
        </h2>
      </header>

      <section className="mb-[10px]">
        <ul className="grid grid-cols-1 gap-[20px] sm:gap-[30px] md:grid-cols-2">
          {blogPosts.map((post) => (
            <li key={post.title}>
              <a
                href="#"
                className={[
                  "card group relative block h-full rounded-[16px] z-[1]", // Menggunakan .card-dark, menghapus bg manual & shadow lama
                ].join(" ")}
              >
                {/* Banner Image Wrapper */}
                <figure className="relative w-full h-[200px] rounded-[12px] overflow-hidden bg-zinc-900 xs:h-auto sm:rounded-[14px] lg:h-[230px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.img}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                </figure>

                {/* Content Area */}
                <div className="p-[15px] sm:p-[25px]">
                  {/* Metadata: Kategori & Tanggal */}
                  <div className="flex justify-start items-center gap-[8px] mb-[10px]">
                    <p className="text-gray-400 text-xs font-normal capitalize">
                      {post.category}
                    </p>
                    <span className="bg-zinc-600 w-[4px] h-[4px] rounded-full" />
                    <time
                      dateTime={post.datetime}
                      className="text-gray-400 text-xs font-normal"
                    >
                      {post.date}
                    </time>
                  </div>

                  {/* Judul Artikel */}
                  <h3
                    className={[
                      "text-white text-lg font-bold capitalize mb-[10px] leading-snug",
                      "transition-colors duration-200",
                      "group-hover:text-amber-400",
                    ].join(" ")}
                  >
                    {post.title}
                  </h3>

                  {/* Deskripsi Singkat */}
                  <p className="text-gray-200 text-sm font-normal leading-relaxed tracking-wide line-clamp-3">
                    {post.text}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}