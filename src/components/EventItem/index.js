// Write your code here
import './index.css'

const EventItem = props => {
  const {eachEvent, onClickEvent} = props
  const {imageUrl, name, location, registrationStatus} = eachEvent

  const onClickingList = () => {
    onClickEvent(registrationStatus)
  }

  return (
    <li className="event-item-list">
      <button type="button" className="event-item-btn" onClick={onClickingList}>
        <img src={imageUrl} alt="event" className="event-item-image" />
      </button>

      <p className="event-item-name">{name}</p>
      <p className="event-item-location">{location}</p>
    </li>
  )
}

export default EventItem
