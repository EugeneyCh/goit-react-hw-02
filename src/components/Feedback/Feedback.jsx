import s from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad }) => {
  const feedbackData = [
    { label: "Good", value: good },
    { label: "Neutral", value: neutral },
    { label: "Bad", value: bad },
  ];

  //   console.log(good, neutral, bad);

  return (
    <div className={s.feedback}>
      {feedbackData.map(({ label, value }) => (
        <p key={label}>
          {label} : {value}
        </p>
      ))}
    </div>
  );
};
export default Feedback;
