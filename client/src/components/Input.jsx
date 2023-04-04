import React from 'react'

const Input = ({ label, type, id, name, labelFor, accept, onChange }) => {
  return (
    <>
      <label htmlFor={labelFor}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        accept={accept}
        onChange={onChange}
      />
    </>
  )
}

export default Input
