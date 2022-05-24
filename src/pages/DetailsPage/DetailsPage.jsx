import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ArtWork from "../../components/ArtWork/ArtWork";
import Bid from "../../components/Bid/Bid";
// import StoryCarousel from "../../components/StoryCarousel/StoryCarousel";

import Button from "react-bootstrap/Button";
import Loading from "../../components/Loading";
import { fetchArtworkById } from "../../store/artwork/actions";
import {
  selectArtworkDetails,
  selectBids,
} from "../../store/artwork/selectors";
import { increaseBids, decreaseBids } from "../../store/artwork/slice";
import { updateArtworkHearts, postBid } from "../../store/artwork/actions";
import { selectUser, selectToken } from "../../store/user/selectors";

export default function DetailsPage() {
  const { id } = useParams();
  const artwork = useSelector(selectArtworkDetails);

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const bids = useSelector(selectBids);

  useEffect(() => {
    dispatch(fetchArtworkById(id));
  }, [dispatch, id]);

  if (!artwork || parseInt(artwork.id) !== parseInt(id)) return <Loading />;

  //   if (token === null) {
  //     navigate("/");
  //   }

  //   if (artwork === null) {
  //     return <Loading />;
  //   }

  //   const displayButtons = profile?.id === artwork.userId;

  //   console.log("bids", artwork.bids);

  return (
    <>
      {/* <Bids bidsEmail={artwork.bids.email} bidsAmount={artwork.bids.amount} /> */}
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
        <h3>BIDS</h3>
        {artwork.bids.map((bid) => {
          return (
            <>
              <Bid email={bid.email} amount={bid.amount} />
            </>
          );
        })}
      </div>
      <div>
        <p>
          {token && (
            <Button onClick={() => dispatch(postBid(bids))}>BID</Button>
          )}
        </p>
        <div>
          {token && <button onClick={() => dispatch(increaseBids())}>+</button>}
          {token && <div>Amount, $ = {bids}</div>}
          {token && <button onClick={() => dispatch(decreaseBids())}>-</button>}
        </div>
      </div>

      {/* <div>{token && <Button>BID</Button>}</div> */}
    </>
  );
}
