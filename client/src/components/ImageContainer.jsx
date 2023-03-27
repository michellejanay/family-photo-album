import React from 'react'
import data from '../data/data'

const ImageContainer = () => {
  return (
    <div>
      {data.map((image) => (
        <img src={require(`../images/${image}`)} width="400px" alt={image} />
      ))}
    </div>
  )
}

export default ImageContainer