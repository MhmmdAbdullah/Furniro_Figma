"use client";
import Image from "next/image";

const Share = () => {
  return (
    <section className="py-12 overflow-hidden w-full">
      <div className="container mx-auto text-center mb-8">
        <p className="font-semibold text-xl text-[#616161]">Share your setup with</p>
        <h1 className="font-bold text-[40px] text-[#3A3A3A]">#FuniroFurniture</h1>
      </div>
      <div className="flex gap-4 justify-center items-center h-180">
        <div className="flex flex-col gap-4 items-end shrink-0">
          <div className="flex gap-4 items-end">
            <div className="w-20 h-95 relative overflow-hidden">
              <Image src="/images/setup-1.png" fill className="object-cover object-right" alt="img" />
            </div>
            <div className="w-112.5 h-77.5 relative">
              <Image src="/images/setup-2.png" fill className="object-cover" alt="img" />
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-45 h-60 relative">
              <Image src="/images/setup-3.png" fill className="object-cover" alt="img" />
            </div>
            <div className="w-85 h-50 relative">
              <Image src="/images/setup-4.png" fill className="object-cover" alt="img" />
            </div>
          </div>
        </div>

        <div className="shrink-0">
          <div className="w-73.75 h-97.5 relative">
            <Image src="/images/setup-5.png" fill className="object-cover" alt="img" />
          </div>
        </div>

        <div className="flex flex-col gap-4 items-start shrink-0">
          <div className="flex gap-4 items-end">
            <div className="w-72.5 h-87.5 relative">
              <Image src="/images/setup-6.png" fill className="object-cover" alt="img" />
            </div>
            <div className="w-65 h-107.5 relative overflow-hidden">
              <Image src="/images/setup-7.png" fill className="object-cover object-left" alt="img" />
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-42.5 h-60 relative">
              <Image src="/images/setup-8.png" fill className="object-cover" alt="img" />
            </div>
            <div className="w-62.5 h-47.5 relative">
              <Image src="/images/setup-9.png" fill className="object-cover" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Share;