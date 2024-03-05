import React, { useEffect, useContext, useState } from "react";
import { useQuestionIndex } from "../hooks/QuestionIndexContext";
import questions from "../Data/NewQuestions";
import { TotalCostContext } from "../hooks/TotalCostContext";
import { useLocation } from "react-router-dom";
import { QUESTION_ROUTE } from "../utils/consts";

const ProgressBar = () => {
  const { currentQuestionId } = useQuestionIndex();
  const { totalCost } = useContext(TotalCostContext);
  const [percentage, setPercentage] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Устанавливаем процент в 0, если на странице "question/1"
    if (location.pathname === `${QUESTION_ROUTE}/1`) {
      setPercentage(0);
    } else {
      const currentQuestion = questions.find(
        (question) => question.id === currentQuestionId
      );

      const newPercentage = Math.round(
        (currentQuestionId / questions.length) * 100
      );
      setPercentage(newPercentage);

      // Сохраняем сумму и процент заполнения в localStorage
      localStorage.setItem("progressPercentage", newPercentage.toString());
    }
  }, [currentQuestionId, location.pathname]);

  useEffect(() => {
    if (location.pathname !== `${QUESTION_ROUTE}/1`) {
      // проверяем еще раз и устанавливаем процент в 0, если на странице "question/1"
      // Восстанавливаем процент заполнения из localStorage при загрузке
      const storedPercentage = localStorage.getItem("progressPercentage");
      if (storedPercentage !== null) {
        setPercentage(parseInt(storedPercentage));
      }
    }
  }, [currentQuestionId, location.pathname]);

  const formattedTotalCost = totalCost.toLocaleString("ru-RU"); //переводим в читаемый формат

  // Устанавливаем стиль для текста в зависимости от значения percentage
  const progressCoastStyle = {
    color: percentage === 100 ? "white" : "black",
  };

  console.log(percentage);

  return (
    <div className="game__progress">
      <div className="game__progress-line" style={{ width: `${percentage}%` }}>
        <span className="game__progress-coast" style={progressCoastStyle}>
          {formattedTotalCost} тг
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
