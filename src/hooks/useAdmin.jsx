import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();

  // use axios secure with react query
  const [axiosSecure] = useAxiosSecure();
  const { data: isAdmin, isLoading: isAdminLoading, refetch } = useQuery({
    queryKey: ["isAdmin", user?.email],
    // enabled: !!user?.email,  // Only run query when user is authenticated
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading, refetch];
};

export default useAdmin;
