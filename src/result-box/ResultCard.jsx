import React from "react";
import reactDom from "react-dom";

const ResultCard = (props) => {
    return (
        <div className="card-container">
            <p>{props.name}</p>
        </div>
    )
}

export default ResultCard;