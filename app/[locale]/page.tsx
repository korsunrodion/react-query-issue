import getCategories from "@/api-server/getCategories/getCategories";
import Footer from "@/components/Footer/Footer";
import Home from "@/components/Home/Home";
import queryClientConfig from "@/config/queryConfig";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

export default async function HomePage({ params }: { params: { locale: "al" | "en" } }) {
  const queryClient = new QueryClient({
    defaultOptions: queryClientConfig,
  });

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["categories", { locale: params.locale }],
      queryFn: getCategories,
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>
        <Home />
        <Footer />
      </div>
    </HydrationBoundary>
  );
}
