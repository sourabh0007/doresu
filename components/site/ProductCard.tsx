import { Link } from "@tanstack/react-router";
import { type Product, formatPrice } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group product-hover">
      <Link to="/product/$slug" params={{ slug: product.slug }} className="block">
        <div className="relative overflow-hidden bg-bone aspect-[4/5]">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <img
            src={product.images[1] ?? product.images[0]}
            alt=""
            loading="lazy"
            className="alt absolute inset-0 w-full h-full object-cover"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-ivory/90 backdrop-blur-sm text-charcoal text-[0.62rem] tracking-[0.22em] uppercase px-3 py-1.5 font-light">
              {product.badge}
            </span>
          )}
          <div className="quick-add absolute bottom-4 left-4 right-4">
            <button
              className="w-full bg-ivory text-charcoal text-[0.68rem] tracking-[0.24em] uppercase py-3.5 font-light hover:bg-charcoal hover:text-ivory transition-colors"
              onClick={(e) => { e.preventDefault(); }}
            >
              Quick Add
            </button>
          </div>
        </div>
      </Link>
      <div className="pt-5 flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow text-muted-foreground mb-1.5">{product.category}</p>
          <Link to="/product/$slug" params={{ slug: product.slug }}>
            <h3 className="font-serif text-lg lg:text-xl font-light text-charcoal">{product.name}</h3>
          </Link>
        </div>
        <p className="text-sm font-light text-charcoal whitespace-nowrap mt-0.5">
          {formatPrice(product.price)}
        </p>
      </div>
    </div>
  );
}