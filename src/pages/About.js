import React from 'react'
import styled from 'styled-components/macro'

export default function About() {
  return (
    <AboutStyled>
      <h2>About</h2>
      <p>
        My name is Timo, 28 years old and I just finished the coding bootcamp
        neuefische. My digital journeyman’s piece is a time management mobile
        app which helps you to work more focussed. It is build with the React
        framework.{' '}
        <a href="https://pomodoro-23add.firebaseapp.com/todo">Here</a> you can
        see it live.
      </p>
      <p>
        During the <a href="https://www.neuefische.de/">neuefische</a> bootcamp
        I learned a lot about the following technologies and tools:
      </p>
      <p>
        JavaScript ES2020, React latest, HTML5, CSS3, Bootstrap, Storybook,
        Cypress, Node.js, Express, MongoDB, mongoose, Postman, Shell, npm, Git
        Workflow, Sketch
      </p>
      <p>
        I am currently looking for new opportunities in the tech environment. If
        you want to learn more about me I would be happy if we get in touch.
      </p>
    </AboutStyled>
  )
}

const AboutStyled = styled.div`
  margin: 40px 15%;
  font-size: 18px;
`
