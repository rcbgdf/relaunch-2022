import React, { useState } from "react"

import RcbButton from "../button/rcb-button"

import "./contact-form.scss"

import axios from "axios"
const ContactForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/f9b4eae1-63ac-48a1-b516-adc576d7b946",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(
          true,
          "Vielen Dank! Wir werden uns spätestens in 1-2 Tagen zurückmelen.",
          form
        )
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <div className="form-group">
        <p>Hast du eine Frage? Schick' uns eine Nachricht:</p>
        <label for="exampleInputEmail1" required="required">
          Deine Email-Adresse
        <input
          type="email"
          name="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Gib deine Email-Adresse ein"
        />
        </label>
      </div>
      <div className="form-group">
        <label for="exampleInputName">Name
        <input
          type="text"
          name="name"
          className="form-control"
          id="exampleInputName"
          placeholder="Gib deinen Namen ein"
          required="required"
        />
        </label>
      </div>
      <div className="form-group">
        <label for="exampleFormControlSelect1">Deine Nachricht
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          name="nachricht"
          required="required"
        ></textarea>
        </label>
      </div>
      <RcbButton type="submit" disabled={serverState.submitting}>
        Abschicken
      </RcbButton>
      {serverState.status && (
        <p
          className={
            !serverState.status.ok
              ? "errorMsg contact-form-msg"
              : "contact-form-msg"
          }
        >
          {serverState.status.msg}
        </p>
      )}
    </form>
  )
}

export default ContactForm
