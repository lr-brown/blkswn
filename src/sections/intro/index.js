import React from "react"
import {
  SHello,
  SPicture,
  SText,
  SBody,
  STitle,
  SContent,
  SAboutMe,
} from "./style"
import Logan from "../../lib/images/logan.jpeg"
import { deviceType } from "react-device-detect"
const IntroView = () => {
  console.log(deviceType)
  return (
    <SBody
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SContent>
        <SAboutMe>
          <SHello>
            Hi, my name is Logan!
            <br />I want to help you change the world with your ideas.
          </SHello>
          <STitle>Introduction</STitle>
          <SText>
            I am a Junior at Wesleyan University studying Computer Science and
            Integrated Design Engineering and Applied Science. I attended
            boarding school for high school so I consider myself a very
            independent person. My favorite color is green but I also really
            enjoy looking at the colors I’ve decorated this website in. Some of
            my hobbies include playing video games, integrating smart home
            devices, and binge-watching tv shows (I’m embarrassingly really good
            at it). I am a middle child which naturally means that I am the most
            responsible, self-driven and forgotten. I have three dogs (Tucker,
            Diesel, and Sadie) and two tortoises (Skyy and Max).
          </SText>
          <SText>
            I’ve always known that I wanted to do something relating to creating
            and developing. In my early adolescence, I had set my sights on
            wanting to be an Inventor. Once I developed the vocabulary to better
            describe what I wanted to do, I landed on wanting to become a
            Mechanical Engineer. During my first semester of college, I took
            both a programming course and an introductory physics class. After
            completing these courses I realized how much I hated physics, but
            loved programming. Soon, my aspirations quickly shifted and my
            passion evolved into wanting to become a Software Engineer.
          </SText>
          <SText>
            In most of my projects I work in the front end. When I’m coding, I
            enjoy listening to R&B, Rap, and Jazz music. Some notable artists
            include: Smino, Ari Lennox, and Jhené Aiko. I hope you take the time
            to explore all of my projects, reflections and experience. I love
            helping others enact their passions through code and I look forward
            to working with you!
          </SText>
        </SAboutMe>
        <SPicture src={Logan} alt={"A photo of Logan"} />
      </SContent>
    </SBody>
  )
}

export default IntroView
