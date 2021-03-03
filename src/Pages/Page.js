import React, {useEffect, useState} from 'react'
import CustomInput from '../Components/CustomInput'
import MultipleSelect from '../Components/MultipleSelect'
import RangeInput from '../Components/RangeInput'
import SelectInput from '../Components/SelectInput'

const Page = ({quesArray, ...props}) => {
    const [answerObj, setAnswerObj] = useState(null)
    const [isFormValid, setIsFormValid] = useState(false)

    useEffect(() => {
        const answerObj = {}
        quesArray.forEach((ques) => {
            if(ques.type === 'range'){
                answerObj[ques.name] = {isValid: true, value: ques.defaultValue}
            }
            else {
                answerObj[ques.name] = null
            }
        } )
        setAnswerObj(answerObj)
      }, [])
    
     
    
    
    const handleChange = (obj, val) => {
        const newAnswerObj = {...answerObj, [obj.name]: val}
        if(obj.type === 'select' && obj.children){
            if(newAnswerObj[obj.name]?.value !== obj.children.dependOn){
                delete newAnswerObj[obj.children.name]
            } else {
                newAnswerObj[obj.children.name] = null
            }
        }

        // if()
    
        let isFormValid = true
        for(let key in newAnswerObj){
          if(!newAnswerObj[key] || !newAnswerObj[key].value || !newAnswerObj[key].isValid){
            isFormValid = false
          }
        }
        setIsFormValid(isFormValid)
        setAnswerObj(newAnswerObj)
        
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-sm-6 offset-md-3">
                {quesArray.map((ques, idx) =>{ 
                    if(ques.type === 'number' || ques.type === 'text' || ques.type === 'email') {
                        return <CustomInput key={idx} data={ques} onChange={(val) => handleChange(ques, val)} />
                    } 
                    else if(ques.type === 'select'){
                        const q1 = <SelectInput key={idx} data={ques} onChange={(val) => handleChange(ques, val)} />
                        const Ques = [q1]

                        if(ques.children && (answerObj && answerObj[ques.name]?.value === ques.children.dependOn)){
                            const q2 = <SelectInput key={`${idx}-children`} data={ques.children} onChange={(val) => handleChange(ques.children, val)} />
                            Ques.push(q2);
                        }
                        return Ques

                    } 
                    else if(ques.type === 'multiple'){
                        return <MultipleSelect key={idx} data={ques} onChange={(val) => handleChange(ques, val)} />
                    } 
                    else if(ques.type === 'range') {
                        return <RangeInput key={idx} data={ques} onChange={(val) => handleChange(ques, val)} />
                    }
                })}
                <button onClick={() => props.isCompleted(answerObj)} disabled={!isFormValid} type="button" className="btn btn-primary">Next</button>

                </div>
            </div>
        </div>
    )
}

export default Page