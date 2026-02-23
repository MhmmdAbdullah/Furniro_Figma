"use client";
import Image from "next/image";
import CategoryCard from "../ui/categoryCard";

const Category = () => {
  const categoryList = [
    {
      name: "Dining",
      img: "/images/dining-room.svg",
    },
    {
      name: "Living",
      img: "/images/living-room.svg",
    },
    {
      name: "Bedroom",
      img: "/images/bedroom.svg",
    },
  ];

  return (
    <section className="container mx-auto">
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center gap-1 mt-15.5">
          <h1 className="font-bold text-2xl md:text-[32px]">
            Browse The Range
          </h1>
          <p className="text-xs md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="max-w-296 w-full mx-auto">
          <div className="mt-15 grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-7 md:gap-5">
            {categoryList.map((category, index) => (
              <CategoryCard title={category.name} key={index}>
                <Image
                  src={category.img}
                  alt={category.name}
                  width={381}
                  height={480}
                  className="object-cover w-80 md:w-full h-auto"
                />
              </CategoryCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
