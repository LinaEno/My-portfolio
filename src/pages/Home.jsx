import { useState } from 'react';
import { Pannellum } from 'pannellum-react';

import fantasyNight from '../img/realistic_mountains_forest_sunset_river.jpg';
import fantasyCave from '../img/modern_computer_animation_mountains_forest_sunse (1).jpg';

const Home = () => {
  const [currentScene, setCurrentScene] = useState(fantasyNight);

  return (
    <>
      <div style={{ width: '100vw', height: '100vh' }}>
        <h1 className="title">
          Welcome to <br />
          My Portfolio
        </h1>
        <Pannellum
          width="100%"
          height="100%"
          image={currentScene}
          yaw={300}
          hfov={110}
          autoLoad
          autoRotate={-5}
          compass={true}
          showZoomCtrl={false}
          mouseZoom={false}
          onLoad={() => {
            console.log('panorama loaded');
          }}
        >
          <Pannellum.Hotspot
            type="custom"
            pitch={-10}
            yaw={-120}
            handleClick={(evt, name) =>
              setCurrentScene(
                currentScene !== fantasyNight ? fantasyNight : fantasyCave
              )
            }
          />
        </Pannellum>
      </div>
    </>
  );
};

export default Home;