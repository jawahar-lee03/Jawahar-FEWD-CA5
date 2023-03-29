import React from 'react';

function RenderBooks(props) {
    const afterSearch = () =>{
        const filteredBooks = props.books.filter((book) =>
            book.title.toLowerCase().includes(props.search.toLowerCase())
        );
        return filteredBooks;
    }
    
    var books = props.isSearch && props.search!=="" ? afterSearch() : props.books

    return (
        <div id='booksBox' className='flexBox'>
            {books.map(book => (
                <div className='bookData flexBox' key={book.title}>
                    <img className='bookImg' src={book.imageLinks.thumbnail} alt={book.title} />
                    <div className='details flexBox'>
                        <h5>{book.title}</h5>
                        <div className='rating flexBox'>
                        <p>{book.averageRating ? book.averageRating : "N.A"}</p>
                        <p>Free</p>
                    </div>
                </div>
            </div>
        ))}
        </div>
    );
}

export default RenderBooks;