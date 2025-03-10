import { motion } from "framer-motion";
import React from "react";
import MyImage from "../Assets/curology-t_ua25SR8mg-unsplash.jpg";

export default function BestDeals() {
  return (
    <>
      <section className="bg-gray-300 my-5 p-5">
        <div>
          <ul className="flex justify-around mb-4 flex-wrap">
            <li className="p-2">Best Deals</li>
            <li className="p-2">TV & Video</li>
            <li className="p-2">Cameras</li>
            <li className="p-2">Audio</li>
            <li className="p-2">Cell Phones</li>
            <li className="p-2">GPS & Navi</li>
            <li className="p-2">Computers</li>
            <li className="p-2">Portable Audio</li>
            <li className="p-2">Accessories</li>
          </ul>
          <hr />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          <div className="grid grid-rows-2 gap-4">
            <motion.div
              className="bg-gray-200 flex items-start justify-center flex-col gap-5 text-white font-bold rounded p-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <div className="text-start">
                <h2 className="text-gray-300">lorem</h2>
                <p className="text-slate-600">Lorem, ipsum.</p>
              </div>
              <div>
                <img src={MyImage} alt="" className="w-full " />{" "}
              </div>
              <div className="w-full flex justify-between">
                <p className="text-black">$399,00</p>
                <i className="fas fa-shopping-cart"></i>
              </div>
            </motion.div>
            <motion.div
              className="bg-gray-200 flex items-start justify-center flex-col gap-5 text-white font-bold rounded p-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <div className="text-start">
                <h2 className="text-gray-300">lorem</h2>
                <p className="text-slate-600">Lorem, ipsum.</p>
              </div>
              <div>
                <img src={MyImage} alt="" className="w-full " />{" "}
              </div>
              <div className="w-full flex justify-between">
                <p className="text-black">$399,00</p>
                <i className="fas fa-shopping-cart"></i>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="bg-gray-200 flex items-start justify-between flex-col text-white font-bold h-ful p-3 rounded"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <div>
              <h3>TVs</h3>
              <p>WidesScreen 4k SUHD TV</p>
            </div>
            <div className="w-full h-full p-2">
              <img src={MyImage} alt="" className="w-full h-full"/>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex gap-5">
                <h2 className="text-red-600">$2 999,00</h2>
                <p className="text-gray-600">$3 299,00</p>
              </div>
              <button className="bg-yellow-400 p-2 rounded-xl">
                Add to cart
              </button>
            </div>
          </motion.div>
          <div className="grid grid-rows-2 gap-4">
            <motion.div
              className="bg-gray-200 flex items-start justify-center flex-col gap-5 text-white font-bold rounded p-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <div className="text-start">
                <h2 className="text-gray-300">lorem</h2>
                <p className="text-slate-600">Lorem, ipsum.</p>
              </div>
              <div>
                <img src={MyImage} alt="" className="w-full " />{" "}
              </div>
              <div className="w-full flex justify-between">
                <p className="text-black">$399,00</p>
                <i className="fas fa-shopping-cart"></i>
              </div>
            </motion.div>
            <motion.div
              className="bg-gray-200 flex items-start justify-center flex-col gap-5 text-white font-bold rounded p-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <div className="text-start">
                <h2 className="text-gray-300">lorem</h2>
                <p className="text-slate-600">Lorem, ipsum.</p>
              </div>
              <div>
                <img src={MyImage} alt="" className="w-full " />{" "}
              </div>
              <div className="w-full flex justify-between">
                <p className="text-black">$399,00</p>
                <i className="fas fa-shopping-cart"></i>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
