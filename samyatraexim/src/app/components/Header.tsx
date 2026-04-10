"use client";

import { useState, useEffect } from "react";
import { cx, header } from "../../../styles/classes";
import Image from "next/image";
import Logo from "../../../public/samyatraexim_logo.png";

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Contact",  href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled]       = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen]       = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const ids = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // Derived state helpers
  const isLight = !scrolled; // transparent header = light text

  return (
    <header
      className={cx(
        header.root,
        scrolled ? header.scrolled : header.transparent
      )}
    >
      <div className={header.inner}>

        {/* ── Logo ── */}
        <a className={header.logo} href="#home" onClick={(e) => scrollTo(e, "#home")}>
          <div className={header.logoMark}>
            <Image src={Logo} alt="Samyatra Exim Logo" width={72} height={72} className={header.logoImage} />
          </div>

          <div className={header.logoText}>
            <h4
              className={cx(
                header.logoName,
                isLight ? header.logoNameLight : header.logoNameDark
              )}
            >
              Samyatra Exim
            </h4>
            <span
              className={cx(
                header.logoTagline,
                isLight ? header.logoTaglineLight : header.logoTaglineDark
              )}
            >
              Global Trade
            </span>
          </div>
        </a>

        {/* ── Desktop Nav ── */}
        <ul className={header.navList}>
          {navLinks.map(({ label, href }) => {
            const id        = href.replace("#", "");
            const isActive  = activeSection === id;
            const isContact = id === "contact";

            if (isContact) {
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={header.navCta}
                    onClick={(e) => scrollTo(e, href)}
                  >
                    {label}
                  </a>
                </li>
              );
            }

            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => scrollTo(e, href)}
                  className={cx(
                    header.navLink,
                    isLight ? header.navLinkLight : header.navLinkDark,
                    isActive && header.navLinkActive,
                    isActive && (isLight ? header.navLinkActiveLight : header.navLinkActiveDark)
                  )}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* ── Hamburger (mobile) ── */}
        <button
          className={cx(header.hamburger, "flex md:hidden")}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={cx(
            header.hamburgerBar,
            isLight ? header.hamburgerBarLight : header.hamburgerBarDark,
            menuOpen && "translate-y-[7px] rotate-45"
          )} />
          <span className={cx(
            header.hamburgerBar,
            isLight ? header.hamburgerBarLight : header.hamburgerBarDark,
            menuOpen && "opacity-0 scale-x-0"
          )} />
          <span className={cx(
            header.hamburgerBar,
            isLight ? header.hamburgerBarLight : header.hamburgerBarDark,
            menuOpen && "-translate-y-[7px] -rotate-45"
          )} />
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <nav
        className={cx(
          header.mobileMenu,
          menuOpen ? header.mobileMenuOpen : header.mobileMenuHidden
        )}
      >
        {navLinks.slice(0, -1).map(({ label, href }) => {
          const id = href.replace("#", "");
          return (
            <a
              key={href}
              href={href}
              onClick={(e) => scrollTo(e, href)}
              className={cx(
                header.mobileLink,
                activeSection === id && header.mobileLinkActive
              )}
            >
              {label}
            </a>
          );
        })}
        <a
          href="#contact"
          onClick={(e) => scrollTo(e, "#contact")}
          className={header.mobileCta}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}