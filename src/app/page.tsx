import { Hero } from "@/components/sections/Hero";
import { TrustBand } from "@/components/sections/TrustBand";
import { CollectionsGrid } from "@/components/sections/CollectionsGrid";
import { BundleFeature } from "@/components/sections/BundleFeature";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Reviews } from "@/components/sections/Reviews";
import { Reassurance } from "@/components/sections/Reassurance";
import { EmailCapture } from "@/components/sections/EmailCapture";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBand />
      <CollectionsGrid />
      <BundleFeature />
      <FeaturedProducts />
      <Reviews />
      <Reassurance />
      <EmailCapture />
    </>
  );
}
