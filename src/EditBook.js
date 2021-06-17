import SyncLoader from "react-spinners/ClipLoader";
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import useFetch from './useFetch'
import { useParams } from "react-router-dom";

const EditBook = () => {
    const {id} = useParams();
    const [title,setTitle] =useState('');
    const [author,setAuthor] =useState('');
    const [publishDate,setDate] =useState('');
    const [publisher,setPublisher] =useState('');
    const [Pending, setIsPending] = useState(false);
    const history = useHistory();
    const {data: data, error, isPending} = useFetch('http://localhost:8000/books/' + id);
    
    useEffect(()=>{
        if(data!=null)
        {
            setDate(data.publishDate);
            setTitle(data.title);
            setAuthor(data.author);
            setPublisher(data.publisher);  
        }
    }, [data]);
    
    const handleSubmit =(e) => {
        
        e.preventDefault();
        const editedBook ={title,author,publishDate,publisher};
        setIsPending(true);

        fetch('http://localhost:8000/books/'+id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(editedBook)
        }).then( () => {
            setIsPending(false);
            history.push("/");
        }) 
    }

    return (
        <div >
        {isPending && <div className="header" ><SyncLoader color ="red" size="50"/></div>}
        {error && <div className="header">{error} </div> }
        {data &&(
            <div className="create previewDetails" id="div">
                    <h2 className="header">Edit book</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Book Title</label>
                        <input type="text"
                            required
                            value ={title}
                            onChange ={(e)=> setTitle(e.target.value)
                            }
                        ></input>
                        <label>Author</label>
                        <input type="text"
                            required
                            value ={author}
                            onChange ={(e)=> setAuthor(e.target.value)}
                        />
                        <label>Publish date</label>
                        <input type="date" 
                            required
                            value ={publishDate}
                            onChange ={(e)=> setDate(e.target.value)}/>
                        
                        <label>Publisher</label>
                        <input type="text"
                            required
                            value ={publisher}
                            onChange ={(e)=> setPublisher(e.target.value)}
                        />
                        {!Pending && <button>Edit</button>}
                        {Pending && <button disabled>Editing book...</button>}
                </form>
            </div>
        
        )}
        </div> 
      );
}
 
export default EditBook;