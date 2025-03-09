import { motion } from "framer-motion";

export default function MainNav() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <motion.div
        className="px-10 py-3 flex justify-between items-center flex-wrap"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="logo my-3 flex-grow" variants={itemVariants}>
          <h1 className="text-2xl md:text-5xl text-center md:text-left font-bold">
            electro<span className="text-[#FFD95F]">.</span>
          </h1>
        </motion.div>

        <motion.div
          className="flex-grow mx-4 my-3 relative"
          variants={itemVariants}
        >
          <input
            type="search"
            className="p-3 w-full rounded-3xl border-[3px] border-[#FFD95F] outline-none"
            placeholder="Search for products"
          />
          <select
            name=""
            id=""
            className="absolute right-20 top-1/2 transform -translate-y-1/2 p-2 outline-none"
          >
            <option value="">All Categories</option>
          </select>
          <i className="fa-solid fa-magnifying-glass absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
        </motion.div>

        <motion.div className="my-3 flex-grow" variants={itemVariants}>
          <motion.ul
            className="flex gap-5 flex-grow justify-end"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.li variants={itemVariants}>
              <i className="fa-solid fa-repeat"></i>
            </motion.li>
            <motion.li variants={itemVariants}>
              <i className="fa-regular fa-heart"></i>
            </motion.li>
            <motion.li
              variants={itemVariants}
              className="relative flex items-center"
            >
              <i className="fa-solid fa-bag-shopping"></i>
              <span className="absolute top-[-8px] left-[12px] bg-[#FFD95F] w-[16px] h-[16px] rounded-full flex items-center justify-center text-black text-xs">
                2
              </span>
            </motion.li>
            <motion.li variants={itemVariants}>$3 215.99</motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </>
  );
}
