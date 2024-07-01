/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 photoreal_earth.gltf --transform 
Files: photoreal_earth.gltf [1.96MB] > E:\coding\web development\completed_project\unfazed-web\public\3d\background\photoreal_earth-transformed.glb [80.48KB] (96%)
*/

import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera, OrthographicCamera } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/photoreal_earth-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera makeDefault={false} far={1000000} near={70} fov={45} position={[-5.69, -180.47, 2196.42]} scale={0.01} />
      <directionalLight intensity={1} decay={2} rotation={[-Math.PI, 1.145, -Math.PI]} scale={0.01} />
      <OrthographicCamera makeDefault={false} far={100000} near={0} position={[555.973, 604.632, 473.633]} rotation={[-Math.PI / 4, 0.615, Math.PI / 6]} scale={0.01} />
      <mesh geometry={nodes.Stars.geometry} material={nodes.Stars.material} position={[-5.69, -180.47, -1297.393]} scale={0.2} />
    </group>
  )
}

useGLTF.preload('/photoreal_earth-transformed.glb')
