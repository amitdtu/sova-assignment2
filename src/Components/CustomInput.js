import React, { useState} from 'react'
import {validateEmail} from '../utils'
const CustomInput = ({data, ...props}) => {
    const [value, setValue] = useState('')
    const [isValid, setIsValid] = useState(true)
  
    const onTextChangeHandler = (value) => {
      let isValid = true
      if(data.validation.minLength && value.length < data.validation.minLength){
        isValid = false
      }
  
      if(data.validation.maxLength && value.length > data.validation.maxLength){
        isValid = false
      }
      setIsValid(isValid)
      setValue(value)
      const fullObj = {value: value, isValid: isValid}
      props.onChange(fullObj)
    }
  
    const onNumberChangeHandler = (value) => {
      let isValid = true
      if(data.validation.min && parseInt(value) < data.validation.min){
        isValid = false
      }
  
      if(data.validation.max && parseInt(value) > data.validation.max){
        isValid = false
      }
      setIsValid(isValid)
      setValue(value)
      const fullObj = {value: value, isValid: isValid}
      props.onChange(fullObj)
    }
  
    const onEmailChangeHandler = (value) => {
      let isValid = true
      if(!validateEmail(value)){
        isValid = false
      }
      setIsValid(isValid)
      setValue(value)
      const fullObj = {value: value, isValid: isValid}
      props.onChange(fullObj)
    }
  
    const onChangeHandlersObj = {
      'number' : onNumberChangeHandler,
      'text' : onTextChangeHandler,
      'email': onEmailChangeHandler,
    } 
  
    const onChangeHandler = (val) => {
  
      onChangeHandlersObj[data.type](val)
  
      // if(data.type === 'number'){
      //   onNumberChangeHandler(val)
      // } else if (data.type === 'text') {
      //   onTextChangeHandler(val)
      // }
    }
  
    return (
      <div className="form-group">
          <label >{data.label}</label>
          <input value={value} onChange={(e) => onChangeHandler(e.target.value)} type={data.type} className={`form-control ${!isValid ? 'border-danger' : '' }`} placeholder={data.placeholder} />
        </div>
    )
  }

  export default CustomInput