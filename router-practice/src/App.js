import { BrowserRouter as Router, Routes, Route, Link,Outlet,
  useParams } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import NoMatch from './components/NoMatch'
import AllPosts from './components/AllPosts'
import PostNumber from './components/PostNumber'
import DisplayPost from './components/DisplayPost'

function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
          Home
          </Link>
          <Link to="/about" style={{ padding: 5 }}>
          About
          </Link>
          <Link to="/allposts" style={{ padding: 5 }}>
          AllPosts
          </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/allposts" element={<AllPosts/>} >
        <Route path="/allposts/PostNumber" element={<PostNumber/>} >
        <Route path=":id" element={<DisplayPost />} />
        </Route>
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
    
  );
}

export default App;