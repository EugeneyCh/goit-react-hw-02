import s from "./Options.module.css";

const Options = ({
  updateFeedback,
  feedback,
  totalFeedback,
  resetFeedback,
}) => {
  return (
    <div className={s.options}>
      {Object.keys(feedback).map((type) => (
        <button key={type} onClick={() => updateFeedback(type)}>
          {type}
        </button>
      ))}
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;
