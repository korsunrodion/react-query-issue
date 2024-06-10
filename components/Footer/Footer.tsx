"use client";

import { Category } from "@/api-server/getCategories/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { globalContext } from "../Layout/Layout";

const Footer: React.FC = () => {
  const { locale } = useContext(globalContext);

  // prefetched server-side
  const { data: categories } = useQuery<Category[]>({
    queryKey: ["categories", { locale }],
    queryFn: async () => {
      const r = await axios.get(`/${locale}/api/categories`);
      return r.data;
    },
  });

  return (
    <>
      <div>Footer</div>
      <div className="border-[1px] border-solid border-green-800 w-full h-[200px] flex items-center justify-center text-white">
        {categories && JSON.stringify(categories[0])}
      </div>
    </>
  );
};

export default Footer;
