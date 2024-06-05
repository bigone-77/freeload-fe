import { motion } from 'framer-motion';

import { ReviewCardType } from '@/models/Review';

export default function ReviewCard({
  email,
  imgUrl,
  contents,
}: ReviewCardType) {
  return (
    <motion.div
      key={email}
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.5 }}
      className="px-6 py-3 border border-gray-300 rounded-lg m-4 w-72 text-center"
    >
      <div className="flex items-center gap-2 mb-10">
        <img src={imgUrl} alt="Profile" className="w-12 h-12 rounded-full" />
        <p className="font-semibold">{email.split('@')[0]}</p>
      </div>
      <p className="text-sm text-gray-600">{contents}</p>
    </motion.div>
  );
}
