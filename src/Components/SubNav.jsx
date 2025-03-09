import { motion } from "framer-motion";

export default function SubNav() {
  // Animation variants for the nav items
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

  // Container animation for staggered effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <nav className="border-b-2 border-gray-300 px-5 flex items-center justify-between flex-wrap">
        <motion.ul
          className="flex gap-3 text-sm"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.li className="p-3" variants={itemVariants}>
            <i className="fa-solid fa-phone text-[#FFD95F]"></i> +060 (800)
            801-858
          </motion.li>
          <motion.li className="p-3" variants={itemVariants}>
            <i className="fa-solid fa-envelope text-[#FFD95F]"></i>{" "}
            info@electro.com
          </motion.li>
        </motion.ul>
        <motion.ul
          className="flex gap-3 text-sm"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.li className="border-e-2 p-3" variants={itemVariants}>
            <i className="fa-solid fa-location-dot text-gray-400"></i> Store
            Locator
          </motion.li>
          <motion.li className="border-e-2 p-3" variants={itemVariants}>
            <i className="fa-solid fa-truck text-gray-400"></i> Track Your Order
          </motion.li>
          <motion.li className="border-e-2 p-3" variants={itemVariants}>
            $ Dollar (US)
          </motion.li>
          <motion.li className="p-3" variants={itemVariants}>
            <i className="fa-solid fa-user text-gray-400"></i> Register{" "}
            <span className="text-gray-300">or</span> Sign in
          </motion.li>
        </motion.ul>
      </nav>
    </>
  );
}
