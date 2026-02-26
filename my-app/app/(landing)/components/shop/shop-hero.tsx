'use client'
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const ShopHero = () => {
 return (
    <section className="bg-[url('/images/shop-hero-bg.svg')] pt-20 ">
      <div className="bg-[url('/images/shop-hero-bg.svg')]  w-full container mx-auto flex-col ">
        <div className=" w-full flex flex-col justify-center items-center gap-2 h-80">
            <h1 className="font-medium text-5xl">Shop</h1>
            <div className="flex gap-1.5 items-center">
                <Link href="/" className="font-medium">Home</Link>
                <IoIosArrowForward size={20} />
                <p>Shop</p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default ShopHero;