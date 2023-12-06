import React from "react";
import newsPhoto from "../../assets/newsBig.svg";
const BigNewsCard = () => {
  return (
    <div className="bigPhotoContainer">
      <img src={newsPhoto} className="newsImage" alt="big-news" />
      <h4 className="newsTitle">
        A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
      </h4>
      <p className="newsDescription">1h ago · by Troy Corlson</p>
    </div>
  );
};

export default BigNewsCard;
