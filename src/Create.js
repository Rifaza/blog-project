import { useState } from "react";

const Create = () => {

const [title, setTitle]  =  useState('')
const [body, setBody]  =  useState('')
const [author, setAuthor]  =  useState('Rifaza')

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
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