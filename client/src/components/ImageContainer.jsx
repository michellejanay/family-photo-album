import React, { useState, useEffect } from 'react'
import oldData from '../data/data'

const ImageContainer = () => {
  const [newImages, setNewImages] = useState([])

  const getImage = () => {
    fetch('http://localhost:5000/images', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setNewImages(data.data)
        newImages.concat([...oldData])
      })
  }

  useEffect(() => {
    getImage()
  })

  return (
    <section className="img-container">
      {newImages.map((img, i) => (
        <img
          width={400}
          src={img.image}
          alt={!img.title ? '' : img.title}
          key={i}
        />
      ))}
      {oldData.map((img, i) => (
        <img width={400} src={require(`../images/${img}`)} alt={img} key={i} />
      ))}
    </section>
  )
}

export default ImageContainer
