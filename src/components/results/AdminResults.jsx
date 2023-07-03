import React from 'react'
import './AdminResults.css';
import { NavLink } from 'react-router-dom';

const AdminResults = () => {
    const results = [
        { user: 'User 1', quiz: 'Quiz 1', score: '80%' },
        { user: 'User 2', quiz: 'Quiz 2', score: '90%' },
        { user: 'User 3', quiz: 'Quiz 3', score: '85%' },
        // Add more results as needed
    ];

    return (
        <div className="container">
            <h1>Admin Results</h1>
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Quiz</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result, index) => (
                        <tr key={index}>
                            <td>{result.user}</td>
                            <td>{result.quiz}</td>
                            <td>{result.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <NavLink to="/Dashboard">Return to Dashboard</NavLink>
        </div>
    );
    
}

export default AdminResults;
