import React from 'react';

function DeleteBTN(prop) {
    return (
        <button className="btn btn-danger" {...prop}>Delete</button>
    );
}

export default DeleteBTN;