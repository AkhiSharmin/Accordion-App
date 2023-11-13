import { useContext } from "react";
import { QuestionContext } from "../../ContextApi/Context";
import Question from "../Question/Question";

const Questions = () => {
  const { data } = useContext(QuestionContext);
  // console.log("myData", data);

  return (
    <div>
      <h2 className="text-4xl font-bold text-blue-950 border-b-4 border-blue-900 inline-block pb-2">
        Accordion App
      </h2>
      <h2 className="text-2xl font-semibold p-2">
        All Questions : {data.length}
      </h2>

      <div className="w-[500px]">
        {data.map((singleQuestion) => (
          <Question
            singleQuestion={singleQuestion}
            key={singleQuestion.id}
          ></Question>
        ))}
      </div>
    </div>
  );
};

export default Questions;
