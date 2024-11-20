import React from 'react'
import './Hero.css'

import  {Canvas} from '@react-three/fiber'
import {OrbitControls, Stage} from '@react-three/drei'
import Model from '../Model/Plant'

const Hero = () => {
  return (
    <div className='container-fluid hero-container'>
      <div className="row container-fluid">
        <div className="col-6 hero-text">
          <h1>Plantec</h1>
          <p>Transformando dados em colheitas: <br />tecnologia para uma <br />agricultura mais inteligente e sustentável</p>
          <button className='btn'>Saiba mais </button>
        </div>
        <div className='model col-6'>
        <Canvas>
            <Stage environment={'city'} intensity={0.6}>
              <Model/>
            </Stage>
            <OrbitControls enableZoom={false}/>
          </Canvas>
        </div>
      </div>
    </div>
  )
}

export default Hero
