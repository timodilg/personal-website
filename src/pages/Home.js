import React from 'react'
import './Home.css'
import profilePicture from '../images/timo-profile-700px.png'
import Github from '../images/github.png'
import Linkedin from '../images/linkedin.png'
import Xing from '../images/xing.svg'
import Mail from '../images/mail.png'

export default function Home() {
  return (
    <main>
      <div className="Profile">
        <img src={profilePicture} alt="timo dilg" className="ProfilePicture" />
        <h1 className="Name">Timo Dilg</h1>
        <p className="WorkTitle">Frontend Developer</p>
        <div className="IconContainer">
          <a href="https://github.com/timodilg">
            <img src={Github} alt="github logo" className="Icon" />
          </a>
          <a href="https://www.linkedin.com/in/timo-dilg/">
            <img src={Linkedin} alt="linkedin logo" className="Icon" />
          </a>
          <a href="https://www.xing.com/profile/Timo_Dilg/cv">
            <img src={Xing} alt="xing logo" className="Icon" />
          </a>
          <a href="mailto:timo_dilg@yahoo.de">
            <img src={Mail} alt="mail logo" className="Icon" />
          </a>
        </div>
      </div>

      <p className="WelcomeHeadline">
        Hi, my name is Timo.
        <br />I am a Frontend Developer living in Hamburg, Germany.
      </p>
    </main>
  )
}
