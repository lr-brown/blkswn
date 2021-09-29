import React from "react"
import {
  SHello,
  SPicture,
  SHeader,
  SText,
  SBody,
  STitle,
  SContent,
} from "./style"
import Logan from "../../lib/images/logan.jpeg"
const IntroView = () => {
  return (
    <SBody
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SHello>
        Hi, my name is Logan!
        <br />I want to help you change the world with your ideas.
      </SHello>

      <STitle>Introduction</STitle>
      <SContent>
        <SPicture src={Logan} alt={"A photo of Logan"} />
        <SText>
          I am a Junior at Wesleyan University studying Computer Science and
          Integrated Design Engineering and Applied Science. My favorite color
          is green. I enjoy playing video games, integrating smart home devices
          and binge watching tv shows (I’m actually really good at it). I am a
          middle child which naturally means that I am the most independent,
          self-driven and forgotten. I have three dogs (Tucker, Diesel and
          Sadie) and two tortoises (Skyy and Max).
          <br />
          <br />
          When I’m coding, I enjoy listening to R&B, Rap and Jazz music. My
          favorite language to code in is Python. I really enjoy helping others
          enact their passions through code and I hope to work with you.
        </SText>
      </SContent>
    </SBody>
  )
}

export default IntroView
