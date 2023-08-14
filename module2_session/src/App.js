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
        <Home/>
        </div> 
    </div>
  );
}

export default App;
