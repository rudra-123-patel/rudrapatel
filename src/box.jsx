// src/components/BoxAnimation.jsx
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function BoxAnimation() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to(".box", { x: 360, duration: 2,repeat: -1, yoyo: true });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="p-10">
      <div className="box w-20 h-20 bg-blue-500"></div>
    </div>
  );
}
