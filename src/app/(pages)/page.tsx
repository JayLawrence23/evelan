import "server-only";

import React, { FC } from "react";

import { Card, CardContainer, Header } from "@/product";
import Search from "@/search/Search";
import { Container } from "@/components/layout";
import { fetchProduct } from "@/api/services/product/FetchProduct";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const ProductPage: FC<Props> = async ({ params, searchParams }) => {
  const products = await fetchProduct(searchParams.search);

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

export default ProductPage;
