import React, { Component } from "react";
import SearchResults from '../components/SearchResults';
import Card from '../components/Card';
// import ViewBTN from '../components/ViewBTN';
import API from '../utils/API';
import DeleteBTN from "../components/DeleteBTN";

class Saved extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        this.loadBooks();
    }

    // Loads all books from database
    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data })
            )
            .catch(err => console.log(err));
    };

    // Deletes a book from the database with a given id, then reloads books from the db
    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };


    render() {
        return (
            <div>
                Saved Page!

                <SearchResults>
                    {console.log(this.state.books)}
                    {this.state.books.map(book => (
                        <Card key={book._id}>
                            <div className="card-header">
                                <h3>{book.title}</h3>
                            </div>
                            <div className="card-body">
                                {/* <ViewBTN link={book.link} /> */}
                                {/* <div>Written by: {book.author}</div> */}
                                {/* <img src={book.image} alt="thumbnail"></img>
                                <p>{book.description}</p> */}
                                <DeleteBTN onClick={() => this.deleteBook(book._id)} />
                            </div>
                        </Card>
                    ))}
                </SearchResults>
            </div>
        );
    }
};

export default Saved;