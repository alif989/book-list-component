import React, { Component } from 'react'
import BookComponent from "../representational/BookComponent";


export default class BookListComponent extends Component {
    render() {
        return (
            this.props.books.map((book,index) => {
                // console.log(book);
                return(
                  <BookComponent
                    bookName = {book.bookName}  
                    writerName = {book.writer}
                    delete = {() => this.props.deleteBookState(index)}
                    change = {(event) => this.props.changeInputStateProps(event,index)}
                  />   
                );
            })
        )
      }
}
