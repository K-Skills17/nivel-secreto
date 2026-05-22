import { Hero } from "@/components/home/Hero";
import { Categories } from "@/components/home/Categories";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { ValueProps } from "@/components/home/ValueProps";
import { Newsletter } from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-[1px] bg-surface-border" />
      </div>
      <FeaturedProducts />
      <ValueProps />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-[1px] bg-surface-border" />
      </div>
      <Newsletter />
    </>
  );
}
