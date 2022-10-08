import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./info-box.scss"

export default function InfoBox({ title, text, icon }) {
  return (
    <div className="info-box-wrapper">
      <div>
        <FontAwesomeIcon icon={icon} className="fa-3x" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}
