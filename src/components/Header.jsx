
const Header = ({ className, text }) => {
  // const style = {
  //   color:"blue",
  //   backgroundColor: "black"
  // }
  return (
    <header className="header">
      <h1 className={className}>{text}</h1>
    </header>
  )
}
Header.defaultProps = {
  className: "test2",
  text: "My first react app"
}

export default Header

