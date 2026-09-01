import { Check, MapPin } from "lucide-react";
import SiteHeader from "../components/site/SiteHeader";
import SiteFooter from "../components/site/SiteFooter";
import heroImage from "../assets/hero.jpg";
import gallery1 from "../assets/gallery1.webp";
import gallery2 from "../assets/gallery2.webp";
import gallery3 from "../assets/gallery3.webp";
import gallery6 from "../assets/gallery6.webp";
import gallery7 from "../assets/gallery7.webp";
import gallery12 from "../assets/gallery12.webp";

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

export default function About() {
  return (
    <div className="site-page">
      <SiteHeader />
      <main>
        <section className="page-hero h-[500px]">
          <img src={heroImage} alt="Careful tile installation" />
          <div className="hero-overlay" />
          <div className="site-shell page-hero-content p-8">
            <p className="eyebrow eyebrow-light">
              <span className="eyebrow-dot" /> About 626 Bath & Tile
            </p>
            <h1>
              Local work with a <em>careful point of view.</em>
            </h1>
            <p>
              We create bathrooms, kitchens, and tile installations that are
              every bit as useful as they are beautiful.
            </p>
          </div>
        </section>
        <section className="content-section">
          <div className="site-shell two-column-story">
            <div>
              <p className="eyebrow eyebrow-dark">Our approach</p>
              <h2>
                Details are not the last step. <span>They are the work.</span>
              </h2>
            </div>
            <div>
              <p>
                626 Bath & Tile brings clear communication, thoughtful material
                direction, and precise craft to homes throughout Monrovia and
                the surrounding San Gabriel Valley. We listen first, plan with
                purpose, and keep the jobsite respectful from the first day
                through the final walkthrough.
              </p>
              <p>
                Many clients tell us that the difference is in the small
                decisions — a slightly shifted fixture, a tile orientation
                that improves flow, or a niche that finally organizes the
                everyday items. Those are the changes that make a room feel
                purposeful rather than simply renovated.
              </p>
              <div className="check-list">
                <span>
                  <Check size={16} /> Clear, practical guidance
                </span>
                <span>
                  <Check size={16} /> Durable installation methods
                </span>
                <span>
                  <Check size={16} /> A tidy, considerate process
                </span>
              </div>
              <blockquote className="testimonial mt-6 p-4 bg-gray-50 border-l-4 border-[#f46b2a]">
                “They treated our home like it was their own — thoughtful,
                clean, and finished on time. I love the way the tile meets the
                countertop.” — A satisfied client
              </blockquote>
            </div>
          </div>
        </section>

        <section className="gallery-section">
          <div className="site-shell">
            <div className="section-heading-row">
              <div>
                <p className="eyebrow eyebrow-dark">Our work</p>
                <h2>
                  Gallery <span>Highlights.</span>
                </h2>
              </div>
            </div>
            <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {[gallery1, gallery2, gallery3, gallery6, gallery7, gallery12].map((img, i) => (
                <div className="gallery-item overflow-hidden rounded shadow-sm" key={i}>
                  <img src={img} alt={`Project ${i + 1}`} className="w-full h-48 object-cover" />
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-600">
              Images show selected details and finished rooms. Each project is
              tailored to the site — layout, substrate, and waterproofing are
              resolved on a case-by-case basis to ensure longevity and
              performance.
            </p>
          </div>
        </section>
        <section className="locations-section">
          <div className="site-shell locations-grid flex flex-col ">
            <div>
              <p className="eyebrow eyebrow-dark">Built for local homes</p>
              <h2>
                Based in <span>Monrovia.</span>
              </h2>
              <p>
                Our business address is 1521 Pilgrim Way, Monrovia, CA 91016. We
                serve homeowners within approximately 20 miles.
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
      </main>
      <SiteFooter />
    </div>
  );
}
