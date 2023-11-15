
import { FaTimes } from "react-icons/fa"

const Airlines = ({ airlines, onAirlineSelected,    onAirlineDelete }) => {

  const onAirlineSelectClick = (e) => {
    const iata = e.target.id
    onAirlineSelected(iata)
  }

  const onAirlineDeleteClick = (e) => {
    const iata = e.target.parentNode.id
    onAirlineDelete(iata)
  }

  return (
    <div className="airlines">
      <h3>Airlines</h3>
      <ul>
        {
          airlines.map(airline => <li 
              key={airline.iata} 
              id={airline.iata} 
              className="clickable" 
              onClick={onAirlineSelectClick}>{airline.name}
              <FaTimes 
                className="delete-icon"
                onClick={onAirlineDeleteClick}
              />
            </li>
          )
        }
      </ul>

    </div>
  )
}

export default Airlines