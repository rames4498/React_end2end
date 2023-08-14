import { useEffect, useState } from 'react';
import BlogList from './BlogList';
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
       // setIsPending(false);
        setBlogs(data);
      })
    }, 1000);
  }, [])

  return (
    <div className="home">
      { isPending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;
/*
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'The Final battle', body: 'lorem ipsum...', author: 'sherlock', id: 1 },
        { title: 'Aventures of Blue Carbuncle !', body: 'lorem ipsum...', author: 'watson', id: 2 },
        { title: 'Hounds of Baskerville', body: 'lorem ipsum...', author: 'moriarty', id: 3 }
      ]);
      const [name, setName] = useState('Bullet Pandi');
    const deleteBlog = (id) =>{
        const newBlogs  = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

////////////
useEffect(() => {
    console.log('use effect ran');
    console.log(blogs);
  }, [name])
///////////////


////////////////


      return (  
        <div className="home">
              <BlogList blogs={blogs} title={"All my blogs"} deleteBlog ={deleteBlog}/>
              <button onClick={() => setName('snakeBabu')}>change name</button>
            <p>{name}</p>
            </div>
      );    
}
export default Home; */