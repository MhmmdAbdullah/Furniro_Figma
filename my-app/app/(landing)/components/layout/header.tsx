"use client";

import Image from "next/image";
import Link from "next/link";
import AccountAlertOutlineIcon from "mdi-react/AccountAlertOutlineIcon";
import { Search, Heart } from "akar-icons";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-0 lg:px-4">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Logo Section */}
          <div className="shrink-0">
            <Link href="/">
              <Image
                src="/images/Furniro_Logo.svg"
                alt="logo"
                width={185}
                height={41}
                className="w-32 sm:w-40 md:w-44 h-auto"
                priority
              />
            </Link>
          </div>

          {/* Navigation - Hidden on Mobile */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-12 text-base font-medium">
            <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <Link href="/shop" className="hover:text-gray-600 transition-colors">Shop</Link>
            <Link href="/about" className="hover:text-gray-600 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-gray-600 transition-colors">Contact</Link>
          </nav>

          {/* Icons Section */}
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
            <button aria-label="Account" className="hover:opacity-70 transition-opacity">
              <AccountAlertOutlineIcon size={28}/>
            </button>
            <button aria-label="Search" className="hover:opacity-70 transition-opacity">
              <Search size={28}  />
            </button>
            <button aria-label="Favorites" className="hover:opacity-70 transition-opacity">
              <Heart size={28} />
            </button>
            <button aria-label="Cart" className="hover:opacity-70 transition-opacity">
              <ShoppingCartOutlined className="text-[28px]" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;