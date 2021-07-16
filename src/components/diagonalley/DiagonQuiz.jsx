import React, { useState } from 'react'
import quiz from "./diagonQuizQuestions"
import FullDA from "./images/FullDA.png"

export default function DiagonQuiz() {
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [currentQuestion, setcurrentQuestions] = useState(0)

  const nextQuestion = currentQuestion + 1

  const getNextQuestion = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    if (nextQuestion < quiz.length) {
      setcurrentQuestions(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <>
      <img className="main-Images Main-BG" src={FullDA} alt="Diagon Alley" />
      <div className="quiz-Container">
        {showScore ? (<p>You got {score} out of {quiz.length} correct! </p>) :
          (<>
            <h2>{quiz[currentQuestion].question}</h2>
            {quiz[currentQuestion].answers.map((answer, index) => {
              return (
                <div className="quiz-Button-Container" key={index}>
                  <button className="quiz-Buttons" onClick={() => getNextQuestion(answer.isCorrect)} >{answer.answer}</button>
                </div>
              )
            })}</>)}
      </div>
    </>
  )
}
