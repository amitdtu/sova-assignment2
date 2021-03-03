import React, {useState} from 'react'

export default function RangeInput({data, ...props}) {
    const [value, setValue] = useState(data.defaultValue)

    const onChangeHandler = (e) => {
        const {value} = e.target
        setValue(value)
        const fullObj = {value: value, isValid: true}
        props.onChange(fullObj)
    }

    return (
        <div className="form-group">
            <label >{data.label}</label>
            <input 
                className="form-control-range" 
                type="range" 
                min={data.min} max={data.max}
                value={value} 
                onChange={(e) => onChangeHandler(e)}
                step="1"
                />
            <div className="d-flex justify-content-between">
                <p>{data.minText}</p>
                <p>{value}</p>
                <p>{data.maxText}</p>
            </div>
        </div>

    )
}
