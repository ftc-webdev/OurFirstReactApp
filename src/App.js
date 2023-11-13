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

const airline = {
  iata: "EI",
  name: "Aer Lingus",
  countryCode: "IE",
}

const airlines = [
  airline,
  {
    iata: "BA",
    name: "British Airways",
    countryCode: "GB",
  },
  {
    iata: "QF",
    name: "Quantas",
    countryCode: "AU",
  },
  {
    iata: "UA",
    name: "United Airlines",
    countryCode: "US",
  },

]


const App = () => {

  const [ iata, setIata ] = useState(airline.iata)
  const [ name, setName ] = useState(airline.name)
  const [ countryCode, setCountryCode ] = useState(airline.countryCode)
  
  
  const onAirlineChange = (iata, name, countryCode) => {
    setIata(iata)
    setName(name)
    setCountryCode(countryCode)
  }
  


  return (
    // react fragment - will not generate a HTML node
    <>  
      <Header className="test" />
   
      <Airlines airlines={airlines} />
      <Airline airline={airline} onChange={onAirlineChange}/>
      <Body />

      <Footer />
      
    </>

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
