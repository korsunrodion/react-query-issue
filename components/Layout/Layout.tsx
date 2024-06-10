"use client";

import React, { createContext, useMemo } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import queryClientConfig from "@/config/queryConfig";
import Footer from "../Footer/Footer";

type Props = {
  children: React.ReactNode;
  locale: "al" | "en";
};

const queryClientGlobal = new QueryClient({
  defaultOptions: queryClientConfig,
});

const initialData = {
  locale: "al",
};

export const globalContext = createContext(initialData);

const Layout: React.FC<Props> = ({ children, locale }) => {
  let queryClient;
  if (typeof window === "undefined") {
    queryClient = new QueryClient();
  } else {
    queryClient = queryClientGlobal;
  }

  const localeMemo = useMemo(() => locale, [locale]);

  return (
    <globalContext.Provider value={{ locale: localeMemo }}>
      <QueryClientProvider client={queryClient}>
        {children}
        <Footer />
      </QueryClientProvider>
    </globalContext.Provider>
  );
};

export default Layout;
