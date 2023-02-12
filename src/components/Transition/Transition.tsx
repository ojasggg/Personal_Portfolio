import React, { useEffect, useRef } from "react";
import gsap, { Expo, Power1 } from "gsap";

const Transition = () => {
  const itemsRef = useRef<HTMLDivElement[] | [null]>([]);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(itemsRef.current, {
      duration: 0.8,
      width: "0%",
      ease: Power1.easeIn,
      delay: 2,
      stagger: 0.04,
    });

    gsap.to(loaderRef.current, {
      x: 2,
      opacity: 0,
      ease: Expo.easeInOut,
      delay: 1.6,
    });
  });
  return (
    <div className="absolute">
      <div
        className="fixed top-[50%] left-[50%] z-[1000] -translate-x-[50%] -translate-y-[50%] text-[2vw] uppercase text-black"
        ref={loaderRef}
      >
        Loading...
      </div>
      <div className="relative z-[999] h-[100vh] w-[100%]">
        <div
          className={`blockBox left-0`}
          ref={(el) => (itemsRef.current[0] = el)}
        ></div>
        <div
          className={`blockBox left-[5%]`}
          ref={(el) => (itemsRef.current[1] = el)}
        ></div>
        <div
          className={`blockBox left-[10%]`}
          ref={(el) => (itemsRef.current[2] = el)}
        ></div>
        <div
          className={`blockBox left-[15%]`}
          ref={(el) => (itemsRef.current[3] = el)}
        ></div>
        <div
          className={`blockBox left-[20%]`}
          ref={(el) => (itemsRef.current[4] = el)}
        ></div>
        <div
          className={`blockBox left-[25%]`}
          ref={(el) => (itemsRef.current[5] = el)}
        ></div>
        <div
          className={`blockBox left-[30%]`}
          ref={(el) => (itemsRef.current[6] = el)}
        ></div>
        <div
          className={`blockBox left-[35%]`}
          ref={(el) => (itemsRef.current[7] = el)}
        ></div>
        <div
          className={`blockBox left-[40%]`}
          ref={(el) => (itemsRef.current[8] = el)}
        ></div>
        <div
          className={`blockBox left-[45%] w-[6%]`}
          ref={(el) => (itemsRef.current[9] = el)}
        ></div>
        <div
          className={`blockBox left-[50%]`}
          ref={(el) => (itemsRef.current[10] = el)}
        ></div>
        <div
          className={`blockBox left-[55%]`}
          ref={(el) => (itemsRef.current[11] = el)}
        ></div>
        <div
          className={`blockBox left-[60%]`}
          ref={(el) => (itemsRef.current[12] = el)}
        ></div>
        <div
          className={`blockBox left-[65%]`}
          ref={(el) => (itemsRef.current[13] = el)}
        ></div>
        <div
          className={`blockBox left-[70%]`}
          ref={(el) => (itemsRef.current[14] = el)}
        ></div>
        <div
          className={`blockBox left-[75%]`}
          ref={(el) => (itemsRef.current[15] = el)}
        ></div>
        <div
          className={`blockBox left-[80%]`}
          ref={(el) => (itemsRef.current[16] = el)}
        ></div>
        <div
          className={`blockBox left-[85%]`}
          ref={(el) => (itemsRef.current[17] = el)}
        ></div>
        <div
          className={`blockBox left-[90%]`}
          ref={(el) => (itemsRef.current[18] = el)}
        ></div>
        <div
          className={`blockBox left-[95%]`}
          ref={(el) => (itemsRef.current[19] = el)}
        ></div>
      </div>
    </div>
  );
};

export default Transition;
