// import Airline from './Airline'

const Airlines = ({ airlines, onClick }) => {
  return (
    <div className="airlines">
      <h3>Airlines</h3>
      <ul>
        {
          airlines.map(airline => <li id={airline.iata} className="clickable" key={airline.iata} onClick={onClick}>{airline.name}</li>)
          // airlines.map(airline => <Airline airline={airline} />)
        }
      </ul>



    </div>
  )
}

export default Airlines