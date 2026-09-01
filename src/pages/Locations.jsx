import { MapPin } from "lucide-react";
import SiteHeader from "../components/site/SiteHeader";
import SiteFooter from "../components/site/SiteFooter";
import heroImage from "../assets/hero.jpg";

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

export default function Locations() {
  return (
    <div className="site-page">
      <SiteHeader />
      <main>
        <section className="page-hero locations-hero h-[500px]">
          <img src={heroImage} alt="Warm stone tile in a completed bathroom" />
          <div className="hero-overlay" />
          <div className="site-shell page-hero-content text-left">
            <p className="eyebrow eyebrow-light">
              <span className="eyebrow-dot" /> Service area
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Monrovia and the <em>communities around it.</em>
            </h1>
            <p className="mt-4 max-w-2xl text-base md:text-lg text-white/90">
              We serve homeowners from our business address at 1521 Pilgrim Way,
              Monrovia, CA 91016, within a 20-mile radius.
            </p>
          </div>
        </section>
        <section className="content-section">
          <div className="site-shell location-page-grid grid gap-8 lg:grid-cols-2 items-start">
            <div className="max-w-prose">
              <p className="eyebrow eyebrow-dark">Where we work</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl leading-snug">
                Close enough for <span>thoughtful service.</span>
              </h2>
              <p className="mt-4 text-base md:text-lg text-slate-700">
                Not sure whether your home is in our service area? Give us a
                call—we’ll be glad to talk through your project and location.
              </p>
            </div>
            <div className="location-list-large mt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {locations.map(location => (
                  <span
                    key={location}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
                  >
                    <MapPin size={17} /> {location}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
