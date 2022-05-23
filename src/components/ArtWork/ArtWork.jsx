import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function ArtWork(props) {
  return (
    <div style={{}}>
      <h1>{props.title}</h1>
      <img
        style={{
          maxWidth: 600,
          maxHeight: 600,
        }}
        className="d-block w-100"
        src={props.imageUrl}
        alt={props.name}
      />
      {props.email}
      <p>
        HEARTS: {props.hearts} BIDS: {props.minimumBid}
        {props.bidEmail}
        {props.bidAmount}
      </p>

      {props.showLink && (
        <Link to={`/artworks/${props.id}`}>
          <Button>View details</Button>
        </Link>
      )}
    </div>
  );
}
