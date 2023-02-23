import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongById } from "../redux/songSlice";
import "./detailSong.scss";

const DetailSong = ({ isMobile }) => {
  const dispath = useDispatch();
  const { song } = useSelector((state) => state.song);

  useEffect(() => {
    dispath(getSongById(0));
  }, []);
  return (
    <div className="">
      {isMobile ? (
        <>
          <div className="mb">
            <div className="mb__wrapper">
              <img
                src={song.links.images[0].url}
                alt=""
                className="mb__avatar"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="detail">
            <div className="detail__wrapper">
              <span className="playing">Playing Now</span>
              <h1 className="slogan">Sing me to sleep</h1>
              <div className="detail__container">
                <div className="detail__inner">
                  <img
                    src={song.links.images[0].url}
                    alt="avatar"
                    className="avatar"
                  />
                </div>
                <div className="">
                  <div className="detail__inner2">
                    <img
                      src={song.links.images[1].url}
                      alt=""
                      className="avatar2"
                    />
                    <span className="author">Alan Walker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailSong;
