import { useState } from 'react';
import { useHistory } from 'react-router';
const AddBook = () => {

    const [title,setTitle] =useState('');
    const [author,setAuthor] =useState('');
    const [publishDate,setDate] =useState('');
    const [publisher,setPublisher] =useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    
    const handleSubmit =(e) => {
        e.preventDefault();
        const book ={title,author,publishDate,publisher};
        setIsPending(true);

        fetch('http://localhost:8000/books', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(book)
        }).then( () => {
            setIsPending(false);
            history.push("/");
        }) 

    }

    return ( 
        <div className="create previewDetails">
            <h2 className="header">Add a new book</h2>
            <form onSubmit={handleSubmit}>
                <label>Book Title</label>
                <input type="text"
                    required
                    value ={title}
                    onChange ={(e)=> setTitle(e.target.value)}
                />
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
                {!isPending && <button>Add</button>}
                {isPending && <button disabled>Adding book...</button>}
            </form>
        </div>
    );
}


export default AddBook;