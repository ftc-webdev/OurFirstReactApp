
const Header = ({ className, text }) => {
  const style = {
    color:"blue",
    backgroundColor: "black"
  }
  className = "test2"
  return (
    <header>
      <h1 className={className}>{text}</h1>
      <h2 style={style}>This is a lower header</h2>
    </header>
  )
}
Header.defaultProps = {
  className: "test2",
  text: "My first react app"
}

export default Header

