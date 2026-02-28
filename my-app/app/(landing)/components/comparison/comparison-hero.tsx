'use client'
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const ComparisonHero = () => {
 return (
    <section className="bg-[url('/images/shop-hero-bg.svg')] mt-20 ">
      <div className="bg-[url('/images/shop-hero-bg.svg')]  w-full container mx-auto flex-col ">
        <div className=" w-full flex flex-col justify-center items-center gap-3 py-25">
            <Image src="/images/log-1.svg" alt="logo" height={70} width={70} />
            <h1 className="font-medium text-5xl">Product Comparison</h1>
            <div className="flex gap-1.5 items-center">
                <Link href="/" className="font-medium">Home</Link>
                <IoIosArrowForward size={20} />
                <p>Comparison</p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default ComparisonHero;