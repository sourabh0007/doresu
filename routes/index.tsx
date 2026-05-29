import { createFileRoute, Link } from "@tanstack/react-router";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/products";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import editorial from "@/assets/editorial-1.jpg";
import founder from "@/assets/founder.jpg";
import catDresses from "@/assets/category-dresses.jpg";
import catCoord from "@/assets/category-coord.jpg";
import catKurta from "@/assets/category-kurta.jpg";
import catJackets from "@/assets/category-jackets.jpg";
import ugc1 from "@/assets/ugc-1.jpg";
import ugc2 from "@/assets/ugc-2.jpg";
import ugc3 from "@/assets/ugc-3.jpg";
import ugc4 from "@/assets/ugc-4.jpg";
import j1 from "@/assets/journal-1.jpg";
import j2 from "@/assets/journal-2.jpg";
import j3 from "@/assets/journal-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Doresu — Soft Luxury for Everyday Living" },
      { name: "description", content: "Handcrafted silhouettes designed for effortless elegance, breathable comfort, and timeless repeat wear. A modern Indian luxury label." },
      { property: "og:title", content: "Doresu — Soft Luxury for Everyday Living" },
      { property: "og:description", content: "Handcrafted silhouettes designed for effortless elegance, breathable comfort, and timeless repeat wear." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Index,
});

const categories = [
  { name: "Dresses", image: catDresses },
  { name: "Co-ord Sets", image: catCoord },
  { name: "Everyday Kurtas", image: catKurta },
  { name: "Jackets", image: catJackets },
  { name: "Layering Pieces", image: catCoord },
  { name: "Occasion Dressing", image: catDresses },
];

const trustItems = [
  "Handcrafted in Small Batches",
  "Breathable Premium Fabrics",
  "Designed for Repeat Wear",
  "Easy Size Exchanges",
  "Thoughtfully Made in India",
];

const journalPosts = [
  { title: "The quiet art of slow dressing", category: "Philosophy", image: j2 },
  { title: "Inside the atelier: handloom craft, reimagined", category: "Craftsmanship", image: j1 },
  { title: "Mornings, unhurried — a styling diary", category: "Styling", image: j3 },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header transparentOnTop />

      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] overflow-hidden">
        <img
          src={hero}
          alt="Doresu Spring Summer 26 campaign"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
        <div className="relative h-full mx-auto max-w-[1600px] px-6 lg:px-12 flex flex-col justify-end pb-20 lg:pb-28 text-ivory">
          <p className="eyebrow text-ivory/90 mb-6">Spring / Summer 26</p>
          <h1 className="display text-[3.25rem] sm:text-7xl lg:text-[7.5rem] max-w-5xl leading-[0.95]">
            Soft luxury<br/>
            <em className="not-italic font-serif italic text-ivory/90">for everyday living.</em>
          </h1>
          <p className="mt-8 max-w-xl text-base lg:text-lg font-light text-ivory/85 leading-relaxed">
            Handcrafted silhouettes designed for effortless elegance, breathable comfort, and timeless repeat wear.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="bg-ivory text-charcoal px-9 py-4 text-[0.72rem] tracking-[0.28em] uppercase font-light hover:bg-charcoal hover:text-ivory transition-colors"
            >
              Shop New Arrivals
            </Link>
            <Link
              to="/shop"
              className="border border-ivory/70 text-ivory px-9 py-4 text-[0.72rem] tracking-[0.28em] uppercase font-light hover:bg-ivory hover:text-charcoal transition-colors"
            >
              Explore Bestsellers
            </Link>
          </div>
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="py-24 lg:py-36 mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16 lg:mb-20">
          <div>
            <p className="eyebrow mb-5">The Edit</p>
            <h2 className="display text-5xl lg:text-7xl">Most Loved</h2>
            <p className="mt-6 max-w-md text-base font-light text-muted-foreground leading-relaxed">
              The pieces women return to season after season for comfort, versatility, and effortless elegance.
            </p>
          </div>
          <Link to="/shop" className="eyebrow link-underline inline-flex items-center gap-3">
            View All <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-14 lg:gap-x-8 lg:gap-y-20">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="py-24 lg:py-36 bg-bone">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <p className="eyebrow mb-5">Explore</p>
            <h2 className="display text-5xl lg:text-7xl max-w-3xl mx-auto">
              Designed to be<br/><em className="italic">worn beautifully.</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {categories.map((c, i) => (
              <Link
                key={c.name}
                to="/shop"
                className={`group relative overflow-hidden bg-sand ${
                  i === 0 ? "lg:row-span-2 aspect-[3/4] lg:aspect-[3/5]" : "aspect-[4/5]"
                }`}
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 flex items-end justify-between text-ivory">
                  <h3 className="font-serif text-2xl lg:text-3xl font-light">{c.name}</h3>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" strokeWidth={1.25} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL BANNER */}
      <section className="relative h-[80svh] min-h-[560px] overflow-hidden">
        <img
          src={editorial}
          alt="Doresu editorial campaign"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/35" />
        <div className="relative h-full mx-auto max-w-[1600px] px-6 lg:px-12 flex flex-col justify-center text-ivory">
          <div className="max-w-2xl">
            <p className="eyebrow text-ivory/85 mb-6">The Doresu Woman</p>
            <h2 className="display text-4xl lg:text-[5.5rem] leading-[1.0]">
              For women who want elegance to feel <em className="italic">effortless.</em>
            </h2>
            <p className="mt-8 text-base lg:text-lg font-light leading-relaxed text-ivory/85 max-w-xl">
              Thoughtfully handcrafted pieces designed to move naturally through slow mornings, long lunches, intimate gatherings, and beautifully unplanned evenings.
            </p>
            <Link
              to="/shop"
              className="mt-10 inline-block border border-ivory/70 text-ivory px-9 py-4 text-[0.72rem] tracking-[0.28em] uppercase font-light hover:bg-ivory hover:text-charcoal transition-colors"
            >
              Discover the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-ivory">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12 py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-4 text-center">
            {trustItems.map((t) => (
              <div key={t} className="px-2">
                <p className="text-[0.7rem] tracking-[0.22em] uppercase font-light text-charcoal">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="py-24 lg:py-36 mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5">Just In</p>
            <h2 className="display text-5xl lg:text-7xl">New<br/>This Season</h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-base font-light text-muted-foreground leading-relaxed">
              Relaxed silhouettes, soft tailoring, and handcrafted details designed for modern everyday dressing.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-14 lg:gap-x-8 lg:gap-y-20">
          {[...products].reverse().map((p) => (
            <ProductCard key={p.slug + "-new"} product={p} />
          ))}
        </div>
      </section>

      {/* COMMUNITY / UGC */}
      <section className="py-24 lg:py-36 bg-bone">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20 max-w-2xl mx-auto">
            <p className="eyebrow mb-5">Community</p>
            <h2 className="display text-5xl lg:text-7xl">
              Worn <em className="italic">beautifully.</em>
            </h2>
            <p className="mt-6 text-base font-light text-muted-foreground leading-relaxed">
              By women who believe style should feel personal, effortless, and lived in.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
            {[ugc1, ugc2, ugc3, ugc4].map((img, i) => (
              <a key={i} href="#" className="group relative overflow-hidden aspect-[4/5] bg-sand">
                <img
                  src={img}
                  alt={`Community moment ${i + 1}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors" />
                <span className="absolute bottom-3 left-3 text-ivory text-[0.65rem] tracking-[0.22em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  @doresu.world
                </span>
              </a>
            ))}
          </div>

          <div className="text-center mt-14">
            <a href="#" className="eyebrow link-underline">Join the Doresu Community</a>
          </div>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="py-24 lg:py-40 mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6 relative">
            <img
              src={founder}
              alt="Doresu founder portrait"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow mb-6">Our Story</p>
            <h2 className="display text-4xl lg:text-6xl leading-[1.02]">
              Doresu began with a <em className="italic">simple idea.</em>
            </h2>
            <p className="mt-8 font-serif italic text-2xl lg:text-3xl font-light text-espresso leading-snug">
              That the most beautiful clothes are the ones you return to naturally.
            </p>
            <p className="mt-8 text-base font-light text-muted-foreground leading-relaxed">
              Created for women who value softness over excess and elegance over performance, Doresu brings together thoughtful craftsmanship, timeless silhouettes, and effortless wearability.
            </p>
            <p className="mt-5 text-base font-light text-muted-foreground leading-relaxed">
              Every piece is designed to feel beautiful not only when worn — but while lived in.
            </p>
            <Link
              to="/story"
              className="mt-10 inline-flex items-center gap-3 text-[0.72rem] tracking-[0.28em] uppercase font-light text-charcoal link-underline"
            >
              Read Our Story <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="py-24 lg:py-36 bg-bone">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div className="max-w-xl">
              <p className="eyebrow mb-5">Journal</p>
              <h2 className="display text-5xl lg:text-6xl">From the World of Doresu</h2>
              <p className="mt-6 text-base font-light text-muted-foreground leading-relaxed">
                Thoughts on dressing beautifully, living slowly, craftsmanship, and finding elegance in the everyday.
              </p>
            </div>
            <Link to="/journal" className="eyebrow link-underline inline-flex items-center gap-3">
              All Stories <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {journalPosts.map((post) => (
              <Link key={post.title} to="/journal" className="group block">
                <div className="overflow-hidden bg-sand aspect-[4/3]">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <p className="eyebrow mt-6 mb-3">{post.category}</p>
                <h3 className="font-serif text-2xl lg:text-3xl font-light leading-snug text-charcoal max-w-md">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-28 lg:py-40 mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow mb-6">Stay Close</p>
          <h2 className="display text-5xl lg:text-7xl">
            Join our<br/><em className="italic">quiet world.</em>
          </h2>
          <p className="mt-8 text-base lg:text-lg font-light text-muted-foreground leading-relaxed">
            Be the first to discover new collections, limited drops, and thoughtful stories from the world of Doresu.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-12 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent border-b border-charcoal/40 focus:border-charcoal outline-none px-1 py-3 text-sm font-light placeholder:text-muted-foreground/70"
            />
            <button
              type="submit"
              className="bg-charcoal text-ivory px-8 py-4 text-[0.72rem] tracking-[0.28em] uppercase font-light hover:bg-espresso transition-colors"
            >
              Join Our World
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
