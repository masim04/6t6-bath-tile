/* 626 Bath and Tile style: branded navy recovery screen with direct routes back into services, projects, and contact. */
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/site/SiteHeader";
import SiteFooter from "../components/site/SiteFooter";
export default function NotFound() {
  return (
    <div className="site-page">
      <SiteHeader />
      <main>
        <section className="page-hero contact-page-hero">
          <div className="site-shell page-hero-content">
            <p className="eyebrow eyebrow-light">
              <span className="eyebrow-dot" /> 404 / page not found
            </p>
            <h1>
              That page took a <em>wrong turn.</em>
            </h1>
            <p>Let’s get you back to the rooms and details that matter.</p>
            <div className="hero-actions">
              <Link className="button button-orange" to="/">
                Back to home <ArrowUpRight size={16} />
              </Link>
              <Link className="button button-ghost" to="/services">
                View services <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
