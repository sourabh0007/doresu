import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import founder from "@/assets/founder.jpg";
import editorial from "@/assets/editorial-1.jpg";
import j1 from "@/assets/journal-1.jpg";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story — Doresu" },
      { name: "description", content: "The story behind Doresu — a modern handcrafted luxury label designed in India for women who value softness, ease and timeless elegance." },
      { property: "og:title", content: "Our Story — Doresu" },
      { property: "og:description", content: "Soft luxury, thoughtfully made. The story of Doresu." },
      { property: "og:image", content: founder },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />

      <section className="pt-32 lg:pt-44 pb-20 lg:pb-28 mx-auto max-w-4xl px-6 lg:px-12 text-center">
        <p className="eyebrow mb-6">Our Story</p>
        <h1 className="display text-5xl lg:text-8xl">
          Designed for<br/><em className="italic">lived-in elegance.</em>
        </h1>
        <p className="mt-10 text-lg font-light text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Doresu began with a simple idea — that the most beautiful clothes are the ones you return to naturally.
        </p>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <img src={founder} alt="Doresu atelier" loading="lazy" className="w-full aspect-[16/9] object-cover" />
      </section>

      <section className="py-24 lg:py-36 mx-auto max-w-3xl px-6 lg:px-12">
        <div className="space-y-8 text-base lg:text-lg font-light text-charcoal/85 leading-[1.85]">
          <p className="font-serif italic text-2xl lg:text-3xl text-espresso leading-snug">
            We dress for ourselves first. For the way fabric feels at 7am, for the quiet confidence of a piece that simply works.
          </p>
          <p>
            Doresu was founded around a quiet rebellion against trends. We craft small batches of clothing in breathable cottons, soft linens and gentle silks — fabrics that move with you and soften beautifully with time.
          </p>
          <p>
            Each piece is designed in our Bombay studio and made by hand in partnership with karigars across India. We work in unhurried rhythms, and we don't chase seasons we don't believe in.
          </p>
          <p>
            What we make is meant to be worn — to long lunches and slow mornings, to quiet evenings and the kind of unplanned days that turn out to matter most.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 lg:px-12 grid md:grid-cols-2 gap-3 lg:gap-6 pb-24 lg:pb-36">
        <img src={editorial} alt="" loading="lazy" className="w-full aspect-[4/5] object-cover" />
        <img src={j1} alt="" loading="lazy" className="w-full aspect-[4/5] object-cover" />
      </section>

      <Footer />
    </div>
  );
}