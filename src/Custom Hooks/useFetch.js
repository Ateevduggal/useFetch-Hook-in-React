import { useState } from "react";

const useFetch = (url) => {
  const [gif, setGif] = useState("");

  const fetchGIF = async () => {
    const initial = await fetch(url);
    const data = await initial.json();
    const final = data.data.images.downsized_large.url;
    setGif(final);
  };
  return [{ gif }, fetchGIF];
};
export default useFetch;
