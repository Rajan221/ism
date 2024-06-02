import logo from "../../../public/logo.png";
import Image from "next/image";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <div
      className=" flex justify-between items-center bg-slate-100 text-black p-5 sticky top-0 z-30 px-20"
      id="navbar"
    >
      <div>
        <Image src={logo} height={50} width={50} />
      </div>
      <div className="flex gap-7 text-color3" id="navLinks">
        <div id="active">Home</div>
        <div className="navLinks">Services</div>
        <div className="navLinks">About Us</div>
        <div className="navLinks">Portfolio</div>
        <div className="navLinks">Contact Us</div>
      </div>
    </div>
  );
}

export default Navbar;
