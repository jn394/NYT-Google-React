import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group col-10">
        <label htmlFor="search">Book Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Type in a book title"
          id="search"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success searchBTN">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;