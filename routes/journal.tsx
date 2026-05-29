import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import j1 from "@/assets/journal-1.jpg";
import j2 from "@/assets/journal-2.jpg";
import j3 from "@/assets/journal-3.jpg";
import editorial from "@/assets/editorial-1.jpg";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Doresu" },
      { name: "description", content: "Thoughts on dressing beautifully, living slowly, and finding elegance in the everyday." },
      { property: "og:title", content: "Journal — Doresu" },
      { property: "og:description", content: "Thoughts on dressing beautifully, living slowly, and finding elegance in the everyday." },
    ],
  }),
  component: JournalPage,
});

const posts = [
  { title: "The quiet art of slow dressing", category: "Philosophy", date: "Spring 2026", image: j2, featured: true },
  { title: "Inside the atelier: handloom craft, reimagined", category: "Craftsmanship", date: "Feb 2026", image: j1 },
  { title: "Mornings, unhurried — a styling diary", category: "Styling", date: "Jan 2026", image: j3 },
  { title: "On softness, and why it matters", category: "Philosophy", date: "Dec 2025", image: editorial },
];

function JournalPage() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />

      <section className="pt-32 lg:pt-44 pb-16 mx-auto max-w-[1600px] px-6 lg:px-12">
        <p className="eyebrow mb-6">Journal</p>
        <h1 className="display text-5xl lg:text-8xl max-w-4xl">
          From the world<br/>of Doresu.
        </h1>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 lg:px-12 pb-24 lg:pb-36">
        <Link to="/journal" className="group grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 lg:mb-28">
          <div className="overflow-hidden bg-bone aspect-[4/3]">
            <img src={posts[0].image} alt={posts[0].title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
          </div>
          <div>
            <p className="eyebrow mb-5">{posts[0].category} · {posts[0].date}</p>
            <h2 className="display text-4xl lg:text-6xl">{posts[0].title}</h2>
            <p className="mt-6 text-base font-light text-muted-foreground leading-relaxed max-w-lg">
              On the rituals of dressing without urgency — and the soft clothes that make it possible.
            </p>
            <span className="eyebrow link-underline mt-8 inline-block">Read the story</span>
          </div>
        </Link>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {posts.slice(1).map((post) => (
            <Link key={post.title} to="/journal" className="group block">
              <div className="overflow-hidden bg-bone aspect-[4/5]">
                <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              </div>
              <p className="eyebrow mt-6 mb-3">{post.category} · {post.date}</p>
              <h3 className="font-serif text-2xl font-light leading-snug text-charcoal">{post.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}