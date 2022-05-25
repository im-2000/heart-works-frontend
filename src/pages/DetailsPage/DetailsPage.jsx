import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ArtWork from "../../components/ArtWork/ArtWork";
import Bid from "../../components/Bid/Bid";

import Button from "react-bootstrap/Button";
import Loading from "../../components/Loading";
import { fetchArtworkById } from "../../store/artwork/actions";
import {
  selectArtworkDetails,
  selectBids,
} from "../../store/artwork/selectors";
import { increaseBids, decreaseBids } from "../../store/artwork/slice";
import { updateArtworkHearts, postBid } from "../../store/artwork/actions";
import { selectToken } from "../../store/user/selectors";

export default function DetailsPage() {
  const { id } = useParams();
  const artwork = useSelector(selectArtworkDetails);

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const curentBid = useSelector(selectBids);

  useEffect(() => {
    dispatch(fetchArtworkById(id));
  }, [dispatch, id]);

  if (!artwork || parseInt(artwork.id) !== parseInt(id)) return <Loading />;

  // Finding minimum Bid amount

  const minBidAmount = () => {
    const maxBid = Math.max(...artwork.bids.map((b) => curentBid.amount));
    if (artwork.bids.length > 0) {
      return maxBid + 1;
    } else {
      return artwork.minimumBid;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ArtWork
        style={{}}
        id={artwork.id}
        title={artwork.title}
        imageUrl={artwork.imageUrl}
        hearts={artwork.hearts}
        minimumBid={artwork.minimumBid}
        bidEmail={artwork.bids.email}
        bidAmount={artwork.bids.amount}
        showLink={false}
      />
      <Button onClick={() => dispatch(updateArtworkHearts(artwork.id))}>
        Give Heart
      </Button>
      <div>
        {" "}
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        <h5
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Set your BID
        </h5>
        {artwork.bids.map((bid) => {
          return (
            <>
              <Bid email={bid.email} amount={bid.amount} />
            </>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {token && (
          <>
            <p>
              <Button onClick={() => dispatch(postBid(curentBid))}>BID</Button>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button onClick={() => dispatch(increaseBids())}>+</button>

              <div>Amount, $ = {curentBid}</div>

              <button
                disabled={curentBid <= minBidAmount()}
                onClick={() => dispatch(decreaseBids())}
              >
                -
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
