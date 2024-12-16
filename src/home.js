import {  useState } from "react";
// eslint-disable-next-line react-hooks/rules-of-hooks
import Bloglist from "./Bloglist.js";

const home = () => {
// eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState('Rifaza');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [age, setAge] = useState(25);

    const handleClick = (e) => {
        setName('Fathima')
        setAge(30);
    }


    const handleClick1 = (name, e) => {
        console.log('Rifaza ' + name ,  e.target);
    }

  // eslint-disable-next-line react-hooks/rules-of-hooks
    const [blogs, setBlogs] = useState([
        {title : 'Finding the destiny', body :'This is new journey...', author : 'Rifaza', id :1},
        {title : 'Success Life', body :'One a upon time in summe...', author : 'Anas', id :2},
        {title : 'Fuilure to success', body :'There are many factors...', author : 'Rifaza', id :3},
    ])

    return (  
        <div  className="home">
            <Bloglist blogs = {blogs} title="All Blogs"/>
            <Bloglist blogs = {blogs.filter((blog)=> blog.author=== 'Rifaza')} title="Rifaza's Blogs"/>
        </div>
    );
}
 
export default home;