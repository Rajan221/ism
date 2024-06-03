import TestimonialsCard from "../reusables/TestimonialsCard";
import testimonialBAck from "../../../public/testimonial.png";
import client from "../../../public/client.png";
import Image from "next/image";

import client1 from "../../../public/clients/client1.jpg";
import client2 from "../../../public/clients/client2.jpg";
import client3 from "../../../public/clients/client3.jpg";

function Testimonials() {
  const customer = [
    {
      id: 1,
      image: client1,
      name: "Bijay Maharjan (Founder) Prism Studio",
      review:
        "I am very happy with the work of Ismartmandu. Social Media Management is quite economic and effective. Start-up businesses like mine should coordinate and work with the company once. And I mean it.",
      rating: 5,
    },
    {
      id: 2,
      image: client2,
      name: "Rabindrindra Raut (CEO) Thead and Arts",
      review:
        "Thread Arts Nepal created a big buzz in the market in the initial phase only. All thanks to the young and dynamic team of Ismartmandu for doing an impactful digital marketing",
      rating: 4,
    },
    {
      id: 3,
      image: client3,
      name: "SWC PHD",
      review:
        "Working with iSmartmandu made me into good choice. Not only as Digital Partner. It has been backbone since we have done digitally marketing.",
      rating: 5,
    },
  ];
  return (
    <div className="bg-slate-100 h-full text-black grid place-items-center relative pt-10">
      <Image
        src={testimonialBAck}
        height={300}
        className="transform-x-125 w-1/4 h-48 absolute right-0"
      />
      <Image
        src={client}
        height={400}
        width={400}
        className="transform-x-125  absolute right-16"
      />
      <span className="text-3xl mb-5">Happy Clients</span>

      <div className="grid grid-cols-2 gap-x-32 gap-y-0 mr-0">
        {customer.map((content) => (
          <TestimonialsCard
            key={content.id}
            name={content.name}
            review={content.review}
            image={content.image}
            rating={content.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
