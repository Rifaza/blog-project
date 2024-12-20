import {  useEffect, useState } from "react";
// eslint-disable-next-line react-hooks/rules-of-hooks
import Bloglist from "./Bloglist.js";

const Home = () => {

    const [name, setName] = useState('Rifaza');
    const [age, setAge] = useState(25);
    const [isPending, setIsPending] = useState(true);
    const handleClick = (e) => {
        setName('Fathima')
        setAge(30);
    }


    const handleClick1 = (name, e) => {
        console.log('Rifaza ' + name ,  e.target);
    }


  // eslint-disable-next-line react-hooks/rules-of-hooks
    const [blogs, setBlogs] = useState(null)
    const handleDelete = (id) =>{
        const newBlogs= blogs.filter((blog)=> blog.id !== id)
        setBlogs(newBlogs);

    }

    useEffect(()=>{
  setTimeout(()=>{
    fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(
            data=>{
                console.log(data);
                setBlogs(data);
                
                setIsPending(false);
            }
        )
  }, 1000)
    
    }, []);
    return (  
        <div  className="home">
            {isPending && <div>Loading ...</div>}
            { blogs && <Bloglist blogs = {blogs} title="All Blogs" handleDelete={handleDelete}/>}
            {/* <Bloglist blogs = {blogs.filter((blog)=> blog.author=== 'Rifaza')}  title="Rifaza's Blogs"/> */}
            {/* <button onClick={handleClick}> Change Name</button>
            <p>{name}</p> */}
        </div>
    );
}
 
export default Home;