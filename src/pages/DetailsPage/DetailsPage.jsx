import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ArtWork from "../../components/ArtWork/ArtWork";
// import StoryCarousel from "../../components/StoryCarousel/StoryCarousel";
import Container from "react-bootstrap/Container";
import Loading from "../../components/Loading";
import { fetchArtworkById } from "../../store/artwork/actions";
import { selectArtworkDetails } from "../../store/artwork/selectors";

export default function DetailsPage() {
  const { id } = useParams();
  const artwork = useSelector(selectArtworkDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArtworkById(id));
  }, [dispatch, id]);

  if (!artwork || parseInt(artwork.id) !== parseInt(id)) return <Loading />;

  return (
    <>
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
      {/* <Container>
        <StoryCarousel space={space} />
      </Container> */}
    </>
  );
}
