import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ArtWork from "../../components/ArtWork/ArtWork";
// import StoryCarousel from "../../components/StoryCarousel/StoryCarousel";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Loading from "../../components/Loading";
import { fetchArtworkById } from "../../store/artwork/actions";
import {
  selectArtworkDetails,
  selectHearts,
} from "../../store/artwork/selectors";
import { increaseHearts } from "../../store/artwork/slice";
import { updateArtworkHearts } from "../../store/artwork/actions";

export default function DetailsPage() {
  const { id } = useParams();
  const artwork = useSelector(selectArtworkDetails);
  const dispatch = useDispatch();
  const hearts = useSelector(selectHearts);

  useEffect(() => {
    dispatch(fetchArtworkById(id));
  }, [dispatch, id]);

  if (!artwork || parseInt(artwork.id) !== parseInt(id)) return <Loading />;

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
      <div>
        {" "}
        <h3>BIDS</h3>
        {artwork.bids.map((bid) => {
          return (
            <>
              <p>
                EMAIL: {bid.email}: {""}
                AMOUNT: {bid.amount}
              </p>
            </>
          );
        })}
      </div>
      <Button onClick={() => dispatch(updateArtworkHearts(artwork.id))}>
        Give Heart
      </Button>
    </>
  );
}
