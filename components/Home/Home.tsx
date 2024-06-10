"use client";

import { Category } from "@/api-server/getCategories/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { globalContext } from "../Layout/Layout";

const Home: React.FC = () => {
  const { locale } = useContext(globalContext);

  // prefetched server-side
  const { data: categories } = useQuery<Category[]>({
    queryKey: ["categories", { locale }],
    queryFn: async () => {
      console.log("1", locale);
      const r = await axios.get(`/${locale}/api/categories`);
      return r.data;
    },
  });

  return (
    <>
      <div>Home</div>
      <div className="border-[1px] border-solid border-green-800 w-full h-[200px] flex items-center justify-center">
        {categories && JSON.stringify(categories[0])}
      </div>
    </>
  );
};

export default Home;
