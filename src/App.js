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

const aerLingus = {
  iata: "EI",
  name: "Aer Lingus",
  countryCode: "IE",
}

const airlineData = [
  aerLingus,
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


const App = () => {

  const [ airlines, setAirlines ] = useState(airlineData)
  const [ airline, setAirline ] = useState(aerLingus)
  
  const onAirlineChange = (iata, name, countryCode) => {

    setAirlines(airlines.map(airline => airline.iata === iata ?
      {...airline, name: name, countryCode: countryCode } :
      airline
    )) 

  }
  const onAirlineClick = (e) => {
    const selected = airlines.find(airline => airline.iata === e.target.id)
    console.log(selected)
    setAirline(selected)
  }


  return (
    // react fragment - will not generate a HTML node
    <div className="container">  
      <Header className="test" />
   
      <Airlines airlines={airlines} onClick={onAirlineClick} />
      { airline ? 
        <Airline airline={airline} onChange={onAirlineChange} isAdd={false}/> : 
        <p>No Airline Selected!</p> 
      }
      <Body />

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
