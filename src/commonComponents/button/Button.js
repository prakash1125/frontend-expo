import React from 'react'
import "./Button.css"

const Button = ({name, className, icon}) => {
  return (
    <div icons={icon} className={className}>{[icon, name]}</div>
  )
}

export default Button