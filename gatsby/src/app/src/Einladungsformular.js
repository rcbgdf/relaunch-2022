import React, {useState, useRef} from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import RcbButton from '../../components/button/rcb-button'

import "./Einladungsformular.scss"

export default function Einladungsformular({name, email, sendMailHandler}) {
    const [bestaetigt, setBestaetigt] = useState(false)
    const fromRef = useRef()
    const replyToRef = useRef()
    const subjectRef = useRef()
    const textRef = useRef()
    const bestaetigtRef = useRef()

    const handleSubmit = () => {
        const mail = {
            from: fromRef.current.value,
            replyTo: replyToRef.current.value,
            subject: subjectRef.current.value,
            body: textRef.current.value
        }
        bestaetigtRef.current.checked = false
        setBestaetigt(false)
        sendMailHandler(mail)
    }
    const onCheckboxChanged = (e) => {
        setBestaetigt(e.target.checked)
    }
    const subject = "Einladung zum nächsten RCB-Clubabend"
    const from="toastmaster@rc-bgdf.de"
    const replyTo = email
    const text =
`Liebes Clubmitglied,

ich lade dich herzlich zum nächsten RCB-Clubabend ein.
Er findet statt am... in...

<trage hier bitte deinen eigenen kreativen Text ein, mit dem du die Clubmitglieder für 'deinen' Abend motivierst.>

Weitere Infos findest du unter https://rc-bgdf.de/naechster-termin

Herzliche Grüße,
${name}`
    return (
        <>
        <Row>
            <Col md={12}>
                Versende eine Einladungsmail an die Mitglieder und Gäste des RCB laut aktueller Liste:
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <Form.Group className="mb-3" controlId="emailFrom">
                    <Form.Control type="email" placeholder="Absendeadresse" value={from} ref={fromRef}/>
                    <Form.Text className="text-muted">
                    Sagt dem Empfänger, von wem die EMail kommt.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="replyTo">
                    <Form.Control type="email" placeholder="Antwortadresse" value={replyTo} ref={replyToRef}/>
                    <Form.Text className="text-muted">
                    Trage hier deine eigene Mailadresse ein. Falls der Empfänger auf die EMail antwortet, geht seine Mail an diese Adresse.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="replyTo">
                    <Form.Control type="text" placeholder="Betreff" value={subject}  ref={subjectRef}/>
                    <Form.Text className="text-muted">
                    Betreff
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="replyTo">
                    <Form.Control as="textarea" rows={15} value={text} ref={textRef}/>
                </Form.Group>

                <Form.Check type="checkbox" id="bestaetigt" ref={bestaetigtRef} onChange={onCheckboxChanged} label="Ich habe meinen Text und die übrigen Angaben geprüft und möchte die Mail an alle Empfänger versenden. Das kann dann nicht mehr rückgangig gemacht werden."/>
                {bestaetigt && <RcbButton onClick={handleSubmit}>Absenden</RcbButton>}
            </Col>
        </Row>
        </>
    )
}
