import React from "react";
import './Card.css';

function Card({ children }) {
    return (
        <div className="card shadow">{children}</div>
    );
}

export default Card;