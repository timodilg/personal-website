import React from 'react'
import styled from 'styled-components/macro'
import timer from '../images/timer.svg'
import calculator from '../images/calculator.svg'

export default function Projects() {
  return (
    <ProjectsStyled>
      <h2>Projects</h2>

      <a
        href="https://gebuehrenrechner.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ProjectCard>
          <img src={calculator} alt="calculator" />
          <div>
            <h3>gebuehrenrechner.com - PayPal Fee Calculator</h3>
            <p>
              Simple calculator for PayPal fees build with React. More features
              coming soon.
            </p>
          </div>
        </ProjectCard>
      </a>

      <a
        href="https://pomodoro-23add.firebaseapp.com/todo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ProjectCard>
          <img src={timer} alt="timer" />
          <div>
            <h3>Pomodoro - Time Management Mobile App</h3>
            <p>
              This is my digital journeyman’s piece of the neuefische bootcamp.
              It's a time management mobile app which helps you to work more
              focussed. It is build with the React framework.
            </p>
          </div>
        </ProjectCard>
      </a>
    </ProjectsStyled>
  )
}

const ProjectsStyled = styled.div`
  margin: 40px 15%;
  font-size: 18px;

  a {
    text-decoration: none;
    color: black;
  }
`

const ProjectCard = styled.div`
  border: 1px solid white;
  box-shadow: 1px 1px 5px lightgray;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 30% 70%;
  justify-items: center;
  align-items: center;
  padding: 15px 15px 15px 0;
  font-size: 16px;
  background: white;
  margin-top: 20px;
  transition: all 0.2s ease-in-out;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 100%;
    padding: 15px;
  }

  :hover {
    transform: scale(1.01);
  }

  img {
    width: 70px;
    background: #111;
    padding: 15px;
    border-radius: 25px;
  }

  div {
    justify-self: left;

    @media (max-width: 600px) {
      justify-self: center;
    }
  }
`
