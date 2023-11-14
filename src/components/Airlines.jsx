
const Airlines = ({ airlines, onAirlineSelected }) => {
  const onClick = (e) => {
    const iata = e.target.id
    onAirlineSelected(iata)
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
              onClick={onClick}>{airline.name}
            </li>
          )
        }
      </ul>

    </div>
  )
}

export default Airlines