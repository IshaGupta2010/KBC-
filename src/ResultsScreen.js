// src/ResultsScreen.js
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const ResultsScreen = ({ isCorrect, playerName, onNextQuestion }) => {
  useEffect(() => {
    // Automatically move to the next question after 3 seconds
    const timer = setTimeout(() => {
      onNextQuestion();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onNextQuestion]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`p-8 rounded-lg shadow-lg text-center ${
          isCorrect ? 'bg-green-200' : 'bg-red-200'
        }`}
      >
        {isCorrect ? (
          <>
            <h2 className="text-3xl font-bold text-green-700 mb-4">🎉 Congratulations! 🎉</h2>
            <p className="text-xl text-green-600">Well done, <span className="font-semibold">{playerName}</span>!</p>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-red-700 mb-4">❌ Oops! ❌</h2>
            <p className="text-xl text-red-600">Sorry, <span className="font-semibold">{playerName}</span>, that's not correct.</p>
          </>
        )}
        <p className="mt-4 text-md text-gray-700">Preparing the next question...</p>
      </motion.div>
    </div>
  );
};

export default ResultsScreen;
