import React from "react"
import "./style.css"

type ButtonProps = {
  color: string
  handleClick: () => void
  text: string
  margin?: string
}

const Button = ({ color, handleClick, text, margin }: ButtonProps) => {
  return (
    <button
      type="button"
      className="button"
      style={
        {
          "--button-color": color,
          borderColor: color,
          margin,
        } as React.CSSProperties
      }
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default Button
