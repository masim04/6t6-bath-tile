/* 626 Bath and Tile style: offset service tile with orange index, restrained linework, and material-led hover depth. */
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceCard({
  number,
  title,
  slug,
  description,
  icon: Icon,
  image,
  featured = false,
}) {
  return (
    <article
      className={[
        "group relative flex min-h-[440px] flex-col overflow-hidden rounded-[26px] border border-slate-200 bg-white text-slate-800 shadow-[0_18px_45px_rgba(16,47,70,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(16,47,70,0.12)]",
        featured ? "lg:col-span-2" : "",
      ].join(" ")}
    >
      {image ? (
        <div className="relative h-64 overflow-hidden sm:h-72 lg:h-80">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-900/10 to-transparent" />
        </div>
      ) : (
        <div className="flex h-28 items-center justify-between border-b border-slate-200 px-6 pt-6">
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-sky-700">
            {number}
          </span>
          <div className="rounded-full border border-sky-100 bg-sky-50 p-2 text-sky-700">
            <Icon size={18} strokeWidth={1.8} />
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col justify-between px-5 pb-5 pt-5 sm:px-6">
        <div>
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-sky-700">
              {number}
            </span>
            <div className="rounded-full border border-sky-100 bg-sky-50 p-2 text-sky-700">
              <Icon size={18} strokeWidth={1.8} />
            </div>
          </div>

          <h3 className="mb-3 text-2xl font-semibold tracking-[-0.05em] text-slate-800 sm:text-3xl">
            {title}
          </h3>
          <p className="text-base leading-7 text-slate-600">{description}</p>
        </div>

        <Link
          to={`/services/${slug}`}
          className="mt-5 inline-flex items-center gap-2 self-start border-b border-orange-400 pb-1 text-[11px] font-black uppercase tracking-[0.18em] text-orange-500 transition hover:text-orange-600"
        >
          Explore service <ArrowUpRight size={15} />
        </Link>
      </div>
    </article>
  );
}
