import s from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback }) => {
  const positivePercentage =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div className={s.feedback}>
      {Object.entries(feedback).map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))}
      <div>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positivePercentage}%</p>
      </div>
    </div>
  );
};

export default Feedback;
