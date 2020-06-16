import React from 'react'
import styled from 'styled-components/macro'
import profilePicture from '../images/timo.png'
import Github from '../images/github.png'
import Linkedin from '../images/linkedin.png'
import Xing from '../images/xing.svg'
import Mail from '../images/mail.png'

export default function Home() {
  return (
    <StyledHome>
      <Profile>
        <img src={profilePicture} alt="timo dilg" />
        <h1>Timo Dilg</h1>
        <p>Frontend Developer</p>
        <div>
          <a href="https://github.com/timodilg">
            <img src={Github} alt="github logo" />
          </a>
          <a href="https://www.linkedin.com/in/timo-dilg/">
            <img src={Linkedin} alt="linkedin logo" />
          </a>
          <a href="https://www.xing.com/profile/Timo_Dilg/cv">
            <img src={Xing} alt="xing logo" />
          </a>
          <a href="mailto:timo_dilg@yahoo.de">
            <img src={Mail} alt="mail logo" />
          </a>
        </div>
      </Profile>

      <WelcomeHeadline>
        Hi, my name is Timo.
        <br />I am a Frontend Developer living in Hamburg, Germany.
      </WelcomeHeadline>
    </StyledHome>
  )
}

const StyledHome = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  height: 80vh;
  align-items: center;
  justify-items: center;
`

const Profile = styled.div`
  display: grid;
  justify-items: center;
  padding: 40px;

  @media (min-width: 600px) {
    padding-bottom: 120px;
  }

  img {
    height: 150px;
  }

  h1 {
    margin: 20px 0 5px 0;
  }

  p {
    font-size: 26px;
    margin: 2px;
  }

  div {
    margin-top: 10px;

    img {
      height: 24px;
      padding-right: 10px;
    }
  }
`
const WelcomeHeadline = styled.p`
  font-size: 40px;
  padding: 40px;
  margin: 0;

  @media (min-width: 600px) {
    padding-bottom: 120px;
    margin-right: 50px;
  }
`
