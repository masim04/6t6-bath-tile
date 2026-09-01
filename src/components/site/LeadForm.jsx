/* 626 Bath and Tile style: warm ivory form surface, precise labels, compact fields, and an orange action that feels confident rather than loud. */
import { useState } from "react";
import { ArrowUpRight, Check, Phone } from "lucide-react";
export default function LeadForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitted(true);
  };
  if (submitted) {
    return (
      <div className="form-success">
        <div className="success-icon">
          <Check size={20} />
        </div>
        <p className="eyebrow eyebrow-dark">Message received</p>
        <h3>We’ll be in touch shortly.</h3>
        <p>
          Thanks for reaching out to 626 Bath and Tile. For a faster reply, call
          us directly.
        </p>
        <a href="tel:+16265244255" className="form-call-link">
          <Phone size={15} /> (626) 524-4255 <ArrowUpRight size={15} />
        </a>
      </div>
    );
  }
  return (
    <form
      className={`lead-form ${compact ? "lead-form-compact" : ""}`}
      onSubmit={handleSubmit}
    >
      <div className="form-row">
        <label>
          <span>Name</span>
          <input name="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Phone</span>
          <input
            name="phone"
            type="tel"
            placeholder="(626) 000-0000"
            required
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            placeholder="you@email.com"
            required
          />
        </label>
        <label>
          <span>Zip code</span>
          <input name="zip" placeholder="91706" />
        </label>
      </div>
      <label>
        <span>What are you thinking about?</span>
        <textarea
          name="notes"
          placeholder="Tell us a little about the room, the timing, or the feeling you want to create."
          rows={compact ? 3 : 4}
        />
      </label>
      <button type="submit" className="button button-orange form-submit">
        Request a conversation <ArrowUpRight size={16} />
      </button>
      <p className="form-note">
        No pressure, no vague estimates. Just a clear next step.
      </p>
    </form>
  );
}
