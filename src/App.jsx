import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import s from "./App.module.css";

import { useEffect, useState } from "react";

function App() {
  const [feedback, setFeedback] = useState(
    () =>
      JSON.parse(localStorage.getItem("saved-feedback")) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
  );

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = () => {
    return Object.values(feedback).reduce((total, count) => total + count, 0);
  };

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={s.flexContainer}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        feedback={feedback}
        totalFeedback={totalFeedback()}
        resetFeedback={resetFeedback}
      />
      {totalFeedback() > 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback()} />
      ) : (
        <p>No feedback yet</p>
      )}
    </div>
  );
}

export default App;
