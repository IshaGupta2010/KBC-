// src/LandingPage.js
import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import QuestionComponent from './QuestionComponent';

// Sample questions
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

const LandingPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [correct, setCorrect] = useState(false);
  const [playerName, setPlayerName] = useState('');

  useEffect(() => {
    // Pick a random question when the page loads
    const randomQuestion = sampleQuestions[Math.floor(Math.random() * sampleQuestions.length)];
    setCurrentQuestion(randomQuestion);
  }, []);

  const handleCorrectAnswer = (name) => {
    setCorrect(true);
    setPlayerName(name);
    setTimeout(() => {
      // Move to the next question after a short delay
      const randomQuestion = sampleQuestions[Math.floor(Math.random() * sampleQuestions.length)];
      setCurrentQuestion(randomQuestion);
      setCorrect(false);
      setPlayerName(''); // Reset player name for next round
    }, 2000);
  };

  // QR Code that links to the mobile quiz page with the question
  const qrCodeData = `http://localhost:3000/mobile-quiz?question=${encodeURIComponent(currentQuestion?.question)}`;

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6">KBC Quiz Game</h1>
      {currentQuestion && (
        <>
          <QuestionComponent question={currentQuestion} />
          <QRCodeSVG value={qrCodeData} className="mt-4" />
          <p className="text-gray-600 mt-2">Scan this QR code to answer the question!</p>
        </>
      )}
      {correct && (
        <p className="text-green-600 mt-4">Congratulations {playerName}, correct answer!</p>
      )}
    </div>
  );
};

export default LandingPage;
