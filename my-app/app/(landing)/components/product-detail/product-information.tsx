"use client";

import PriceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import { useState } from "react";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import Button from "../ui/Button";
import { FacebookFill, LinkedinBoxFill } from "akar-icons";
import { TwitterCircleFilled } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const ProductInformation = () => {
  const [addMinButton, setAddMinButton] = useState<number>(1);
  const router = useRouter()

  const handleNavigation = () => {
    router.push('/comparison')
  }

  const handdleAddButton = () => {
    setAddMinButton((prev) => prev + 1);
  };

  const handdleMinButton = () => {
    setAddMinButton((prev) => {
      if (prev <= 1) return 1;
      return prev - 1;
    });
  };

  const recommendProductList = [
    {
      id: 1,
      name: "sofa-1",
      img: "/images/outdoor-sofa-set2.svg",
    },
    {
      id: 2,
      name: "sofa-2",
      img: "/images/outdoor-sofa-set2.svg",
    },
    {
      id: 3,
      name: "sofa-3",
      img: "/images/outdoor-sofa-set2.svg",
    },
    {
      id: 4,
      name: "sofa-4",
      img: "/images/outdoor-sofa-set2.svg",
    },
  ];

  const star = [1, 2, 3, 4];

  const sizesList = [
    {
      id: 1,
      size: "L",
    },
    {
      id: 2,
      size: "XL",
    },
    {
      id: 3,
      size: "XXL",
    },
  ];

  const colorList = [
    {
      id: 1,
      color: "bg-[#816DFA]",
    },
    {
      id: 2,
      color: "bg-[#000000]",
    },
    {
      id: 3,
      color: "bg-primary",
    },
  ];



  return (
    <section>
      <div className="container mx-auto">
        <div className="px-25 pt-9 pb-14">
          <div className="flex justify-center gap-20.5">
            <div className="flex gap-8">
              <div className="flex flex-col gap-8">
                {recommendProductList.map((recProd) => (
                  <div
                    key={recProd.id}
                    className="bg-primary-light flex justify-center items-center w-20 h-20 rounded-lg"
                  >
                    <Image
                      src={recProd.img}
                      alt={recProd.name}
                      width={83}
                      height={55}
                    />
                  </div>
                ))}
              </div>
              <div className="bg-primary-light flex justify-center items-center w-105.75 h-125 rounded-lg">
                <Image
                  src="/images/asgaard-sofa-3.svg"
                  alt="sofa"
                  width={481}
                  height={391}
                />
              </div>
            </div>
            <div className="flex flex-col gap-15">
              <div className="flex flex-col">
                <h1 className="text-[42px]">Asgaard Sofa</h1>
                <p className="font-medium text-2xl text-gray-500 py-2">
                  {PriceFormatter(2500000)}
                </p>
                <div className="flex gap-6 py-4">
                  <div className="flex gap-1  text-[#FFC700]">
                    {star.map((index) => (
                      <div key={index}>
                        <RiStarFill size={20} />
                      </div>
                    ))}
                    <RiStarHalfFill size={20} />
                  </div>
                  <div className="border-l pl-5.5  text-gray-500 flex items-center">
                    5 Customer Review
                  </div>
                </div>
                <div className="max-w-106">
                  <p className="text-[13px]">
                    Setting the bar as one of the loudest speakers in its class,
                    the Kilburn is a compact, stout-hearted hero with a
                    well-balanced audio which boasts a clear midrange and
                    extended highs for a sound.
                  </p>
                </div>
                <div className="flex flex-col gap-4 py-4">
                  <div className="flex flex-col gap-3">
                    <h1 className="text-sm text-gray-500">Size</h1>
                    <div className="flex gap-4 ">
                      {sizesList.map((size) => (
                        <div
                          key={size.id}
                          className="text-[13px] bg-primary-light w-7.5 h-7.5 flex justify-center items-center rounded-lg"
                        >
                          {size.size}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className="text-sm text-gray-500">Color</h1>
                    <div className="flex gap-4 ">
                      {colorList.map((color) => (
                        <div
                          key={color.id}
                          className={`${color.color} w-7.5 h-7.5 flex justify-center items-center rounded-full`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 pt-4">
                  <div className="flex justify-between border border-gray-500 py-4 px-2 gap-9 rounded-xl w-31">
                    <button
                      onClick={handdleMinButton}
                      className="cursor-pointer"
                    >
                      -
                    </button>
                    <p className="w-3 flex items-center">{addMinButton}</p>
                    <button
                      onClick={handdleAddButton}
                      className="cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex gap-2.5 text-xl">
                    <Button variant="transparant1" size="normal2">
                      Add To Cart
                    </Button>
                    <Button
                      variant="transparant1"
                      size="normal2"
                      className="flex gap-2.5"
                      onClick={handleNavigation}
                    >
                      <p>+</p>
                      <p>Compare</p>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-300">
                <div className="py-10 text-gray-500">
                  <div className="flex gap-4">
                    <div className="flex flex-col gap-3">
                      <div>SKU</div>
                      <div>Category</div>
                      <div>Tags</div>
                      <div>Share</div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex flex-col gap-3">
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div>SS001</div>
                        <div>Sofas</div>
                        <div>Sofa, Chair, Home, Shop</div>
                        <div className="flex gap-6.25 text-black! items-center">
                          <FacebookFill size={20} />
                          <LinkedinBoxFill size={20} />
                          <TwitterCircleFilled className="text-[24px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInformation;
