import { Card, CardBody, Divider } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  Clock1,
  Earth,
  Locate,
  Mail,
  MapIcon,
  MapPin,
  Users,
} from "lucide-react";
import Image from "next/image";
import Loaddata from "./Loaddata";
import { FaClock, FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaEarthAsia, FaLocationDot } from "react-icons/fa6";

type ArrayType = {
  bio: {
    gender: string;
    name: {
      title: string;
      first: string;
      last: string;
    };
    location: {
      street: {
        number: number;
        name: string;
      };
      city: string;
      country: string;
    };
    registered: {
      age: number;
    };
    email: string;
    picture: {
      large: string;
    };
  };
};

const Cards = ({ bio }: ArrayType) => {
  return (
    <>
      <div className="flex justify-center items-center h-[80dvh]">
        <Card className="w-[22rem]  h-[32rem] px-5 ">
          <CardBody className="text-2xl overflow-hidden">
            <div className="flex justify-center items-center">
              <img
                src={bio.picture.large}
                alt=""
                className="rounded-full border-2 border-solid border-blue-700"
              />
              {
                // next Image can't detect randome user api image
              }
            </div>
            <div className="text-2xl font-bold flex justify-center items-center my-3">
              {bio.name.title} {bio.name.first} {bio.name.last}
            </div>
            <Divider />
            <div className="space-y-6 font-semibold text-xl mt-3  mr">
              <div className="flex justify-normal items-center gap-3">
                <div className="">
                  <FaUser />
                </div>
                <div className="">{bio.gender}</div>
              </div>

              <div className="flex justify-normal items-center gap-3">
                <div className="">
                  <FaClock />
                </div>
                <div className="">{bio.registered.age} Years</div>
              </div>
              <div className="flex justify-normal items-center gap-3">
                <div className="">
                  <IoMail />
                </div>
                <div className="pr-5">{bio.email}</div>
              </div>
              <div className="flex justify-normal items-center gap-3">
                <div className="">
                  <FaLocationDot />
                </div>
                <div className="">
                  {bio.location.street.number}, {bio.location.street.name}
                </div>
              </div>
              <div className="flex justify-normal items-center gap-3">
                <div className="">
                  <FaEarthAsia />
                </div>
                <div className="">{bio.location.country}</div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Cards;
