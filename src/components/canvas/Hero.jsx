"use client"

import { useRef } from "react"
import { shaderMaterial } from "@react-three/drei"
import { extend, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import fragmentShader from '../../templates/Shader/glsl/shader.frag'

const Hero = ({ props }) => {
    const materialRef = useRef()

    const ColorShiftMaterial = new shaderMaterial(
        {
            time: { value: 0 }, color: new THREE.Color(0.2, 0.0, 0.1),
            iResolution: new THREE.Vector3(window.innerWidth, window.innerHeight, 0)
        },

  // vertex shader
  /*glsl*/`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
        fragmentShader
    )

    useFrame((state) => {
        materialRef.current.uniforms.time.value = state.clock.getElapsedTime()
    })

    extend({ ColorShiftMaterial })


    return (
        <mesh position={[0, 0, -1]}
            {...props}>
            <planeGeometry args={[10, 8]} />
            <colorShiftMaterial ref={materialRef} />
        </mesh>

    )
}

export default Hero