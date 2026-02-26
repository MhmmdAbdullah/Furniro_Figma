import Benefits from "../components/shop/benefits";
import ProductList from "../components/shop/product-list";
import ShopHero from "../components/shop/shop-hero";

export default function Shop() {
  return (
    <main>
      <ShopHero />
      <ProductList />
      <Benefits />
    </main>
  );
}