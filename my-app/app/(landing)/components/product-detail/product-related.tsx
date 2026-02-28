"use client";
import Image from "next/image";
import ProductCard from "../ui/productCard";
import Button from "../ui/Button";

const ProductRelated = () => {
  const productList = [
    {
      productName: "Syltherine",
      productType: "Stylish cafe chair",
      price: 3500000,
      img: "/images/product-image.svg",
      label: "discount",
      discount: 30,
    },
    {
      productName: "Leviosa",
      productType: "Stylish cafe chair",
      price: 2500000,
      img: "/images/product-image.svg",
      label: null,
      discount: 0,
    },
    {
      productName: "Lolito",
      productType: "Luxury big sofa",
      price: 14000000,
      img: "/images/product-image.svg",
      label: "discount",
      discount: 50,
    },
    {
      productName: "Respira",
      productType: "Outdoor bar table and stool",
      price: 500000,
      img: "/images/product-image.svg",
      label: "new",
      discount: 0,
    },
  ];

  return (
    <section>
      <div className="container mx-auto">
        <div className="pt-13.75 pb-23 border-t">
          <div className="flex flex-col items-center gap-6.5">
            <h1 className="font-medium text-4xl">Related Products</h1>
            <div className="grid grid-cols-4 justify-center items-center gap-8">
              {productList.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.productName}
                  type={product.productType}
                  priceBeforeDiscount={product.price}
                  discountValue={product.discount}
                  label={product.label as "discount" | "new"}
                >
                  <Image
                    src={product.img}
                    alt={product.productName}
                    width={285}
                    height={301}
                    className="object-cover w-80 md:w-full h-auto"
                  />
                </ProductCard>
              ))}
            </div>
            <div className="mt-8 mx-auto font-semibold">
              <Button variant="transparant" size="normal1">
                Show More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRelated;
