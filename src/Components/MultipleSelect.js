import React, {useState} from 'react'

export default function MultipleSelect({data, ...props}) {
    const [value, setValue] = useState([])
    // const [isValid, setIsValid] = useState(false)

    const removeUnnecessaryFields = (arr) => {
        return arr.map(ans => ans.value)
    }

    const clickHandler = (option) => {
        const oldValue = value
        let newArr = [];
        // debugger
        const AlreadyExistValueList = oldValue.filter(el => el.value === option.value)

        if(AlreadyExistValueList.length){
            // unselect
            newArr = oldValue.filter(el => el.value !== option.value)
            setValue(newArr)
        } else {
            // select
            if(option.isOnlyOption){
                setValue([option])
                newArr = [option]
            } else {
                // if it is onlyOption then deselect rest of the values
                newArr = [...oldValue.filter(el => !el.isOnlyOption), option]
                setValue(newArr)
            }
        }


        const fullObj = {isValid: newArr.length > 0, value: newArr.length ? removeUnnecessaryFields(newArr) : null}
        props.onChange(fullObj)


    }

    return (
        <div className="d-block mb-3">
             {data.options.map((option, idx) => 
                <div key={idx} onClick={() => clickHandler(option)} className="card mb-3 cursor-pointer multiple-select-card">
                    <div className="card-body p-3">
                        <h5 className="card-title mb-0">{option.value}</h5>
                        <p className="card-text">{option.text}</p>
                    </div>
                    {value.find(obj => obj.value === option.value) ? <span className="check-icon">
                        <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </span> : null}
                </div>
             ) }
        </div>
    )
}
