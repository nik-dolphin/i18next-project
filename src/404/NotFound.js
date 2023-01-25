import gsap from "gsap";
import React, { useRef } from "react";
import "./notFound.css";

const NotFound = () => {
  const textRef = useRef(null);
  // const split = new gsap.utils.SplitText(textRef.current);

  // gsap.to triggers animations
  gsap.to(
    // The array of letters
    textRef.current,
    // Animation duration in seconds
    {
      duration: 0.7,
      text: textRef.current,
      // Translate on X axis -40 pixels
      x: "-40",
      y: "0",
      // Smooth out the stop/start with easeInOut
      ease: "power2.inOut",
      // Reverse the animation back to start
      yoyo: true,
      // Delay the next item in seconds
      stagger: 0.08,
      // Infinite repeat
      repeat: -1,
    }
  );

  return (
    <>
      <div className="content">
        <h3 ref={textRef}>Hello?? Is somebody there?!?</h3>
        <p>
          We know it's scary, but the page you're trying to reach can't be
          found. Perhaps it was just a bad <span>link</span> dream?
        </p>
      </div>
    </>
  );
};

export default NotFound;
