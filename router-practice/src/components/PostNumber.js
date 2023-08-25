import React, {useState, useEffect} from 'react';
import { Link,Outlet} from 'react-router-dom';
import DisplayPost from './DisplayPost'
import axios from 'axios'


const PostNumber = (props) => {
    
   const posts  =  props.posts
   const title = props.title  
   
    return (
        
        <div>
            <Link to="/allposts/PostNumber/DisplayPost">PostNumber</Link>
            <ul>
                {
                    posts.map(post => <li
                        key ={post.id}>
                            <p>{post.id}</p> 
                            {post.title} 
                        
                    </li>)
                }
            </ul>
            <DisplayPost posts={posts}/>
            <Outlet/>
        </div>
        
    );
};

export default PostNumber;