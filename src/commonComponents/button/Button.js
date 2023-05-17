import React from 'react'
import "../../assets/scss/commonComponent/Button.scss"

const Button = ({name, className, icon, onClick}) => {
  return (
    <div onClick={onClick}  icons={icon} className={className}>{[icon, name]}</div>
  )
}

export default Button