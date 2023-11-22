
import React, { Component } from 'react'
import BookListComponent from './lists/BookListComponent';
import bookList from '../assets/books' 

export default class MainComponent extends Component {
  
    state = {
      books : bookList,
      showBooks : true
    }
	
	//  changeInputStateProps = (event, index) => {
	// 	console.log(index,'okk');
	// 	const book = { ...this.state.books[index] };
	// 	book.bookName = event.target.value;
	// 	const books = [...this.state.books]
	// 	books[index] = book;
	// 	this.setState({
	// 		books: books
	// 	});
	// }

	changeInputStateProps = (event, index) => {
		console.log(event,'event');
		const book = {...this.state.books[index]}
		// console.log(book,'book');
		// console.log(event.target.value,'value');
		
		book.bookName = event.target.value;
		
		const books = [...this.state.books]
		
		console.log(books,'books');
		
		console.log(books[index],'12');
		
		books[index] = book;
		
		console.log(books[index],'14');
		
		this.setState({
			books:books
		});
	}
	
	deleteBookState = (index) => {
		const books = [...this.state.books];
		books.splice(index,1);
		
		this.setState({
			books:books
		})
		
	};
	
	
	// toggleBookState = () => {
	// 	this.setState({
	// 		showBooks : !this.state.showBooks
	// 	});
		
		
	// }
	
	// toggoleBooks = () => {
	// 	this.setState({
	// 		showBooks: !this.state.showBooks
	// 	})
	// };

  render() {
    var style = {
			border: "1ps solid",
			backgroundColor: 'black',
			borderRadius: '5px',
			color: 'white',
			width: '300px',
			margin: '40px auto',
			textAlign: 'center'
		};
		
        let books = null;
        
        if (this.state.showBooks) {
            books = <BookListComponent 
                books = {this.state.books}
				deleteBookState={this.deleteBookState}
				changeInputStateProps = {this.changeInputStateProps}
            />
        }
        
    return (
      <div>   
			<h1 style={style}>Book list</h1>
	  		{books}
	  </div>
    )
  }
}
