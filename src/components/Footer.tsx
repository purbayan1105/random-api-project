import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="text-blue flex flex-col justify-center items-center text-blue-600">
        <div className="">Powered by RandomAPI</div>
        <Link href="https://randomuser.me/" target="__blank" className="">
          https://randomuser.me
        </Link>
      </div>
    </>
  );
};

export default Footer;
