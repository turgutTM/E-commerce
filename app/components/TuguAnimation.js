import React, { useEffect } from "react";
import { gsap } from "gsap";

const TuguAnimation = () => {
  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, yoyo: true });
    timeline.fromTo(
      "#pathT",
      { strokeDashoffset: 100 },
      { strokeDashoffset: 0, duration: 1, ease: "power2.inOut" }
    );
    timeline.fromTo(
      "#pathU1",
      { strokeDashoffset: 150 },
      { strokeDashoffset: 0, duration: 1, ease: "power2.inOut" }
    );
    timeline.fromTo(
      "#pathG",
      { strokeDashoffset: 200 },
      { strokeDashoffset: 0, duration: 1, ease: "power2.inOut" }
    );
    timeline.fromTo(
      "#pathU2",
      { strokeDashoffset: 150 },
      { strokeDashoffset: 0, duration: 1, ease: "power2.inOut" }
    );
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 150"
        className="w-[400px] h-auto"
      >
        <path
          id="pathT"
          d="M50 100 L150 100 M100 50 L100 100"
          stroke="black"
          strokeWidth="2"
          fill="none"
          strokeDasharray="100"
          strokeDashoffset="100"
        />

        <path
          id="pathU1"
          d="M180 50 C180 100, 220 100, 220 50"
          stroke="black"
          strokeWidth="2"
          fill="none"
          strokeDasharray="150"
          strokeDashoffset="150"
        />

        <path
          id="pathG"
          d="M250 75 A40 40 0 1 1 330 75 L310 75"
          stroke="black"
          strokeWidth="2"
          fill="none"
          strokeDasharray="200"
          strokeDashoffset="200"
        />

        <path
          id="pathU2"
          d="M360 50 C360 100, 400 100, 400 50"
          stroke="black"
          strokeWidth="2"
          fill="none"
          strokeDasharray="150"
          strokeDashoffset="150"
        />
      </svg>
    </div>
  );
};

export default TuguAnimation;