import "./App.css"; // Import the CSS for the gradient
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import Interface from "./components/Interface";
import ScrollManager from "./components/ScrollManager";
import Menu from "./components/Menu";
import { MotionConfig } from "framer-motion";

function App() {
  const [section, setSection] = useState(0);
  const [MenuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      {/* Add the animated gradient */}
      <div className="animated-gradient"></div>

      <MotionConfig
        transition={{
          type: "spring",
          mass: 5,
          stiffness: 500,
          damping: 50,
          restDelta: 0.0001,
        }}
      >
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          {/* <color attach="background" args={["animated-gradient"]} /> */}

          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Experience section={section} />
            </Scroll>
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          onSectionChange={setSection}
          setMenuOpened={setMenuOpened}
          MenuOpened={MenuOpened}
        />
      </MotionConfig>
    </>
  );
}

export default App;
