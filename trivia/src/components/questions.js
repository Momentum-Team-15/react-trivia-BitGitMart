import { useEffect, useState } from 'react';
import { findQuestions } from './requests'


export const Questions = ({ selectedCategoryId, setSelectedCategoryId }) => {
const [ourQuestion, setOurQuestion] = useState()
const [correctAns, setCorrectAns] = useState() 
const [incorrectAns, setIncorrectAns] = useState() 
let [array, setArray] = useState(0)
let [correct, setCorrect] = useState()
let [incorrect, setIncorrect] = useState() 
let random = incorrect.concat(correct).sort(() => Math.random() -0.5)

const handleGoBack = () => setSelectedCategoryId(null)
const handleClick = (e) => e.target.innerText === correctAns ?
(setArray(array += 1), setCorrect(correct += 1)) : (setArray(array += 1), setIncorrect(incorrect += 1))

useEffect(() => {
    findQuestions(selectedCategoryId).then(res => {
        setOurQuestion(res.data.results[array].question.replace(/[^a-zA-Z0-9 ,?%]/g, ''))
        setCorrectAns(res.data.results[array].correct_ans)
        setIncorrectAns(res.data.results[array].incorrect_ans)
    })
}, [selectedCategoryId, array])

   return (
    <div>
        {array === 10 ? ( 
        <>
        {alert(`Correct: ${correct} Incorrect: ${incorrect}`)}
                        {handleGoBack()}
                    </>
                ) : (
                    <>
                    <button> onClick={handleGoBack}>Wonton</button>
                    <p>{ourQuestion.replace(/quot/g, '"').replace(/039/g, "'")}</p>
                    <div>
                    {random.map((answer, index) => (
                                <button ket={index} onClick={handleClick}>{answer.replace(/[^a-zA-Z0-9 ?%]/g, '')}</button>
                            ))}
                        </div>
                        <p>Correct Answers: {correct}</p>
                        <p>Incorrect Answers: {incorrect}</p>
                    </>
                )} 
    </div>
   )
}