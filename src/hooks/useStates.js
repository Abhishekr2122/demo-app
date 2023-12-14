import { useQuery } from "@tanstack/react-query";
import getStates from "../getStates";

export function useStates(country) {
  console.log("This is the country", country);
  const { isLoading, data } = useQuery({
    queryFn: function () {
      return getStates(country);
    },
    queryKey: ["states", country],
  });
  console.log(data);

  return { isLoading, data };
}
