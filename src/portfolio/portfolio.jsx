const items = [
    { id: 1, src: "/images/leaves.jpg", title: "Autumn Leaves", category: "Photo", h: "h-[225px]" },
    { id: 2, src: "/images/mountain.jpg", title: "Snowy_Mountain_Peak", category: "Nature", h: "h-[440px]" },
    { id: 3, src: "/images/cat.jpg", title: "Lucky Cat", category: "3D Object", h: "h-[225px]" },
    { id: 4, src: "/images/globe.jpg", title: "Mountain_Tunnel_Road", category: "Photo", h: "h-[465px]" },
    { id: 5, src: "/images/pumpkin.jpg", title: "Pumpkin Bucket", category: "Photo", h: "h-[225px]" },
    { id: 6, src: "/images/sofa.jpg", title: "Surfboard_On_Sand_Sunset", category: "Interior", h: "h-[400px]" },
    { id: 7, src: "/images/pencils.jpg", title: "Lonely_Tree_Lake", category: "Photo", h: "h-[510px]" },
    { id: 8, src: "/images/cleaning.jpg", title: "Cleaning Set", category: "Photo", h: "h-[460px]" },
];

// App load hote hi images background mein download ho jati hain
items.forEach((item) => {
    const img = new Image();
    img.src = item.src;
});

function Portfolio({ light }) {
    return (
        <section className="min-h-screen px-6 py-12">
            <h2
                className={`mb-14 text-center font-serif text-5xl font-bold md:text-6xl ${light ? "text-[#252527]" : "text-white"
                    }`}
            >
                My <span className="text-[var(--accent)]">Portfolio</span>
            </h2>

            <div className="mx-auto max-w-[1140px] columns-1 gap-[30px] sm:columns-2 lg:columns-3">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={`group relative mb-[30px] break-inside-avoid overflow-hidden bg-[#3a3a3c] ${item.h}`}
                    >
                        <img
                            src={item.src}
                            alt={item.title}
                            loading="eager"
                            decoding="async"
                            onError={(e) => {
                                e.currentTarget.style.visibility = "hidden";
                            }}
                            className="h-full w-full object-cover"
                        />

                        {/* Hover label: har image ka apna naam */}
                        <div className="pointer-events-none absolute left-0 top-1/2 -translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                            <div className="bg-[var(--accent)] px-4 py-2 font-mono text-base font-bold uppercase text-white md:text-lg">
                                {item.title}
                            </div>
                            <div className="inline-block bg-[var(--accent)] px-4 pb-2 font-mono text-xs uppercase text-white md:text-sm">
                                {item.category}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;