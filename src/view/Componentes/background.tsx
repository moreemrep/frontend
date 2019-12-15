import React from 'react'
import Particles from 'react-particles-js'
import { StyleSheet, css } from 'aphrodite'
import { useMedia } from 'src/hooks/useMedia'

const styles = StyleSheet.create({
  particulas: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1
  }
})

export function Background() {
  const small = useMedia('(max-width: 400px)')

  return (
    <Particles
      className={css(styles.particulas)}
      params={{
        interactivity: {
          detect_on: 'window',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            }
          }
        },
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
        backgroundColor: '#000'
      }}
    />
  )
}
