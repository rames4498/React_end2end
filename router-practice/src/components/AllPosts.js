import React, {useState, useEffect, useParams} from 'react';
import PostNumber from './PostNumber'

import axios from 'axios';

const AllPosts = () => {
      const [Posts, setPosts] = useState([])
        let params = useParams();

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
    //const posts = Posts[slug];
    return (
       

        <div className="content">
             {/*<PostNumber posts={posts}/>*/}
            <ul>
                {
                    posts.map(post => <li
                        key ={post.id}>
                            <p>{'article '+post.id}</p>{post.title}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AllPosts;

