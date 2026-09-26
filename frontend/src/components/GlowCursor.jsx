import React, { useEffect, useState } from "react";

export default function GlowCursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const moveCursor = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setVisible(true);
    };

    const mouseDown = () => {
      setClicking(true);
    };

    const mouseUp = () => {
      setClicking(false);
    };

    const mouseLeave = () => {
      setVisible(false);
    };

    const mouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);
    document.addEventListener("mouseleave", mouseLeave);
    document.addEventListener("mouseenter", mouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
      document.removeEventListener("mouseleave", mouseLeave);
      document.removeEventListener("mouseenter", mouseEnter);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-glow ${
          visible ? "cursor-visible" : ""
        } ${clicking ? "cursor-clicking" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      <div
        className={`cursor-dot ${
          visible ? "cursor-visible" : ""
        } ${clicking ? "cursor-clicking" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
}