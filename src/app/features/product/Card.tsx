"use client";

import React from "react";
import Image from "next/image";

import { TypographyH4 } from "@/components/ui/Typography";
import { motion } from "framer-motion";
import { ProductItem } from "@/types/product";

type Props = {
  product: ProductItem;
};

const Card = ({ product }: Props) => {
  const { id, title, description, price, brand, images } = product;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: (id + 1) * 0.2 }}
      className='flex flex-col items-center justify-center space-y-2 border border-gray-100 p-6 md:space-y-3'
      key={id}
    >
      <Image
        className='h-full w-full object-cover'
        src={images[0]}
        alt={`icon+${title}`}
        width={1000}
        height={2000}
      />
      <TypographyH4>{id}</TypographyH4>
      <TypographyH4>{title}</TypographyH4>
      <TypographyH4>{`$${price}`}</TypographyH4>
    </motion.div>
  );
};

export default Card;
