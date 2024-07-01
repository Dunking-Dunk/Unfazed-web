import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

const Enviroment = ({ props }) => {
    const { nodes, materials } = useGLTF('/3d/background/lost_orb_in_the_mountains-transformed.glb')
    return (
        <group {...props} dispose={null} position={[1, -0.5, 2]} rotation={[0.2, -0.5, 0]}>
            <pointLight intensity={4} decay={2} distance={518} color="#92fa8d" position={[-0.29, 1.645, -2.977]} scale={[-0.01, 0.01, 0.028]} />
            <pointLight intensity={1} decay={1} distance={197} color="#00ff29" position={[0.231, 1.398, 0.877]} scale={[0.01, 0.01, 0.033]} />
            {/* <PerspectiveCamera makeDefault={true} far={100000} near={70} fov={45} position={[3.795, 3.451, 6.327]} rotation={[-0.18, 0.662, 0.111]} scale={0.01} /> */}
            <mesh geometry={nodes.mountain.geometry} material={nodes.mountain.material} position={[0.07, 0, 0.192]} rotation={[Math.PI, -0.35, 0]} scale={[3.17, 2.478, 5.834]} />
            <mesh geometry={nodes.Sphere.geometry} material={nodes.Sphere.material} position={[-0.174, 0.736, -2.03]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.016} />
        </group >
    )
}

useGLTF.preload('/3d/background/lost_orb_in_the_mountains-transformed.glb')

export default Enviroment