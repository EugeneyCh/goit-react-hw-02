import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {};

  console.log(feedback);
  return (
    <>
      <Description />
      <Options />
      <Feedback feedback={feedback} />
    </>
  );
}

export default App;
