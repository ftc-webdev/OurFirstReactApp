
import { FaTimes } from "react-icons/fa"

const Airlines = ({ airlines, onAirlineSelected,    onAirlineDelete }) => {

  const onAirlineSelectClick = (e) => {
    const iata = e.target.parentNode.id
    console.log("airline select ", e.target.parentNode, iata)
    onAirlineSelected(iata)
  }

  const onAirlineDeleteClick = (e) => {
    const iata = e.target.parentNode.parentNode.id
    console.log("airline delete ", 
    e.target.parentNode.parentNode, iata)
    onAirlineDelete(iata)
  }

  const Airline = ({text, key, id}) => {
    return (
      <div className="airline clickable"
        onClick={onAirlineSelectClick}
        id={id}
        key={key}
      >
        <h3>
          {text}

          <FaTimes 
                className="delete-icon"
                onClick={onAirlineDeleteClick}
              />

        </h3>
      
      </div>
    )
  }

  return (
    <div className="airlines">
      <h3>Airlines</h3>
      
        {
          airlines.map(airline => <Airline 
              key={airline.iata} 
              id={airline.iata} 
              text={airline.name}
            />
          )
        }

    </div>
  )
}

export default Airlines