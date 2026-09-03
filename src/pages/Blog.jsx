import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/site/SiteHeader";
import SiteFooter from "../components/site/SiteFooter";
import heroImage from "../assets/hero.jpg";
import gallery1 from "../assets/gallery1.webp";
import gallery3 from "../assets/gallery3.webp";
import gallery9 from "../assets/gallery9.webp";
import gallery7 from "../assets/gallery7.webp";
import gallery11 from "../assets/gallery11.webp";

const blogPosts = [
  {
    slug: "how-to-plan-a-bathroom-renovation",
    category: "Bathroom Renovation",
    title: "How to Plan a Bathroom Renovation That Works Every Day",
    excerpt:
      "The useful decisions to make before selecting a single tile: layout, storage, light, and the rhythm of the morning.",
    image: gallery1,
    date: "August 18, 2026",
    readTime: "6 min read",
  },
  {
    slug: "choosing-tile-for-walk-in-shower",
    category: "Tile Guidance",
    title: "Choosing Tile for a Walk-In Shower: Beauty Meets Practicality",
    excerpt:
      "A straightforward guide to scale, slip resistance, grout lines, and finishes that feel right in a shower.",
    image: gallery3,
    date: "July 29, 2026",
    readTime: "5 min read",
  },
  {
    slug: "kitchen-backsplash-design-ideas",
    category: "Kitchen Design",
    title: "Five Ways a Kitchen Backsplash Can Bring a Room Together",
    excerpt:
      "From quiet texture to a graphic focal point, tile can give the hardest-working room in the house a clear point of view.",
    image: gallery9,
    date: "June 12, 2026",
    readTime: "4 min read",
  },
  {
    slug: "large-format-tile-guide",
    category: "Tile Guidance",
    title: "Is Large-Format Tile Right for Your Home?",
    excerpt:
      "A closer look at this clean-lined material choice, including where it shines and what careful installation requires.",
    image: gallery7,
    date: "May 21, 2026",
    readTime: "5 min read",
  },
  {
    slug: "bathroom-storage-that-doesnt-feel-cluttered",
    category: "Bathroom Renovation",
    title: "Bathroom Storage That Doesn’t Make the Room Feel Cluttered",
    excerpt:
      "Small choices around niches, vanities, and everyday placement make a calmer, more functional bathroom.",
    image: gallery11,
    date: "April 30, 2026",
    readTime: "4 min read",
  },
];

export default function Blog() {
  return (
    <div className="site-page">
      <SiteHeader />
      <main>
        <section className="page-hero blog-hero h-[500px]">
          <img src={heroImage} alt="Warm stone tile in a completed bathroom" />
          <div className="hero-overlay" />
          <div className="site-shell page-hero-content">
            <p className="eyebrow eyebrow-light">
              <span className="eyebrow-dot" /> Journal / ideas for home
            </p>
            <h1>
              Better rooms start with <em>better questions.</em>
            </h1>
            <p>
              Practical advice and material inspiration from the 626 Bath & Tile
              team.
            </p>
          </div>
        </section>
        <section className="blog-section">
          <div className="site-shell">
            <div className="section-heading-row">
              <div>
                <p className="eyebrow eyebrow-dark">Latest from the journal</p>
                <h2>
                  Notes for your <span>next project.</span>
                </h2>
              </div>
            </div>
            <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
              {blogPosts.map(post => (
                <article
                  className="blog-card bg-white rounded-lg overflow-hidden shadow-sm flex flex-col"
                  key={post.slug}
                >
                  <Link to={`/blog/${post.slug}`} className="blog-image block">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                  <div className="blog-card-copy p-6 flex-1 flex flex-col">
                    <p className="text-sm text-gray-500 mb-2">
                      {post.category} <span className="mx-2">·</span> {post.readTime}
                    </p>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 leading-snug">
                      <Link to={`/blog/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-700 mb-4">{post.excerpt}</p>
                    <div className="mt-auto">
                      <Link className="text-link inline-flex items-center font-medium" to={`/blog/${post.slug}`}>
                        Read article <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
