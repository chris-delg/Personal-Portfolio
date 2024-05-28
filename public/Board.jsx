/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 board.gltf 
Author: Jamoues (https://sketchfab.com/Jamoues)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/skateboard-0f7b8ea366654674b217a743959798e7
Title: Skateboard
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/board.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.05}>
        <mesh geometry={nodes['1_low001__0'].geometry} material={materials['Scene_-_Root']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['2_low001__0'].geometry} material={materials['Scene_-_Root']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['3_low001__0'].geometry} material={materials['Scene_-_Root']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/board.gltf')