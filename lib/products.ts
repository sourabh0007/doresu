import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import editorial from "@/assets/editorial-1.jpg";
import hero from "@/assets/hero.jpg";

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  fabric: string;
  images: string[];
  badge?: string;
};

export const products: Product[] = [
  {
    slug: "atelier-cotton-coord",
    name: "Atelier Cotton Co-ord",
    category: "Co-ord Sets",
    price: 12800,
    fabric: "Handloom Cotton",
    images: [p1, p2, editorial],
    badge: "Bestseller",
  },
  {
    slug: "doriya-kurta-dress",
    name: "Doriya Kurta Dress",
    category: "Dresses",
    price: 9800,
    fabric: "Breathable Cotton Silk",
    images: [p2, p4, hero],
    badge: "New",
  },
  {
    slug: "saanjh-linen-blazer",
    name: "Saanjh Linen Blazer",
    category: "Jackets",
    price: 14500,
    fabric: "Pure European Linen",
    images: [p3, p1, editorial],
  },
  {
    slug: "moh-olive-gather-dress",
    name: "Moh Gather Dress",
    category: "Dresses",
    price: 10800,
    fabric: "Soft Cotton Mul",
    images: [p4, p2, hero],
    badge: "Most Loved",
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const formatPrice = (v: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(v);