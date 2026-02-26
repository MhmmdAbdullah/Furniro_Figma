"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container mx-auto border-t">
      <div className="flex flex-col gap-9 ">
        <div className="flex justify-between p-12">
          <div className="flex flex-col gap-12.5">
            <h1 className="font-bold text-2xl">Funiro</h1>
            <p className="text-gray-400 max-w-71.25">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>
          <div className="font-medium flex flex-col gap-12.5">
            <h1 className="text-gray-400">Links</h1>
            <div className="flex flex-col gap-11.5">
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div className="font-medium flex flex-col gap-12.5">
            <h1 className="text-gray-400">Help</h1>
            <div className="flex flex-col gap-11.5">
              <Link href="#">Payment Options</Link>
              <Link href="#">Returns</Link>
              <Link href="#">Privacy Policies</Link>
            </div>
          </div>
          <div className="font-medium flex flex-col gap-12.5">
            <h1 className="text-gray-400">NewsLetter</h1>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="border-b"
              />
              <button className="font-medium text-sm cursor-pointer">
                SUBCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className="mb-11.5 px-12">
          <p>2023 furino. All rights reverved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
