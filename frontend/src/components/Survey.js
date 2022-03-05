import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function QandA() {
  const navigate = useNavigate();

  const questions = [
    {
      questionText: "Where do you prefer Working at?",
      answerOptions: [
        { answerText: "Canada", isCorrect: true },
        { answerText: "United States", isCorrect: true },
        { answerText: "United Kingdom", isCorrect: true },
        { answerText: "other", isCorrect: true },
      ],
    },
    {
      questionText: "What job type do you prefer?",
      answerOptions: [
        { answerText: "remote", isCorrect: true },
        { answerText: "junior", isCorrect: true },
        { answerText: "senior", isCorrect: true },
      ],
    },
    {
      questionText: "How many years of Experience You have?",
      answerOptions: [
        { answerText: "1", isCorrect: true },
        { answerText: "5", isCorrect: true },
        { answerText: "10", isCorrect: true },
        { answerText: "20+", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      setTimeout(() => history.push("/random-jobs"), 3000);
    }
  };
  return (
    <div>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <br />
          Redirecting you to random jobs page based on your selection.
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, answerOptionIdx) => (
                <Button
                  style={{ margin: "0 10px" }}
                  key={answerOptionIdx}
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </Button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}