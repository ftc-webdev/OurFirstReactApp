import React, { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import Airline from './components/Airline'
import Airlines from './components/Airlines'

// class App extends React.Component {
//   render () {
//     const style="test"
//     return <h1 className={style}>This is my first react app</h1>
//   }
// }


const airlineData = [
  {
    iata: "EI",
    name: "Aer Lingus",
    countryCode: "IE",
  },
  {
    iata: "BA",
    name: "British Airways",
    countryCode: "GB",
  },
  {
    iata: "QF",
    name: "Qantas",
    countryCode: "AU",
  },
  {
    iata: "UA",
    name: "United Airlines",
    countryCode: "US",
  },

]
const aerLingus = airlineData[0]


const App = () => {
  console.group("App.js")
  const [ airlines, setAirlines ] = useState(airlineData)
  const [ airline, setAirline ] = useState()
  const [ isNewAirline, setIsNewAirline ] = useState(false)

  const error = (msg) => console.error(msg)
  
  const onAirlineChange = (newAirline) => {
    console.log("is new airline?", isNewAirline)
    // {...airline, name: name, countryCode: countryCode } :
    if(isNewAirline) {
      const found = airlines.find((airline) => airline.iata === newAirline.iata)
      if(found) {
        error(`IATA code ${newAirline.iata} already exists!`)
        return
      }

      console.log("Is New Airline", newAirline)
      setAirlines([...airlines, newAirline])
    } else {
      setAirlines(
        airlines.map(airline => airline.iata === newAirline.iata ?
        newAirline :
        airline )
      )
  
    }

    setAirline()  // this closes the form
    setIsNewAirline(false)

  }
  const airlineSelected= (iata) => {
    const selected = airlines.find(airline => airline.iata === iata)
    console.log("onSelect", selected)
    setAirline(selected)
  }

  const addAirline = () => {
    setIsNewAirline(true)
    setAirline({iata:"", name: "", countryCode:"" })
  }

  const airlineDelete = (iata) => {
    console.log("onDelete", iata)
    setAirlines(airlines.filter((airline) => airline.iata !== iata ))
  }

  return (
    <div className="container">  
      <Header className="test" addButtonClicked={addAirline} isNewAirline={isNewAirline}/>
      
      <Airlines 
        airlines={airlines} 
        onAirlineSelected={airlineSelected}
        onAirlineDelete={airlineDelete}
      />
      
      { airline ? <Airline 
        airline={airline} 
        onChange={onAirlineChange} 
        isNewAirline={isNewAirline}
      /> 
        : <p>No airline selected</p> 
      }
      
      {/* <Body /> */}

      <Footer />

    </div>

  )
}

/*
(
    // this is JSX - Javascript Syntax eXtensions, or JavaScript & XML
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
*/
export default App;
