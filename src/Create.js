import { useState } from "react";

const Create = () => {

const [title, setTitle]  =  useState('')
const [body, setBody]  =  useState('')
const [author, setAuthor]  =  useState('Rifaza')

const handleSubmit = (e) =>
{
    e.preventDefault(); // prevent refreshing

    const blog = {title, body, author}
    console.log(blog)
}
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" required value={title}
                onChange={(e) => setTitle(e.target.value)}></input>

                <label>Blog body:</label>
                <textarea  required value={body}
                 onChange={(e) => setBody(e.target.value)}/>

                <label>Blog author:</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Rifaza">Rifaza</option>
                    <option value="Anas">Anas</option>
                </select>
                <br/>
                <button> Add Blog </button>

                <br/>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;