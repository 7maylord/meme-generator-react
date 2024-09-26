import { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allMemeImages, setallMemeImages] = useState(memesData);

  const getRandomMeme = () => {
    const memesArray = memesData.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomIndex].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <main className="flex flex-col items-center h-16 text-2xl mt-3">
      <div className="flex flex-row gap-4 ">
        <div>
          <label>
            Top Text
            <input
              type="text"
              className="border border-black rounded-md h-8 w-full mb-5"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Bottom Text
            <input
              type="text"
              className="border border-black rounded-md h-8 w-full mb-5"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <button
        onClick={getRandomMeme}
        className="w-[447px] h-[40px] bg-violet-700 text-white rounded-[5px] font-semibold text-[16px] mt-3 hover:bg-violet-900"
      >
        Get a new meme image 🖼
      </button>
      <div className="relative w-[447px] mt-8">
        {meme.randomImage && (
          <img
            src={meme.randomImage}
            alt="Meme"
            className="max-w-full rounded-[3px]"
          />
        )}
        <h2 className="absolute w-[80%] text-center left-1/2 transform -translate-x-1/2 top-0 mt-3 px-1 meme-text">
          {meme.topText}
        </h2>
        <h2 className="absolute w-[80%] text-center left-1/2 transform -translate-x-1/2 bottom-0 mb-3 px-1 meme-text">
          {meme.bottomText}
        </h2>
      </div>
    </main>
  );
}
