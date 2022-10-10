import React from "react";
import "../scss/card.scss";

const Card = (props) => {
  const { id, title, desc, image } = props;
  return (
    <div className="content">
      <h2>{title}</h2>
      <img src={image} alt="img" width={400} />
      <marquee scrollamount="4" height="85%" width="90%" direction="up">
        {desc}
      </marquee>
    </div>
  );
};

export default Card;
