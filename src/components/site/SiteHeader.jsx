/* 626 Bath and Tile style: compact utility strip, transparent navy navigation, orange active rule, and a decisive phone CTA. */
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import logo from "../../assets/logo.png";
const navItems = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Services",
    to: "/services",
  },
  {
    label: "Gallery",
    to: "/gallery",
  },
  {
    label: "Blog",
    to: "/blog",
  },
  {
    label: "Locations",
    to: "/locations",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [location]);
  return (
    <>
      <div className="utility-bar">
        <div className="site-shell utility-inner">
          <span>
            <span className="utility-dot" /> Serving Monrovia & the San Gabriel
            Valley
          </span>
          <div className="hidden items-center gap-5 sm:flex">
            <span>Mon–Fri · 8:00 AM–5:00 PM</span>
            <span>Sat · By appointment</span>
            <a href="tel:+16265244255" className="utility-phone">
              (626) 524-4255
            </a>
          </div>
          <a
            href="tel:+16265244255"
            className="flex items-center gap-1.5 sm:hidden"
          >
            <Phone size={11} /> Call (626) 524-4255
          </a>
        </div>
      </div>
      <header
        className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}
      >
        <div className="site-shell header-inner ">
          <Link
            to="/"
            className="brand-lockup"
            aria-label="626 Bath and Tile home"
          >
            <img
              src={logo}
              alt="626 Bath and Tile"
              className="h-12 w-auto sm:h-14 m-4 rounded-md"
            />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(item => (
              <Link
                to={item.to}
                className={
                  location.pathname === item.to
                    ? "nav-link nav-link-active"
                    : "nav-link"
                }
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a href="tel:+16265244255" className="header-phone">
            <Phone size={14} fill="currentColor" /> <span>(626) 524-4255</span>
          </a>
          <button
            className="mobile-menu-button"
            type="button"
            onClick={() => setOpen(value => !value)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="mobile-nav-panel">
            <div className="site-shell mobile-nav-links">
              {navItems.map(item => (
                <Link to={item.to} className="mobile-nav-link" key={item.label}>
                  {item.label}
                  <span>↗</span>
                </Link>
              ))}
              <a href="tel:+16265244255" className="mobile-nav-call">
                <Phone size={16} /> Call (626) 524-4255
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
