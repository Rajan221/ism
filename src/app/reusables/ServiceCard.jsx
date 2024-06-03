import Image from "next/image";
import website from "../../../public/service/webdev.jpg";
import Link from "next/link";

// flowbyte compnent
import { Button } from "flowbite-react";
//flowbyte component

function ServiceCard(props) {
  return (
    <div className="bg-white text-black w-80 h-110 p-14 m-20 text-center rounded-md shadow-xl mx-auto  relative transition ease-in-out  duration-500 hover:scale-105 hover:shadow-2xl">
      <div>
        <Image
          className="mx-auto absolute left-1/4 ml-2  top-10"
          src={props.image}
          height={150}
          width={150}
        />
        <div className=" font-medium pt-36">{props.title}</div>
        <div className="text-xs pt-5">{props.description}</div>
        {/* <div className="mt-10 bg-color3 rounded-md w-fit mx-auto p-3 text-white text-xs cursor-pointer transition-all duration-700 hover:bg-color8">
          See Detailed Info
        </div> */}
        <Button className="mt-10 mx-auto " size="sm">
          <Link href={{ pathname: props.link }}>See Detailed Info</Link>
        </Button>
      </div>
    </div>
  );
}

export default ServiceCard;
