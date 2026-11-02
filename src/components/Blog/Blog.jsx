const POSTS = [
    {
        id: 1,
        day: "20",
        month: "OCT",
        title: "Mastering Async JavaScript: Promises, async/await and the Event Loop",
        excerpt:
            "Understanding how the event loop schedules your code makes async bugs far easier to solve. This guide covers promises, async/await and running requests in parallel, with patterns you can use in real projects.",
        icon: "fa-brands fa-js",
        from: "#1f1c18",
        to: "#8a6d1a",
        code: [
            "const res = await fetch('/api/posts');",
            "const posts = await res.json();",
            "await Promise.all([getUser(), getOrders()]);",
        ],
    },
    {
        id: 2,
        day: "12",
        month: "OCT",
        title: "Building a Scalable REST API with Node.js, Express and MongoDB",
        excerpt:
            "A clean folder structure, reusable middleware and proper error handling are what turn a quick Express server into an API that can grow with your product. Here is the setup I use on production projects.",
        icon: "fa-brands fa-node-js",
        from: "#0f2027",
        to: "#2c5364",
        code: [
            "app.use(express.json());",
            "app.use('/api/users', userRoutes);",
            "app.use(errorHandler);",
            "mongoose.connect(process.env.MONGO_URI);",
        ],
    },
    {
        id: 3,
        day: "05",
        month: "OCT",
        title: "Custom Hooks in React: Write the Logic Once, Reuse It Everywhere",
        excerpt:
            "Fetching data, handling forms and syncing with local storage tend to get copied across components. Custom hooks pull that logic into one place, so your components stay small, readable and easy to test.",
        icon: "fa-brands fa-react",
        from: "#0f172a",
        to: "#1e4d6b",
        code: [
            "function useFetch(url) {",
            "  const [data, setData] = useState(null);",
            "  useEffect(() => { load(url, setData); }, [url]);",
            "  return data;",
            "}",
        ],
    },
    {
        id: 4,
        day: "28",
        month: "SEP",
        title: "React Performance Tips Every Full Stack Developer Should Know",
        excerpt:
            "Memoization, code splitting and smarter state placement can remove most unnecessary re-renders. These are the practical habits that keep large React apps fast without making the code harder to read.",
        icon: "fa-brands fa-react",
        from: "#141e30",
        to: "#243b55",
        code: [
            "const Chart = lazy(() => import('./Chart'));",
            "const total = useMemo(() => sum(items), [items]);",
            "export default memo(ProductCard);",
        ],
    },
    {
        id: 5,
        day: "15",
        month: "AUG",
        title: "JWT Authentication and Role-Based Access in MERN Apps",
        excerpt:
            "Secure login is more than issuing a token. Learn how to store tokens safely, protect routes on both the client and the server, and give every role exactly the access it needs.",
        icon: "fa-solid fa-shield-halved",
        from: "#1a1a2e",
        to: "#4a3b78",
        code: [
            "const token = jwt.sign({ id, role }, SECRET);",
            "router.get('/admin', auth, allow('admin'), list);",
            "if (!user) return res.status(401).end();",
        ],
    },
    {
        id: 6,
        day: "03",
        month: "JUL",
        title: "Deploying a MERN App: From Localhost to Production",
        excerpt:
            "Environment variables, build optimisation, CORS and a reliable hosting setup. A simple checklist to take your full stack project live without surprises on launch day.",
        icon: "fa-solid fa-cloud-arrow-up",
        from: "#0b3d3a",
        to: "#16697a",
        code: [
            "$ npm run build",
            "$ git push origin main",
            "VITE_API_URL=https://api.example.com",
        ],
    },
];

function Blog({ light }) {
    return (
        <section className="mx-auto w-full max-w-[780px] px-5 py-12">
            <h2 className="text-center font-serif text-5xl font-bold md:text-6xl">
                My <span className="text-[var(--accent)]">Blog</span>
            </h2>

            <div className="mt-14 flex flex-col gap-10">
                {POSTS.map((post) => (
                    <article
                        key={post.id}
                        className={`group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${light ? "border border-[#dddddf] bg-white" : "bg-[#3a3a3c]"
                            }`}
                    >
                        {/* Cover */}
                        <div className="overflow-hidden">
                            {post.image ? (
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[340px]"
                                />
                            ) : (
                                <div
                                    className="relative h-[260px] overflow-hidden transition-transform duration-500 group-hover:scale-105 sm:h-[340px]"
                                    style={{
                                        background: `linear-gradient(135deg, ${post.from}, ${post.to})`,
                                    }}
                                >
                                    <i
                                        className={`${post.icon} absolute -right-6 -bottom-10 text-[220px] text-white/10`}
                                        aria-hidden="true"
                                    />

                                    <div className="absolute top-6 left-6 flex gap-2">
                                        <span className="size-3 rounded-full bg-[#ff5f56]" />
                                        <span className="size-3 rounded-full bg-[#ffbd2e]" />
                                        <span className="size-3 rounded-full bg-[#27c93f]" />
                                    </div>

                                    <pre className="absolute inset-x-6 top-16 overflow-hidden font-mono text-xs leading-7 text-[#9ee6c0] sm:text-sm">
                                        {post.code.join("\n")}
                                    </pre>
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex gap-5 p-6 md:p-8">
                            <div className="flex h-[58px] w-[48px] shrink-0 flex-col items-center justify-center rounded bg-[var(--accent)] font-mono text-white">
                                <span className="text-base leading-none font-bold">
                                    {post.day}
                                </span>
                                <span className="mt-1 text-xs leading-none font-bold">
                                    {post.month}
                                </span>
                            </div>

                            <div>
                                <h3 className="font-serif text-xl leading-snug font-bold md:text-2xl">
                                    {post.title}
                                </h3>
                                <p className="mt-3 font-mono text-sm leading-8">
                                    {post.excerpt}
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Blog;