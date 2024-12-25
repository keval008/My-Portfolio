import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { Interface } from "./components/Interface";
import { Menu } from "./components/Menu";
import { ScrollManager } from "./components/ScrollManager";
import { framerMotionConfig } from "./config";
import { Suspense } from "react";
import "./index.css";
function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);

  const handleHeroLoaded = () => {
    setHeroLoaded(true);
  };
  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          <color attach="background" args={["azure"]} />
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Suspense fallback={"..."}>
                <Hero section={section} menuOpened={menuOpened} onLoaded={handleHeroLoaded} />
              </Suspense>
            </Scroll>
            {heroLoaded && <Scroll html>
              <Interface section={section} setSection={setSection} />
            </Scroll>}
          </ScrollControls>
        </Canvas>
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />

      </MotionConfig>
      <Leva hidden />
    </>
  );
}

export default App;
