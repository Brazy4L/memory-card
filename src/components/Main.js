import { useState } from 'react';

const legends = [
  {
    id: 'ash',
    link: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-ash.png.adapt.crop16x9.png',
  },
  {
    id: 'bangalore',
    link: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-bangalore.png.adapt.crop16x9.png',
  },
  {
    id: 'fuse',
    link: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/01/apex-grid-tile-legends-fuse.png.adapt.crop16x9.png',
  },
  {
    id: 'horizon',
    link: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/10/horizon/apex-grid-tile-legends-horizon.png.adapt.crop16x9.png',
  },
  {
    id: 'maggie',
    link: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2022/01/apex-grid-tile-legends-maggie.png.adapt.crop16x9.png',
  },
  {
    id: 'mirage',
    link: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-mirage.png.adapt.crop16x9.png',
  },
  {
    id: 'octane',
    link: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-octane.png.adapt.crop16x9.png',
  },
  {
    id: 'revenant',
    link: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/02/apex-legend-revenant-grid-tile.png.adapt.crop16x9.png',
  },
  {
    id: 'wraith',
    link: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-wraith.png.adapt.crop16x9.png',
  },
  {
    id: 'caustic',
    link: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-caustic.png.adapt.crop16x9.png',
  },
  {
    id: 'gibraltar',
    link: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-gibraltar.png.adapt.crop16x9.png',
  },
  {
    id: 'newcastle',
    link: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2022/05/apex-grid-tile-legends-newcastle.png.adapt.crop16x9.png',
  },
  {
    id: 'rampart',
    link: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/08/rampart/apex-grid-tile-legends-rampart.png.adapt.crop16x9.png',
  },
  {
    id: 'wattson',
    link: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-wattson.png.adapt.crop16x9.png',
  },
  {
    id: 'lifeline',
    link: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-lifeline.png.adapt.crop16x9.png',
  },
  {
    id: 'loba',
    link: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/05/apex-grid-tile-legends-loba.png.adapt.crop16x9.png',
  },
  {
    id: 'bloodhound',
    link: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-bloodhound.png.adapt.crop16x9.png',
  },
  {
    id: 'crypto',
    link: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-crypto.png.adapt.crop16x9.png',
  },
  {
    id: 'pathfinder',
    link: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-pathfinder.png.adapt.crop16x9.png',
  },
  {
    id: 'seer',
    link: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/07/seer-assets/apex-grid-tile-legends-seer.png.adapt.crop16x9.png',
  },
  {
    id: 'valkyrie',
    link: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/04/apex-grid-tile-legends-valkyrie.png.adapt.crop16x9.png',
  },
  {
    id: 'vantage',
    link: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2022/07/apex-grid-tile-legends-vantage.png.adapt.crop16x9.png',
  },
];

const Main = () => {
  const [images, setImages] = useState(legends);

  const shuffle = () => {
    for (let i = images.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      [images[i], images[j]] = [images[j], images[i]];
    }
    setImages([...images]);
  };

  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8">
      {images.map((img) => (
        <img
          width="250px"
          src={img.link}
          alt=""
          onClick={shuffle}
          key={img.id}
        />
      ))}
    </div>
  );
};

export default Main;
