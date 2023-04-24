import { useState } from 'react';
import { Pannellum } from 'pannellum-react';

import fantasyNight from '../img/fantasy_lands_forest_night.jpg';
import fantasyCave from '../img/fantasy_lands_forest_night_river.jpg';
import { Default, Mobile } from 'components/Media/Media';

const Home = () => {
  const [currentScene, setCurrentScene] = useState(fantasyNight);

  return (
    <>
      <div style={{ width: '100vw', height: '100vh' }}>
        <h1 className="title">
          Welcome to <br />
          My Portfolio
        </h1>
        <a
          className="mainBtn"
          href="https://drive.google.com/file/d/1kzQhu1PFPimiE95XF7YXzP89Ee_8h-fC/view?usp=sharing"
        >
          Download CV
        </a>
        <Mobile>
          <Pannellum
            width="100%"
            height="100%"
            image={currentScene}
            yaw={300}
            hfov={110}
            autoLoad
            autoRotate={-5}
            compass={false}
            showZoomCtrl={false}
            mouseZoom={false}
            scale={0.6}
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
        </Mobile>
        <Default>
          <Pannellum
            width="100%"
            height="100%"
            image={currentScene}
            yaw={300}
            hfov={110}
            autoLoad
            autoRotate={-5}
            compass={false}
            showZoomCtrl={false}
            mouseZoom={true}
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
        </Default>
      </div>
    </>
  );
};

export default Home;
