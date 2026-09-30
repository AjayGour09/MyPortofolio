import { useState } from "react";
import "./App.css";

export default function App() {
  const [boom, setBoom] = useState(false);

  const handleClick = () => {
    if (boom) return;

    setBoom(true);

    setTimeout(() => {
      setBoom(false);
    }, 4500);
  };

  return (
    <div className="love-screen">

      {/* MAIN HEART */}
      <div
        className={`heart ${boom ? "explode" : ""}`}
        onClick={handleClick}
      >
        <div className="heart-shape">♥</div>
      </div>

      {boom && (
        <div className="effects">

          {/* FLOWERS */}
          <div className="flowers">
            <span>🌸</span>
            <span>🌹</span>
            <span>🌷</span>
            <span>🌺</span>
            <span>🌻</span>
            <span>🌼</span>
            <span>💐</span>
            <span>🌸</span>
          </div>

          {/* SMALL HEARTS */}
          <div className="small-hearts">
            <span>❤️</span>
            <span>💕</span>
            <span>💗</span>
            <span>💖</span>
            <span>💞</span>
            <span>❤️</span>
          </div>

          {/* SPARKLES */}
          <div className="sparkles">
            <i>✦</i>
            <i>✧</i>
            <i>✦</i>
            <i>✧</i>
            <i>✦</i>
            <i>✧</i>
            <i>✦</i>
            <i>✧</i>
          </div>

          {/* LOVE MESSAGE */}
          <div className="love-text">
            I LOVE YOU
            <small>MOTOO ❤️</small>
          </div>

        </div>
      )}

    </div>
  );
}