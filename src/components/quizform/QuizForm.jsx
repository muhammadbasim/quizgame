import React, { useState } from 'react';
import './QuizForm.css';
import { Navigate } from "react-router-dom";


const QuizForm = () => {
    const [quizzes, setQuizzes] = useState([]);
  const [quiz, setQuiz] = useState({
    category: '',
    question: '',
    options: ['', '', '', ''],
  });

  const handleChange = (e) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value });
  };

  const handleOptionChange = (e, index) => {
    const options = [...quiz.options];
    options[index] = e.target.value;
    setQuiz({ ...quiz, options });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuizzes([...quizzes, quiz]);
    setQuiz({ category: '', question: '', options: ['', '', '', ''] });
  };

  const handleDelete = (index) => {
    const newQuizzes = [...quizzes];
    newQuizzes.splice(index, 1);
    setQuizzes(newQuizzes);
  };
    return (
        <div className="container">
          <h1>Add Quiz</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="category">Select Category:</label>
            <select id="category" name="category" value={quiz.category} onChange={handleChange}>
              <option value="english">English</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="geography">Geography</option>
              <option value="history">History</option>
              <option value="biology">Biology</option>
            </select>
            <label htmlFor="question">Question:</label>
            <input type="text" id="question" name="question" value={quiz.question} onChange={handleChange} />
            {quiz.options.map((option, index) => (
              <div key={index}>
                <label htmlFor={`option${index + 1}`}>Option {index + 1}:</label>
                <input type="text" id={`option${index + 1}`} name={`option${index + 1}`} value={option} onChange={(e) => handleOptionChange(e, index)} />
              </div>
            ))}
            <button type="submit">Add Quiz</button>
          </form>
          
          <div>
            {quizzes.map((quiz, index) => (
              <div key={index}>
                <h2>{quiz.category}</h2>
                <p>{quiz.question}</p>
                {quiz.options.map((option, index) => (
                  <p key={index}>{option}</p>
                ))}
                <button onClick={() => handleDelete(index)}>Delete</button>
                <Navigate to="/adminHome" replace={true} />
              </div>
            ))}
          </div>
        </div>
        
    );
}

export default QuizForm;