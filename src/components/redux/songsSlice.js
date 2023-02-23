import { createSlice } from "@reduxjs/toolkit";
import dataSong from "../../data/songs.json";

export const songsSlice = createSlice({
  name: "songs",
  initialState: [],
  reducers: {
    getListSongs: (state) => {
      state.push(dataSong);
    },
  },
});

export const { getListSongs } = songsSlice.actions;
