import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const models = [
  { name: 'Bender', path: '/3D/bender_by_futurama.glb' },
  { name: 'Lokation', path: '/3D/lokation_futurama_scene.glb' },
  { name: 'Nave', path: '/3D/nave_futurama.glb' },
  { name: 'Suspicious', path: '/3D/suspicious.glb' },
];

function Model({ modelPath, color }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(modelPath);

  useEffect(() => {
    if (materials) {
      Object.values(materials).forEach((material) => {
        if (material) {
          material.color = new THREE.Color(color || '#ffffff');
          material.needsUpdate = true;
        }
      });
    }
  }, [materials, color]);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={group} dispose={null} scale={0.01}>
      {Object.keys(nodes).map((key) => {
        const node = nodes[key];
        if (node.geometry) { 
          return (
            <mesh
              key={key}
              castShadow
              receiveShadow
              geometry={node.geometry}
              material={materials[node.material?.name]}
            />
          );
        }
        return null; 
      })}
    </group>
  );
}

export function Futurama3D() {
  const [selectedModel, setSelectedModel] = useState(models[0]);

  const changeModel = (direction) => {
    const currentIndex = models.findIndex((m) => m.name === selectedModel.name);
    const newIndex = (currentIndex + direction + models.length) % models.length;
    setSelectedModel(models[newIndex]);
  };

  return (
    <div style={{ textAlign: 'center', color: 'white' }}>
      <div>
        <button onClick={() => changeModel(-1)}>Anterior</button>
        <button onClick={() => changeModel(1)}>Siguiente</button>
      </div>
      <Canvas style={{ height: '60vh', backgroundColor: 'black' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={true} />
        <Model modelPath={selectedModel.path} />
      </Canvas>
      <div>{selectedModel.name}</div>
    </div>
  );
}

useGLTF.preload(models.map(model => model.path));
