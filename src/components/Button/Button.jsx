import React from 'react'

import './Button.css'

const STYLES = [
  "btn--primary--solid",
  "btn--primary--explore",
  "btn--primary--outline"
]


function Button({children, buttonStyle}) {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  return (
    <button className={`btn ${checkButtonStyle}`}>{children}</button>
  )
}

export default Button