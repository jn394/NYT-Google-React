import React from "react";

function ViewBTN(prop) {
    return (
        <a href={prop.link} target="_blank"><button className="btn">View</button></a>
    );
}

export default ViewBTN;