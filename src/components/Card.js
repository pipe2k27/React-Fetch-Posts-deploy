import React, { useState } from "react";
import "./css/Card.css";

const Card = (props) => {
  const [clicked, clicker] = useState(false);

  function handleClick(prevClicked) {
    clicker((prevClicked) => {
      return !prevClicked;
    });
  }

  return (
    <div className={clicked ? "card active" : "card"}>
      <img src={props.picture.download_url} className="picture" alt="random" />
      <div className="text-box">
        {/*-----------  post title -------------------*/}

        <h4 className="title">{props.title}</h4>
        <p className="hours">3 hours ago</p>

        {/*-----------  post body -------------------*/}

        {clicked ? (
          <p className="body">{props.body}</p>
        ) : (
          <p className="body">{props.body.slice(0, 130)} ...</p>
        )}

        {/*-----------  Read More button -------------------*/}

        <a className="read-more" onClick={handleClick}>
          {clicked ? "Read Less" : "Read More"}
        </a>
      </div>

      {/*-----------  logo -------------------*/}

      <img
        src={
          clicked
            ? process.env.PUBLIC_URL + "/images/logo-White.png"
            : process.env.PUBLIC_URL + "/images/logo-grey.png"
        }
        alt="logo-word"
        className="logo"
      ></img>
    </div>
  );
};

export default Card;
