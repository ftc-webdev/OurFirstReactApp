import { useState } from 'react'

const Airline = ({ airline, onChange }) => {
  
  const [ iata, setIata ] = useState(airline.iata)
  const [ name, setName ] = useState(airline.name)
  const [ countryCode, setCountryCode ] = useState(airline.countryCode)


  return (
    <form className="form">
      <div className="form-cntrol">
          <label>IATA :</label>
          <input 
            type="text"
            placeholder="IATA Code" 
            value={iata}
            onChange={(e) => {
                setIata(e.target.value)
                onChange(iata, name, countryCode)
              }
            }
          />
      </div>

      <div className="form-cntrol">
        <label>Name :</label>
        <input 
            type="text"
            placeholder="Airline Name" 
            value={name}
            onChange={(e) => {
                setName(e.target.value)
                onChange(iata, name, countryCode)
              }
            }
          />
      </div>

      <div className="form-cntrol">
        <label>Country Code :</label>
        <input 
            type="text"
            placeholder="Country Code" 
            value={countryCode}
            onChange={(e) => { 
                setCountryCode(e.target.value)
                onChange(iata, name, countryCode)
              }
            }
          />

      </div>
    </form>
  )
}

export default Airline