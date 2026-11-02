import { useState } from "react";
import About from "./components/About/About.jsx";
import Portfolio from "./portfolio/portfolio.jsx";
import Contact from "./components/contact/contact.jsx";
import Blog from "./components/Blog/Blog.jsx";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const [accent, setAccent] = useState("#ff4b20");
  const [skin, setSkin] = useState("dark");

  // Konsa section dikhana hai (home / about / portfolio / contact / blog)
  const [section, setSection] = useState("home");

  // Click par scroll nahi hota, sirf section badalta hai
  const goTo = (e, id) => {
    e.preventDefault();
    setSection(id);
    setMenuOpen(false);
  };

  const colors = [
    "#ff4b20",
    "#3b82f6",
    "#a855f7",
    "#10b981",
    "#eab308",
    "#ec4899",
    "#06b6d4",
    "#f97316",
  ];

  const handleColorChange = (color) => {
    setAccent(color);
  };

  const handleSkinChange = (selectedSkin) => {
    setSkin(selectedSkin);
  };

  return (
    <main
      className={`portfolio-home ${skin === "light" ? "light-skin" : ""
        }`}
      style={{ "--accent": accent }}
      id="home"
    >
      {/* Background decoration */}
      <div className="dot-pattern" aria-hidden="true"></div>

      <div className="shape shape-one" aria-hidden="true"></div>
      <div className="shape shape-two" aria-hidden="true"></div>
      <div className="shape shape-three" aria-hidden="true"></div>
      <div className="shape shape-four" aria-hidden="true"></div>
      <div className="shape shape-five" aria-hidden="true"></div>
      <div className="shape shape-six" aria-hidden="true"></div>
      <div className="shape shape-seven" aria-hidden="true"></div>

      {/* ==============================
          Top-right navigation
      ============================== */}
      <header className="top-bar">
        {/* Hamburger */}
        <button
          type="button"
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Settings */}
        <button
          type="button"
          className="settings-button"
          onClick={() => setSettingsOpen(true)}
          aria-label="Open settings"
          aria-expanded={settingsOpen}
        >
          <i className="fa-solid fa-gear" aria-hidden="true"></i>
        </button>
      </header>

      {/* ==============================
          Navigation Sidebar
      ============================== */}
      {menuOpen && (
        <>
          <div
            className="menu-overlay"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          ></div>

          <aside className="side-menu">
            <div className="side-menu-header">
              <button
                type="button"
                className="close-menu-button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                <span></span>
                <span></span>
              </button>
            </div>

            <nav className="side-menu-nav">
              <a
                href="#home"
                className={section === "home" ? "active" : ""}
                onClick={(e) => goTo(e, "home")}
              >
                <i className="fa-solid fa-house"></i>
                <span>HOME</span>
              </a>

              <a
                href="#about"
                className={section === "about" ? "active" : ""}
                onClick={(e) => goTo(e, "about")}
              >
                <i className="fa-solid fa-file-lines"></i>
                <span>ABOUT</span>
              </a>

              <a
                href="#portfolio"
                className={section === "portfolio" ? "active" : ""}
                onClick={(e) => goTo(e, "portfolio")}
              >
                <i className="fa-solid fa-briefcase"></i>
                <span>PORTFOLIO</span>
              </a>

              <a
                href="#contact"
                className={section === "contact" ? "active" : ""}
                onClick={(e) => goTo(e, "contact")}
              >
                <i className="fa-solid fa-envelope"></i>
                <span>CONTACT</span>
              </a>

              <a
                href="#blog"
                className={section === "blog" ? "active" : ""}
                onClick={(e) => goTo(e, "blog")}
              >
                <i className="fa-solid fa-blog"></i>
                <span>BLOG</span>
              </a>
            </nav>
          </aside>
        </>
      )}

      {/* ==============================
          Settings Panel
      ============================== */}
      {settingsOpen && (
        <>
          <div
            className="settings-overlay"
            onClick={() => setSettingsOpen(false)}
            aria-hidden="true"
          ></div>

          <aside className="settings-panel">
            {/* Settings Header */}
            <div className="settings-panel-header">
              <button
                type="button"
                className="settings-close-button"
                onClick={() => setSettingsOpen(false)}
                aria-label="Close settings"
              >
                <span></span>
                <span></span>
              </button>

              <h2>SETTINGS</h2>
            </div>

            {/* ==============================
                Color Switcher
            ============================== */}
            <div className="settings-section">
              <h3>COLOR SWITCHER</h3>

              <div className="color-switcher">
                {colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    className={`color-droplet ${accent === color ? "selected" : ""
                      }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorChange(color)}
                    aria-label={`Select ${color}`}
                    aria-pressed={accent === color}
                  >
                    <span></span>
                  </button>
                ))}
              </div>
            </div>

            {/* ==============================
                Body Skin
            ============================== */}
            <div className="settings-section body-skin-section">
              <h3>BODY SKIN</h3>

              <div className="skin-options">
                {/* Dark */}
                <label
                  className={`skin-option ${skin === "dark" ? "selected" : ""
                    }`}
                >
                  <input
                    type="radio"
                    name="bodySkin"
                    value="dark"
                    checked={skin === "dark"}
                    onChange={() => handleSkinChange("dark")}
                  />

                  <span className="custom-radio"></span>

                  <span>Dark</span>
                </label>

                {/* Light */}
                <label
                  className={`skin-option ${skin === "light" ? "selected" : ""
                    }`}
                >
                  <input
                    type="radio"
                    name="bodySkin"
                    value="light"
                    checked={skin === "light"}
                    onChange={() => handleSkinChange("light")}
                  />

                  <span className="custom-radio"></span>

                  <span>Light</span>
                </label>
              </div>
            </div>
          </aside>
        </>
      )}

      {/* ==============================
          Main content (About / Portfolio / Contact / Hero)
      ============================== */}

      {section === "about" ? (
        <div className="relative z-[1] w-full pb-28">
          <About light={skin === "light"} />
        </div>
      ) : section === "portfolio" ? (
        <div className="relative z-[1] w-full pb-28">
          <Portfolio light={skin === "light"} />
        </div>
      ) : section === "contact" ? (
        <div className="relative z-[1] w-full pb-28">
          <Contact light={skin === "light"} />
        </div>
      ) : section === "blog" ? (
        <div className="relative z-[1] w-full pb-28">
          <Blog light={skin === "light"} />
        </div>
      ) : (
        <section className="hero-content">
          <h1 className="hero-title">
            Hi! I'm <span>Muhammad Umar.</span>
          </h1>

          <p className="hero-description">
            I'm a Software Developer and Full Stack Specialist{" "}
            <br className="desktop-break" />
            based in Islamabad, Pakistan.
          </p>

          <button
            type="button"
            className="more-about-button"
            onClick={(e) => goTo(e, "about")}
          >
            MORE ABOUT ME
          </button>
        </section>
      )}

      {/* ==============================
          Footer (About, Portfolio, Contact par nahi dikhta)
      ============================== */}
      {section !== "about" &&
        section !== "portfolio" &&
        section !== "contact" &&
        section !== "blog" && (
          <footer className="hero-footer" id="contact">
            <div className="contact-info">
              <a href="mailto:umarprogrammer24@gmail.com">
                umarprogrammer24@gmail.com
              </a>

              <a href="tel:+923030491446">
                +92 303 0491446
              </a>
            </div>

            <div className="social-links">
              <a aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a aria-label="Twitter">
                <i className="fa-brands fa-square-twitter"></i>
              </a>

              <a aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a aria-label="Dribbble">
                <i className="fa-brands fa-dribbble"></i>
              </a>

              <a aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </footer>
        )}
    </main>
  );
}

export default App;