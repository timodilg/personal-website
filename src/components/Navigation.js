import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
    </ul>
  )
}
