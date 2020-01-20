import React from 'react'

//TODO rewrite component to matherial-ui

export default function Loading () {
  return (
    <i
      className='fa fa-gear fa-spin fadeInOut'
      style={{
        fontSize: '32px',
        opacity: 0.8,
        top: '50%',
        left: '50%',
        position: 'absolute'
      }}
    />
  )
}
