import React, { useState } from "react"
import {
  SPicture,
  SText,
  SBody,
  STitle,
  SContent,
  SAboutMe,
  SOther,
  SAlbum,
  SMusic,
  SMedia,
  SMediaControls,
  SMuscicSection,
  SPraise,
} from "./style"
import { motion, AnimatePresence } from "framer-motion"
import * as Icons from "../../lib/icons/icons"
import * as Assets from "../../lib/assets.json"
const IntroView = () => {
  const [index, setIndex] = useState(0)

  return (
    <SBody id="home">
      <SContent>
        <SAboutMe>
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
          <br />
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
          <br />
          {/* <SText>
            In most of my projects I work in the front end. When I’m coding, I
            enjoy listening to R&B, Rap, and Jazz music. Some notable artists
            include: Smino, Ari Lennox, and Jhené Aiko. I hope you take the time
            to explore all of my projects, reflections and experience. I love
            helping others enact their passions through code and I look forward
            to working with you!
          </SText> */}
          <SOther>
            <SMuscicSection>
              <h1>Some music I like</h1>
              <SMusic>
                <SMedia />
                <AnimatePresence initial={false}>
                  <SAlbum
                    href={Assets.albums[index].link}
                    key={Assets["albums"][index].cover}
                    target="_blank"
                    cover={Assets["albums"][index].cover}
                    whileHover={{ scale: 1.1, borderRadius: "8px" }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    initial={{ x: "-100%", opacity: 0 }}
                  />
                </AnimatePresence>
                <SMediaControls>
                  <motion.button
                    whileHover={{ x: -5, scale: 1.1 }}
                    onClick={() => {
                      setIndex(index > 0 ? index - 1 : Assets.albums.length - 1)
                    }}
                  >
                    <Icons.Previous size={"32px"} />
                  </motion.button>

                  <motion.button
                    whileHover={{ x: 5, scale: 1.1 }}
                    onClick={() => {
                      setIndex((index + 1) % Assets.albums.length)
                    }}
                  >
                    <Icons.Next size={"32px"} />
                  </motion.button>
                </SMediaControls>
              </SMusic>
            </SMuscicSection>
            <SPraise
              whileHover={{ scale: 1.05 }}
              href={"recs.pdf"}
              target="_blank"
            >
              <h1> Nice things my bosses have said about me</h1>
              <Icons.MegaPhone size="52px" />
            </SPraise>
          </SOther>
        </SAboutMe>
        <SPicture src={"/images/logan.jpeg"} alt={"A photo of Logan"} />
      </SContent>
    </SBody>
  )
}

export default IntroView
