import { useState } from "react";

const Question = ({ singleQuestion }) => {
  const { id, question, answer } = singleQuestion;

  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div data-aos="fade-down-right" className="shadow-2xl p-5 ">
      <>
        <h2 className="cursor-pointer flex px-2 py-4" onClick={toggleAccordion}>
          {id}. {question} <p className="ml-5">{isOpen ? "-" : "+"}</p>
        </h2>
        {isOpen && <div className="mt-2">Ans: {answer}</div>}
      </>
    </div>
  );
};

export default Question;
