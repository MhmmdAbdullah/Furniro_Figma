type TCategoryCardProps = {
  children: React.ReactNode;
  title: string;
};

const CategoryCard = ({ children, title, ...props }: TCategoryCardProps) => {
  return (
    <div className="w-full  flex flex-col gap-7.5 justify-center items-center hover:scale-105 duration-300 cursor-pointer">
      <div>{children}</div>
      <div className="font-semibold text-xl md:text-2xl">{title}</div>
    </div>
  );
};

export default CategoryCard;
