import Image from "next/image";
import ProductCard from "../ui/productCard";
import Button from "../ui/Button";

const Product = () => {
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
  ];

  return (
    <section className="container mx-auto">
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center gap-1 mt-14">
          <h1 className="font-bold text-4xl md:text-[40px]">Our Product</h1>
        </div>
        <div className="max-w-309 w-full mx-auto">
          <div className="mt-15 grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4 md:gap-8">
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
        </div>
        <div className="mt-8 mx-auto font-semibold mb-17.5">
          <Button variant="transparant" size="normal1">
            Show More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Product;
