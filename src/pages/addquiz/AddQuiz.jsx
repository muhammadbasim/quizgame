import React from 'react'
import AdminSidebar from "../../components/sidebar/AdminSidebar";
import AdminNavbar from "../../components/navbar/AdminNavbar";
import "./AdminHome.css";
import QuizForm from "../../components/quizform/QuizForm";

const AddQuiz = () => {
    return (
        <div className="home">
          <AdminSidebar />
          <div className="homeContainer">
            <AdminNavbar />
            <div className="widgets">
              <QuizForm />
            </div>
          </div>
        </div>
      );
}

export default AddQuiz;
