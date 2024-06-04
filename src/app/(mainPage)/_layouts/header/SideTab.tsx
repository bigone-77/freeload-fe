import { motion } from 'framer-motion';
import { User } from 'next-auth';

import { itemVariants, links } from '@/constants/Framer';

interface ISideTabProps {
  user: User | undefined;
}

export default function SideTab({ user }: ISideTabProps) {
  return (
    <motion.aside
      className="fixed top-0 left-0 h-full bg-white shadow-lg z-[9999]"
      initial={{ width: 0 }}
      animate={{ width: 300 }}
      exit={{
        width: 0,
      }}
    >
      <motion.div
        className="bg-rose-300 flex flex-col p-6"
        initial="closed"
        animate="open"
        exit="closed"
      >
        <motion.address>
          {user ? (
            <img
              src={user.image as string}
              alt="profile"
              className="w-12 h-12 rounded-full"
            />
          ) : (
            <p>유저 없당</p>
          )}
        </motion.address>
        {links.map(({ name, to, id }) => (
          <motion.a key={id} href={to} variants={itemVariants}>
            {name}
          </motion.a>
        ))}
      </motion.div>
    </motion.aside>
  );
}
