"use client";

import { useActionState, useEffect, useState } from "react";
import { articleBase } from "./About";
import { sendContactEmail, ContactFormState } from "@/lib/contact";

interface Props {
  isActive: boolean;
}

const initialState: ContactFormState = { success: false, message: "" };

const inputClass = [
  "bg-transparent text-white text-sm px-[20px] py-[13px] w-full",
  "border border-jet rounded-[14px] outline-none transition-all duration-200",
  "placeholder:text-gray-500 placeholder:font-normal",
  "focus:border-amber-400 focus:ring-1 focus:ring-amber-400",
  "focus:invalid:border-red-500/80 focus:invalid:ring-red-500/80",
  "sm:py-[15px]",
].join(" ");

export default function Contact({ isActive }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialState,
  );

  const isEnabled =
    name.trim() !== "" && email.trim() !== "" && message.trim() !== "";

  // Clear form on successful submission
  useEffect(() => {
    if (state.success) {
      setName("");
      setEmail("");
      setMessage("");
    }
  }, [state.success]);

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
          Contact
        </h2>
      </header>

      <section className="relative h-[250px] w-full rounded-[16px] mb-[30px] border border-jet overflow-hidden sm:h-[380px] sm:rounded-[18px]">
        <figure className="h-full w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15504.623969378563!2d115.22447620289965!3d-8.700110142510129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2410294415595%3A0xb9b6c94ad0c08b24!2sInstitut%20Bisnis%20dan%20Teknologi%20Indonesia%20(INSTIKI)!5e0!3m2!1sid!2sid!4v1780923680350!5m2!1sid!2sid"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            title="Google Maps"
            className="w-full h-full border-none grayscale invert contrast-[1.2] opacity-80"
          />
        </figure>
      </section>

      <section className="mb-[10px]">
        <h3 className="text-white text-2xl font-bold capitalize mb-[20px]">
          Contact Form
        </h3>

        <form action={formAction} className="flex flex-col gap-[25px] sm:gap-[30px]">
          <div className="grid grid-cols-1 gap-[25px] sm:gap-[30px] md:grid-cols-2">
            {/* Full Name */}
            <div className="flex flex-col gap-[6px]">
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
              {state.errors?.fullname && (
                <p className="text-red-400 text-xs px-[4px]">
                  {state.errors.fullname[0]}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-[6px]">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
              {state.errors?.email && (
                <p className="text-red-400 text-xs px-[4px]">
                  {state.errors.email[0]}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-[6px]">
            <textarea
              name="message"
              placeholder="Your Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={[
                inputClass,
                "min-h-[120px] h-[140px] max-h-[240px] resize-y",
                "[&::-webkit-resizer]:hidden",
              ].join(" ")}
            />
            {state.errors?.message && (
              <p className="text-red-400 text-xs px-[4px]">
                {state.errors.message[0]}
              </p>
            )}
          </div>

          {/* Global feedback */}
          {state.message && (
            <p
              className={[
                "text-sm px-[4px]",
                state.success ? "text-emerald-400" : "text-red-400",
              ].join(" ")}
            >
              {state.message}
            </p>
          )}

          <button
            type="submit"
            disabled={!isEnabled || isPending}
            className={[
              "w-full flex justify-center items-center gap-[10px] px-[24px] py-[13px] rounded-[14px]",
              "text-sm font-semibold capitalize transition-all duration-300",
              "sm:py-[16px] md:w-max md:ml-auto",
              isEnabled && !isPending
                ? [
                    "bg-gradient-to-br from-amber-400 to-orange-500 text-zinc-950",
                    "hover:from-amber-300 hover:to-orange-400 hover:shadow-[0_4px_20px_rgba(251,191,36,0.25)]",
                    "active:scale-[0.98]",
                  ].join(" ")
                : ["card text-amber-500/50 cursor-not-allowed opacity-60"].join(
                    " ",
                  ),
            ].join(" ")}
          >
            {isPending ? (
              <>
                <i className="fa-solid fa-circle-notch animate-spin text-xs sm:text-sm" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <i className="fa-solid fa-paper-plane text-xs sm:text-sm" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </section>
    </article>
  );
}
