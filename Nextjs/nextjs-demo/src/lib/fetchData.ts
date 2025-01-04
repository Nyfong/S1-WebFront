// lib/fetchData.ts
import { Product } from "./Product";
export const fetchData = async (): Promise<Product[]> => {
  const url = "https://dummyjson.com/products";
  const rq = await fetch(url, {
    method: "GET",
  });

  if (!rq.ok) {
    throw new Error("Failed to fetch product data");
  }

  const rs = await rq.json();
  return rs.products;
};
