import SyncLoader from "react-spinners/ClipLoader";
import { useHistory } from 'react-router';
import { useState } from "react";
import BookList from "./BooksList";
import useFetch from './useFetch';


const Books = () => {

    const {data: books, error, isPending} = useFetch('http://localhost:8000/books');
    const [pending, setIsPending] = useState(false);
    const history = useHistory();
    //usuwanie z bazy
    const handleDelete = (id) => {
        setIsPending(true);
        fetch('http://localhost:8000/books/'+id, {
            method: 'DELETE'
        }).then(() => {
            setIsPending(false);
            history.push("/");
        });
    }

    return ( 
        <div className="home">
            {(isPending||pending) && <div className="header" ><SyncLoader color ="red" size="50"/></div>}
            {error && <div className="header">{error}</div>}
            {books && <BookList books={books} title ="All books" handleDelete={handleDelete} />}
        </div>
     );
}
 
export default Books;