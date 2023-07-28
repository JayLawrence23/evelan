import { httpDummy } from "@/api/adapters";
import { ProductItem } from "@/types/product";

export const fetchProduct = async (
  search: string | string[] | undefined
): Promise<ProductItem[]> => {
  const result = await httpDummy.get(`/products/search?q=${search}`);

  const data = result.data.products;

  return data;
};
