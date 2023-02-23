import { createSlice } from "@reduxjs/toolkit";
import dataSong from "../../data/songs.json";

export const songSlice = createSlice({
  name: "song",
  initialState: {
    song: {
      name: "",
      author: "",
      url: "https://cdn.discordapp.com/attachments/775740994595323954/775741533789224960/Alan_Walker_-_Sing_Me_To_SleepMP3_160K.mp3",
      id: null,
      links: {
        images: [
          {
            url: "",
          },
          {
            url: "",
          },
        ],
      },
    },
  },
  reducers: {
    getSongById: (state, action) => {
      state.song = dataSong.find((song) => song.id === action.payload);
    },
  },
});

export const { getSongById } = songSlice.actions;
