import { useState, useEffect } from "react";
import SiteHeader from "../components/site/SiteHeader";
import SiteFooter from "../components/site/SiteFooter";
import gallery1 from "../assets/gallery1.webp";
import gallery2 from "../assets/gallery2.webp";
import gallery5 from "../assets/gallery5.webp";
import gallery6 from "../assets/gallery6.webp";
import gallery7 from "../assets/gallery7.webp";
import gallery8 from "../assets/gallery8.webp";
import gallery9 from "../assets/gallery9.webp";
import gallery10 from "../assets/gallery10.webp";
import showertile from "../assets/showertile.jpg";
import gallery11 from "../assets/gallery11.webp";
import gallery12 from "../assets/gallery12.webp";
import heroImage from "../assets/hero.jpg";
const galleryImages = [
  { src: gallery6, title: "Primary Bath", location: "Monrovia" },
  { src: gallery2, title: "Tile Detail", location: "Arcadia" },
  { src: gallery12, title: "Tile Work", location: "Pasadena" },
  { src: gallery1, title: "Custom Bath", location: "Sierra Madre" },
  { src: gallery11, title: "Kitchen Backsplash", location: "Duarte" },
  { src: showertile, title: "Shower Tile", location: "Monrovia" },
  { src: gallery7, title: "Floor Installation", location: "Glendora" },
  { src: gallery8, title: "Bathroom Refresh", location: "Arcadia" },
  { src: gallery9, title: "Finished Kitchen", location: "San Gabriel" },
  { src: gallery10, title: "Bath Detail", location: "Pasadena" },
  { src: gallery5, title: "Walk-In Shower", location: "Alhambra" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setSelected(null);
    }
    if (selected) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SiteHeader />
      <main>
        <section className="page-hero locations-hero h-[500px]">
          <img src={heroImage} alt="Warm stone tile in a completed bathroom" />
          <div className="hero-overlay" />
          <div className="site-shell page-hero-content">
            <p className="eyebrow eyebrow-light">
              <span className="eyebrow-dot" /> Gallery / recent work
            </p>
           <h1>
              Proof is in the <em className="not-italic">finished details.</em>
            </h1>
             <p className="mt-3 text-gray-200 max-w-2xl">
              Take a look through recent bathrooms, showers, floors, and kitchens completed for local homeowners.
            </p>
          </div>
        </section>
        

        <section className="py-12">
          <div className="site-shell">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Selected projects</p>
                <h2 className="text-2xl font-semibold">Made with <span className="text-indigo-600">care.</span></h2>
              </div>
              <p className="text-gray-500 max-w-xs">Each project is shaped around the home, material, and person living with it.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map(item => (
                <figure
                  className="relative cursor-pointer overflow-hidden rounded-lg bg-gray-50"
                  key={item.src}
                  onClick={() => setSelected(item)}
                  onKeyDown={e => (e.key === "Enter" ? setSelected(item) : null)}
                  tabIndex={0}
                >
                  <img
                    src={item.src}
                    alt={`${item.title} tile project in ${item.location}`}
                    loading="lazy"
                    className="w-full h-56 md:h-64 object-cover transition-transform duration-300 ease-out hover:scale-105"
                  />
                  <figcaption className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                    <span className="text-sm opacity-90">{item.location}</span>
                    <strong className="block mt-1">{item.title}</strong>
                  </figcaption>
                </figure>
              ))}
            </div>

            {selected && (
              <div
                role="dialog"
                aria-modal="true"
                className="fixed inset-0 flex items-center justify-center bg-black/75 z-50 p-6"
                onClick={() => setSelected(null)}
              >
                <div
                  onClick={e => e.stopPropagation()}
                  className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center gap-3"
                >
                  <button
                    aria-label="Close"
                    onClick={() => setSelected(null)}
                    className="absolute -right-1.5 -top-1.5 bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-lg text-xl leading-none"
                  >
                    ×
                  </button>

                  <img
                    src={selected.src}
                    alt={selected.title}
                    className="max-w-full max-h-[86vh] object-contain rounded-md"
                  />

                  <figcaption className="text-gray-200 text-center text-sm">
                    <div className="opacity-90">{selected.location}</div>
                    <strong className="block mt-1">{selected.title}</strong>
                  </figcaption>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
