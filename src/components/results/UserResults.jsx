import React from 'react'
import './UserResults.css';

const UserResults = () => {
    return (
        <div className="container">
            <h1>Your Quiz Results</h1>
            <table>
                <thead>
                    <tr>
                        <th>Quiz Name</th>
                        <th>Score</th>
                        <th>Date Taken</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Quiz 1</td>
                        <td>80%</td>
                        <td>2023-07-01</td>
                    </tr>
                    <tr>
                        <td>Quiz 2</td>
                        <td>75%</td>
                        <td>2023-07-02</td>
                    </tr>
                    <tr>
                        <td>Quiz 3</td>
                        <td>90%</td>
                        <td>2023-07-03</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserResults;
