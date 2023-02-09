// Write your code here
import './index.css'

const EventItem = props => {
  const {eventItemDetails, setEventRegisteredId, isActive} = props
  const {id, imageUrl, location, name} = eventItemDetails

  const className = isActive ? 'event-image active' : 'event-image'

  const onClickButton = () => {
    setEventRegisteredId(id)
  }

  return (
    <li className="item-container">
      <button className="button" type="button" onClick={onClickButton}>
        <img src={imageUrl} alt="event" className={className} />
      </button>
      <p className="name-of-the-dance">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
