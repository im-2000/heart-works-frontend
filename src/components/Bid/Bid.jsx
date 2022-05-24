import React from "react";

export default function Bid(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ul>
        <p>Email: {props.email}</p>
        <p>Amount: {props.amount}</p>
      </ul>
    </div>
  );
}
