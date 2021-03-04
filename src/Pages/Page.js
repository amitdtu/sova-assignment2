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
            if(!ques.dependOn){
                if(ques.type === 'range'){
                    answerObj[ques.name] = {isValid: true, value: ques.defaultValue}
                }
                else {
                    answerObj[ques.name] = null
                }
            }
        } )
        setAnswerObj(answerObj)
      }, [])
    
     
    
    
    const handleChange = (obj, val) => {
        const newAnswerObj = {...answerObj, [obj.name]: val}

        // add or remove dynamic question
        quesArray.forEach((ques, i) => {
            // debugger
            if(ques.dependOn ){
                if(newAnswerObj && newAnswerObj[ques.dependOn.ques.name]?.value === ques.dependOn.whichAns){
                    if(!newAnswerObj[ques.name]){
                        if(ques.type === 'range'){
                            newAnswerObj[ques.name] = {isValid: true, value: ques.defaultValue}
                        } 
                        else {
                            newAnswerObj[ques.name] = null
                        }
                    }
                } else {
                    delete newAnswerObj[ques.name]
                }
            } 
            
        })

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
                    const isQuesVisible = (ques.dependOn && answerObj && answerObj[ques.dependOn.ques.name]?.value === ques.dependOn.whichAns) || !ques.dependOn
                    if(ques.type === 'number' || ques.type === 'text' || ques.type === 'email') {
                        return isQuesVisible ? <CustomInput key={idx} data={ques} onChange={(val) => handleChange(ques, val)} /> : null
                    } 
                    else if(ques.type === 'select'){
                        // debugger
                        return  isQuesVisible ? <SelectInput key={`${idx}-children`} data={ques} onChange={(val) => handleChange(ques, val)} /> : null
                    } 
                    else if(ques.type === 'multiple'){
                        return isQuesVisible ? <MultipleSelect key={idx} data={ques} onChange={(val) => handleChange(ques, val)} /> : null
                    } 
                    else if(ques.type === 'range') {
                        return isQuesVisible ? <RangeInput key={idx} data={ques} onChange={(val) => handleChange(ques, val)} /> : null
                    }
                })}
                <button onClick={() => props.isCompleted(answerObj)} disabled={!isFormValid} type="button" className="btn btn-primary">Next</button>

                </div>
            </div>
        </div>
    )
}

export default Page