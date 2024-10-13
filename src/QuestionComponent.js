// src/QuestionComponent.js
import React from 'react';

const QuestionComponent = ({ question, onAnswer, correct }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <button
              onClick={() => onAnswer(option)}
              className="bg-indigo-500 text-white px-4 py-2 m-2 rounded-lg hover:bg-indigo-600"
              disabled={correct} // Disable buttons after correct answer
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionComponent;
