import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongById } from "../redux/songSlice";
import { getListSongs } from "../redux/songsSlice";
import "./listSong.scss";

const ListSongs = ({ handleSetSong, playSong, isMobile }) => {
  const [idSong, setIdSong] = useState(0);
  const { songs } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListSongs());
  }, [dispatch]);

  const handlePlaySong = (idSong) => {
    setIdSong(idSong);
    handleSetSong(idSong);
    dispatch(getSongById(idSong));
  };

  useLayoutEffect(() => {
    handleSetSong(songs[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIdSong(playSong.id);
  }, [playSong]);

  return (
    <div className="list">
      {isMobile ? (
        <>
          <div className="list__description">
            <div className="desc-left">
              <div className="desc-item">#</div>
              <div className="desc-item mb-title">Title</div>
            </div>
            <div className="desc-right">
              <div className="desc-item author">Author</div>
              <div className="desc-item "></div>
            </div>
          </div>

          <div className="list-song">
            <ul className="list-wrapper">
              {songs[0]?.map((song, i) => (
                <li
                  key={i}
                  onClick={() => handlePlaySong(song.id)}
                  className={`list-items ${idSong === song.id && "active"}`}
                >
                  <div className="">
                    <span className="list-children">{i + 1}</span>
                    <span className="list-children">{song.name}</span>
                  </div>
                  <div>
                    <span className="list-children ">{song.author}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="list__description">
            <div className="desc-left">
              <div className="desc-item">#</div>
              <div className="desc-item title ">Title</div>
            </div>
            <div className="desc-right">
              <div className="desc-item author">Author</div>
              <div className="desc-item"></div>
              <a href="/" className="">
                <i className="fa-solid fa-download down-icon"></i>
              </a>
            </div>
          </div>

          <div className="list-song">
            <ul className="list-wrapper">
              {songs[0]?.map((song, i) => (
                <li
                  key={i}
                  onClick={() => handlePlaySong(song.id)}
                  className={`list-items ${idSong === song.id && "active"}`}
                >
                  <div className="">
                    <span className="list-children">{i + 1}</span>
                    <span className="list-children list-name">{song.name}</span>
                  </div>
                  <div>
                    <span className="list-children author">{song.author}</span>
                    <span className="">
                      <a href="/" className="">
                        <i
                          className={`fa-solid fa-download down-icon ${
                            idSong === song.id && "active"
                          }`}
                        ></i>
                      </a>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default ListSongs;
