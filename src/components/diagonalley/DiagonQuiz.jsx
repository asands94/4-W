import React, { useState } from 'react'
import Quiz from "./DiagonQuizQuestions"

export default function DiagonQuiz() {

  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [currentQuestion, setcurrentQuestions] = useState(0)

  const nextQuestion = currentQuestion + 1

  const getNextQuestion = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    if (nextQuestion < Quiz.length) {
      setcurrentQuestions(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className="Quiz-Container">
      {showScore ? (<p>You got {score} out of {Quiz.length} correct! </p>) :
        (<>{Quiz[currentQuestion].question}
          {Quiz[currentQuestion].answers.map((answer, index) => {
            return (
              <div className="Quiz-Button-Container" key={index}>
                <button className="Quiz-Buttons" onClick={() => getNextQuestion(answer.isCorrect)} >{answer.answer}</button>
              </div>
            )
          })}</>)}
    </div>
  )
}
