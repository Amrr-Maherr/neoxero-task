import { motion } from "framer-motion";
import One from "../Assets/rachit-tank-2cFZ_FB08UM-unsplash.jpg";
import Two from "../Assets/giorgio-trovato-K62u25Jk6vo-unsplash.jpg";
import Three from "../Assets/imani-bahati-LxVxPA1LOVM-unsplash.jpg";

const products = [
  {
    image: One,
    title: "Exclusive Offer",
    description: "Best deals available!",
  },
  {
    image: Two,
    title: "Limited Time Sale",
    description: "Huge discounts!",
  },
  {
    image: Three,
    title: "New Collection",
    description: "Fresh arrivals!",
  },
];

export default function DiscountProducts() {
  return (
    <section className="my-5">
      <div className="flex justify-center items-center flex-wrap gap-10">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="w-[300px] h-[200px] relative overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={product.image} alt="" className="w-full h-full rounded" />
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-end justify-center text-white px-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <motion.h3
                className="text-lg font-bold"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.4 }}
              >
                {product.title}
              </motion.h3>
              <motion.p
                className="text-sm"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.5 }}
              >
                {product.description}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
