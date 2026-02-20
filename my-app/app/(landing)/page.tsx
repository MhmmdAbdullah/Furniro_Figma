import Image from "next/image";
import Hero from "./components/home/hero";
import Category from "./components/home/category";
import Product from "./components/home/product";
import Inspirations from "./components/home/inspirations";
import Share from "./components/home/share";

export default function Home() {
  return (
    <main>
      <Hero />
      <Category />
      <Product />
      <Inspirations />
      <Share />
    </main>
  );
}
