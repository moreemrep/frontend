import React from 'react'
import Particles from 'react-particles-js'
import '../style.css'
import { useMedia } from '../../hooks/useMedia'

export function Background() {
  const small = useMedia('(max-width: 400px)')

  return (
    <Particles
      className="particulas"
      params={{
        particles: {
          line_linked: {
            width: 0.9,
            color: '#0F0',
            opacity: 1
          },
          number: {
            value: small ? 25 : 100,
            max: small ? 25 : 150
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
        backgroundColor: '#660066'
      }}
    />
  )
}
