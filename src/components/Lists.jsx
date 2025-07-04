import React from "react";
import axios from "../api/axiosConfig.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "@tanstack/react-query";
import Loading from "@/components/Loading.jsx";
import List from "@/components/List.jsx";

const fetchItems = async ({ pageParam = 1 }) => {
  console.log(pageParam);
  const res = await axios.get(`/?_page=${pageParam}&_per_page=24`);
  console.log(res.data.data);
  return {
    data: res.data.data,
    nextPage: pageParam + 1,
    hasMore: res.data.data.length > 0,
  };
};

function Lists() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["items"],
    queryFn: fetchItems,
    getNextPageParam: (lastPage) => {
      return lastPage.hasMore ? lastPage.nextPage : undefined;
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <p>Error loading data.</p>;

  const allItems = data.pages.flatMap((page) => page.data);

  return (
    <InfiniteScroll
      dataLength={allItems.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<Loading />}
      className="grid w-200 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
    >
      {allItems.map((product) => (
        <List product={product} key={product.id} />
      ))}
      {isFetchingNextPage && <Loading />}
    </InfiniteScroll>
  );
}

export default Lists;
