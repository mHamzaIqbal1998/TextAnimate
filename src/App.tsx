import { useEffect } from "react";
import Hero from "./components/Home/Hero";

function App() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <Hero />
      <div className="h-screen"> hello</div>
    </>
  );
}

export default App;
