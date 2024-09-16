import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useMenu = () => {
  const { data: menu = [], isPending: loading, refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/menu");
      return await res.json();
    },
    refetchInterval: 10000, // refetch every 10 seconds
    staleTime: 60 * 1000, // cache for 1 minute
  });
  return [menu, loading, refetch];
};
export default useMenu;
