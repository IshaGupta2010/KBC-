// src/utils.js
export const sampleQuestions = [
  {
    text: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    text: "Which planet is closest to the Sun?",
    options: ["Earth", "Venus", "Mercury", "Mars"],
    correctAnswer: "Mercury",
  },
  {
    text: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
    correctAnswer: "William Shakespeare",
  },
  {
    text: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },
  {
    text: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Silver", "Hydrogen"],
    correctAnswer: "Oxygen",
  },
];

export const getRandomQuestion = () => {
  const randomIndex = Math.floor(Math.random() * sampleQuestions.length);
  return sampleQuestions[randomIndex];
};
