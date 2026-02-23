import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="bg-[url('/images/hero-bg.svg')]">
      <div className="bg-[url('/images/hero-bg.svg')] bg-cover bg-center h-179 w-full container mx-auto">
        <div className="flex lg:justify-end justify-center ">
          <div className="flex bg-primary-lighthome1 w-90 h-111 md:w-161 md:h-111 mt-38 mr-0 lg:mr-14.5">
            <div className="flex flex-col mt-15.5 ml-10">
              <h1 className="font-semibold tracking-[3px] text-xs md:text-base">New Arrival</h1>
              <h1 className="font-bold text-5xl md:text-6xl text-primary pr-20 mt-2 md:leading-16.25">
                Discover Our New Collection
              </h1>
              <h1 className="mt-4 md:pr-20 text-xs md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </h1>
              <Button className="w-fit font-bold mt-11.5">Buy Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
