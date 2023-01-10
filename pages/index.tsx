import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head"; // 메타 태그나 title 같은 태그 적용
// list data fetch
import { fetchList } from "utils/fetcher";
// type
import { ProductListType } from "types/Interface";
// components
import ProductList from "@/components/ProductList/ProductList";

const Home: NextPage = () => {
  const [productList, setProductList] = useState<ProductListType[]>([]);
  useEffect(() => {
    fetchList()
      .then((res) => setProductList(res))
      .catch((e) => alert(e));
  }, []);
  return (
    <div>
      <Head>
        <title>Home | cosmetics app</title>
      </Head>
      <ProductList list={productList} />
    </div>
  );
};

export default Home;
