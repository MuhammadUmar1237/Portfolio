import { useRef, useState } from "react";

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const CARDS = [
    { icon: "fa-phone", text: "+92 303 0491446", href: "tel:+923030491446" },
    {
        icon: "fa-envelope",
        text: "umarprogrammer24@gmail.com",
        href: "mailto:umarprogrammer24@gmail.com",
    },
    { icon: "fa-location-dot", text: "Islamabad, Pakistan" },
];

const SOCIALS = [
    { icon: "fa-brands fa-facebook-f", label: "Facebook" },
    { icon: "fa-brands fa-twitter", label: "Twitter" },
    { icon: "fa-brands fa-linkedin-in", label: "LinkedIn" },
    { icon: "fa-brands fa-github", label: "GitHub" },
];

function Contact({ light }) {
    const formRef = useRef(null);
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const box = light ? "border border-[#dddddf] bg-white" : "bg-[#3a3a3c]";
    const field = `w-full px-6 py-3.5 text-sm uppercase outline-none transition-shadow focus:ring-1 focus:ring-[var(--accent)] placeholder:text-[#7a7a7e] ${light ? "border border-[#dddddf] bg-white text-[#252527]" : "bg-[#3a3a3c] text-white"
        }`;

    const sendEmail = async (e) => {
        e.preventDefault();
        setStatus("sending");

        const form = formRef.current;
        const data = new FormData(form);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: ACCESS_KEY,
                    name: data.get("name"),
                    email: data.get("email"),
                    subject: data.get("title"),
                    message: data.get("message"),
                }),
            });

            const json = await res.json();

            if (json.success) {
                setStatus("success");
                form.reset();
            } else {
                throw new Error(json.message);
            }
        } catch (err) {
            console.error("Form error:", err);
            setStatus("error");
        }

        setTimeout(() => setStatus("idle"), 5000);
    };

    return (
        <section className="mx-auto w-full max-w-[1140px] px-5 py-12 md:px-10">
            <h2 className="text-center font-serif text-5xl font-bold md:text-6xl">
                Get In <span className="text-[var(--accent)]">Touch</span>
            </h2>

            {/* Info cards */}
            <div className="mt-20 grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-3">
                {CARDS.map((card) => (
                    <div
                        key={card.icon}
                        className={`relative flex h-[100px] items-center justify-center px-4 ${box}`}
                    >
                        <span className="absolute -top-6 flex size-12 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                            <i className={`fa-solid ${card.icon}`} aria-hidden="true" />
                        </span>

                        {card.href ? (
                            <a
                                href={card.href}
                                className="font-mono text-base font-bold [overflow-wrap:anywhere] md:text-lg"
                            >
                                {card.text}
                            </a>
                        ) : (
                            <span className="font-mono text-base font-bold md:text-lg">
                                {card.text}
                            </span>
                        )}
                    </div>
                ))}
            </div>

            <div className="mx-auto mt-10 h-px w-56 bg-[#555]/60" />

            {/* Text + Form */}
            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr]">
                {/* Left */}
                <div>
                    <h3 className="font-serif text-2xl font-bold">Send Me An Email</h3>
                    <p className="mt-2 font-mono text-sm leading-8">
                        Feel free to get in touch with me. I am always open to discussing
                        new projects or creative ideas.
                    </p>

                    <h3 className="mt-8 font-serif text-2xl font-bold">Follow Me</h3>
                    <div className="mt-4 flex gap-3">
                        {SOCIALS.map((s) => (
                            <span
                                key={s.label}
                                aria-label={s.label}
                                className={`flex size-9 cursor-default items-center justify-center rounded-full text-xs ${light ? "bg-[#eaeaec]" : "bg-[#3a3a3c]"
                                    }`}
                            >
                                <i className={s.icon} aria-hidden="true" />
                            </span>
                        ))}
                    </div>
                </div>

                {/* Form */}
                <form ref={formRef} onSubmit={sendEmail}>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                        <input
                            type="text"
                            name="name"
                            placeholder="YOUR NAME"
                            required
                            className={field}
                        />
                        <input
                            type="text"
                            name="title"
                            placeholder="SUBJECT"
                            required
                            className={field}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="YOUR EMAIL"
                            required
                            className={field}
                        />
                    </div>

                    <textarea
                        name="message"
                        placeholder="YOUR MESSAGE"
                        rows={5}
                        required
                        className={`${field} mt-6 resize-y`}
                    />

                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="mt-6 cursor-pointer bg-[var(--accent)] px-9 py-4 font-mono text-sm font-bold tracking-wide text-white uppercase transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {status === "sending" ? "Sending..." : "Send Message"}
                    </button>

                    {status === "success" && (
                        <p className="mt-6 rounded-full bg-[#3fd48f] py-3 text-center font-mono text-xs font-bold tracking-wide text-white uppercase">
                            Your message has been sent!
                        </p>
                    )}

                    {status === "error" && (
                        <p className="mt-6 rounded-full bg-[#e5484d] py-3 text-center font-mono text-xs font-bold tracking-wide text-white uppercase">
                            Something went wrong. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}

export default Contact;