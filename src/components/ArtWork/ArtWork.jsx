import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";

export default function ArtWork(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
      }}
    >
      <h3>{props.title}</h3>
      <img
        style={{
          maxWidth: 400,
          maxHeight: 400,
        }}
        className="d-block w-100"
        src={props.imageUrl}
        alt={props.name}
      />
      {props.email}
      <h3>
        <FaHeart /> {props.hearts}
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        <BiDollarCircle /> {props.minimumBid}
      </h3>
      {props.showLink && (
        <Link to={`/artworks/${props.id}`}>
          <Button>View details</Button>
        </Link>
      )}
    </div>
  );
}
