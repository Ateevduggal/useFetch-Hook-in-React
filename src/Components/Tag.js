import React, { useState, useEffect } from "react";
import useFetch from "../Custom Hooks/useFetch";

const GIF_2 = () => {
  const [tag, setTag] = useState("dogs");

  const [{ gif }, fetchGIF] = useFetch(
    `https://api.giphy.com/v1/gifs/random?api_key=cBwaHo66byL5Sw2g5fkdboXB4wtASK7R&tag=${tag}`
  );

  useEffect(() => {
    fetchGIF();
  }, []);

  const newGif = () => {
    fetchGIF();
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex justify-content-center">
            <h1 className="fs-2 fw-bold p-2 w-75 text-capitalize">
              Randon {tag} GIFs
            </h1>
          </div>
          <figure className="w-100 mt-4">
            <img src={gif} alt="random gifs" className="w-75"/>
          </figure>
          <div className="d-flex justify-content-evenly my-4">
            <input
              type="text"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="text-center fs-5 fw-bold text-capitalize py-2 border-0"
            />
            <button
              className="text-center fs-5 fw-bold text-capitalize px-4 btn-secondary text-white"
              onClick={newGif}
            >
              New {tag} GIF
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GIF_2;
