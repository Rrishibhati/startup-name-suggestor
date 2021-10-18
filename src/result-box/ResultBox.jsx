import React from "react";
import reactDom from "react-dom";
import ResultCard from "./ResultCard";

import './ResultBox.css';

const ResultBox = (props) => {
    return (
        <div className="result-box-container">
            {props.search_result.map((item) => {
                return <ResultCard name={item} />
            })}
        </div>
    )
}

export default ResultBox;