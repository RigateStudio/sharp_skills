import React,  { useState, useEffect } from "react";

const TrainingList = () => {
    const [trainings, setTrainings] = useState([]);
    
    const fetchTrainings = () => {
        fetch("/api/training_sessions")
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            setTrainings(response);
        });
    };
    
    useEffect(() => {
        fetchTrainings();
    }, []);
    
    return (
        <div className="Trainings">
        {trainings.map((training) => {
            return  (
                <div>
                    <h4>{training.course}</h4>;
                    <h6>{training.date}</h6>;
                    <h6>{training.teacher}</h6>;
                </div>
            )
        })}
        </div>
    );

}

export default TrainingList;