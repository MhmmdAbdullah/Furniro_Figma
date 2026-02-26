"use client";

import Image from "next/image";

const Filter = () => {
  return (
    <section className="bg-primary-light">
      <div className="container mx-auto h-25">
        <div className="flex justify-between items-center py-6 px-25">
          <div className="flex gap-7.5">
            <div className="flex gap-6">
              <div className="flex gap-3">
                <Image
                  src="https://www.systemuicons.com/images/icons/filtering.svg"
                  alt="filter-logo"
                  width={25}
                  height={25}
                />
                <p className="text-xl">Filter</p>
              </div>
              <Image
                src="/images/grid-big-round.svg"
                alt="grid-logo"
                width={28}
                height={28}
              />
              <Image
                src="/images/view-list.svg"
                alt="grid-logo"
                width={24}
                height={24}
              />
            </div>
            <div className="border-l pl-8.5">
              <p>Showing 1–16 of 32 results</p>
            </div>
          </div>
          <div className="flex gap-7.25">
            <div className="flex gap-2 items-center text-xl">
                <p>Show</p>
                <div className="w-14 h-14 flex bg-white justify-center items-center ">
                    <p className="text-black/50">16</p>
                </div>
            </div>
            <div className="flex gap-2 items-center text-xl">
                <p>Short by</p>
                <div className="w-47 h-14 flex bg-white pl-7.5 items-center ">
                    <p className="text-black/50">Default</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
