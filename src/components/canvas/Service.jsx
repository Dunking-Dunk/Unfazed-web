"use client"

import { useRef, } from 'react'
import *  as THREE from 'three'
import { shaderMaterial, } from "@react-three/drei"
import { useFrame, extend } from '@react-three/fiber'
import { lerp } from '@/helpers/lerp'

const Service = (props) => {
    const materialRef = useRef()
    const planeRef = useRef()

    const ColorShiftMaterial = new shaderMaterial(
        {
            time: { value: 0 },
            color: new THREE.Color(0.2, 0.0, 0.1),
            uOffset: { value: new THREE.Vector2(0, 0) },
            iResolution: new THREE.Vector3(window.innerWidth, window.innerHeight, 0)
        },
        `
        varying vec2 vUv;
        uniform vec2 uOffset;
        uniform float time;

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
            gl_Position=projectionMatrix*modelViewMatrix*vec4(newPosition,1.);
        }
  `,
        `
        void main(){
    gl_FragColor=vec4(vec3(1.0, 0.,0.),1.);
}
// 
    `
    )

    //varying vec2 vUv;
    // uniform sampler2D uTexture;
    // uniform float uAlpha;
    // uniform vec2 uOffset;

    // vec3 rgbShift(sampler2D textureImage,vec2 uv,vec2 offset){
    //     float r=texture2D(textureImage,uv+offset*.2).r;
    //     vec2 gb=texture2D(textureImage,uv).gb;
    //     return vec3(r,gb);
    // }

    // void main(){
    //     vec3 color=rgbShift(uTexture,vUv,uOffset);
    //     gl_FragColor=vec4(color*uAlpha,1.);
    // }

    useFrame((state) => {
        const offset = {
            x: 0,
            y: 0
        }
        const { mouse } = props

        offset.x = lerp(offset.x, mouse.x, 0.1)
        offset.y = lerp(offset.y, mouse.y, 0.1)

        materialRef.current.uniforms.time.value = state.clock.getElapsedTime()
        materialRef.current.uniforms.uOffset.value = new THREE.Vector2((mouse.x - offset.x) * 0.005, -(mouse.y - offset.y) * 0.005)
        planeRef.current.position.set((mouse.x - (window.innerWidth / 2)) / 400, (-mouse.y + (window.innerHeight / 2)) / 400 + 1)
    })



    extend({ ColorShiftMaterial })

    return (
        <mesh {...props} ref={planeRef} >
            <planeGeometry args={[1, 1]} />
            <colorShiftMaterial ref={materialRef} />
        </mesh>
    )
}

export default Service