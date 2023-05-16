import React from 'react'
import "../../assets/scss/commonComponent/Button.scss"

const Button = ({name, className, icon}) => {
  return (
    <div icons={icon} className={className}>{[icon, name]}</div>
  )
}

export default Button