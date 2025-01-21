import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  useGLTF,
  Environment,
  Preload,
  PerformanceMonitor,
  AdaptiveDpr,
  AdaptiveEvents,
  BakeShadows,
  useDetectGPU,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useState, Suspense, useMemo } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { Office } from "./Office";
import * as THREE from "three";

export const Hero = (props) => {
  const { section, menuOpened, onLoaded } = props;
  const { viewport } = useThree();
  const [degraded, setDegraded] = useState(false);
  const GPU = useDetectGPU();

  // Set initial degraded state based on GPU tier
  useEffect(() => {
    if (GPU.tier < 2) {
      setDegraded(true);
    }
  }, [GPU]);

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  // Memoize materials to prevent unnecessary recreations
  const materials = useMemo(
    () => ({
      redSphere: (
        <MeshDistortMaterial
          opacity={0.8}
          transparent
          distort={degraded ? 0.2 : 0.4}
          speed={degraded ? 2 : 4}
          color={"red"}
        />
      ),
      yellowSphere: (
        <MeshDistortMaterial
          opacity={0.8}
          transparent
          distort={degraded ? 0.5 : 1}
          speed={degraded ? 2 : 5}
          color="yellow"
        />
      ),
      blueCube: (
        <MeshWobbleMaterial
          opacity={0.8}
          transparent
          factor={degraded ? 0.5 : 1}
          speed={degraded ? 2 : 5}
          color={"blue"}
        />
      ),
    }),
    [degraded]
  );

  // Camera movement effect with optimized animation
  useEffect(() => {
    const animation = animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
      duration: degraded ? 0.5 : 1,
    });
    const animation2 = animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
      duration: degraded ? 0.5 : 1,
    });

    return () => {
      animation.stop();
      animation2.stop();
    };
  }, [menuOpened, degraded]);

  // Optimized camera update
  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  // Memoize floating elements to prevent unnecessary rerenders
  const FloatingElements = useMemo(
    () => (
      <>
        <Float
          speed={degraded ? 2 : 4}
          rotationIntensity={degraded ? 1 : 2}
          floatIntensity={degraded ? 2 : 4}
        >
          <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
            <sphereGeometry
              args={[1, degraded ? 16 : 32, degraded ? 16 : 32]}
            />
            {materials.redSphere}
          </mesh>
        </Float>

        <Float
          speed={degraded ? 2 : 5}
          rotationIntensity={degraded ? 1.5 : 3}
          floatIntensity={degraded ? 2.5 : 5}
        >
          <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
            <sphereGeometry
              args={[1, degraded ? 16 : 32, degraded ? 16 : 32]}
            />
            {materials.yellowSphere}
          </mesh>
        </Float>

        <Float
          speed={degraded ? 3 : 6}
          rotationIntensity={degraded ? 1 : 2}
          floatIntensity={degraded ? 1.5 : 3}
        >
          <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
            <boxGeometry
              args={[
                1,
                1,
                1,
                degraded ? 1 : 2,
                degraded ? 1 : 2,
                degraded ? 1 : 2,
              ]}
            />
            {materials.blueCube}
          </mesh>
        </Float>
      </>
    ),
    [degraded, materials]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      onLoaded(); // Notify parent component that Hero has loaded
    }, 200); // Assume it takes 2 seconds to load resources

    return () => clearTimeout(timer);
  }, [onLoaded]);
  return (
    <>
      <PerformanceMonitor
        onDecline={() => setDegraded(true)}
        onIncline={() => {
          if (GPU.tier >= 2) {
            setDegraded(false);
          }
        }}
      />
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      <BakeShadows />

      {/* Lighting - Optimized */}
      <Environment preset={degraded ? "warehouse" : "sunset"} />
      <ambientLight intensity={degraded ? 0.7 : 0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={degraded ? 1 : 0.8}
        castShadow={!degraded}
      />

      {/* Main Scene */}
      <Suspense fallback={null}>
        <motion.group
          position={[1.5, 2, 3]}
          scale={[0.9, 0.9, 0.9]}
          rotation-y={-Math.PI / 4}
          animate={{
            y: section === 0 ? 0 : -1,
          }}
        >
          {/* <Office section={section} /> */}
        </motion.group>

        {/* SKILLS Section */}
        <motion.group
          position={[0, -1.5, -10]}
          animate={{
            z: section === 1 ? 0 : -10,
            y: section === 1 ? -viewport.height : -1.5,
          }}
        >
          <directionalLight
            position={[-5, 3, 5]}
            intensity={degraded ? 0.6 : 0.4}
          />

          {/* Floating Elements - Only render if not super degraded */}
          {!degraded && FloatingElements}

          {/* Avatar - Always render with optimizations */}
          {/* <group scale={[2, 2, 2]} position-y={-1.5}>
            <Avatar animation={section === 0 ? "Falling" : "Standing"} /> 
          </group> */}
        </motion.group>
      </Suspense>

      <Preload all />
    </>
  );
};
