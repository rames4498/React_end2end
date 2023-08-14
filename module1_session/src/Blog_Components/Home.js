import { useState } from 'react';
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'The Final battle', body: 'lorem ipsum...', author: 'sherlock', id: 1 },
        { title: 'Aventures of Blue Carbuncle !', body: 'lorem ipsum...', author: 'watson', id: 2 },
        { title: 'Hounds of Baskerville', body: 'lorem ipsum...', author: 'moriarty', id: 3 }
      ]);

    //let name  = 'Sherlock'
    /*
    const handleClick = (e) => {
        console.log('You came here for my story',e.target)
    }
    const handleClickMore = (name) => {
        console.log(name +' here, Click here for more of my adventures')
    }
    */
   /* // stage 1 - useState
   const [name, setName] = useState('Sherlock');
   const [age, setAge] = useState(98);
   
    const handleClick = () => {
        //name = "Moriarty"
        setName('Moriarty');
        setAge(53)
        console.log(name)
        console.log(age)
    } 
    */
    return (  
        <div className="home">
            <p>This is my story </p>
            {/*<p>{'name is '+name+' and the age is '+age}</p>
            <button onClick={handleClick}>Click me</button>*/}
            {/*<button onClick ={handleClickMore}>Click me for more</button>*/}
            {/*<button onClick={() => {handleClickMore()}}>Click me for more</button>
            <button onClick={() => {handleClickMore('Sherlock')}}>Click me for more</button>*/}
            
        </div>
        
    );

}
export default Home;