import { motion } from 'framer-motion';
import { User } from 'next-auth';

import SideProfile from './SideProfile';
import SideContents from './SideContents';

interface ISideTabProps {
  user: User | undefined;
}

export default function SideTab({ user }: ISideTabProps) {
  return (
    <motion.aside
      className="fixed top-0 left-0 h-full bg-white shadow-lg z-[9999] rounded-tr-xl"
      initial={{ width: 0 }}
      animate={{ width: 250 }}
      exit={{
        width: 0,
      }}
    >
      <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        className="w-full not-italic rounded-tr-xl border"
      >
        <motion.address className="h-1/3 bg-third border-b border-b-third p-6 rounded-tr-xl">
          <SideProfile user={user} />
        </motion.address>
        <motion.section className="mt-2 bg-third p-6">
          <SideContents />
        </motion.section>
      </motion.div>
    </motion.aside>
  );
}
