import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import SiteHeader from "../components/site/SiteHeader";
import SiteFooter from "../components/site/SiteFooter";
import gallery1 from "../assets/gallery1.webp";
import gallery3 from "../assets/gallery3.webp";
import gallery5 from "../assets/gallery5.webp";
import gallery7 from "../assets/gallery7.webp";
import gallery11 from "../assets/gallery11.webp";
import NotFound from "./NotFound";

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
    image: gallery5,
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

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(item => item.slug === slug);
  if (!post) return <NotFound />;

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll(".article-content h2[id]")
    );
    const tocLinks = Array.from(document.querySelectorAll(".toc-link"));
    if (!headings.length || !tocLinks.length) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            tocLinks.forEach(a => {
              const href = a.getAttribute("href");
              a.classList.toggle("toc-active", href === `#${id}`);
            });
          }
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    headings.forEach(h => observer.observe(h));
    return () => observer.disconnect();
  }, [slug]);
  return (
    <div className="site-page">
      <SiteHeader />
      <main>
        <article className="article-page pt-8 md:pt-12">
            <div className="site-shell article-header max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-6">
              <Link className="article-back inline-flex items-center gap-2 text-sm text-gray-700" to="/blog">
                <ArrowLeft size={15} /> Back to journal
              </Link>
              <p className="eyebrow eyebrow-dark mt-4 text-sm uppercase tracking-wider text-gray-600">{post.category}</p>
              <h1 className="mt-2 text-3xl md:text-5xl leading-tight">{post.title}</h1>
              <p className="article-meta text-sm text-gray-500 mt-2">
                {post.date} · {post.readTime}
              </p>
            </div>

            <div className="site-shell max-w-4xl mx-auto px-4 sm:px-6">
              <div className="article-image-wrap mt-6">
                <img
                  className="w-full h-72 sm:h-96 md:h-[520px] object-cover rounded-lg shadow-md mx-auto"
                  src={post.image}
                  alt={post.title}
                />
              </div>
            </div>

            <div className="site-shell article-layout max-w-5xl mx-auto px-4 sm:px-6 mt-10">
              <div className="md:flex md:gap-16">
                <aside className="md:w-1/4 mb-6 md:mb-0 pr-6 md:pr-8 md:border-r md:border-gray-100 md:sticky md:top-28">
                  <p className="text-sm font-semibold mb-3">In this article</p>
                  <nav className="flex flex-col gap-3 text-sm text-gray-600" aria-label="Article table of contents">
                      <a href="#start" className="toc-link hover:underline">Start with your routine</a>
                      <a href="#materials" className="toc-link hover:underline">Choose materials wisely</a>
                      <a href="#installation" className="toc-link hover:underline">Plan for the installation</a>
                    </nav>
                </aside>
                <div className="article-content md:w-3/4 text-base md:text-lg leading-relaxed space-y-6 text-gray-800 md:max-w-[65ch] md:mx-auto">
                  <p className="article-lead text-lg md:text-xl text-gray-700">
                    {post.excerpt} Good renovation decisions begin with
                    understanding what the room needs to do for you, not just how it
                    should look in a photograph.
                  </p>
                  <h2 id="start" className="mt-4 text-xl md:text-2xl">Start with your daily routine</h2>
                  <p>
                    Notice the friction in the current room. Is there a traffic jam
                    at the vanity? Is the shower hard to keep clean? Are the items
                    you reach for every morning nowhere near the place you use them?
                    These observations give a project direction that is grounded in
                    real life.
                  </p>
                  <p>
                    Once the routine is clear, a layout, storage plan, and material
                    palette become easier to evaluate. The strongest choices tend to
                    be the ones that solve a practical need while keeping the room
                    calm and cohesive.
                  </p>
                  <h2 id="materials" className="text-xl md:text-2xl">Choose materials with the whole room in mind</h2>
                  <p>
                    Tile, grout, fixtures, and lighting should work as a family. We
                    encourage homeowners to look at samples in their own light,
                    consider maintenance, and pay attention to scale before
                    committing. A beautiful material earns its place when it feels
                    good underfoot, cleans well, and supports the mood you want to
                    create.
                  </p>
                  <blockquote className="pl-4 border-l-4 border-gray-200 italic text-gray-600">
                    “A well-planned room feels simple because the hard thinking
                    happened before installation.”
                  </blockquote>
                  <h2 id="installation" className="text-xl md:text-2xl">Plan for a careful installation</h2>
                  <p>
                    Good preparation is invisible in a finished room, but it is what
                    gives the work its longevity. Clear scope, proper substrate
                    preparation, waterproofing where needed, and a considered layout
                    make the final result feel intentional from every angle.
                  </p>
                  <p>
                    If you are ready to talk through your own project, bring your
                    questions and a few reference images. We will help you find a
                    useful starting point.
                  </p>
                  <div>
                    <Link className="button button-navy" to="/contact">
                      Start a conversation <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
