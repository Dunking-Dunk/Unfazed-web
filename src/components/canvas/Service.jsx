"use client"

import { useRef, useState } from 'react'
import *  as THREE from 'three'
import { shaderMaterial, useTexture } from "@react-three/drei"
import { useFrame, extend } from '@react-three/fiber'
import { lerp } from '@/helpers/lerp'
import { gsap } from 'gsap'


const ColorShiftMaterial = new shaderMaterial(
    {
        time: { value: 0 },
        color: new THREE.Color(0.2, 0.0, 0.1),
        uOffset: { value: new THREE.Vector2(0, 0) },
        iResolution: new THREE.Vector3(window.innerWidth, window.innerHeight, 0),
        uAlpha: { value: null },
        uTexture: { value: null }
    },
    `
        varying vec2 vUv;
        uniform vec2 uOffset;
        uniform float time;
        uniform float uAlpha;

        float M_PI=3.141529;

        float cubicOut(float t){
            float f=t-1.;
            return f*f*f+1.;
        }

        vec3 deformationCurve(vec3 position,vec2 uv,vec2 offset){
            position.x=position.x+(sin(uv.y*M_PI*10.*.3)*offset.x)*2.;
            position.y=position.y+(sin(uv.x*M_PI*10.*.3)*offset.y)*2.;
            return position;
        }

        void main(){
            vUv=uv;
            vec3 newPosition=deformationCurve(position,uv,uOffset);
            gl_Position=projectionMatrix*modelViewMatrix*vec4(newPosition,1.) * (uAlpha > 0.1 ? uAlpha: 0.0);
        }
  `,
    `
        varying vec2 vUv;
        uniform sampler2D uTexture;
        uniform float uAlpha;
        uniform vec2 uOffset;

        vec3 rgbShift(sampler2D textureImage,vec2 uv,vec2 offset){
            float r=texture2D(textureImage,uv+offset*.5).r;
            vec2 gb=texture2D(textureImage,uv).gb;
            return vec3(r,gb);
        }

        void main(){
            vec3 color=rgbShift(uTexture,vUv,uOffset);
            gl_FragColor=vec4(color * 1.1,uAlpha);
        }
    `
)

const Service = (props) => {
    const materialRef = useRef()
    const planeRef = useRef()
    const textures = useTexture(['./img/services/1.webp', './img/services/2.webp', './img/services/3.webp', './img/services/4.webp'])
    const [offset, setOffset] = useState({
        x: 0,
        y: 0
    })

    useFrame((state) => {
        const { mouse, alpha, textureIdx } = props

        setOffset({ x: lerp(offset.x, mouse.x, 0.1), y: lerp(offset.y, mouse.y, 0.1) })

        gsap.to(planeRef.current.position, {
            x: (mouse.x - (window.innerWidth / 2)) / 400,
            y: (-mouse.y + (window.innerHeight / 2)) / 400 + 1
        })


        materialRef.current.uniforms.time.value = state.clock.getElapsedTime()
        materialRef.current.uniforms.uOffset.value = new THREE.Vector2((mouse.x - offset.x) * 0.0005, -(mouse.y - offset.y) * 0.0005)

        gsap.to(materialRef.current.uniforms.uAlpha, {
            value: alpha > 0.5 ? 1 : 0
        })
        // gsap.to(materialRef.current.uniforms.uAlpha, {
        //     value: alpha,
        // })

        materialRef.current.uniforms.uTexture.value = textures[textureIdx]
    })



    extend({ ColorShiftMaterial })

    return (
        <mesh {...props} ref={planeRef} >
            <planeGeometry args={[1, 1.25]} />
            <colorShiftMaterial ref={materialRef} />
        </mesh>
    )
}

export default Service