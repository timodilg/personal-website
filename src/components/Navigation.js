import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <NavigationStyled>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 100px 0 0;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 600px) {
    margin: 20px;
    display: flex;
    justify-content: center;
  }

  li {
    display: inline;
    padding: 5px;
    margin: 10px;
  }

  li a {
    color: black;
    text-decoration: none;
    font-size: 18px;
  }

  li a:hover {
    cursor: pointer;
    background: #03fcca;
  }
`
