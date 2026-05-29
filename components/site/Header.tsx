import { Link } from "@tanstack/react-router";
import { Search, User, ShoppingBag, Menu } from "lucide-react";
import { useEffect, useState } from "react";

interface HeaderProps {
  transparentOnTop?: boolean;
}

export function Header({ transparentOnTop = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = transparentOnTop && !scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        transparent
          ? "bg-transparent text-ivory"
          : "bg-ivory/85 backdrop-blur-md text-charcoal border-b border-border"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between">
        <div className="flex items-center gap-8 flex-1">
          <button aria-label="Menu" className="lg:hidden">
            <Menu className="w-5 h-5" strokeWidth={1.25} />
          </button>
          <nav className="hidden lg:flex items-center gap-9 text-[0.72rem] tracking-[0.22em] uppercase font-light">
            <Link to="/shop" className="link-underline">New In</Link>
            <Link to="/shop" className="link-underline">Dresses</Link>
            <Link to="/shop" className="link-underline">Co-ord Sets</Link>
            <Link to="/shop" className="link-underline">Kurtas</Link>
            <Link to="/shop" className="link-underline">Jackets</Link>
          </nav>
        </div>

        <Link
          to="/"
          className="font-serif text-2xl lg:text-3xl tracking-[0.32em] font-light"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          DORESU
        </Link>

        <div className="flex items-center gap-6 flex-1 justify-end">
          <nav className="hidden lg:flex items-center gap-9 text-[0.72rem] tracking-[0.22em] uppercase font-light">
            <Link to="/story" className="link-underline">Story</Link>
            <Link to="/journal" className="link-underline">Journal</Link>
          </nav>
          <button aria-label="Search"><Search className="w-[18px] h-[18px]" strokeWidth={1.25} /></button>
          <button aria-label="Account" className="hidden sm:inline"><User className="w-[18px] h-[18px]" strokeWidth={1.25} /></button>
          <button aria-label="Bag" className="relative">
            <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.25} />
            <span className="absolute -top-1.5 -right-2 text-[9px] tracking-normal">(0)</span>
          </button>
        </div>
      </div>
    </header>
  );
}