import React from "react"
import {Button} from "react-bootstrap"

import "./rcb-button.scss"

const RcbButton = ({ to, type, disabled, onClick, children }) => {
  type = type || "button"
  return (
      <Button href={to} onClick={onClick} type={type}>
        {children}
      </Button>
  )
}

export default RcbButton
