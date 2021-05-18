import React, { useState } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";
import audio from "../../Assets/flip.mp3";

const CoinFlipper = () => {
  const [side, setSide] = useState("tura");
  const [flipping, setFlipping] = useState(false);
  const [counter, setCounter] = useState(0);
  const [turaCounter, setTuraCounter] = useState(0);
  const [yaziCounter, setYaziCounter] = useState(0);

  const handleClick = () => {
    let randomNo = Math.round(Math.random());
    if (randomNo === 0){
      setSide("tura");
      // getting the current value
      setTimeout(() => setTuraCounter(turaCounter + 1), 800);
    } 
    else {
      setSide("yazi");
      setTimeout(() => setYaziCounter(yaziCounter + 1), 800);
    }

    setTimeout(() =>setCounter(counter + 1), 800);

    
    disableEnableBtn()
    flip()
    flipSoundEffect()
  };

  const disableEnableBtn = () => {
    document.querySelector("button").disabled = true
    setTimeout(() => document.querySelector("button").disabled = false, 800);

  }

  const flip = () => {
    // flip it
    setFlipping(true);
    // flip it for 800ms
    setTimeout(() => setFlipping(false), 800);
  }

  const flipSoundEffect = () => {
    new Audio(audio).play();
  }

  return (
    <div className="CoinFlipper">
      <h1>Heads or Tails?</h1>
      <Coin side={side} flipping={flipping} />
      <button onClick={handleClick}>Flip!</button>
      <p>
        <strong > {counter} </strong>
        flips:
        <strong> {turaCounter} </strong>heads
        <strong> {yaziCounter} </strong>
        tails
      </p>
    </div>
  );
};

export default CoinFlipper;
