import button from './icons/trash.svg';

import { Link } from 'react-router-dom';

const BookList = (props) => {
    const books = props.books;
    const title = props.title;
    const handleDelete = props.handleDelete;
    
    return ( 
        <div className="books-list" >
            <h2 className="header">{title}</h2>
            {books.map((book) =>(

                <Link to={`/books/${book.id}`} className="links"> 
                    <div className="preview" key={book.id}>
                        <h2>{book.title}</h2>
                        <p>Written by: {book.author}</p>
                        <button className="button" onClick={()=> handleDelete(book.id)}>
                            <img className="deleteImage" src={button}></img>
                        </button>
                    </div>
                </Link>
            ))}
        </div>
     );
}
 
export default BookList;