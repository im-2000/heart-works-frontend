import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { selectToken } from "../../store/user/selectors";
import { useSelector } from "react-redux";

export default function Bid(props) {
  const token = useSelector(selectToken);

  return (
    <div>
      <h4>Email: {props.email}</h4>
      <h4>Amount: {props.amount}</h4>
    </div>
  );
}
