import { configureStore } from "@reduxjs/toolkit";
import { songSlice } from "./songSlice";
import { songsSlice } from "./songsSlice";

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    song: songSlice.reducer,
  },
});

export default store;
