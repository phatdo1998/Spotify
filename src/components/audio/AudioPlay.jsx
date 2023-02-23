import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./audioPlay.scss";

const AudioPlay = ({ playSong, handleSetSong }) => {
  const handleClickNext = () => {
    handleSetSong(playSong.id + 1);
  };

  const handleClickPre = () => {
    handleSetSong(playSong.id - 1);
  };
  return (
    <div>
      <AudioPlayer
        showSkipControls={true}
        showJumpControls={false}
        src={playSong?.url}
        layout="stacked-reverse"
        className="player"
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPre}
      />
    </div>
  );
};

export default AudioPlay;
