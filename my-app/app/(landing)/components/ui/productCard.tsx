import PriceFormatter from "@/app/utils/price-formatter";

type TProductCardProps = {
  children: React.ReactNode;
  title: string;
  type: string;
  priceBeforeDiscount: number;
  discountValue: number;
  label?: "discount" | "new";
};

const ProductCard = ({
  children,
  title,
  type,
  priceBeforeDiscount,
  discountValue = 0,
  label,
  ...props
}: TProductCardProps) => {
  const finalPrice =
    label === "discount"
      ? priceBeforeDiscount * (1 - discountValue / 100)
      : priceBeforeDiscount;

  const labels = {
    discount:
      "w-12 h-12 rounded-full bg-[#E97171] flex justify-center items-center text-xs text-white",
    new: "w-12 h-12 rounded-full bg-[#2EC1AC] flex justify-center items-center text-xs text-white",
  };

  return (
    <div className="w-46 mx-auto h-auto md:w-full relative flex flex-col gap-4 hover:scale-105 duration-300 cursor-pointer bg-[#F4F5F7]">
      <div className="relative">
        {children}

        {label && (
          <div className={`absolute top-6 right-6 font-medium text-base justify-center items-center ${labels[label]}`}>
            {label == "discount" ? `-${discountValue}%` : "New"}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 p-4">
        <h1 className="font-semibold text-2xl">{title}</h1>
        <h1 className="font-medium text-[#898989] truncate">{type}</h1>
        <div className="flex justify-between items-center flex-wrap">
          <h1 className="font-semibold text-xl">
            {PriceFormatter(finalPrice)}
          </h1>
          {label === "discount" && (
            <h1 className="hidden xl:flex text-[#B0B0B0] line-through text-base">
              {PriceFormatter(priceBeforeDiscount)}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
