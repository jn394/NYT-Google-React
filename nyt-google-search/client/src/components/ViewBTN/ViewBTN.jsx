import React from "react";

function ViewBTN(prop) {
    return (
        <a href={prop.link} target="_blank"><button className="btn btn-primary cardBTN">View</button></a>
    );
}

export default ViewBTN;