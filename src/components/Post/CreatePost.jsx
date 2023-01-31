import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

// CreatePost component
function CreatePost() {
    const [post, setPost] = useState({})
    const [createForm, setCreateForm] = useState({ text: '', comments: '' })

    const navigate = useNavigate()

    const URL = `http://localhost:4000/post/`

    // handle input changes in the form
    const handleChange = (e) => setCreateForm({ ...createForm, [e.target.name]: e.target.value })

    // function to create a new post
    const createPost = async (e) => {
        e.preventDefault()
        try {
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(createForm)
            }
            // send the post request to the server
            const response = await fetch(URL, options)
            const newPost = await response.json()

            // update the post state with the newly created post
            setPost(newPost)
            console.log(post)
            setCreateForm({ text: '', comments: '' })
            console.log(createForm)

        } catch (err) {
            console.log(err)
            // navigate(URL)
        }
    }

    // render the form for creating a new post
    const renderForm = () => (
        <form onSubmit={createPost}>
            <input
                name="name"
                type="name"
                value={createForm.name}
                placeholder="Title"
                onChange={handleChange}
            />
            <input
                type="buffer" alt=""
                value={createForm.image}
                name="image"
                placeholder="Description"
                onChange={handleChange}
            />
            <input
                type="title"
                value={createForm.title}
                name="title"
                placeholder="Description"
                onChange={handleChange}
            />
            <input
                type="title"
                value={createForm.mp3}
                name="mp3"
                placeholder="mp3"
                onChange={handleChange}
            />
            <input type="submit" value="Create Post" />
        </form> 
    )

    return (
        <div>
            <h1>Create Post</h1>
            {renderForm()}
        </div>
    );
}

export default CreatePost;
