import { useState } from "react";
import One from "../Assets/curology-t_ua25SR8mg-unsplash.jpg";
import Two from "../Assets/eniko-kis-KsLPTsYaqIQ-unsplash.jpg";
import Three from "../Assets/imani-bahati-LxVxPA1LOVM-unsplash.jpg";

export default function RecentlyViewed() {
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
    <section className="my-10 px-10">
      <div className="py-5">
        <h1>Recently Viewed</h1>
      </div>
      <hr />
      <div className="flex flex-wrap gap-5">
        {Data.map((ele, index) => (
          <div key={index} className="w-[200px] mx-auto my-4">
            <div className="flex flex-col gap-2 mb-3">
              <p className="text-gray-500 font-light">{ele.title}</p>
              <h4 className="text-slate-600 font-bold">{ele.text}</h4>
            </div>
            <div>
              <img
                src={ele.img}
                alt={ele.title}
                className="w-full h-[150px] object-cover"
              />
            </div>
            <div className="flex justify-between my-5">
              <p>{ele.price}</p>
              <p>{ele.icon}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
}
