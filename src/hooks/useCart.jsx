import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: cart = [], refetch, isLoading } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !!user?.email && !loading, // Only run query when user is authenticated
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      return res.data;
    },
  });
  return [cart, refetch, isLoading];
};
export default useCart;
