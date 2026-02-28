import Benefits from "../components/ui/benefits";
import Filter from "../components/shop/filter";
import ProductList from "../components/shop/product-list";
import ShopHero from "../components/shop/shop-hero";

export default function Shop() {
  return (
    <main>
      <ShopHero />
      <Filter />
      <ProductList />
      <Benefits />
    </main>
  );
}