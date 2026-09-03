/* 626 Bath and Tile style: a dark editorial footer with compact service navigation, orange detail rules, and clear local contact cues. */
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import logo from "../../assets/logo.png";

const services = [
  {
    number: "01",
    title: "Bathroom Renovation",
    slug: "bathroom-renovation",
  },
  {
    number: "02",
    title: "Designer Services",
    slug: "designer-services",
  },
  {
    number: "03",
    title: "Ceramic Tile Floor Installation",
    slug: "ceramic-tile-floor-installation",
  },
  {
    number: "04",
    title: "Walk In Showers",
    slug: "walk-in-showers",
  },
  {
    number: "05",
    title: "Kitchen Backsplash Installation",
    slug: "kitchen-backsplash-installation",
  },
  {
    number: "06",
    title: "Kitchen Tile Installs",
    slug: "kitchen-tile-installs",
  },
];

const locations = [
  "Monrovia",
  "Duarte",
  "Arcadia",
  "Sierra Madre",
  "Pasadena",
  "Glendora",
  "San Gabriel",
  "Alhambra",
  "South Pasadena",
  "La Cañada Flintridge",
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-topline">
        <span>626 BATH & TILE</span>
        <span className="footer-line" />
        <span>Bathrooms · Kitchens · Tile</span>
      </div>
      <div className="site-shell footer-main">
        <div className="footer-brand-column">
          <Link
            to="/"
            className="brand-lockup footer-brand-lockup"
            aria-label="626 Bath and Tile home"
          >
            <img
              src={logo}
              alt="626 Bath and Tile"
              className="h-12 w-auto sm:h-14 m-4"
            />
          </Link>
          <p>
            Thoughtful renovations and precise tile work for the rooms that hold
            your everyday rituals.
          </p>
          <a href="tel:+16265244255" className="footer-call">
            <Phone size={16} /> (626) 524-4255 <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="footer-nav-column">
          <p className="footer-label">Explore</p>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/locations">Locations</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-nav-column footer-services">
          <p className="footer-label">Services</p>
          {services.slice(0, 4).map(service => (
            <Link to={`/services/${service.slug}`} key={service.title}>
              {service.title}
            </Link>
          ))}
        </div>
        <div className="footer-contact-column">
          <p className="footer-label">Find us in</p>
          <div className="location-list">
            {locations.map(location => (
              <span key={location}>
                <MapPin size={13} /> {location}
              </span>
            ))}
          </div>
          <a href="mailto:hello@626bathandtile.com" className="footer-email">
            <Mail size={15} /> hello@626bathandtile.com
          </a>
        </div>
      </div>
      <div className="site-shell footer-bottom">
        <span>
          © {new Date().getFullYear()} 626 Bath and Tile. All rights reserved.
        </span>
        <span>
          Digital Excellence by{" "}
          <a
            href="https://magnivodigital.com/"
            target="_blank"
            rel="noreferrer"
          >
            Magnivo Digital Group
          </a>
        </span>
      </div>
    </footer>
  );
}
