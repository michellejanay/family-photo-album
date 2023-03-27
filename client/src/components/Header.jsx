import React from 'react'
import AppNav from './AppNav'
import Input from './Input'
import Button from './Button'

const Header = () => {
  const uploadImage = () => {
    console.log(`fetch('', method: "POST")`)
  }

  return (
    <header>
      <AppNav />

      <form action="" className="image-upload">
        <Input
          label="Select an image"
          labelFor="image-upload"
          type="file"
          id="image-file"
          name="image-upload"
          accept="image/*"
        />
        <Button onSubmit={uploadImage}>Upload</Button>
      </form>
    </header>
  )
}

export default Header
