import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allArtworks: [],
  artworkDetails: null,
  bids: 0,
  artwork: null,
};

export const artworkSlice = createSlice({
  name: "artworks",
  initialState,
  reducers: {
    fetchArtworksSuccess: (state, action) => {
      state.allArtworks = action.payload;
    },
    artworkDetailsFetched: (state, action) => {
      state.artworkDetails = action.payload;
    },
    increaseBids: (state) => {
      state.bids = state.bids + 1;
    },
    decreaseBids: (state) => {
      state.bids = state.bids - 1;
    },
    bidsPostSuccess: (state, action) => {
      state.artworkDetails.bids.push(action.payload.bid);
    },
    artworkPostSuccess: (state, action) => {
      state.artwork.push(action.payload);
    },
  },
});

export const {
  fetchArtworksSuccess,
  artworkDetailsFetched,
  increaseBids,
  decreaseBids,
  bidsPostSuccess,
  artworkPostSuccess,
} = artworkSlice.actions;

export default artworkSlice.reducer;
