import { Card, Rating, RatingStar } from "flowbite-react";
import Image from "next/image";

function TestimonialsCard(props) {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);
  return (
    // <div className="w-96 bg-color3 text-white text-sm mt-10 mb-10 p-10 rounded-md">
    //   <div> {props.review}</div>
    //   <div className="mt-5">{props.name}</div>
    // </div>
    <Card className="max-w-sm mb-10 w-72">
      <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
        {props.name}
      </h5>
      <i className="font-normal text-xs text-gray-700 dark:text-gray-400">
        {`"${props.review}"`}
      </i>
      <Image src={props.image} className="rounded-full h-36 w-36 mx-auto" />

      <Rating className="mx-auto">
        {stars.map((starValue, index) => (
          <RatingStar key={index} filled={starValue <= props.rating} />
        ))}
      </Rating>
    </Card>
  );
}

export default TestimonialsCard;
