import React, { useEffect } from "react";
import useFetch from "../Custom Hooks/useFetch";

const Gif_1 = () => {
  const [{ gif }, fetchGIF] = useFetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${Access_key}`
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
            <h1 className="fs-2 fw-bold p-2 w-75">Random GIF</h1>
          </div>
          <figure className="w-100 mt-4">
            <img src={gif} alt="random gifs" className="w-75" />
          </figure>
          <div className="d-flex justify-content-center my-4">
            <button
              className="text-center fs-5 fw-bold text-capitalize px-4 btn-secondary text-white py-2"
              onClick={newGif}
            >
              New Random Gif
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gif_1;
