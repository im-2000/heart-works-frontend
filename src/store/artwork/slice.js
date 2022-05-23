import { createSlice } from "@reduxjs/toolkit";

const initialState = { allArtworks: [], artworkDetails: null };

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
  },
});

export const { fetchArtworksSuccess, artworkDetailsFetched } =
  artworkSlice.actions;

export default artworkSlice.reducer;
