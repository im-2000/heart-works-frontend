import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArtWork from "../../components/ArtWork/ArtWork";
import { fetchArtworks } from "../../store/artwork/actions";
import { selectArtworks } from "../../store/artwork/selectors";

export default function HomePage() {
  const dispatch = useDispatch();
  const artworks = useSelector(selectArtworks);

  useEffect(() => {
    dispatch(fetchArtworks());
  }, [dispatch]);

  return (
    <div>
      {artworks.map((artwork) => {
        return (
          <ArtWork
            key={artwork.id}
            id={artwork.id}
            title={artwork.title}
            imageUrl={artwork.imageUrl}
            hearts={artwork.hearts}
            minimumBid={artwork.minimumBid}
            showLink={true}
          />
        );
      })}
    </div>
  );
}
