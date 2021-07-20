import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import quiz from "./hogwartsQuizQuestions"
import skymagic from "./skymagic.png"

export default function HogwartsQuiz() {
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [currentQuestion, setcurrentQuestions] = useState(0)
  const history = useHistory()

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

  const goBack = () => {
    history.goBack()
  }


  return (
    <>
      <div className="main-text-container">
        <h1 className="main-text-header">Hogwarts Quiz</h1>
      </div>
      <img className="background-image" src={skymagic} alt="blurred smoky blue background" />
      <div>
        <div>
          {showScore ? (<div className="quiz-container">
            <h1>You got {score} out of {quiz.length} correct </h1>
            <button onClick={goBack} className="quiz-buttons">retake</button>
          </div>) :
            (<div className="quiz-container">
              <h2>{quiz[currentQuestion].question}</h2>

              {quiz[currentQuestion].answers.map((answer, index) => {
                return (

                  <button key={index} className="quiz-buttons" onClick={() => getNextQuestion(answer.isCorrect)} >{answer.answer}</button>

                )
              })}
            </div>

            )}
        </div>
      </div>

    </>
  )
}

