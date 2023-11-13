import { useEffect, useState } from 'react'

const Airline = ({ airline, onChange, isAdd}) => {
    
  const [ iata, setIata ] = useState(airline.iata)
  const [ name, setName ] = useState(airline.name)
  const [ countryCode, setCountryCode ] = useState(airline.countryCode)
  useEffect(() => {
    setIata(airline.iata)
    setName(airline.name)
    setCountryCode(airline.countryCode)

  }, [airline])

  const onSubmit = (e) => {
    e.preventDefault()
    onChange(iata, name, countryCode)
    // clear the form
    setIata("")
    setName("")
    setCountryCode("")
  
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-control">
          <label>IATA :</label>
          <input 
            type="text"
            placeholder="IATA Code" 
            value={iata}
            onChange={(e) => {
                setIata(e.target.value)
                // onChange(iata, name, countryCode)
              }
            }
            disabled={!isAdd}
          />
      </div>

      <div className="form-control">
        <label>Name :</label>
        <input 
            type="text"
            placeholder="Airline Name" 
            value={name}
            onChange={(e) => {
                setName(e.target.value)
                // onChange(iata, name, countryCode)
              }
            }
          />
      </div>

      <div className="form-control">
        <label>Country Code :</label>
        <input 
            type="text"
            placeholder="Country Code" 
            value={countryCode}
            onChange={(e) => { 
                setCountryCode(e.target.value)
                // onChange(iata, name, countryCode)
              }
            }
          />
      </div>
      <div className="form-control">
        <input type="submit" value="Save" className="btn btn-block" />
      </div>
    </form>
  )
}

Airline.defaultProps = {
  isAdd: false,
}

export default Airline