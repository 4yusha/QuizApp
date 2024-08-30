import "../App.css";
import { Questions } from "../helpers/QuestionBank";
import { useState, useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState(""); // State to track the chosen option

  const { score, setScore, setGameState } = useContext(GameStateContext);

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setOptionChosen(""); // Reset chosen option for the next question
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <button
          className={optionChosen === "optionA" ? "selected" : ""}
          onClick={() => chooseOption("optionA")}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          className={optionChosen === "optionB" ? "selected" : ""}
          onClick={() => chooseOption("optionB")}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          className={optionChosen === "optionC" ? "selected" : ""}
          onClick={() => chooseOption("optionC")}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          className={optionChosen === "optionD" ? "selected" : ""}
          onClick={() => chooseOption("optionD")}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;
