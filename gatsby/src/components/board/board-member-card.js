import React from "react"

import "./board-member-card.scss"

const BoardMemberCard = ({ rolle, avatar, name }) => {
  return (
    <div className="board-member-card">
      <div
        className="avatar"
        style={{ backgroundImage: "url(" + avatar.url + ")" }}
      />
      <div className="board-member-card-container">
        <h4>{name}</h4>
        <h6>{rolle}</h6>
      </div>
    </div>
  )
}

export default BoardMemberCard
