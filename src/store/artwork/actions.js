import { fetchArtworksSuccess, artworkDetailsFetched } from "./slice";
import axios from "axios";

const API_URL = `http://localhost:4000`;

export const fetchArtworks = () => {
  return async (dispatch, getState) => {
    try {
      // const spaces = getState().spaces.allSpaces.length;
      const response = await axios.get(`${API_URL}/artworks`);

      // console.log("ResponseData", response.data);
      dispatch(fetchArtworksSuccess(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const fetchArtworkById = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${API_URL}/artworks/${id}`);
      console.log(response);
      dispatch(artworkDetailsFetched(response.data.artwork));
    } catch (e) {
      console.log(e);
    }
  };
};
