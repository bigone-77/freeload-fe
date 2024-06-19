import { motion } from 'framer-motion';
import { User } from 'next-auth';

import SideProfile from './SideProfile';
import SideContents from './SideContents';

interface ISideTabProps {
  user: User | undefined;
}

const sideTabVariants = {
  open: { width: 250 },
  closed: { width: 0 },
};

const contentVariants = {
  open: { opacity: 1, transition: { duration: 0.3 } },
  closed: { opacity: 0, transition: { duration: 0.3 } },
};

export default function SideTab({ user }: ISideTabProps) {
  return (
    <motion.aside
      className="fixed top-0 left-0 h-full bg-white shadow-lg z-[9999] rounded-tr-xl"
      initial="closed"
      animate="open"
      exit="closed"
      variants={sideTabVariants}
    >
      <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        className="w-full not-italic rounded-tr-xl border"
        variants={contentVariants}
      >
        <motion.address
          className="h-1/3 bg-third border-b border-b-third p-6 rounded-tr-xl"
          variants={contentVariants}
        >
          <SideProfile user={user} />
        </motion.address>
        <motion.section
          className="mt-2 bg-third p-6"
          variants={contentVariants}
        >
          <SideContents />
        </motion.section>
      </motion.div>
    </motion.aside>
  );
}
