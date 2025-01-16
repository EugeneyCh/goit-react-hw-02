import s from "./Feedback.module.css";

const Feedback = ({ feedback }) => {
  return (
    <div className={s.feedback}>
      {Object.entries(feedback).map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))}
    </div>
  );
};

export default Feedback;
