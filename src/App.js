import { useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

const  App=() =>{
  let heroData = [
    { text1: "Tata", text2: "Motors"},
    { text1: "Indigo", text2: "your passion cars" },
    { text1: "Give some best price", text2: "" },
  ];
  const [heroCouunt, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCouunt={heroCouunt} />
      <Navbar />
      <Hero 
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCouunt]}
        heroCouunt={heroCouunt}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
}

export default App;
