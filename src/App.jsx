import { useState } from "react";
import "./App.css";
import Hero from "./Hero/Hero";
import News from "./News/News";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import Data from "./Data/Data";
import { vidAssets } from "./assets/vidAssets";
import Media from "./Media/Media";
import Wallpaper from "./Wallpaper/Wallpaper";
import Others from "./Others/Others";
import Features from "./Features/Features";
import DataVideo1 from "./VideoPlayer/DataVideo1";
import DataVideo2 from "./VideoPlayer/DataVideo2";
import DataVideo3 from "./VideoPlayer/DataVideo3";
import DataVideo4 from "./VideoPlayer/DataVideo4";

function App() {
  const [play, setPlay] = useState(false);
  const [dataPlay1, setDataPlay1] = useState(false);
  const [dataPlay2, setDataPlay2] = useState(false);
  const [dataPlay3, setDataPlay3] = useState(false);
  const [dataPlay4, setDataPlay4] = useState(false);

  return (
    <>
      <section>
        <Hero setPlay={setPlay} />
      </section>
      <section>
        <News />
      </section>
      <section>
        <Data
          setDataPlay1={setDataPlay1}
          setDataPlay2={setDataPlay2}
          setDataPlay3={setDataPlay3}
          setDataPlay4={setDataPlay4}
        />
      </section>
      <section>
        <Media />
      </section>
      <section>
        <Wallpaper />
      </section>
      <section>
        <Others />
      </section>
      <section>
        <Features />
      </section>

      <VideoPlayer play={play} setPlay={setPlay} src={vidAssets.SisterFight} />
      <DataVideo1 dataPlay1={dataPlay1} setDataPlay1={setDataPlay1} src={vidAssets.Lucia} />
      <DataVideo2 dataPlay2={dataPlay2} setDataPlay2={setDataPlay2} src={vidAssets.Lee} />
      <DataVideo3 dataPlay3={dataPlay3} setDataPlay3={setDataPlay3} src={vidAssets.Bancia} />
      <DataVideo4 dataPlay4={dataPlay4} setDataPlay4={setDataPlay4} src={vidAssets.Hangying} />
    </>
  );
}

export default App;
