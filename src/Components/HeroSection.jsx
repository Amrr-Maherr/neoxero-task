import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import SlideOne from "../Assets/c-d-x-PDX_a_82obo-unsplash.jpg";
import SlideTwo from "../Assets/domino-studio-164_6wVEHfI-unsplash.jpg";
import SlideThree from "../Assets/eniko-kis-KsLPTsYaqIQ-unsplash.jpg";
import SlideFour from "../Assets/rachit-tank-2cFZ_FB08UM-unsplash.jpg";

export default function HeroSection() {
  return (
    <>
      <div className="flex gap-10 items-center justify-end px-5 mt-10 mb-5 hidden lg:flex">
        <ul className="flex gap-5">
          <li className="text-md text-red-500">SuperDeals</li>
          <li className="text-md">Featured Brands</li>
          <li className="text-md">Trending Styles</li>
          <li className="text-md">Gift Cards</li>
          <li className="text-md">Blog</li>
        </ul>
        <h2 className="font-extralight">Free Shopping online orders $50+</h2>
      </div>
      <div className="relative w-full h-screen">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="w-full h-screen"
        >
          {[
            {
              image: SlideOne,
              title: "Urban Skyline",
              subtitle: "Experience the beauty of cityscapes at sunset.",
            },
            {
              image: SlideTwo,
              title: "Minimalist Interior",
              subtitle: "Discover modern and elegant interior design.",
            },
            {
              image: SlideThree,
              title: "Serene Nature",
              subtitle: "Escape to the peacefulness of the wild outdoors.",
            },
            {
              image: SlideFour,
              title: "Creative Workspace",
              subtitle: "Unleash your creativity in a well-designed space.",
            },
          ].map((slide, index) => (
            <SwiperSlide
              key={index}
              className="relative flex items-center justify-center h-screen"
            >
              {/* انيميشن Fade-In عند تحميل السلايد */}
              <motion.img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />

              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-4xl font-bold mb-2">{slide.title}</h1>
                <p className="text-lg mb-4">{slide.subtitle}</p>
                <motion.button
                  className="px-6 py-2 bg-[#FFD95F] hover:bg-[#FFC107] transition rounded-md text-white font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discover More
                </motion.button>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* القائمة الجانبية مع انيميشن Slide-In */}
        <motion.div
          className="absolute -top-10 left-40 bg-gray-100  text-black p-4 rounded-md z-50 hidden lg:block"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-gray-300">
              All Departments
            </li>
            <hr />
            <li className="cursor-pointer hover:text-gray-300">
              Value of the Day
            </li>
            <hr />
            <li className="cursor-pointer hover:text-gray-300">
              Top 100 Offers
            </li>
            <hr />
            <li className="cursor-pointer hover:text-gray-300">New Arrivals</li>
            <hr />
            <li className="cursor-pointer hover:text-gray-300">
              Laptops & Computers
            </li>
            <hr />
            <li className="cursor-pointer hover:text-gray-300">
              Smartphones & Accessories
            </li>
            <hr />
            <li className="cursor-pointer hover:text-gray-300">
              Home Appliances
            </li>
            <hr />
            <li className="cursor-pointer hover:text-gray-300">
              Gaming & Consoles
            </li>
            <hr />
            <li className="cursor-pointer hover:text-gray-300">
              Fashion & Clothing
            </li>
            <hr />
            <li className="cursor-pointer hover:text-gray-300">
              Beauty & Health
            </li>
            <hr />
            <li className="cursor-pointer hover:text-gray-300">
              Sports & Outdoors
            </li>
          </ul>
        </motion.div>
      </div>
    </>
  );
}
