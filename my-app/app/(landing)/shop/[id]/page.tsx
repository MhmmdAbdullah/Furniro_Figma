import ProductBreadcrumbs from "../../components/product-detail/product-breadcrumb";
import ProductDescription from "../../components/product-detail/product-description";
import ProductInformation from "../../components/product-detail/product-information";
import ProductRelated from "../../components/product-detail/product-related";

export default function Shop() {
  return (
    <main>
      <ProductBreadcrumbs />
      <ProductInformation />
      <ProductDescription />
      <ProductRelated />
    </main>
  );
}

