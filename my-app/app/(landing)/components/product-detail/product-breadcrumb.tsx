import { IoIosArrowForward } from "react-icons/io";

const ProductBreadcrumbs = () => {
  return (
    <section className="bg-primary-light mt-24">
      <div className="container mx-auto">
        <div className="flex py-9.5 gap-6 pl-25">
          <div className="flex gap-3.5 items-center">
            <h1 className="text-gray-500">Home</h1>
            <IoIosArrowForward />
          </div>
          <div className="flex gap-3.5 items-center">
            <h1 className="text-gray-500">Shop</h1>
            <IoIosArrowForward />
          </div>
          <div className="flex pl-8.5 border-l">
            <h1>Asgaard Sofa</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBreadcrumbs;
