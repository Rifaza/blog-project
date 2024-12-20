import {  useEffect, useState } from "react";
import Bloglist from "./Bloglist.js";
import useFetch from "./useFetch.js";

const Home = () => {

    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    const handleDelete = (id) =>{
        const newBlogs= blogs.filter((blog)=> blog.id !== id)
    }
       
    return (  
        <div  className="home">
            { error && <div>{ error}</div>}
            {isPending && <div>Loading ...</div>}
            { blogs && <Bloglist blogs = {blogs} title="All Blogs" handleDelete={handleDelete}/>}
            {/* <Bloglist blogs = {blogs.filter((blog)=> blog.author=== 'Rifaza')}  title="Rifaza's Blogs"/> */}
          
        </div>
    );
}
 
export default Home;