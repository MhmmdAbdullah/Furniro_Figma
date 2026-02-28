"use client";
import Image from "next/image";

const ProductDescription = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="pt-12 pb-16.5 border-t">
          <div className="flex flex-col items-center gap-9">
            <div className="flex justify-center gap-13 text-gray-500 text-2xl">
              <h1 className="text-black! font-medium">Description</h1>
              <h1>Additional Information</h1>
              <h1>Reviews [5]</h1>
            </div>
            <div className="flex flex-col gap-7.5 px-52 text-justify text-gray-500">
              <p>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.
              </p>
              <p>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </p>
            </div>
            <div className="flex justify-center gap-7.25 px-25 w-full">
              <div className="bg-primary-light rounded-xl">
                <Image
                  src="/images/cloud-sofa.svg"
                  alt="sofa"
                  width={828}
                  height={551}
                />
              </div>
              <div className="bg-primary-light rounded-xl">
                <Image
                  src="/images/cloud-sofa.svg"
                  alt="sofa"
                  width={828}
                  height={551}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
