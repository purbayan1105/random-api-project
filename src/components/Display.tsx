import { loadAtom, toggleSelectAtom } from "@/utils/atoms";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAtom } from "jotai";
import { useEffect } from "react";
import Loaddata from "./Loaddata";
import Cards from "./Cards";

const Display = () => {
  const [load, setLoad] = useAtom(loadAtom);

  const { data, isLoading, isFetched, isSuccess, isFetching } = useQuery({
    queryKey: ["random-api"],
    queryFn: async () => {
      await new Promise<void>((r) => setTimeout(r, 1000));
      const response = await axios.get("https://randomuser.me/api/");
      const info = response.data.results[0];
      return info;
    },
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (isLoading || isFetching) {
      setLoad(true);
    } else {
      setLoad(false);
    }
  }, [load, isLoading, isFetching]);

  if (isLoading || isFetching) {
    return (
      <>
        <div className="text-2xl flex justify-center items-center h-[80vh]">
          <Loaddata />
        </div>
      </>
    );
  }
  if (isFetched && isSuccess) {
    return (
      <>
        <div className="text-2xl flex justify-center items-center h-[80vh]">
          <Cards bio={data} />
        </div>
        <hr className="border-1 border-gray-800 border-solid" />
      </>
    );
  }
};

export default Display;
