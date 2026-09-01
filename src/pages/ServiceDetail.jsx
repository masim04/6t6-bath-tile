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
import { Link, useParams } from "react-router-dom";
import SiteHeader from "../components/site/SiteHeader";
import SiteFooter from "../components/site/SiteFooter";
import kitchenImage from "../assets/kitchen.jpg";
import showerImage from "../assets/shower.jpg";
import NotFound from "./NotFound";

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
  },
  {
    number: "03",
    title: "Ceramic Tile Floor Installation",
    slug: "ceramic-tile-floor-installation",
    description:
      "Precise layout, durable setting, and clean grout work for floors that stay beautiful under real life.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Walk In Showers",
    slug: "walk-in-showers",
    description:
      "Custom shower spaces shaped around how you move, with refined waterproofing and modern fixtures.",
    icon: ShowerHead,
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
  },
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(item => item.slug === slug);
  if (!service) return <NotFound />;
  const image = service.image ?? showerImage;
  return (
    <div className="site-page">
      <SiteHeader />
      <main>
        <section className="page-hero">
          <img src={image} alt={service.title} />
          <div className="hero-overlay" />
          <div className="site-shell page-hero-content">
            <p className="eyebrow eyebrow-light">
              <span className="eyebrow-dot" /> Service {service.number} / 626
              Bath & Tile
            </p>
            <h1>
              {service.title} <em>done with care.</em>
            </h1>
            <p>{service.description}</p>
          </div>
        </section>
        <section className="content-section">
          <div className="site-shell two-column-story">
            <div>
              <p className="eyebrow eyebrow-dark">A useful process</p>
              <h2>
                Thoughtful work for a room that <span>works beautifully.</span>
              </h2>
            </div>
            <div>
              <p>
                Every {service.title.toLowerCase()} project begins with a
                conversation about your home, priorities, and the way you want
                the space to feel. We help clarify the details early, so the
                installation has a steady path forward.
              </p>
              <p>
                Our work balances material knowledge with exacting prep and
                installation. The result is a durable, refined finish that
                supports your everyday routine.
              </p>
              <div className="check-list">
                <span>
                  <Check size={16} /> Planning and material guidance
                </span>
                <span>
                  <Check size={16} /> Careful preparation and installation
                </span>
                <span>
                  <Check size={16} /> Clear communication from start to finish
                </span>
              </div>
              <Link to="/contact" className="button button-navy">
                Discuss your project <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>
        <section className="service-detail-more">
          <div className="site-shell">
            <p className="eyebrow eyebrow-dark">Explore more</p>
            <div className="related-services">
              {services
                .filter(item => item.slug !== service.slug)
                .slice(0, 3)
                .map(item => (
                  <Link to={`/services/${item.slug}`} key={item.slug}>
                    <span>{item.number}</span>
                    <strong>{item.title}</strong>
                    <ArrowUpRight size={16} />
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
