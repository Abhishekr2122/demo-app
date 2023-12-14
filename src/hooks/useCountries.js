import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../getCountries";

export function useCountries() {
  const { isLoading, data } = useQuery({
    queryFn: function () {
      return getCountries();
    },
    queryKey: ["countries"],
  });

  return { isLoading, data };
}
