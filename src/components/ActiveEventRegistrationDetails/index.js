// Write your code here
import './index.css'

const eventRegistered = {
  registered: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {getEventAndRegistered} = props

  const RegistrationView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="registration-image"
      />
      <p className="description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="registration-button" type="button">
        Register Here
      </button>
    </>
  )

  const RegistrationCloseView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registration-close-image"
      />
      <h1 className="registration-close-title">
        Registrations Are Closed Now!
      </h1>
      <p className="registration-close-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </>
  )

  const RegistrationSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered"
      />
      <h1 className="registered-title">
        You have already registered for the event
      </h1>
    </>
  )

  const renderNoResult = () => (
    <p className="no-result">
      Click on an event, to view its registration details
    </p>
  )

  const renderViewEvent = () => {
    switch (getEventAndRegistered) {
      case eventRegistered.registered:
        return RegistrationSuccessView()
      case eventRegistered.yetToRegister:
        return RegistrationView()
      case eventRegistered.registrationsClosed:
        return RegistrationCloseView()
      default:
        return renderNoResult()
    }
  }

  return <div className="registration-container">{renderViewEvent()}</div>
}

export default ActiveEventRegistrationDetails
