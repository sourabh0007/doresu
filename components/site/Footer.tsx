import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 pt-24 pb-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 pb-20">
          <div className="lg:col-span-5">
            <h3 className="font-serif text-4xl lg:text-5xl font-light leading-[1.05] tracking-tight">
              Soft luxury,<br/>thoughtfully made.
            </h3>
            <p className="mt-8 text-sm leading-relaxed text-ivory/70 max-w-md font-light">
              Doresu is a modern handcrafted luxury label rooted in softness, ease, and timeless everyday dressing. Thoughtfully designed in India for women who believe elegance should feel natural.
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="eyebrow text-ivory/60 mb-6">Shop</p>
            <ul className="space-y-3 text-sm font-light text-ivory/85">
              <li><Link to="/shop" className="link-underline">New Arrivals</Link></li>
              <li><Link to="/shop" className="link-underline">Dresses</Link></li>
              <li><Link to="/shop" className="link-underline">Co-ord Sets</Link></li>
              <li><Link to="/shop" className="link-underline">Everyday Kurtas</Link></li>
              <li><Link to="/shop" className="link-underline">Jackets</Link></li>
              <li><Link to="/shop" className="link-underline">Occasion Dressing</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-ivory/60 mb-6">Atelier</p>
            <ul className="space-y-3 text-sm font-light text-ivory/85">
              <li><Link to="/story" className="link-underline">Our Story</Link></li>
              <li><Link to="/journal" className="link-underline">Journal</Link></li>
              <li><a href="#" className="link-underline">Craftsmanship</a></li>
              <li><a href="#" className="link-underline">Sustainability</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-ivory/60 mb-6">Care</p>
            <ul className="space-y-3 text-sm font-light text-ivory/85">
              <li><a href="#" className="link-underline">Contact</a></li>
              <li><a href="#" className="link-underline">Shipping</a></li>
              <li><a href="#" className="link-underline">Exchanges</a></li>
              <li><a href="#" className="link-underline">Size Guide</a></li>
              <li><a href="#" className="link-underline">FAQs</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ivory/15 pt-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <p className="text-xs text-ivory/50 tracking-wide font-light">
            © {new Date().getFullYear()} Doresu. Handcrafted in India.
          </p>
          <div className="flex gap-8 text-[0.7rem] tracking-[0.22em] uppercase text-ivory/60">
            <a href="#" className="link-underline">Instagram</a>
            <a href="#" className="link-underline">Pinterest</a>
            <a href="#" className="link-underline">Privacy</a>
            <a href="#" className="link-underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}