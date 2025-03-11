import { useState } from "react";
import { motion } from "framer-motion"; // استيراد Framer Motion
import One from "../Assets/curology-t_ua25SR8mg-unsplash.jpg";
import Two from "../Assets/eniko-kis-KsLPTsYaqIQ-unsplash.jpg";
import Three from "../Assets/imani-bahati-LxVxPA1LOVM-unsplash.jpg";

export default function BestSellers() {
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
    <section className="bg-white h-dvh my-5 p-5">
      <div className="py-2 flex-wrap flex justify-between items-center">
        <h4 className="p-3">BestSellers</h4>
        <ul className="flex gap-10 flex-wrap">
          <li className="p-3 border border-[#FFD95F] rounded-full">Top 20</li>
          <li className="py-3">Phones & Tablets</li>
          <li className="p-3">Laptops & Computers</li>
          <li className="p-3">Video Cameras</li>
        </ul>
      </div>
      <hr />
      <div className="flex items-center justify-evenly flex-wrap">
        {Data.map((ele, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center flex-wrap gap-10 my-5 mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-[200px] h-[200px]">
              <img
                src={ele.img}
                alt={ele.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div>
                <p className="mb-5 text-gray-300 font-extralight">
                  {ele.title}
                </p>
                <h4 className="text-slate-600 font-bold">{ele.text}</h4>
              </div>
              <div className="flex my-5 gap-5">
                <p>{ele.price}</p>
                <p>{ele.icon}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
