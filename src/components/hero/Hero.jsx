import "./Hero.css";
import { useEffect, useState } from "react";
import { heroData } from "../../utils/homeUtils";

const Hero = () => {
  const [count, setCount] = useState(0);
  const { image, type, desc, link } = heroData[count];

//   useEffect(() => {
//     const interval = setInterval(addCount, 5000);
//     return () => clearInterval(interval);
//   }, []);

  const addCount = () => {
    setCount((prev) => (prev === heroData.length - 1 ? 0 : prev + 1));
  };

  const subCount = () => {
    setCount((prev) => (prev === 0 ? heroData.length - 1 : prev - 1));
  };

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <i className="fa-solid fa-chevron-left" onClick={subCount}></i>
      <div className="hero-desc">
        <h2>SUMMER 2020</h2>
        <h1>{type} COLLECTION</h1>
        <p>{desc}</p>
        <button>SHOP NOW</button>
      </div>
      <i className="fa-solid fa-chevron-right" onClick={addCount}></i>
    </section>
  );
};

export default Hero;
