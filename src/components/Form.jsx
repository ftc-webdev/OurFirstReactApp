
const Form = () => {
  return (
    <div>Form</div>
  )
}

const Select = ({value, values, label, code = "code", name = "name"}) => {

  return (
    <div className="form-control">
        { label && <label>{label}</label> }
        <select>
        {
          values.map((element) => (
            <option value={ element[code] } selected={element[code] === value}>
            { element[name] }  
            </option>
          ))
        }
        </select>
    </div>
  )

}

const Input = ({value, label, ...options}) => {

  if(!options) options = {}

  const onKeyDown = (e) => {
    if(e.keyCode === 13 && options.onEnter ) options.onEnter(e)
  }
  
  return (
    <div className="form-control">
        { label && <label>{label}</label> }
        <input 
          type="text" 
          value={value}
          onChange={(e) => options.onChange && options.onChange(e)}
          onKeyDown={(e) => onKeyDown(e)}
          disabled={options.disabled}
          {...options}
        />
      </div>
  )
}

Input.defaultOptions = {
  options: {}
}

export {
  Input,
  Select
}

export default Form