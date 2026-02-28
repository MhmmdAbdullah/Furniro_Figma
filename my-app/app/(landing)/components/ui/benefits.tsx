'use client'
import Image from "next/image";

const benefitsData = [
  { id: 1, title: "High Quality", desc: "crafted from top materials", icon: "/images/trophy.svg" },
  { id: 2, title: "Warranty Protection", desc: "Over 2 years", icon: "/images/guarantee.svg" }, // Ganti sesuai aslinya
  { id: 3, title: "Free Shipping", desc: "Order over 150 $", icon: "/images/shipping.svg" },
  { id: 4, title: "24 / 7 Support", desc: "Dedicated support", icon: "/images/customer-support.svg" },
];

const Benefits = () => {
  return (
    <section className="bg-[#FAF3EA] py-25">
      <div className="container mx-auto px-13">
        <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-14">
          {benefitsData.map((item) => (
            <div key={item.id} className="flex gap-2.5 items-center">
              <Image src={item.icon} alt={item.title} width={60} height={60} />
              <div className="flex flex-col gap-0.5">
                <h1 className="text-[25px] font-semibold leading-tight">{item.title}</h1>
                <p className="text-xl font-medium text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits;