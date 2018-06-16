import React from "react";

// By extending the React.Component class, Counter inherits functionality from it
const ScoreCounter = props =>

    (
        <div className="card text-center center-align row red">
            <div className="card-header bg-primary text-white col s12">
                <h3 className="card-title">Correct/Incorrect</h3>
            </div>
            <div className="card-body row">
                <div className="col s12">
                    <p className="card-text">Score: {props.count} | High Score: {props.count}</p>
                </div>
            </div>
        </div>

    );


export default ScoreCounter;
