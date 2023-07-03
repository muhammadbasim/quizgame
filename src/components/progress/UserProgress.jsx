import React from 'react'
import { Button } from "@mui/material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { NavLink } from "react-router-dom";
import "./UserProgress.css";
const UserProgress = () => {
    return (
        <div className="progress">
          <div className="top">
            <h1 className="title">Your Progress</h1>
          </div>
          <div className="bottom">
            <div className="featuredChart">
              <CircularProgressbar value={70} text={"70%"} strokeWidth={15} />
            </div>
            <p className="title">Total progress you made </p>
            <div>
              <Button className="bttn"><NavLink to={"/results"}>See your progress</NavLink></Button>
            </div>
          </div>
        </div>
    );
}

export default UserProgress;
