// src/App.js
import React, { useState } from 'react';
import LandingPage from './LandingPage';
import PlayerScreen from './PlayerScreen';
import ResultsScreen from './ResultsScreen';
import { sampleQuestions, getRandomQuestion } from './utils';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(getRandomQuestion());
  const [playerName, setPlayerName] = useState('');
  const [isCorrect, setIsCorrect] = useState(null); // null, true, or false
  const [showPlayerScreen, setShowPlayerScreen] = useState(false);

  const handleStart = (name) => {
    setPlayerName(name);
    setShowPlayerScreen(true);
  };

  const handleAnswer = (answer) => {
    if (answer === currentQuestion.correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    const nextQ = getRandomQuestion();
    setCurrentQuestion(nextQ);
    setIsCorrect(null);
    setShowPlayerScreen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
      {!showPlayerScreen && isCorrect === null && (
        <LandingPage
          question={currentQuestion}
          onStart={handleStart}
        />
      )}

      {showPlayerScreen && isCorrect === null && (
        <PlayerScreen
          question={currentQuestion}
          onAnswer={handleAnswer}
        />
      )}

      {isCorrect !== null && (
        <ResultsScreen
          isCorrect={isCorrect}
          playerName={playerName}
          onNextQuestion={handleNextQuestion}
        />
      )}
    </div>
  );
};

export default App;
