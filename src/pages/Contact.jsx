/* 626 Bath and Tile style: generous ivory contact layout, navy conversion panel, orange detail markers, and a calm low-friction form experience. */
import { Mail, MapPin, Phone } from "lucide-react";
import SiteHeader from "../components/site/SiteHeader";
import SiteFooter from "../components/site/SiteFooter";
import LeadForm from "../components/site/LeadForm";
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

export default function Contact() {
  return (
    <div className="site-page">
      <SiteHeader />
      <main>
        <section className="page-hero contact-page-hero h-[500px]">
          <img src={heroImage} alt="Warm stone tile in a completed bathroom" />
          <div className="hero-overlay" />
          <div className="site-shell page-hero-content">
            <p className="eyebrow eyebrow-light">
              <span className="eyebrow-dot" /> Contact / let’s talk
            </p>
            <h1>
              Start with the room. <em>We’ll help with the rest.</em>
            </h1>
            <p>
              Whether you have a clear plan or a few questions, a good project
              starts with a good conversation.
            </p>
          </div>
        </section>
        <section className="contact-detail-section">
          <div className="site-shell contact-detail-grid">
            <div className="contact-detail-copy">
              <p className="eyebrow eyebrow-dark">Reach out directly</p>
              <h2>
                Good design starts with <span>a useful conversation.</span>
              </h2>
              <p>
                Tell us what you’re thinking about and we’ll respond with a
                practical next step. Prefer to talk? We’re happy to start by
                phone.
              </p>
              <div className="contact-detail-list flex flex-col gap-6 p-6">
                <a href="tel:+16265244255">
                  <span className="contact-detail-icon">
                    <Phone size={16} />
                  </span>
                  <span>
                    <small>Call us: </small>
                    <strong className="text-blue-600 hover:text-blue-800">
                      (626) 524-4255
                    </strong>
                  </span>
             
                </a>
                <a href="mailto:hello@626bathandtile.com">
                  <span className="contact-detail-icon">
                    <Mail size={16} />
                  </span>
                  <span>
                    <small>Email: </small>
                    <strong className="text-blue-600 hover:text-blue-800">
                      hello@626bathandtile.com
                    </strong>
                  </span>
                </a>
                <div>
                  <span className="contact-detail-icon">
                    <MapPin size={16} />
                  </span>
                  <span>
                    <small>Serving: </small>
                    <strong className="text-blue-600 hover:text-blue-800">
                      Monrovia + the San Gabriel Valley
                    </strong>
                  </span>
                </div>
              </div>
              <div className="contact-city-row">
                {locations.map(location => (
                  <span key={location}>{location}</span>
                ))}
              </div>
            </div>
            <div className="contact-form-wrap contact-detail-form lg:h-[1100px]">
              <LeadForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
