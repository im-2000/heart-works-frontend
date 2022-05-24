import {
  fetchArtworksSuccess,
  artworkDetailsFetched,
  bidsPostSuccess,
} from "./slice";
import { showMessageWithTimeout } from "../appState/actions";
import { appLoading, appDoneLoading, setMessage } from "../appState/slice";

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

export const updateArtworkHearts = (artworkId) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.patch(
        `${API_URL}/artworks/${artworkId}`,
        {}
      );
      console.log("response.data.artwork", response.data.artwork);

      dispatch(artworkDetailsFetched(response.data.artwork));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const postBid = (amount) => {
  return async (dispatch, getState) => {
    try {
      const { token } = getState().user;
      const artwork = getState().artworkReducer.artworkDetails;

      dispatch(appLoading());

      const response = await axios.post(
        `${API_URL}/artworks/${artwork.id}/bids`,
        {
          amount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(
        showMessageWithTimeout("success", false, response.data.message, 3000)
      );
      dispatch(bidsPostSuccess(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      } else {
        console.log(error.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      }
      dispatch(appDoneLoading());
    }
  };
};

export const postArtwork = (title, minimumBid, imageUrl, navigate) => {
  return async (dispatch, getState) => {
    try {
      const { token } = getState().user;

      dispatch(appLoading());

      const response = await axios.post(
        `${API_URL}/artworks`,
        {
          title,
          minimumBid,
          imageUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(
        showMessageWithTimeout("success", false, response.data.message, 3000)
      );
      const newArtworkId = response.data.newArtworkId;
      navigate(`/artworks/${newArtworkId}`);
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      } else {
        console.log(error.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      }
      dispatch(appDoneLoading());
    }
  };
};
