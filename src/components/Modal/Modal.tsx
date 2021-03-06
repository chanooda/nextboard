import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

function Modal({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.1 }}
      className="fixed z-50 w-[calc(100%_-_32px)] px-10 py-5 bg-white shadow-2xl rounded-xl max-w-[800px] top-1/2 left-1/2 transform: -translate-x-1/2 -translate-y-1/2"
    >
      {children}
    </motion.div>
  );
}

export default Modal;
