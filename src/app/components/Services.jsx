import ServiceCard from "../reusables/ServiceCard";
import Card from "../reusables/Card";
import Image from "next/image";

import social from "../../../public/service/social.png";
import website from "../../../public/service/web.png";
import network from "../../../public/service/networking.jpg";
import analytics from "../../../public/service/analytics.jpg";
import graphics from "../../../public/service/design.jpg";
import seo from "../../../public/service/seo.jpg";

import serviceLine from "../../../public/serviceLine.png";

import "./styles/Services.css";

function Services() {
  const services = [
    {
      id: 1,
      image: social,
      title: "SOCIAL MEDIA MANAGEMENT",

      description:
        "Promote and connect your business to target audience through social media.",
      link: "./social",
    },
    {
      id: 2,
      image: website,
      title: "WEBSITE DESIGN & DEVELOPMENT",

      description:
        "Good looking and responsive website is your business's digital identity.",
      link: "./website",
    },

    // {
    //   id: 3,
    //   image: network,
    //   title: "HARDWARE & NETWORKING",
    //   description:
    //     "We provide complete installation and maintenance services of  networking, CCTV setups and more.",
    // },
    // {
    //   id: 4,
    //   image: analytics,
    //   title: "GOOGLE ANALYTICS",
    //   description:
    //     "Promote and connect your business to target audience through social media.",
    // },
    // {
    //   id: 5,
    //   image: graphics,
    //   title: "GRAPHICS DESIGN",
    //   description:
    //     "Promote and connect your business to target audience through social media.",
    // },
    // {
    //   id: 6,
    //   image: seo,
    //   title: "SEO MANAGEMENT",
    //   description:
    //     "SEO is for organic ranking on google search index. It is also most important part for digital marketing",
    // },
  ];
  return (
    <div className=" text-white h-full  grid place-items-center" id="services">
      <Image
        src={serviceLine}
        height={1080}
        width={1920}
        className="absolute z-0 scale-x-105 "
      />
      <span className="text-3xl mt-56 mb-5">Services</span>
      <span className="text-xs z-10">
        Ismartmandu provides you a services that are very essential for Digital
        Marketing. Here are some key services we provide you for your Marketing
        on a digital platform.
      </span>
      <div className="grid grid-cols-2 gap-8 place-items-center  w-1/2 ">
        {services.map((content) => (
          <ServiceCard
            key={content.id}
            image={content.image}
            title={content.title}
            description={content.description}
            link={content.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
