import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import artworkReducer from "./artwork/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    artworkReducer,
  },
});
