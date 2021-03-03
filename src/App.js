import './App.css';
import {useState, useEffect} from 'react'
import Page from './Pages/Page';
import allPages from './questions'



function App() {
  
  const [completeFormPageNumber, setCompleteFormPageNumber] = useState(-1)
  const [answer, setAnswer] = useState({})


  useEffect(() => {
    if(completeFormPageNumber === allPages.length - 1){
      alert(JSON.stringify(answer))

    }
  }, [completeFormPageNumber])


  const removeIsValidField = (pageAnswerObj) => {
    const obj = {}
    for(let key in pageAnswerObj){
      obj[key] = pageAnswerObj[key].value
    }
    return obj
  }

  const pageCompleteHandler = (obj, index) => {
    setCompleteFormPageNumber(index)
    const finalAnsObj = {...answer, ...removeIsValidField(obj) }
    setAnswer(finalAnsObj)
  }

  if(completeFormPageNumber === allPages.length - 1){
    return (
      <div>
        <div className="h3 my-5 text-center">Form completed</div>
      </div>
    )
  }

  return (
    <div>
      {allPages.map((questions, idx) => 
        completeFormPageNumber + 1 === idx ? 
          <Page key={idx} quesArray={questions} isCompleted={(obj) => pageCompleteHandler(obj, idx)} /> :
          null
      )}
    </div>
  );
}


export default App;
