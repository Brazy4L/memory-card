import { useEffect, useState } from 'react';
import Legends from './Legends';

const Main = () => {
  const [images, setImages] = useState(Legends);

  useEffect(() => {
    shuffle(images);
    // eslint-disable-next-line
  }, []);

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleClick = (img) => {
    if (img.clicked === false) {
      img.clicked = true;
      setScore(score + 1);
    } else {
      if (highScore < score) {
        setHighScore(score);
      }
      images.forEach((img) => {
        img.clicked = false;
      });
      setScore(0);
    }
  };

  const shuffle = () => {
    for (let i = images.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      [images[i], images[j]] = [images[j], images[i]];
    }
    setImages([...images]);
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="grid text-2xl font-bold">Apex Legends Memory Card</div>
        <div className="grid text-2xl lg:justify-end">
          Try to Click Each Card Once
        </div>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8">
        {images.map((img) => (
          <img
            width="250px"
            src={img.link}
            alt=""
            onClick={() => {
              handleClick(img);
              shuffle();
            }}
            key={img.id}
          />
        ))}
        <div className="grid items-center col-span-2">
          <div className="text-4xl lg:text-6xl">
            Best: {highScore}
          </div>
          <div className="text-4xl lg:text-6xl">
            Score: {score}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
