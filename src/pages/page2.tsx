import { Button } from "@nextui-org/react";
import axios from "axios";

const page2 = () => {
  const getData = async () => {
    const numberOfUser = 3;
    const method1 = await axios.get(
      `https://randomuser.me/api/?results=${numberOfUser}`
    );
    const method2 = await axios.get("https://randomuser.me/api/", {
      params: {
        results: numberOfUser,
      },
    });

    const data = await method2.data.results;
    console.log(data);
  };
  return (
    <>
      <div className="grid place-items-center h-dvh">
        <Button onPress={getData}>Click</Button>
      </div>
    </>
  );
};

export default page2;
