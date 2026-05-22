import { CollectionsGrid } from "@/components/sections/CollectionsGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coleções",
  description: "Explore nossas coleções de produtos íntimos premium para casais, ela, ele, iniciantes e bem-estar.",
};

export default function CollectionsPage() {
  return (
    <div className="pt-4">
      <CollectionsGrid />
    </div>
  );
}
