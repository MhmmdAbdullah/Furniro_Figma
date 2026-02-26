"use client";
import Image from "next/image";
import Button from "../ui/Button";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineArrowRight } from "react-icons/hi";

const Inspirations = () => {
  const [buttonActive, setButtonActive] = useState<number | null>(1);
  const totalSlides = 4;

  const handleNext = () => {
    setButtonActive((prev) =>
      prev === null || prev === totalSlides ? 1 : prev + 1,
    );
  };

  return (
    <section className="bg-primary-lighthome2 max-h-[670]">
      <div className="container mx-auto">
        <div className="ml-25 py-11 flex gap-10.5 justify-center items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 w-105.5 ">
              <h1 className="font-bold text-[40px]">
                50+ Beautiful rooms inspiration
              </h1>
              <p>
                Our designer already made a lot of beautiful prototipe of rooms
                that inspire you
              </p>
            </div>
            <Button className="w-fit px-9! py-3!">Explore More</Button>
          </div>
          <div className="flex gap-6  w-full items-start">
            <div className="relative shrink-0">
              <Image
                src="/images/inspiration-image.svg"
                alt="img"
                width={404}
                height={582}
              />
              <div className="absolute bottom-20 left-6 flex items-end">
                <div className="flex flex-col justify-center items-center bg-white/60  w-54 h-32.5">
                  <div className="flex font-medium gap-2">
                    <h1>01</h1>
                    <div className="flex items-center">
                      <span className="w-6 h-px bg-[#616161]"></span>
                    </div>
                    <h1>Bed Room</h1>
                  </div>
                  <h1 className="font-semibold text-[28px]">Inner Peace</h1>
                </div>
                <div className="w-12 h-12 bg-primary text-white flex justify-center items-center">
                  <HiOutlineArrowRight size={24} />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 shrink-0">
              <Image
                src="/images/inspiration-image.svg"
                alt="img"
                width={372}
                height={486}
                className="w-full h-auto max-h-121.5 object-cover"
              />

              <div className="flex items-center gap-4 h-16">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`transition-all duration-300 rounded-full flex items-center justify-center ${
                      buttonActive === i
                        ? "w-7 h-7 bg-white border border-primary"
                        : "w-3 h-3 bg-[#D8D8D8]"
                    }`}
                  >
                    {buttonActive === i && (
                      <div className="w-3 h-3 rounded-full bg-primary animate-in zoom-in duration-300" />
                    )}
                  </div>
                ))}
                <button
                  onClick={handleNext}
                  className="absolute translate-x-78 -translate-y-78 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label="Next slide"
                >
                  <IoIosArrowForward size={24} />
                </button>
              </div>                 
            </div>
            <div className="shrink-0 overflow-hidden">
              <Image
                src="/images/inspiration-image.svg"
                alt="img"
                width={372}
                height={486}
                className="w-full h-auto max-h-121.5 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspirations;
