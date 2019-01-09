import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Card from "../components/Card";
import ViewBTN from "../components/ViewBTN";
import SaveBTN from "../components/SaveBTN";
import API from "../utils/API";

class Search extends Component {
    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        this.searchBooks("Harry Potter");
    }

    // Searches for books
    searchBooks = query => {
        API.search(query)
            .then(res => this.setState({ results: res.data.items }))
            .catch(err => console.log(err));
    }

    // Changes state of the search
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    // Sends the API request
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
    };

    // Once clicked the state is changed to the specific value of the book and a post request to db
    saveBookBTN = book => {
        // event.preventDefault();
        API.saveBook({
            title: book.title,
            author: book.author,
            description: book.description,
            image: book.image,
            link: book.link
        })

    }

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
                <SearchResults>
                    {console.log(this.state.results)}
                    {this.state.results.map(result => (
                        <Card key={result.id}>
                            <div className="card-header">
                                <h3>{result.volumeInfo.title}</h3>
                            </div>
                            <div className="card-body">
                                <ViewBTN link={result.volumeInfo.previewLink} />
                                <SaveBTN
                                    onClick={() => {
                                        this.saveBookBTN(
                                            {
                                                title: result.volumeInfo.title,
                                                author: result.volumeInfo.authors,
                                                description: result.volumeInfo.description,
                                                image: result.volumeInfo.imageLinks.thumbnail,
                                                link: result.volumeInfo.previewLink
                                            }
                                        )
                                    }}
                                />
                                {/* <div>Written by: {result.volumeInfo.authors.map(writers => (
                                    <p key={writers.id}>{writers}</p>
                                ))}</div> */}
                                <img src={result.volumeInfo.imageLinks.thumbnail} alt="thumbnail"></img>
                                <p>{result.volumeInfo.description}</p>
                            </div>
                        </Card>
                    ))}
                </SearchResults>
            </div>
        );
    }
}

export default Search;
