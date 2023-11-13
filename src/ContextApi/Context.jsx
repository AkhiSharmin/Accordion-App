import { useEffect, createContext, useState } from "react";

// Move createContext outside the Context component
export const QuestionContext = createContext(null);

const Context = ({ children }) => {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    fetch("Questions.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const questionData = {
    data,
  };

  return (
    <QuestionContext.Provider value={questionData}>
      {children}
    </QuestionContext.Provider>
  );
};

export default Context;
