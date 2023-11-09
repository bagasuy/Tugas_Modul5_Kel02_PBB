import React from "react";
import "./CardProfile.css";

export default function CardProfile(props) {
  return (
    <div className="containerBig">
      <div className="cardContent">
        <img src={props.image} alt="" className="posterProfile" id="image" />
        <div className="descriptionBig">
          <p id="nama">{props.nama}</p>
          <p id="nim">{props.nim}</p>
        </div>
      </div>
    </div>
  );
}
