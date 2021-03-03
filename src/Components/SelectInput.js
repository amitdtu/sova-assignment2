import React, {useState} from 'react'

const SelectInput = ({data, ...props}) => {
    const [value, setValue] = useState('')
    const [isValid, setIsValid] = useState(true)
  
    const onChangeHandler = (val) => {
      // debugger
      if(val){
        setIsValid(true)
      } else {
        setIsValid(false)
      }
      setValue(val)
      const fullObj = {value: val, isValid: val !== ''}
      props.onChange(fullObj)
    }
  
    return(
      <div className="form-group">
        <label>{data.label}</label>
        <select onChange={(e) => onChangeHandler(e.target.value)} value={value} className="form-control" >
          <option value=''>choose</option>
          {data.options.map((option, idx) => 
            <option key={idx} value={option}>{option}</option>
          )}
        </select>
      </div>
    )
  }
  
  export default SelectInput
