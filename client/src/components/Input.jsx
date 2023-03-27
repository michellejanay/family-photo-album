import React from 'react'

const Input = ({ label, type, id, name, labelFor, accept }) => {
  return (
    <>
      <label for={labelFor}>{label}</label>
      <input type={type} id={id} name={name} accept={accept} />
    </>
  )
}

export default Input
