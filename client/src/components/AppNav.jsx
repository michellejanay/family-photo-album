import React from 'react'
import Nav from './Nav'

const AppNav = () => {
  const years = [
    '1940s',
    '1950s',
    '1960s',
    '1970s',
    '1980s',
    '1990s',
    '2000s',
    '2010s',
    '2020s',
  ]

  const familyNames = ['Steele', 'Carrol', 'Watson', 'Bennett']

  return (
    <>
      <Nav listItem={years} />
      <Nav listItem={familyNames} />
    </>
  )
}

export default AppNav
