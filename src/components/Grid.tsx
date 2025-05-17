import { motion, AnimatePresence } from "framer-motion";

type TGrid = {
  children: React.ReactNode;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ResponsiveGrid = ({ children }: TGrid) => {
  return (
    <AnimatePresence>
      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "1rem",
            justifyItems: "center",
          }}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
export default ResponsiveGrid;
