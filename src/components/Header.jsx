import { useState, useEffect } from 'react'

const Header = ({ className, text , addButtonClicked, isNewAirline}) => {
  
  const [isItANewAirline, setIsItANewAirline] = useState( isNewAirline )
  
  // console.log("header code", { className, text , addButtonClicked, isNewAirline})
  
  useEffect(() => {
    
    // console.log("header useEffect: button Is it a new airline", isItANewAirline, isNewAirline)
    setIsItANewAirline(isNewAirline)

  }, [ isItANewAirline, isNewAirline ])

  const _addButtonClicked = () => {
    // console.log("header button clicked => is new airline", isItANewAirline, isNewAirline)
    addButtonClicked()
  }

  return (
    <header className="header">
      <h1 className={className}>{text}</h1>
      <button 
        className="add-button btn"
        onClick={_addButtonClicked}
        disabled={isItANewAirline}  
      >Add</button>
        
    </header>
  )
}
Header.defaultProps = {
  className: "test2",
  text: "My first react app"
}

export default Header

