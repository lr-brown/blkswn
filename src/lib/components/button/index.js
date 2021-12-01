import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const Button = ({ color, handleClick, text, margin }) => {
  const SButton = styled(motion.button)`
    border: solid 4px;
    border-color: ${color};
    padding: 8px;
    font-size: var(--secondaryBody);
    color: white;
    margin: ${margin};
  `
  return (
    <SButton
      whileHover={{
        scale: 1.1,
        backgroundColor: color,
      }}
      onClick={handleClick}
    >
      {text}
    </SButton>
  )
}

export default Button
