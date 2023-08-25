import './App.css';
import {Button} from '@material-ui/core'; //importing material ui component
import {TextField} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Header from './NavBar.js';

function App() {
  return (
    <div className="App">
    <br/>
       <Header/> //importing the navbar component
      <Button color="primary" variant="contained"> Press me </Button> 
      <br/><br/>
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <br/><br/>
      <AccountCircle/>

    </div>
  );
}

export default App;