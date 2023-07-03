import React from 'react'
import { Button } from "@mui/material";
import "./AdminCategories.css";
import { NavLink } from 'react-router-dom';
const AdminCategories = ({title, onAddCategory}) => {
    return (
        <div className="categories">
          <div className="title">{title}</div>
          <div className="ctg1">
            <Button className="btn-1">English</Button>
            <Button className="btn-2">Physics</Button>
            <Button className="btn-3">Chemistry</Button>
          </div>
          <div className="ctg2">
            <Button className="btn-4">Geography</Button>
            <Button className="btn-5">History</Button>
            <Button className="btn-6">Biology</Button>
          </div>
          <div className="ctg3">
            <Button className="btn-add" onClick={onAddCategory}><NavLink to="/QuizForm">Add Quiz</NavLink></Button>
          </div>
          
        </div>
    );
}

export default AdminCategories;
