import React, { useState } from 'react'
import Quiz from "./HogwartsQuizQuestions"
import HogwartsImg from "./Hogwarts.jpg"

export default function HogwartsQuiz() {
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
    <>
      <img className="Main-Images Main-BG" src={HogwartsImg} alt="Hogwarts" />
      <div className="Quiz-Container">
        {showScore ? (<p>You got {score} out of {Quiz.length} correct! </p>) :
          (<>
            <h2>{Quiz[currentQuestion].question}</h2>
            {Quiz[currentQuestion].answers.map((answer, index) => {
              return (
                <div className="Quiz-Button-Container" key={index}>
                  <button className="Quiz-Buttons" onClick={() => getNextQuestion(answer.isCorrect)} >{answer.answer}</button>
                </div>
              )
            })}</>)}
      </div>
    </>
  )
}
