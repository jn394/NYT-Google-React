import React from "react";

function SearchResults({ children }) {
    return (
        <div>{children}</div>
    );
    // return (
    //     <div>
    //         {props.results.map(result => (
    //             <div className="card" key={result.id}>
    //                 <div className="card-header">
    //                     <h3>{result.volumeInfo.title}</h3>
    //                 </div>
    //                 <div className="card-body">
    //                     <SaveBTN onClick={props.SaveBook}> Save </SaveBTN>
    //                     <div>Written by: {result.volumeInfo.authors.map(writers => (
    //                         <p key={writers.id}>{writers}</p>
    //                     ))}</div>
    //                     <img src={result.volumeInfo.imageLinks.thumbnail} alt="thumbnail"></img>
    //                     <p>{result.volumeInfo.description}</p>
    //                 </div>
    //             </div>
    //         ))}

    //         <div>{console.log(props.results)}</div>
    //     </div>
    // );
}

export default SearchResults;
