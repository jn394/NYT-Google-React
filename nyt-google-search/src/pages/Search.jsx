import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";

class Search extends Component {
    state = {
        search: "",
        results: [],
        error: ""
    };

    componentDidMount() {
        this.searchBooks("Harry Potter");
    }

    searchBooks = query => {
        API.search(query)
            .then(res => this.setState({ results: res.data.items }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    // handleInputChange = event => {
    //     this.setState({ search: event.target.value });
    // };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
    };

    render() {
        return (
            <div>
                <h1 className="text-center">Search a book!</h1>
                <SearchForm
                    value={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <h1>Results: </h1>
                <SearchResults results={this.state.results} />
            </div>
        );
    }
}

export default Search;
