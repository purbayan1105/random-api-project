import { loadAtom, themeAtom, toggleSelectAtom } from "@/utils/atoms";
import { Button, Switch } from "@nextui-org/react";
import { useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [load, setLoad] = useAtom(loadAtom);
  const [dark, setDark] = useAtom(themeAtom);
  const [selectToggle, setSelectToggle] = useAtom(toggleSelectAtom);

  const queryClient = useQueryClient();

  const themeToggler = () => {
    if (!dark) {
      setDark(true);
      setSelectToggle(true);
    } else {
      setDark(false);
      setSelectToggle(false);
    }
  };
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  return (
    <>
      <div className="flex justify-around items-center h-[10dvh]">
        <div className="text-2xl font-semibold">Random Api</div>
        <div className="flex items-center gap-5">
          <Switch
            size="lg"
            onChange={themeToggler}
            isSelected={selectToggle} //same like load
          ></Switch>
          <Button
            isLoading={load} //{load?"true":"false"}
            size="md"
            color="primary"
            onPress={() => {
              queryClient.refetchQueries();
            }}>
            {load ? "" : "Refetch"}
          </Button>
        </div>
      </div>
      <hr className="border-1 border-gray-800 border-solid" />
    </>
  );
};

export default Navbar;
