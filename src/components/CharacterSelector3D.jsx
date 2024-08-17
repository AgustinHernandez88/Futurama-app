import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import './CharacterSelector3D.css';

const characters = [
  { name: 'Bender', modelPath: '/3D/bender_by_futurama.glb', scale: [8, 8, 8], position: [0, 0, 0] },
  { name: 'Lokation', modelPath: '/3D/lokation_futurama_scene.glb', scale: [6, 6, 6], position: [0, 0, 0] },
  { name: 'Nave', modelPath: '/3D/nave_futurama.glb', scale: [6, 6, 6], position: [0, 0, 0] },
  { name: 'Suspicious', modelPath: '/3D/suspicious.glb', scale: [12, 12, 12], position: [0, 0, 0] },
];

function CharacterModel({ modelPath, scale, position }) {
  const group = useRef();
  const { scene } = useGLTF(modelPath);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0; 
    }
  });

  return (
    <group ref={group} scale={scale} position={position} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

export function CharacterSelector3D() {
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);

  const handleCharacterChange = (direction) => {
    const currentIndex = characters.findIndex(c => c.name === selectedCharacter.name);
    const nextIndex = (currentIndex + direction + characters.length) % characters.length;
    setSelectedCharacter(characters[nextIndex]);
  };

  return (
    <div className="character-selector-container">
      <div className="controls">
        <button onClick={() => handleCharacterChange(-1)}>Anterior</button>
        <button onClick={() => handleCharacterChange(1)}>Siguiente</button>
      </div>
      <Canvas className="canvas-3d" camera={{ position: [0, 0, 5], fov: 25 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <OrbitControls enableZoom={true} enablePan={true} rotateSpeed={0} />
        <CharacterModel {...selectedCharacter} />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/3D/bender_by_futurama.glb');
useGLTF.preload('/3D/lokation_futurama_scene.glb');
useGLTF.preload('/3D/nave_futurama.glb');
useGLTF.preload('/3D/suspicious.glb');
