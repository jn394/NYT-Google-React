import React from 'react';

function DeleteBTN(prop) {
    return (
        <button className="btn btn-danger cardBTN" {...prop}>Delete</button>
    );
}

export default DeleteBTN;