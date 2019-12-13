import React from 'react'
import Particles from 'react-particles-js'

export const LandingPage: React.FC = () => {
  return (
    <div>
      <Particles
        params={{
          particles: {
            line_linked: {
              width: 0.9,
              color: '#0F0',
              opacity: 1
            },
            number: {
              value: 100,
              max: 1000
            },
            shape: {
              type: 'circle',
              stroke: {
                color: '#fff',
                width: 0.6
              }
            },
            move: {
              straight: false,
              bounce: true,
              random: true,
              speed: 5
            }
          }
        }}
        style={{
          width: '100%',
          backgroundColor: '#7B26CD'
        }}
      />
    </div>
  )
}
