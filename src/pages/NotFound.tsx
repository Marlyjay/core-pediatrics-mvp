import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
      <p className="font-serif text-sm italic text-terracotta">404</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold text-ink">Page not found</h1>
      <p className="mt-3 text-sm leading-relaxed text-charcoal">
        The page you're looking for doesn't exist in this prototype.
      </p>
      <Link to="/" className="mt-6 inline-block rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-ivory hover:bg-charcoal">
        Back to home
      </Link>
    </div>
  );
}
