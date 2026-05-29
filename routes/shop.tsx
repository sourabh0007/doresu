import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Doresu | Handcrafted Luxury Essentials" },
      { name: "description", content: "Explore handcrafted dresses, co-ord sets, kurtas and jackets. Designed for breathable comfort and timeless repeat wear." },
      { property: "og:title", content: "Shop — Doresu" },
      { property: "og:description", content: "Handcrafted luxury essentials, designed for everyday elegance." },
    ],
  }),
  component: ShopPage,
});

const filters = ["All", "Dresses", "Co-ord Sets", "Kurtas", "Jackets", "New In", "Bestsellers"];

function ShopPage() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />

      <section className="pt-32 lg:pt-40 pb-12 lg:pb-16 mx-auto max-w-[1600px] px-6 lg:px-12">
        <p className="eyebrow mb-5">Spring / Summer 26</p>
        <h1 className="display text-5xl lg:text-8xl max-w-4xl">The Collection</h1>
        <p className="mt-8 max-w-xl text-base font-light text-muted-foreground leading-relaxed">
          Relaxed silhouettes, breathable fabrics, and handcrafted details — designed for women who dress for themselves.
        </p>
      </section>

      <div className="sticky top-16 lg:top-20 z-30 bg-ivory/90 backdrop-blur-md border-y border-border">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12 h-14 flex items-center justify-between gap-4 overflow-x-auto">
          <div className="flex items-center gap-8 text-[0.72rem] tracking-[0.22em] uppercase font-light whitespace-nowrap">
            {filters.map((f) => (
              <button key={f} className="link-underline text-charcoal">
                {f}
              </button>
            ))}
          </div>
          <button className="text-[0.72rem] tracking-[0.22em] uppercase font-light text-muted-foreground whitespace-nowrap">
            Sort: Featured
          </button>
        </div>
      </div>

      <section className="py-16 lg:py-24 mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-14 lg:gap-x-8 lg:gap-y-20">
          {[...products, ...products].map((p, i) => (
            <ProductCard key={p.slug + i} product={p} />
          ))}
        </div>

        <div className="text-center mt-24">
          <Link to="/" className="eyebrow link-underline">Back to Home</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}