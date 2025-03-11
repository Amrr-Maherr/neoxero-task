import { useState } from "react";
import { motion } from "framer-motion";
import One from "../Assets/curology-t_ua25SR8mg-unsplash.jpg";
import Two from "../Assets/eniko-kis-KsLPTsYaqIQ-unsplash.jpg";
import Three from "../Assets/imani-bahati-LxVxPA1LOVM-unsplash.jpg";
import AppleLogo from "../Assets/apple-logo-svgrepo-com.svg";
import MicrosoftLogo from "../Assets/microsoft-logo-svgrepo-com.svg";
import TwitterLogo from "../Assets/twitter-3-logo-svgrepo-com.svg";

export default function AllProducts() {
  const [Data, setData] = useState([
    {
      img: One,
      title: "iPhone 14 Pro",
      text: "128GB, Deep Purple",
      price: "$999.00",
      icon: "🛒",
    },
    {
      img: Two,
      title: "MacBook Air M2",
      text: "16GB RAM, 512GB SSD",
      price: "$1,299.00",
      icon: "🛒",
    },
    {
      img: Three,
      title: "Canon EOS R5",
      text: "45MP, 8K Video",
      price: "$3,899.00",
      icon: "🛒",
    },
    {
      img: One,
      title: "iPhone 14 Pro",
      text: "128GB, Deep Purple",
      price: "$999.00",
      icon: "🛒",
    },
    {
      img: Two,
      title: "MacBook Air M2",
      text: "16GB RAM, 512GB SSD",
      price: "$1,299.00",
      icon: "🛒",
    },
    {
      img: Three,
      title: "Canon EOS R5",
      text: "45MP, 8K Video",
      price: "$3,899.00",
      icon: "🛒",
    },
  ]);

  return (
    <section className="bg-white min-h-screen my-5 p-5">
      <div className="flex items-center justify-between flex-wrap">
        <div className="w-[200px] text-left">
          <h2 className="text-xl py-2">lorem</h2>
          <hr />
        </div>
        <div className="w-[200px] text-left">
          <h2 className="text-xl py-2">lorem</h2>
          <hr />
        </div>
        <div className="w-[200px] text-left">
          <h2 className="text-xl py-2">lorem</h2>
          <hr />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {Data.map((ele, index) => (
          <motion.div
            key={index}
            className="flex  items-center gap-5 mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-[200px] h-[200px]">
              <img
                src={ele.img}
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold">{ele.title}</h3>
              <p className="text-gray-600">{ele.text}</p>
              <p className="text-xl font-bold">{ele.price}</p>
              <button className="mt-2 text-lg">{ele.icon}</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
