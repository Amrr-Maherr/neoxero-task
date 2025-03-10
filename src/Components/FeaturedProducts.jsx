import { motion } from "framer-motion";
import One from "../Assets/rachit-tank-2cFZ_FB08UM-unsplash.jpg";
import Two from "../Assets/rachit-tank-2cFZ_FB08UM-unsplash.jpg";
import Three from "../Assets/imani-bahati-LxVxPA1LOVM-unsplash.jpg";
import Four from "../Assets/giorgio-trovato-K62u25Jk6vo-unsplash.jpg";
import Five from "../Assets/eniko-kis-KsLPTsYaqIQ-unsplash.jpg";
import Six from "../Assets/eniko-kis-KsLPTsYaqIQ-unsplash.jpg";
import Seven from "../Assets/curology-t_ua25SR8mg-unsplash.jpg";
export default function FeaturedProducts() {
  return (
    <>
      <div className="title px-5 my-5">
        <ul className="flex items-center justify-center gap-10">
          <li className="font-bold">Featured</li>
          <li>On Sale</li>
          <li>Top Rated</li>
        </ul>
        <hr />
      </div>
      <div className="flex items-center justify-center text-center flex-wrap">
        <motion.div
          className="border-2 border-[#FFD95F] p-5 rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between mb-10">
            <p>
              Special <br /> Offer
            </p>
            <div className="p-3 bg-black bg-opacity-80 text-white rounded">
              <p className="opacity-100">Save $20</p>
            </div>
          </div>
          <div className="w-[200px] h-[300px]">
            <img src={One} alt="" className="w-full h-full" />
          </div>
          <div className="my-4">
            <h4 className="text-slate-800 my-3">
              Game console controller <br /> + USB 3.0 cable
            </h4>
            <p>
              $99.00 <span className="text-xl text-red-600">$79,00</span>{" "}
            </p>
          </div>
          <div>
            <div className="flex justify-between my-3">
              <p className="text-sm">Avoidable: 6</p>
              <p className="text-sm">Already Sold: 28</p>
            </div>
            <div className="mb-3 relative w-full bg-gray-300 h-5 rounded-md before:content-[''] before:absolute before:bg-[#FFD95F] before:w-16 before:h-full before:left-0 before:rounded"></div>
          </div>
          <div>
            <div>
              <h3>Hurry Up! Offer ends in:</h3>
            </div>
            <div className="flex justify-center items-center gap-1 my-3">
              <div className="p-2 bg-gray-500 rounded text-white">08</div>
              <span>:</span>
              <div className="p-2 bg-gray-500 rounded text-white">19</div>
              <span>:</span>
              <div className="p-2 bg-gray-500 rounded text-white">54</div>
            </div>
            <div className="flex justify-center items-center gap-1">
              <div>HOURS</div>
              <div>MINS</div>
              <div>SECS</div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex justify-between flex-col gap-15"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="p-3">
            <div className="text-start">
              <h3 className="my-3 text-gray-300">Speakers</h3>
              <p className="my-3 text-slate-600">
                Wireless Audio System <br /> Multiroom 360
              </p>
            </div>
            <div className="w-[200px] h-[200px] mx-auto">
              <img src={Two} alt="" className="w-full h-full" />
            </div>
            <div className="flex justify-around text-center my-3">
              <p className="text-gray-600">$685,00</p>
              <i className="fas fa-shopping-cart p-3 bg-[#FFD95F] rounded-lg"></i>
            </div>
          </div>
          <div className="p-3">
            <div className="text-start">
              <h3 className="my-3 text-gray-300">Speakers</h3>
              <p className="my-3 text-slate-600">
                Wireless Audio System <br /> Multiroom 360
              </p>
            </div>
            <div className="w-[200px] h-[200px] mx-auto">
              <img src={Three} alt="" className="w-full h-full" />
            </div>
            <div className="flex justify-around text-center my-3">
              <p className="text-gray-600">$685,00</p>
              <i className="fas fa-shopping-cart p-3 bg-[#FFD95F] rounded-lg"></i>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex justify-between flex-col gap-15"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="p-3">
            <div className="text-start">
              <h3 className="my-3 text-gray-300">Speakers</h3>
              <p className="my-3 text-slate-600">
                Wireless Audio System <br /> Multiroom 360
              </p>
            </div>
            <div className="w-[200px] h-[200px] mx-auto">
              <img src={Four} alt="" className="w-full h-full" />
            </div>
            <div className="flex justify-around text-center my-3">
              <p className="text-gray-600">$685,00</p>
              <i className="fas fa-shopping-cart p-3 bg-[#FFD95F] rounded-lg"></i>
            </div>
          </div>
          <div className="p-3">
            <div className="text-start">
              <h3 className="my-3 text-gray-300">Speakers</h3>
              <p className="my-3 text-slate-600">
                Wireless Audio System <br /> Multiroom 360
              </p>
            </div>
            <div className="w-[200px] h-[200px] mx-auto">
              <img src={Five} alt="" className="w-full h-full" />
            </div>
            <div className="flex justify-around text-center my-3">
              <p className="text-gray-600">$685,00</p>
              <i className="fas fa-shopping-cart p-3 bg-[#FFD95F] rounded-lg"></i>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex justify-between flex-col gap-15"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="p-3">
            <div className="text-start">
              <h3 className="my-3 text-gray-300">Speakers</h3>
              <p className="my-3 text-slate-600">
                Wireless Audio System <br /> Multiroom 360
              </p>
            </div>
            <div className="w-[200px] h-[200px] mx-auto">
              <img src={Six} alt="" className="w-full h-full" />
            </div>
            <div className="flex justify-around text-center my-3">
              <p className="text-gray-600">$685,00</p>
              <i className="fas fa-shopping-cart p-3 bg-[#FFD95F] rounded-lg"></i>
            </div>
          </div>
          <div className="p-3">
            <div className="text-start">
              <h3 className="my-3 text-gray-300">Speakers</h3>
              <p className="my-3 text-slate-600">
                Wireless Audio System <br /> Multiroom 360
              </p>
            </div>
            <div className="w-[200px] h-[200px] mx-auto">
              <img src={Seven} alt="" className="w-full h-full" />
            </div>
            <div className="flex justify-around text-center my-3">
              <p className="text-gray-600">$685,00</p>
              <i className="fas fa-shopping-cart p-3 bg-[#FFD95F] rounded-lg"></i>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
