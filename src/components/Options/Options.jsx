import s from "./Options.module.css";

const Options = ({ updateFeedback, feedback }) => {
  // const feedbackTypes = ["good", "neutral", "bad"];

  return (
    <div className={s.options}>
      {Object.keys(feedback).map((type) => (
        <button key={type} onClick={() => updateFeedback(type)}>
          {type}
        </button>
      ))}
    </div>
  );
};

export default Options;
