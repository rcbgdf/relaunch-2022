import React from "react"

import "./iconed-item-list.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function IconedItemList({ itemList }) {
  return (
    <div>
      <ul className="fa-ul">
        {itemList.items.map(item => (
          <li>
            <FontAwesomeIcon icon={item.icon} listItem />
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
