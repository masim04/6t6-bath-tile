/* 626 Bath and Tile style: image-led project notes with cool blue shadows, warm material highlights, and concise editorial captions. */
import { ArrowUpRight, Ruler, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/site/SiteHeader";
import SiteFooter from "../components/site/SiteFooter";
import LeadForm from "../components/site/LeadForm";
import showerImage from "../assets/shower.jpg";
import kitchenImage from "../assets/kitchen.jpg";

export default function Projects() {
  return (
    <div className="site-page">
      <SiteHeader />
      <main>
        <section className="page-hero projects-page-hero">
          <img
            src={showerImage}
            alt="Completed walk-in shower with limestone tile"
          />
          <div className="hero-overlay" />
          <div className="site-shell page-hero-content">
            <p className="eyebrow eyebrow-light">
              <span className="eyebrow-dot" /> Project notes / selected work
            </p>
            <h1>
              Spaces that make the <em>ordinary feel elevated.</em>
            </h1>
            <p>
              A glimpse at the material choices, clean lines, and practical
              thinking that guide our work.
            </p>
          </div>
        </section>
        <section className="project-notes-section">
          <div className="site-shell">
            <div className="project-feature">
              <div className="project-feature-image">
                <img
                  src={showerImage}
                  alt="Custom walk-in shower with pale stone tile"
                />
              </div>
              <div className="project-feature-copy">
                <p className="eyebrow eyebrow-dark">
                  01 / Primary bath · Monrovia
                </p>
                <h2>
                  Soft light, <span>clean lines.</span>
                </h2>
                <p>
                  A quieter palette can still have presence. Here, warm
                  limestone tile, a thin blue mosaic accent, and dark fixtures
                  create a space that feels calm at 7 a.m. and considered long
                  after.
                </p>
                <div className="project-detail-list">
                  <span>
                    <Ruler size={16} /> Large-format stone tile
                  </span>
                  <span>
                    <Sparkles size={16} /> Frameless glass enclosure
                  </span>
                </div>
                <Link className="text-link" to="/contact">
                  Plan a room like this <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
            <div className="project-feature project-feature-reverse">
              <div className="project-feature-image">
                <img
                  src={kitchenImage}
                  alt="Hand-laid ceramic kitchen backsplash"
                />
              </div>
              <div className="project-feature-copy">
                <p className="eyebrow eyebrow-dark">02 / Kitchen · Arcadia</p>
                <h2>
                  A backsplash with <span>rhythm.</span>
                </h2>
                <p>
                  Hand-laid ceramic tile adds a little movement without asking
                  the whole room to perform. The finish feels warm, useful, and
                  right at home with oak and deep blue cabinetry.
                </p>
                <div className="project-detail-list">
                  <span>
                    <Ruler size={16} /> Bone ceramic tile
                  </span>
                  <span>
                    <Sparkles size={16} /> Custom edge detailing
                  </span>
                </div>
                <Link className="text-link" to="/contact">
                  Start your project <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-section contact-section-short">
          <div className="site-shell contact-grid">
            <div className="contact-copy">
              <p className="eyebrow eyebrow-light">Your room next?</p>
              <h2>Let’s make the details count.</h2>
              <p>
                Bring us your questions, reference images, or half-formed idea.
                We’ll help you find the shape of it.
              </p>
            </div>
            <div className="contact-form-wrap">
              <LeadForm compact />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
