import Airline from './Airline'

const Airlines = ({ airlines }) => {
  return (
    <div className="container">
      <h3>Airlines</h3>
      <ul>
        {
          airlines.map(airline => <li>{airline.name}</li>)
          // airlines.map(airline => <Airline airline={airline} />)
        }
      </ul>



    </div>
  )
}

export default Airlines