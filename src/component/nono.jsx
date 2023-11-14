import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nono() {
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/"}>About</NavLink>
      <NavLink to={"/"}>Services</NavLink>
    </div>
  )
}
