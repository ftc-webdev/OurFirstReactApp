import { useEffect, useState } from 'react'
import { Input, Select } from './Form'
import countries from '../countries'

console.log(countries)

const Airline = ({ airline, onChange, isNewAirline}) => {

  // const { iata, name, countryCode } = airline
  const [ iata, setIata ] = useState(airline.iata)
  const [ name, setName ] = useState(airline.name)
  const [ countryCode, setCountryCode ] = useState(airline.countryCode)
  
  useEffect( () => {
    setIata(airline.iata)
    setName(airline.name)
    setCountryCode(airline.countryCode)
  }, [ airline ])

  const onSubmit = (e) => {
    e.preventDefault()
    onChange({iata, name, countryCode})
    // clear the form
    setIata("")
    setName("")
    setCountryCode("")
  
  }
  
  return (
    <form className="form" onSubmit={onSubmit}>

      <Input
        value={iata} 
        label="IATA" 
        placeHolder= "IATA Code"
        onChange = {(e) => setIata(e.target.value)}
        disabled={!isNewAirline}
      />


      <Input
        value={name}
        label="Name"
        placeholder="Airline Name"
        onChange={(e) => setName(e.target.value)}  
      />
  
      <Select
        values={countries}
        label="Country Code"
        placeHolder="Country Code"
        onChange={(e) => setCountryCode(e.target.value)} 
      />


      <Input
        value="Save"
        type="submit"
        className="btn btn-block"
      />
    </form>
  )
}

Airline.defaultProps = {
  isAdd: false,
}

export default Airline