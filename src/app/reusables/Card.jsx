import Image from "next/image";

import "../components/styles/Card.css";

const Card = (props) => {
  return (
    <div className="flip-card">
      <div className={`flip-card-inner`}>
        <div className={`flip-card-front`}>
          <div id="inside">
            <div id="iconDiv">
              <Image id="icons" src={props.image} alt="" />
            </div>

            <div id="serviceTitle" className="w-3/5 mx-auto">
              {props.title}
            </div>
            <div id="serviceTitleDescription" className="w-3/5 mx-auto">
              {props.titleDesc}
            </div>
          </div>
        </div>
        <div className={`flip-card-back back`}>
          <div id="inside">
            <div id="backText">{props.description}</div>
            <br />
            <br />
            <a href="#" id="seeMore">
              See More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
