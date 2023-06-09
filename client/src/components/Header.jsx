import React, { useState, useEffect } from 'react'
import Input from './Input'
import Button from './Button'

const Header = () => {
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  // const [newImages, setNewImages] = useState([])

  const converToFileBaseImage = (e) => {
    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])

    reader.onload = () => {
      setImage(reader.result)
    }

    reader.onerror = (error) => {
      console.log({ error: error })
    }
  }

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const uploadImage = (e) => {
    e.preventDefault()
    fetch('http://localhost:5000/upload', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        title: title,
        base64: image,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))

    setTitle('')
    setImage('')
  }

  // const getImage = () => {
  //   fetch('http://localhost:5000/images', {
  //     method: 'GET',
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //       setNewImages(data.data)
  //     })
  // }

  return (
    <>
      <header>
        <form
          // onSubmit={uploadImage}
          className="image-upload"
          encType="multipart/form-data"
        >
          <Input
            label="Title:"
            labelFor="image-title"
            type="text"
            id="image-title"
            name="image-title"
            onChange={handleTitle}
            required
          />
          <Input
            label="Select an image"
            labelFor="image-upload"
            type="file"
            id="image-file"
            name="image-upload"
            accept="image/*"
            onChange={converToFileBaseImage}
            required
          />
          <Button onClick={uploadImage}>Upload</Button>
        </form>
        {image && <img width={100} src={!image ? '' : image} alt={title} />}
      </header>
      <div className="img-container header-img-cont">
        {/* {newImages.map((img, i) => (
          <img
            width={400}
            src={img.image}
            alt={!img.title ? '' : img.title}
            key={i}
          />
        ))} */}
      </div>
    </>
  )
}

export default Header
