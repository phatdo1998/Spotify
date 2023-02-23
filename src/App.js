import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./App.scss";
import AudioPlay from "./components/audio/AudioPlay";
import DetailSong from "./components/DetailSong/DetailSong";
import ListSongs from "./components/listSong/ListSongs";
import Navbar from "./components/navbar/Navbar";
import dataSong from "./data/songs.json";

function App() {
  const [isMobile, setMobile] = useState(false);
  const [windownSize, setWindownSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindownSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windownSize.width < 600) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [windownSize]);
  const { song } = useSelector((state) => state.song);
  const [playSong, setPlaySong] = useState(song);

  const handleSetSong = (idSong) => {
    const song = dataSong.find((song) => song.id === idSong);
    setPlaySong(song);
    if (!song) setPlaySong(dataSong[0]);
    else setPlaySong(song);
  };

  return (
    <div className="App">
      <Navbar isMobile={isMobile} />
      <div className="content">
        <DetailSong isMobile={isMobile} />
        <ListSongs
          isMobile={isMobile}
          playSong={playSong}
          handleSetSong={handleSetSong}
        />
      </div>
      <AudioPlay
        isMobile={isMobile}
        playSong={playSong}
        handleSetSong={handleSetSong}
      />
    </div>
  );
}

export default App;
