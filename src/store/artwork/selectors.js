export const selectArtworks = (state) => state.artworkReducer.allArtworks;

export const selectArtworkDetails = (state) =>
  state.artworkReducer.artworkDetails;

export const selectHearts = (state) => state.artworkReducer.heartsAmount;

export const selectBids = (reduxState) => reduxState.artworkReducer.bids;

export const selectArtwork = (state) => state.artworkReducer.artwork;
