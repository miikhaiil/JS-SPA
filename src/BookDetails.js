import SyncLoader from "react-spinners/ClipLoader";
import { useParams, Link } from "react-router-dom";
import useFetch from './useFetch'
import button from './icons/edit.svg';

const BookDetails = () => {
    const {id} = useParams();
    const {data: book, error, isPending} = useFetch('http://localhost:8000/books/' + id);
    
    return ( 
    <div className="bookDetails">
        {isPending && <div className="header" ><SyncLoader color ="red" size="50"/></div>}
        {error && <div className="header">{error} </div> }
        {book &&(
            <div>
                <h2 className="header">Book details - {id}</h2>
                <div className="previewDetails">
                    <p>{book.title}</p>
                    <p>Written by: {book.author}</p>
                    <p>Published: {book.publishDate}</p>
                    <p>Publisher: {book.publisher}</p>
                    <Link to={`/books/edit/${book.id}`} className="links">
                        <button className="button">
                            <img className="editImage" src={button}></img>
                        </button>
                    </Link>
                </div>
            </div>
        )}
    </div> );
}
 
export default BookDetails;