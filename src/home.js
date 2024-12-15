import {  useState } from "react";


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
        {title : 'Fuilure to success', body :'There are many factors...', author : 'Saleema', id :3},
    ])

    return (  
        <div  className="home">
            {/* <p>{name} is {age} years old</p>
            <button onClick={handleClick}> Click Me </button>
            <br/>
            <button onClick={(e)=>{
                handleClick1('Fathima', e)
            }}> Click Me Again </button> */}

            {blogs.map((blog) => (
                <div className="blog-preview" key ={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by  { blog.author} </p>
                    </div>
            ))}
        </div>
    );
}
 
export default home;