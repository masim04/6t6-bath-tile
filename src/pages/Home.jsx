/* 626 Bath and Tile style: cinematic blue hero, warm ivory editorial sections, orange conversion moments, asymmetric content placement, and tactile material imagery. */
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Bath,
  Brush,
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
import galleryImage from "../assets/gallery4.webp";
import gallery3 from "../assets/gallery3.webp";
import gallery6 from "../assets/gallery6.webp";
import gallery1 from "../assets/gallery1.webp";
import gallery7 from "../assets/gallery7.webp";
import gallery9 from "../assets/gallery9.webp";
import gallery4 from "../assets/gallery4.webp";
const services = [
  {
    number: "01",
    title: "Bathroom Renovation",
    slug: "bathroom-renovation",
    description:
      "A considered refresh from layout and surfaces to lighting, storage, and the final fixture set.",
    icon: Bath,
    image: gallery6,
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
    image: gallery7,
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

const process = [
  {
    step: "01",
    title: "Walk the space",
    description:
      "We look at the room, listen to what is not working, and clarify the result you want.",
  },
  {
    step: "02",
    title: "Shape the details",
    description:
      "You receive a practical direction for layout, tile, fixtures, and the decisions that matter most.",
  },
  {
    step: "03",
    title: "Install with care",
    description:
      "Our team keeps the site moving, the work precise, and the timeline easy to understand.",
  },
];

const proofPoints = [
  { value: "10+", label: "Years of craft" },
  { value: "100%", label: "Care in the details" },
  { value: "Many", label: "Cities served" },
];

export default function Home() {
  return (
    <div className="site-page">
      <SiteHeader />
      <main>
        <section className="hero-section">
          <img
            className="hero-bg"
            src={heroImage}
            alt="A calm, newly renovated walk-in shower with warm stone tile"
          />
          <div className="hero-overlay" />
          <div className="hero-grain" />
          <div className="site-shell hero-inner">
            <div className="hero-copy animate-rise">
              <p className="eyebrow eyebrow-light">
                <span className="eyebrow-dot" /> Thoughtful renovations ·
                Monrovia, CA
              </p>
              <h1>
                Make the room you use every day{" "}
                <em>feel like the room you deserve.</em>
              </h1>
              <p className="hero-description">
                Bathroom renovations, designer tile work, and custom walk-in
                showers finished with a steady hand and a clear plan.
              </p>
              <div className="hero-actions">
                <a className="button button-orange" href="tel:+16265244255">
                  <Phone size={15} fill="currentColor" /> Call (626) 524-4255
                </a>
                <a className="button button-ghost" href="#contact">
                  Request a conversation <ArrowUpRight size={16} />
                </a>
              </div>
              <div className="hero-trust">
                <span>
                  <ShieldCheck size={14} /> Precise installation
                </span>
                <span>
                  <Sparkles size={14} /> Beautifully considered
                </span>
                <span>
                  <Clock3 size={14} /> Timely, tidy work
                </span>
              </div>
            </div>
            <div className="hero-image-card animate-rise-delayed">
              <img
                src={gallery7}
                alt="Tile installer aligning a porcelain tile"
              />
              <div className="image-card-caption">
                <span>Field note / 01</span>
                <span>Craft in every line</span>
              </div>
            </div>
          </div>
          <a className="hero-scroll-cue" href="#about">
            <span>Scroll to explore</span>
            <ArrowDown size={16} />
          </a>
        </section>
        <section
          className="proof-ribbon"
          aria-label="Why homeowners choose 626 Bath and Tile"
        >
          <div className="site-shell proof-grid">
            {proofPoints.map(point => (
              <div className="proof-stat" key={point.label}>
                <strong>{point.value}</strong>
                <span>{point.label}</span>
              </div>
            ))}
            <div className="proof-ribbon-note">
              <span className="orange-rule" />{" "}
              <span>Bathrooms & kitchens, made to last.</span>
            </div>
          </div>
        </section>
        <section id="about" className="intro-section">
          <div className="site-shell ">
            <div className="section-kicker text-3xl text-[#f46b2a]">
              <span className="kicker-number">01 </span>
              <span className="orange-rule " />
              <span>Our point of view</span>
            </div>
            <div className="flex flex-col gap-8 md:flex-row md:gap-20 items-start">
              <div className="intro-copy w-full md:w-[800px] p-6">
                <p className="eyebrow eyebrow-dark">A better kind of build</p>
                <h2>
                  Good design is felt in the <span>way a room works.</span>
                </h2>
                <p>
                  We help homeowners in the San Gabriel Valley make the everyday
                  rooms of home feel calmer, brighter, and more like their own.
                  From the first layout conversation to the final line of grout,
                  the work is clear, careful, and built around how you live.
                </p>
                <Link className="text-link" to="/contact">
                  Talk through your space <ArrowUpRight size={16} />
                </Link>
              </div>
              <aside className="intro-aside w-full md:w-1/3 mt-2 md:mt-0">
                <div className="aside-mark pt-14">626</div>
                <p className="mt-4">
                  Local insight, considered materials, and a finish that feels
                  right five years from now.
                </p>
                <span className="block mt-4">— 626 Bath & Tile</span>
              </aside>
            </div>
          </div>
        </section>
        <section id="services" className="services-section">
          <div className="site-shell">
            <div className="section-heading-row">
              <div>
                <p className="eyebrow eyebrow-dark">What we do</p>
                <h2>
                  Rooms with a <span>point of view.</span>
                </h2>
              </div>
              <Link className="text-link section-heading-link" to="/services">
                View all services <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="services-grid">
              {services.slice(0, 3).map((service) => (
                <ServiceCard {...service} key={service.title} />
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 26 }}>
              <Link className="button button-outline-light" to="/services">
                View all services <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>
        <section className="process-section">
          <div className="process-image-wrap">
            <img
              src={gallery4}
              alt="Warm ceramic kitchen backsplash with blue cabinetry"
            />
            <div className="process-image-label">Material / 02</div>
          </div>
          <div className="process-content">
            <p className="eyebrow eyebrow-light">
              How it feels to work with us
            </p>
            <h2>
              A clear path from <em>first thought</em> to finished room.
            </h2>
            <div className="process-list">
              {process.map(item => (
                <div className="process-item" key={item.step}>
                  <span>{item.step}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link className="button button-outline-light" to="/contact">
              Start with a conversation <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
        <section id="projects" className="projects-section">
          <div className="site-shell">
            <div className="section-heading-row projects-heading">
              <div>
                <p className="eyebrow eyebrow-dark">Selected work</p>
                <h2>
                  Quiet details. <span>Big difference.</span>
                </h2>
              </div>
              <Link className="text-link section-heading-link" to="/gallery">
                See the gallery <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="projects-grid">
              <Link to="/gallery" className="project-card project-card-large h-[400px] sm:w-full w-full object-cover">
                <img
                  src={gallery6}
                  alt="Completed custom walk-in shower with limestone tile"
                />
                <div className="project-overlay flex flex-col p-6">
                  <span>Monrovia / Primary bath</span>
                  <strong className="pb-4">Soft light, clean lines.</strong>
                   <ArrowUpRight size={18} /> 
                </div>
              </Link>
              <Link to="/gallery" className="project-card project-card-small">
                <img
                  src={galleryImage}
                  alt="Hand-laid ceramic kitchen backsplash"
                />
                <div className="project-overlay flex flex-col p-6">
                  <span>Arcadia / Kitchen</span>
                  <strong className="pb-4">A backsplash with rhythm.</strong>
                  <ArrowUpRight size={18} />
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="locations-section">
          <div className="site-shell locations-grid flex flex-col">
            <div>
              <p className="eyebrow eyebrow-dark">Where we work</p>
              <h2>
                Good work, <span>close to home.</span>
              </h2>
              <p>
                Based in Monrovia and serving homeowners across the San Gabriel
                Valley.
              </p>
            </div>
            <div className="location-chips">
              {locations.map(location => (
                <span key={location}>
                  <MapPin size={14} /> {location}
                </span>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="site-shell contact-grid">
            <div className="contact-copy">
              <p className="eyebrow eyebrow-light">Let’s make a plan</p>
              <h2>Tell us what the room is missing.</h2>
              <p>
                Share a few details and we’ll get back to you with a thoughtful
                next step. If you already know what you need, call us directly.
              </p>
              <a href="tel:+16265244255" className="contact-phone">
                <Phone size={17} fill="currentColor" /> (626) 524-4255{" "}
                <ArrowUpRight size={16} />
              </a>
              <div className="contact-note">
                <Check size={15} /> Serving Monrovia, Duarte, Arcadia, Sierra
                Madre, and Pasadena
              </div>
             <Link to="/contact">
               <button className="button button-orange m-10 ">
              Contact US <ArrowUpRight size={16} />
             </button>
              </Link>
            </div>
              <div className="contact-form-wrap contact-detail-form ">
                <img src={gallery9} alt="Description of the image" className="w-full h-100 object-cover rounded-lg" />
              </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      
    </div>
  );
}
