import Image from "next/image";
import website from "../../../public/service/webdev.jpg";

function ServiceCard(props) {
  return (
    <div className="bg-white text-black w-80 h-96 p-14 m-20 text-center rounded-md shadow-xl ">
      <div>
        <Image
          className="mx-auto "
          src={props.image}
          height={100}
          width={100}
        />
        <div className="text-color2 font-medium  pt-10"> {props.title}</div>
        <div className="text-sm">{props.description}</div>
      </div>
    </div>
  );
}

export default ServiceCard;
