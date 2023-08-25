import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

const Hero = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.05 * direction;
    requestAnimationFrame(animation);
  };
  return (
    <main className="relative flex h-screen overflow-hidden bg-gray-500">
      <div className="flex"></div>
      <div className="absolute top-[calc(100vh-350px)]">
        <div ref={slider} className="relative whitespace-nowrap md:flex hidden">
          <p
            ref={firstText}
            className="relative antialiased m-0 text-white md:text-[200px] font-bold pr-[50px] mix-blend-exclusion"
          >
            WEB DEVELOPER &#8901; SOFTWARE ENGINEER &#8901; DESIGNER &#8901;
          </p>
          <p
            ref={secondText}
            className="absolute antialiased m-0 text-white md:text-[200px] font-bold pr-[50px] left-[100%] top-0"
          >
            WEB DEVELOPER &#8901; SOFTWARE ENGINEER &#8901; DESIGNER &#8901;
          </p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
