import React, { useState } from 'react'
import quiz from "./hogwartsQuizQuestions.js"

export default function HogwartsQuiz() {
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
      <div className="quiz-container">
        {showScore ? (<><h1 className="quiz-score">You got <em>{score}</em> out of <em>{quiz.length}</em> correct </h1>
        </>) :
          (<>
            <h2>{quiz[currentQuestion].question}</h2>
            {quiz[currentQuestion].answers.map((answer, index) => {
              return (
                <div className="quiz-button-container" key={index}>
                  <button className="quiz-buttons" onClick={() => getNextQuestion(answer.isCorrect)} >{answer.answer}</button>
                </div>
              )
            })}</>)}
      </div>
    </>
  )
}
