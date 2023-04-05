import React from 'react'

const Nav = ({ listItem }) => {
  return (
    <ul>
      {listItem.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  )
}

export default Nav
