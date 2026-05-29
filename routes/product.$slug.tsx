import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { ProductCard } from "@/components/site/ProductCard";
import { getProduct, products, formatPrice } from "@/lib/products";
import { useState } from "react";
import { Heart, Truck, RefreshCw, Sparkles, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Doresu` },
          { name: "description", content: `${loaderData.product.name}, handcrafted in ${loaderData.product.fabric}. Designed for effortless everyday elegance.` },
          { property: "og:title", content: `${loaderData.product.name} — Doresu` },
          { property: "og:description", content: `Handcrafted in ${loaderData.product.fabric}. Designed for effortless elegance.` },
          { property: "og:image", content: loaderData.product.images[0] },
        ]
      : [],
  }),
  component: ProductPage,
});

const sizes = ["XS", "S", "M", "L", "XL"];

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [size, setSize] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />

      <div className="pt-20 lg:pt-24" />

      <section className="mx-auto max-w-[1600px] px-0 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-16">
          {/* GALLERY */}
          <div className="space-y-1 lg:space-y-3">
            {product.images.concat(product.images[0]).slice(0, 4).map((src: string, i: number) => (
              <div key={i} className="bg-bone aspect-[4/5] overflow-hidden">
                <img src={src} alt={product.name} loading={i === 0 ? "eager" : "lazy"} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* DETAILS — sticky on desktop */}
          <div className="px-6 lg:px-0">
            <div className="lg:sticky lg:top-28 py-10 lg:py-12 max-w-md">
              <p className="eyebrow mb-4">{product.category}</p>
              <h1 className="display text-4xl lg:text-5xl">{product.name}</h1>
              <p className="mt-4 text-xl font-light text-charcoal">{formatPrice(product.price)}</p>
              <p className="mt-3 text-sm font-light text-muted-foreground leading-relaxed">
                Handcrafted in {product.fabric.toLowerCase()}, designed for effortless all-day elegance.
              </p>

              {/* Size */}
              <div className="mt-10">
                <div className="flex items-center justify-between mb-4">
                  <p className="eyebrow">Select Size</p>
                  <button className="text-[0.7rem] tracking-[0.18em] uppercase font-light link-underline text-muted-foreground">
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`py-3.5 text-xs tracking-[0.18em] uppercase font-light border transition-colors ${
                        size === s
                          ? "border-charcoal bg-charcoal text-ivory"
                          : "border-border bg-transparent hover:border-charcoal"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <p className="mt-4 text-xs font-light text-muted-foreground leading-relaxed">
                  Relaxed fit. Model is 5'8" wearing size S.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8 flex gap-2">
                <button className="flex-1 bg-charcoal text-ivory py-4 text-[0.72rem] tracking-[0.28em] uppercase font-light hover:bg-espresso transition-colors">
                  Add to Bag — {formatPrice(product.price)}
                </button>
                <button aria-label="Save" className="border border-border px-5 hover:border-charcoal transition-colors">
                  <Heart className="w-4 h-4" strokeWidth={1.25} />
                </button>
              </div>

              {/* Trust */}
              <ul className="mt-8 grid grid-cols-2 gap-y-3 gap-x-4 text-[0.7rem] tracking-[0.16em] uppercase font-light text-muted-foreground">
                <li className="flex items-center gap-2"><Sparkles className="w-3.5 h-3.5" strokeWidth={1.25} /> Breathable Fabric</li>
                <li className="flex items-center gap-2"><Sparkles className="w-3.5 h-3.5" strokeWidth={1.25} /> Handcrafted Finish</li>
                <li className="flex items-center gap-2"><RefreshCw className="w-3.5 h-3.5" strokeWidth={1.25} /> Easy Exchanges</li>
                <li className="flex items-center gap-2"><Truck className="w-3.5 h-3.5" strokeWidth={1.25} /> Limited Production</li>
              </ul>

              {/* Accordions */}
              <div className="mt-12 border-t border-border">
                {[
                  { title: "Designed for effortless everyday dressing", body: "Crafted in breathable premium fabric with relaxed silhouettes and thoughtful handcrafted details. Designed for comfort, versatility, and timeless wearability — easy to style and naturally elegant, moving seamlessly between everyday moments, intimate gatherings, and elevated occasions." },
                  { title: "Fit & Feel", body: "Soft on the skin, breathable through the day, and designed for a naturally relaxed fit. Thoughtfully tailored to offer ease, movement, and understated elegance." },
                  { title: "Styling Note", body: "Style with delicate jewellery, soft layers, or minimal separates for an effortless Doresu look." },
                  { title: "Fabric & Care", body: `${product.fabric}. Gentle hand wash in cool water. Line dry in shade. Iron on reverse, low heat.` },
                ].map((item) => (
                  <details key={item.title} className="group border-b border-border py-5">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <span className="text-sm font-light text-charcoal">{item.title}</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" strokeWidth={1.25} />
                    </summary>
                    <p className="mt-4 text-sm font-light text-muted-foreground leading-relaxed">
                      {item.body}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* You may also love */}
      <section className="py-24 lg:py-36 mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="mb-14">
          <p className="eyebrow mb-4">You May Also Love</p>
          <h2 className="display text-4xl lg:text-5xl">Complete the look</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-14 lg:gap-x-8">
          {products.filter((p) => p.slug !== product.slug).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Sticky mobile add to cart */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-ivory border-t border-border p-3">
        <button className="w-full bg-charcoal text-ivory py-4 text-[0.72rem] tracking-[0.28em] uppercase font-light">
          Add to Bag — {formatPrice(product.price)}
        </button>
      </div>

      <div className="text-center pb-20 lg:hidden">
        <Link to="/shop" className="eyebrow link-underline">Back to Shop</Link>
      </div>

      <Footer />
    </div>
  );
}