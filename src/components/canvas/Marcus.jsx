"use client"

import React, { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'

const Marcus = ({ props }) => {
    const { nodes, materials } = useGLTF('/3d/marcus_aurelius/scene-transformed.glb')

    return (
        <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
            <group {...props} dispose={null}>
                <mesh geometry={nodes.Object_2.geometry} material={materials.model} rotation={[2.695, 0.045, 1.425]} scale={[0.5, 0.5, 0.5]} >
                    <meshStandardMaterial color='#5EAE01' roughness={0.6} metalness={0.5} />
                </mesh>

            </group>
        </Float>

    )
}

export default Marcus