import { useState } from "react";
const PHOTO_URL = "/images/umar.png";
const FALLBACK_PHOTO = "https://github.com/MuhammadUmar1237.png";

const preloadPhoto = new Image();
preloadPhoto.src = PHOTO_URL;


const CV_URL = "/Muhammad_Umar_Resume.pdf";
const CV_FILE_NAME = "Muhammad_Umar_Resume.pdf";

const INFO = [
    { icon: "fa-cake-candles", label: "Birthdate", value: "06/07/2002" },
    { icon: "fa-phone", label: "Phone", value: "+92 303 0491446" },
    { icon: "fa-flag", label: "Nationality", value: "Pakistani" },
    { icon: "fa-location-dot", label: "Address", value: "Islamabad, PAK" },
    { icon: "fa-gear", label: "Experience", value: "3 years" },
    { icon: "fa-envelope", label: "Email", value: "umarprogrammer24@gmail.com" },
];



const RESUME = {
    experience: [
        {
            title: "Senior Full Stack MERN Developer",
            place: "Cloud Quik",
            years: "2023 - 2026",
            description:
                "3 years at Cloud Quik building enterprise apps with Node.js, React, Express and MongoDB, secure APIs, real-time features with SignalR and mobile support with Ionic.",
        },
        {
            title: "Full Stack Developer",
            place: "Ewarenet",
            years: "2022 - 2024",
            description:
                "Built healthcare and enterprise backends with Node.js, Express and MongoDB, with JWT auth, role-based access and reusable Bootstrap and Tailwind UI.",
        },
    ],
    education: [
        {
            title: "BS Software Engineering",
            place: "Gomal University, D.I. Khan",
            years: "2019 - 2023",
            description: "Bachelor's degree in Software Engineering.",
        },
        {
            title: "Intermediate",
            place: "The Knowledge Home School and College",
            years: "2017 - 2018",
            description: "Completed Intermediate education.",
        },
    ],
};

const TABS = [
    { id: "experience", label: "EXPERIENCE" },
    { id: "education", label: "EDUCATION" },
];

const PER_PAGE = 2;

function Resume({ light }) {
    const [tab, setTab] = useState("experience");
    const [page, setPage] = useState(0);

    const items = RESUME[tab];
    const pages = Math.ceil(items.length / PER_PAGE);
    const visible = items.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

    const changeTab = (id) => {
        setTab(id);
        setPage(0);
    };

    return (
        <div className="mt-20 md:mt-28">
            <h2 className="text-center font-[family-name:Georgia,'Times_New_Roman',serif] text-3xl leading-tight font-bold md:text-5xl">
                My Resume
            </h2>

            
            <div className="mt-8 flex items-center justify-center md:mt-10">
                {TABS.map((t, i) => (
                    <button
                        key={t.id}
                        type="button"
                        onClick={() => changeTab(t.id)}
                        aria-pressed={tab === t.id}
                        className={`cursor-pointer px-5 text-base font-bold tracking-wide transition-colors duration-200 hover:text-[var(--accent)] md:px-8 md:text-xl ${i > 0
                            ? light
                                ? "border-l border-[#cfcfd3]"
                                : "border-l border-[#414145]"
                            : ""
                            } ${tab === t.id
                                ? "text-[var(--accent)]"
                                : "text-[#8a8a8e]"
                            }`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

           
            <div className="mt-10 flex flex-wrap justify-center gap-[30px] md:mt-14">
                {visible.map((item, i) => (
                    <article
                        key={`${tab}-${page}-${i}`}
                        className={`min-h-[210px] w-full px-6 py-6 sm:w-[380px] ${light
                            ? "border border-[#dddddf] bg-white"
                            : "bg-[#3a3a3c]"
                            }`}
                    >
                        <div className="flex items-start justify-between gap-3">
                            <h3 className="font-[family-name:Georgia,'Times_New_Roman',serif] text-lg leading-snug font-bold md:text-xl">
                                {item.title}
                            </h3>
                            <span className="shrink-0 rounded bg-[var(--accent)] px-2 py-1 text-[13px] whitespace-nowrap text-white">
                                {item.years}
                            </span>
                        </div>

                        <p className="mt-1 text-base">{item.place}</p>

                        <p className="mt-2 text-sm leading-[2]">
                            {item.description}
                        </p>
                    </article>
                ))}
            </div>

         
            {pages > 1 && (
                <div className="mt-10 flex items-center justify-center gap-3">
                    {Array.from({ length: pages }, (_, i) => (
                        <button
                            key={i}
                            type="button"
                            aria-label={`Page ${i + 1}`}
                            onClick={() => setPage(i)}
                            className={`h-2 cursor-pointer rounded-full transition-all duration-200 ${i === page
                                ? "w-10 bg-[var(--accent)]"
                                : light
                                    ? "w-2 bg-[#252527]/60"
                                    : "w-2 bg-[#f0f0f0]"
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}


const STATS = [
    { icon: "fa-briefcase", value: "3", label: "Years Experience" },
    { icon: "fa-thumbs-up", value: "21", label: "Done Projects" },
    { icon: "fa-heart", value: "43", label: "Happy Customers" },
];

function Stats({ light }) {
    return (
        <div className={light ? "bg-[#eaeaec]" : "bg-[#3a3a3c]"}>
            <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-5 py-14 sm:grid-cols-3 md:px-10 md:py-20">
                {STATS.map((stat) => (
                    <div
                        key={stat.label}
                        className="flex flex-col items-center text-center"
                    >
                        <span className="flex size-[60px] items-center justify-center rounded-full bg-[var(--accent)] text-xl text-white">
                            <i aria-hidden="true" className={`fa-solid ${stat.icon}`} />
                        </span>
                        <span className="mt-4 text-5xl leading-none font-bold md:text-6xl">
                            {stat.value}
                        </span>
                        <span className="mt-4 text-base font-bold">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}



const SKILLS = [
    { name: "HTML", percentage: 90 },
    { name: "JAVASCRIPT", percentage: 80 },
    { name: "CSS", percentage: 70 },
    { name: "REACT", percentage: 70 },
    { name: "Typescript", percentage: 60 },
    { name: "NODE.JS", percentage: 75 },
    { name: "EXPRESS.JS", percentage: 85 },
    { name: "ANGULAR", percentage: 60 },
];

function Skills({ light }) {
    return (
        <div className="mx-auto w-full max-w-[1200px] px-5 py-16 md:px-10 md:py-24">
            <h2 className="font-[family-name:Georgia,'Times_New_Roman',serif] text-4xl leading-tight font-bold md:text-5xl">
                My Skills
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
                {SKILLS.map((skill) => (
                    <div key={skill.name} className="w-full">
                        <span className="block text-sm font-bold tracking-wider uppercase md:text-base">
                            {skill.name}
                        </span>

                        <div className="relative mt-8 h-[5px] w-full bg-[#414145]/40">
                            
                            <div
                                className="relative h-full bg-[var(--accent)] transition-all duration-500"
                                style={{ width: `${skill.percentage}%` }}
                            >
                                
                                <div className="absolute -top-9 right-0 translate-x-1/2 rounded-xs bg-[var(--accent)] px-2 py-1 text-xs font-bold text-white shadow-md after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-[var(--accent)]">
                                    {skill.percentage}%
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function About({ light }) {
   
    const downloadCV = async () => {
        try {
            const res = await fetch(CV_URL);
            const type = res.headers.get("content-type") || "";

            if (!res.ok || !type.includes("pdf")) {
                throw new Error("CV file not found in public folder");
            }

            const blob = await res.blob();
            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = CV_FILE_NAME;
            document.body.appendChild(link);
            link.click();
            link.remove();

            URL.revokeObjectURL(url);
        } catch (err) {
            console.error("CV download error:", err);
        }
    };

    return (
        <>
            <section
                id="about"
                className="z-[1] mx-auto w-full max-w-[1200px] px-5 py-10 md:px-10 md:pt-14 md:pb-16"
            >
                <h2 className="text-center font-[family-name:Georgia,'Times_New_Roman',serif] text-4xl leading-tight font-bold md:text-6xl">
                    About <span className="text-[var(--accent)]">Me</span>
                </h2>

                <div className="mt-10 flex flex-col items-center gap-8 md:mt-16 lg:flex-row lg:gap-14">
                    {/* Photo */}
                    <div
                        className={`shrink-0 border-4 ${light ? "border-[#dddddf]" : "border-[#414145]"
                            }`}
                    >
                        <img
                            src={PHOTO_URL}
                            alt="Muhammad Umar"
                            loading="eager"
                            decoding="async"
                            fetchPriority="high"
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = FALLBACK_PHOTO;
                            }}
                            className="block h-[400px] w-[280px] object-cover sm:h-[480px] sm:w-[360px] md:h-[540px] md:w-[440px]"
                        />
                    </div>

                   
                    <div className="w-full max-w-[680px]">
                        <p
                            className={`text-sm leading-[2] md:text-base ${light ? "text-[#252527]" : "text-[#f0f0f0]"
                                }`}
                        >
                            I'm Muhammad Umar, a Pakistani full stack developer based in
                            Islamabad. I build fast, clean and user-friendly web applications
                            with the MERN stack, from polished interfaces to reliable backends.
                        </p>

                        <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-4 xl:grid-cols-[auto_auto]">
                            {INFO.map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-start gap-3 text-sm"
                                >
                                    <i
                                        aria-hidden="true"
                                        className={`fa-solid ${item.icon} mt-0.5 w-5 shrink-0 text-center`}
                                    />
                                    <span className="xl:whitespace-nowrap">
                                        {item.label} :{" "}
                                        <strong className="font-bold [overflow-wrap:anywhere]">
                                            {item.value}
                                        </strong>
                                    </span>
                                </div>
                            ))}
                        </div>

                      
                        <div className="mt-8 flex justify-center">
                            <button
                                type="button"
                                onClick={downloadCV}
                                className="inline-flex cursor-pointer items-center justify-center border border-[var(--accent)] bg-[var(--accent)] px-8 py-4 mr-20 text-sm font-bold tracking-wide text-white transition-shadow hover:shadow-[0_10px_25px_color-mix(in_srgb,var(--accent)_25%,transparent)]"
                            >
                                DOWNLOAD MY CV
                            </button>
                        </div>
                    </div>
                </div>

               
                <Resume light={light} />
            </section>

            
            <Stats light={light} />

            
            <Skills light={light} />
        </>
    );
}

export default About;