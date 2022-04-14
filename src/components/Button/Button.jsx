import React from 'react'

import './Button.css'

const STYLES = [
  "btn",
  "btn--primary--solid",
  "btn--primary--explore",
  "btn--primary--outline"
]


function Button({children, buttonStyle, onClick}) {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  return (
    <button onClick={onClick} className={`btn ${checkButtonStyle}`}>{children}</button>
  )
}

export default Button