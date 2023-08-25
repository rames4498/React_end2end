import React, {useState, useEffect} from 'react';
import axios from 'axios'

const MyPosts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            console.log(res.data)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    ,[])

    return ( 
<div className="data"></div>
{
    
             {/*<PostNumber posts={posts}/>*/}
            <ul>
                {
                    posts.map(post => <li
                        key ={post.id}>
                            <p>{'article '+post.id}</p>{post.title}
                    </li>)
                }
            </ul>

}

     );
}
 
export default MyPosts;