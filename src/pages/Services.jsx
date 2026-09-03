/* 626 Bath and Tile style: calm blue masthead, ivory page surface, orange field-note markers, and service details presented as an editorial catalog. */
import {
  ArrowUpRight,
  Bath,
  Brush,
  Check,
  Layers3,
  Ruler,
  ShowerHead,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/site/SiteHeader";
import SiteFooter from "../components/site/SiteFooter";
import ServiceCard from "../components/site/ServiceCard";
import heroImage from "../assets/hero.jpg";
import kitchenImage from "../assets/kitchen.jpg";
import showerImage from "../assets/shower.jpg";
import gallery1 from "../assets/gallery1.webp";
import gallery2 from "../assets/gallery2.webp";
import gallery3 from "../assets/gallery3.webp";

const services = [
  {
    number: "01",
    title: "Bathroom Renovation",
    slug: "bathroom-renovation",
    description:
      "A considered refresh from layout and surfaces to lighting, storage, and the final fixture set.",
    icon: Bath,
    image: showerImage,
  },
  {
    number: "02",
    title: "Designer Services",
    slug: "designer-services",
    description:
      "Material direction, finish pairings, and a practical point of view that keeps the room cohesive.",
    icon: Brush,
    image: gallery1,
  },
  {
    number: "03",
    title: "Ceramic Tile Floor Installation",
    slug: "ceramic-tile-floor-installation",
    description:
      "Precise layout, durable setting, and clean grout work for floors that stay beautiful under real life.",
    icon: Layers3,
    image: gallery2,
  },
  {
    number: "04",
    title: "Walk In Showers",
    slug: "walk-in-showers",
    description:
      "Custom shower spaces shaped around how you move, with refined waterproofing and modern fixtures.",
    icon: ShowerHead,
    image: showerImage,
  },
  {
    number: "05",
    title: "Kitchen Backsplash Installation",
    slug: "kitchen-backsplash-installation",
    description:
      "A tailored tile plane that adds rhythm, texture, and a finished edge to the heart of the home.",
    icon: Ruler,
    image: kitchenImage,
  },
  {
    number: "06",
    title: "Kitchen Tile Installs",
    slug: "kitchen-tile-installs",
    description:
      "Thoughtful installation for floors, walls, and feature moments that connect the kitchen to the rest of the home.",
    icon: Utensils,
    image: gallery3,
  },
];

export default function Services() {
  return (
    <div className="site-page">
      <SiteHeader />
      <main>
        <section className="page-hero h-[500px]">
          <img
            src={heroImage}
            alt="Warm stone tile in a completed bathroom"
          />
          <div className="hero-overlay" />
          <div className="site-shell page-hero-content">
            <p className="eyebrow eyebrow-light">
              <span className="eyebrow-dot" /> Services / 626 Bath & Tile
            </p>
            <h1>
              The work behind a room that feels <em>just right.</em>
            </h1>
            <p>
              From the first tile sample to the final fixture, we make the
              process feel as considered as the finished space.
            </p>
          </div>
        </section>
        <section className="services-section services-page-section">
          <div className="site-shell">
            <div className="section-heading-row">
              <div>
                <p className="eyebrow eyebrow-dark">Our services</p>
                <h2>
                  Built around <span>how you live.</span>
                </h2>
              </div>
              <p className="section-side-note">
                Every project is different. The standard of care stays the same.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <ServiceCard {...service} key={service.title} />
              ))}
            </div>
          </div>
        </section>
        <section className="service-promise">
          <div className="site-shell promise-grid">
            <div>
              <p className="eyebrow eyebrow-light">The 626 standard</p>
              <h2>Thoughtful work, without the mystery.</h2>
            </div>
            <div className="promise-points">
              <p>
                <Check size={16} /> A clear plan before installation begins.
              </p>
              <p>
                <Check size={16} /> Material guidance grounded in real homes.
              </p>
              <p>
                <Check size={16} /> Tidy, respectful work in your space.
              </p>
            </div>
            <Link className="button button-outline-light" to="/contact">
              Talk through your project <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
