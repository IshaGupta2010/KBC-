// src/MobileQuiz.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Sample questions (for validating answers)
const sampleQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Rome", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  // Add more questions as needed
];

const MobileQuiz = () => {
  const [name, setName] = useState('');
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState(null);
  const [message, setMessage] = useState('');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const questionText = params.get('question');
    // Find the corresponding question object
    const foundQuestion = sampleQuestions.find(q => q.question === questionText);
    setQuestion(foundQuestion);
  }, [location.search]);

  const handleSubmit = () => {
    if (answer === question.correctAnswer) {
      // Show correct message on computer
      window.alert('Correct! Proceeding to the next question.');
      // Notify parent (LandingPage) of the correct answer
      window.parent.postMessage({ type: 'CORRECT_ANSWER', name }, '*');
    } else {
      // Show wrong answer message only on mobile
      setMessage('Incorrect answer, please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Answer the Question</h1>
      {question && (
        <>
          <p className="mb-4">{question.question}</p>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <ul>
            {question.options.map((option, index) => (
              <li key={index}>
                <button
                  onClick={() => setAnswer(option)}
                  className="bg-indigo-500 text-white px-4 py-2 m-2 rounded-lg hover:bg-indigo-600"
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-6 py-2 mt-4 rounded-lg"
          >
            Submit Answer
          </button>
          {message && <p className="text-red-500 mt-2">{message}</p>}
        </>
      )}
    </div>
  );
};

export default MobileQuiz;
