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

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const [bestTime, setBestTime] = useState(0);
  const handleClick = (img) => {
    if (img.clicked === false) {
      img.clicked = true;
      setScore(score + 1);
    } else {
      if (highScore < score || (highScore === score && bestTime > time)) {
        setHighScore(score);
        setBestTime(time);
      }
      images.forEach((img) => {
        img.clicked = false;
      });
      setRunning(false);
      setTime(0);
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
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 p-3">
        <div className="grid text-2xl font-black">Apex Legends Memory Card</div>
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
              setRunning(true);
              handleClick(img);
              shuffle();
            }}
            key={img.id}
          />
        ))}
        <div className="grid col-span-2">
          <div className="text-green-500 font-medium text-4xl lg:text-6xl self-end ml-9 lg:ml-2 [@media(min-width:1400px)]:ml-20">
            Best: {highScore}
          </div>
          <div className="font-medium text-3xl self-start ml-9 lg:ml-2 [@media(min-width:1400px)]:ml-20">
            <span>
              {('0' + Math.floor((bestTime / 60000) % 60)).slice(-2)}:
            </span>
            <span>{('0' + Math.floor((bestTime / 1000) % 60)).slice(-2)}:</span>
            <span className="text-green-500">
              {('0' + ((bestTime / 10) % 100)).slice(-2)}
            </span>
          </div>
          <div className="text-yellow-300 font-medium text-4xl lg:text-6xl self-end ml-9 lg:ml-2 [@media(min-width:1400px)]:ml-20">
            Score: {score}
          </div>
          <div className="font-medium text-3xl self-start ml-9 lg:ml-2 [@media(min-width:1400px)]:ml-20">
            <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span className="text-yellow-300">
              {('0' + ((time / 10) % 100)).slice(-2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
