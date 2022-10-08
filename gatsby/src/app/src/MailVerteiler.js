import React, {useState} from "react"
import { Alert, Container, Row, Col } from "react-bootstrap"
import SocialButton from "./SocialButton"

import VerteilerlisteFormular from "./VerteilerlisteFormular"

import "./MailVerteiler.scss"


const MailVerteiler = () => {

  const [loginState, setLoginState] = useState({
    logged: false,
      user: {},
      currentProvider: ''
  })

  const [message, setMessage] = useState(null)

  const handleOnLoginSuccess = (user) => {
    setLoginState({
      logged: true,
      currentProvider: user._provider,
      user
    })
  };

  const handleOnLoginFailure = (err) => {
    setLoginState({
      logged: false,
      currentProvider: '',
      user: {}
    })
  };

  const handleOnLogoutSuccess = (user) => {
    setLoginState({
      logged: false,
      currentProvider: '',
      user: {}
    })
  };

  const handleOnLogoutFailure = (err) => {
    console.error(err);
  };

  const setFacebookInstance = (obj) => {
//    console.log(obj)
  }

  const sendMailHandler = ({from, replyTo, subject, body}) => {
    setMessage({
      variant: 'success',
      heading: 'Die Mails wurden versendet.',
      text: `von=${from}, antwortAn=${replyTo}, betreff=${subject}, nachricht=${body}`
    })
  }

  const {logged, user} = loginState
  const {_profile} = user

  return (
    <section id="mailverteiler-section" className="section-b">
      <Container>
        <Row>
          <Col md={12}>
            <h1>
            {logged && <img className="profilbild" src={_profile.profilePicURL} alt="Profilbild"/>}
              Mailverteilerliste verwalten
            </h1>
          </Col>
        </Row>
        {message && <Row>
          <Col md={12}>
            <Alert variant={message.variant||'info'} dismissible onClose={() => setMessage(null)}>
              {message.heading || <><Alert.Heading>{message.heading}</Alert.Heading><br/></>}
              <p>{message.text}</p>
            </Alert>
          </Col>
        </Row>}
        {logged
        ? <VerteilerlisteFormular/>
        : <Row>
            <Col md={12}>
              <SocialButton
                provider="facebook"
                key='facebook'
                appId={process.env.GATSBY_FB_APPID}
                onLoginSuccess={handleOnLoginSuccess}
                onLoginFailure={handleOnLoginFailure}
                onLogoutSuccess={handleOnLogoutSuccess}
                onLogoutFailure={handleOnLogoutFailure}
                onInternetFailure = {()=>{return true}}
                getInstance={setFacebookInstance}
              >
                Über Facebook anmelden
              </SocialButton>
            </Col>
          </Row>
          }
      </Container>
    </section>
  )
}

export default MailVerteiler
