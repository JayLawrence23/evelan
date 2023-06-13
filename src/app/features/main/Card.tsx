import React from 'react';
import Image from 'next/image';

import { User } from '@/types/user';
import { TypographyH4 } from '@/components/ui/Typography';
import { motion } from 'framer-motion';

type Props = {
  user: User;
};

const Card = ({ user }: Props) => {
  const { id, avatar, first_name, last_name, email } = user;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: (user.id + 1) * 0.2 }}
      className='flex flex-col items-center justify-center space-y-2 p-6 md:space-y-3'
      key={id}
    >
      <Image
        className='rounded-full'
        src={avatar}
        alt={`icon+${first_name}`}
        width={50}
        height={50}
      />
      <TypographyH4>{id}</TypographyH4>
      <TypographyH4>{email}</TypographyH4>
      <TypographyH4>{`${first_name} ${last_name}`}</TypographyH4>
    </motion.div>
  );
};

export default Card;
