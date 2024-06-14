import { Card, CardBody, Divider, Skeleton } from "@nextui-org/react";
import { Clock1, Earth, Mail, MapPin, Users } from "lucide-react";

const Loaddata = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[80dvh]">
        <Card className="p-2 w-[22rem]  h-[32rem]">
          <CardBody>
            <div className="flex justify-center items-center">
              <Skeleton className="rounded-full">
                <img
                  src="https://randomuser.me/api/portraits/men/71.jpg"
                  alt=""
                  className="rounded-full border-2 border-solid border-blue-700"
                />
              </Skeleton>
              {
                // next Image can't detect randome user api image
              }
            </div>
            <Skeleton className="text-3xl font-bold flex justify-center items-center my-3 rounded-md">
              Name Plate
            </Skeleton>
            <Divider />
            <div className="space-y-4 font-semibold text-xl mt-3">
              <div className="flex justify-normal items-center gap-3">
                <Skeleton className="rounded-md">
                  <Users fill="white" />
                </Skeleton>
                <Skeleton className="rounded-md">
                  aaaaaaaaaaaaaaaaaaaaa
                </Skeleton>
              </div>

              <div className="flex justify-normal items-center gap-3">
                <Skeleton className="rounded-md">
                  <Clock1 fill="white" />
                </Skeleton>
                <Skeleton className="rounded-md">aaaa</Skeleton>
              </div>
              <div className="flex justify-normal items-center gap-3">
                <Skeleton className="rounded-md">
                  <Mail fill="white" />
                </Skeleton>
                <Skeleton className="rounded-md">
                  Email Id of Each Candidate
                </Skeleton>
              </div>
              <div className="flex justify-normal items-center gap-3">
                <Skeleton className="rounded-md">
                  <MapPin fill="white" />
                </Skeleton>
                <Skeleton className="rounded-md">
                  qwvdqhdv, qwhdwhdwwew
                </Skeleton>
              </div>
              <div className="flex justify-normal items-center gap-3">
                <Skeleton className="rounded-md">
                  <Earth fill="white" />
                </Skeleton>
                <Skeleton className="rounded-md">ssssss</Skeleton>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Loaddata;
