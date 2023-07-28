import "server-only";

import React, { FC, ReactNode } from "react";

import { Card, Header } from "@/product";
import axios from "axios";
import { Product } from "@/types/product";
import Search from "@/search/Search";
import { Container } from "@/components/layout";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const Product: FC<Props> = async ({ params, searchParams }) => {
  const result = await axios.get<Product>(
    `https://dummyjson.com/products/search?q=${searchParams.search}`
  );
  const products = result.data.products;

  return (
    <Container maxWidth='7xl'>
      <Header />
      <Search />
      <CardContainer>
        {/* PASS DATA TO CARD */}
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </CardContainer>
    </Container>
  );
};

const CardContainer = ({ children }: { children: ReactNode }) => (
  <div className='mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3'>
    {children}
  </div>
);

export default Product;
