//import logo from './logo.svg';
//import './App.css';
import Navbar from './Blog_Components/Navbar'
import Home from './Blog_Components/Home'

function App() {
  //const name  = "sherlock holmes"
  //const link  = 'www.google.com'
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
         {/*<a href={link}>Click here</a>
         <p>{name}</p>*/}
        <h3>This is an App Component</h3>
        <Home/>
        </div> 
    </div>
  );
}

export default App;
