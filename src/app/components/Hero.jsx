import hero from "../../../public/hero.png";
import heroCircle from "../../../public/heroCircle.png";
import Image from "next/image";
import "./styles/Hero.css";

// flowbyte compnent
import { Button } from "flowbite-react";
//flowbyte component

function Hero() {
  return (
    <div className="h-screen bg-slate-100  text-black " id="hero">
      <iframe src="./network/index.html" title="network"></iframe>

      <div
        id="heroInside"
        className=" flex justify-around p-28 items-center text-black h-full"
      >
        <div className=" grid place-items-center pl-28  w-1/2 relative">
          <Image
            className="absolute right-80 -top-10  scale-125"
            src={heroCircle}
            height={300}
            width={300}
          />
          <div className="z-10 p-5" id="heroContent">
            <i>"Let’s grow together, Digitally!"</i>
            <div className="text-5xl font-semibold text-color1">
              INNOVATIVE <br />
              SMARTMANDU
            </div>

            <hr className="mt-5" />

            <div className="mt-5">
              Gain valuable insights and expert advice tailored to your specific
              requirements.
            </div>

            <Button className="mt-10 pointer-events-auto">
              Book Free Consultation
            </Button>
          </div>
        </div>
        <Image className="bg-contain h-96 w-96" src={hero} loading="lazy" />
      </div>
    </div>
  );
}

export default Hero;
