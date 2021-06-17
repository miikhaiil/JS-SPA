import Books from './Books';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AddBook from './AddBook';
import BookDetails from './BookDetails';
import EditBook from './EditBook';
function App(){
  
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Books/>
            </Route>
            <Route path="/add">
              <AddBook/>
            </Route>
            <Route exact path="/books/:id">
              <BookDetails/>
            </Route>
            <Route path="/books/edit/:id">
              <EditBook/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}



export default App;

