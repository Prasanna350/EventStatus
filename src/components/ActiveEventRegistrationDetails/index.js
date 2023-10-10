// Write your code here
import {Component} from 'react'
import './index.css'

const activeStatusObject = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  renderInitialState = () => (
    <div className="initial-status-card">
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  renderAlreadyRegistered = () => (
    <div className="registration-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1 className="registered-text">
        You have already registered for the event
      </h1>
    </div>
  )

  renderRegistrationClosed = () => (
    <div className="registration-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-head">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-para">
        Stay tuned. We will reopen the
        <br /> registrations soon!
      </p>
    </div>
  )

  renderRegistrationOpen = () => (
    <div className="registration-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="registrations-closed-image"
      />
      <p className="registrations-closed-para">
        A live performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in love with this beautiful
        art form.
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </div>
  )

  render() {
    const {activeEventStatus} = this.props
    switch (activeEventStatus) {
      case activeStatusObject.initial:
        return this.renderInitialState()
      case activeStatusObject.registered:
        return this.renderAlreadyRegistered()
      case activeStatusObject.registrationsClosed:
        return this.renderRegistrationClosed()
      case activeStatusObject.yetToRegister:
        return this.renderRegistrationOpen()
      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails
