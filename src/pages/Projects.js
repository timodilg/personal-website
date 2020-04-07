import React from 'react'
import styled from 'styled-components/macro'
import timer from '../images/timer.svg'

export default function Projects() {
  return (
    <ProjectsStyled>
      <h2>Projects</h2>

      <a href="https://pomodoro-23add.firebaseapp.com/todo">
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

      <ProjectCard>
        <img src={timer} alt="ich" />
        <div>
          <h3>Pomodoro - Time Management Mobile App</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos consequatur minima, veritatis odit blanditiis nemo
            temporibus perferendis, quibusdam eaque tempora ad tenetur dolor
            nisi dolorum amet quasi? Rerum, assumenda. Deleniti!
          </p>
        </div>
      </ProjectCard>
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
  min-width: 200px;
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
`
