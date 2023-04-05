import React from 'react'
import data from '../data/data'

const ImageContainer = () => {
  return (
    <div className="img-container">
      {data.map((image) => (
        <img
          src={require(`../images/${image}`)}
          width="400px"
          alt={image}
          key={image}
        />
      ))}
    </div>
  )
}

export default ImageContainer
