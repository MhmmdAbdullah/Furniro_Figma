"use client";
import ProductCard from "../ui/productCard";
import Image from "next/image";

const ProductList = () => {
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
    {
      productName: "Grifo",
      productType: "Night lamp",
      price: 1500000,
      img: "/images/product-image.svg",
      label: null,
      discount: 0,
    },
    {
      productName: "Muggo",
      productType: "Small mug",
      price: 150000,
      img: "/images/product-image.svg",
      label: "new",
      discount: 0,
    },
    {
      productName: "Pingky",
      productType: "Cute bed set",
      price: 14000000,
      img: "/images/product-image.svg",
      label: "discount",
      discount: 50,
    },
    {
      productName: "Potty",
      productType: "Minimalist flower pot",
      price: 500000,
      img: "/images/product-image.svg",
      label: "new",
      discount: 0,
    },
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
    {
      productName: "Grifo",
      productType: "Night lamp",
      price: 1500000,
      img: "/images/product-image.svg",
      label: null,
      discount: 0,
    },
    {
      productName: "Muggo",
      productType: "Small mug",
      price: 150000,
      img: "/images/product-image.svg",
      label: "new",
      discount: 0,
    },
    {
      productName: "Pingky",
      productType: "Cute bed set",
      price: 14000000,
      img: "/images/product-image.svg",
      label: "discount",
      discount: 50,
    },
    {
      productName: "Potty",
      productType: "Minimalist flower pot",
      price: 500000,
      img: "/images/product-image.svg",
      label: "new",
      discount: 0,
    },
  ];

  const number = [1, 2, 3];

  return (
    <section className="container mx-auto">
      <div className="flex flex-col gap-17.5 mt-16 mb-21">
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
        <div className="flex gap-9.5 justify-center items-center">
          {number.map((num, index) => (
            <div className="w-15 h-15 bg-primary-light flex justify-center items-center rounded-lg">
              {num}
            </div>
          ))}
          <div className="w-24.5 h-15 bg-primary-light flex justify-center items-center rounded-lg text-xl">
            Next
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
