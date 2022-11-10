import { useState } from 'react';
import { requestQuestions } from './requests'


export const Questions = ({ inquiry, correct, incorrect }) => {
const [questionArray, setQuestionArray] = useState(inquiry)

   return (
    <div>
        <p>{questionArray}</p>
        <button>{correct} {incorrect}</button>
    </div>
   )
}