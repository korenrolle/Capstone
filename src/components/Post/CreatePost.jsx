import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

// CreatePost component
function CreatePost() {
    const [post, setPost] = useState(null)
    const [createForm, setCreateForm] = useState("")

    const navigate = useNavigate()

    const URL = `http://localhost:3000/create`

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
            setCreateForm(newPost)

        } catch (err) {
            console.log(err)
            // navigate(URL)
        }
    }

    // render the form for creating a new post
    const renderForm = () => (
        <form onSubmit={createPost}>
            <input
                type="text"
                value={createForm.title}
                name="text"
                placeholder="Title"
                onChange={handleChange}
            />
            <input
                type="text"
                value={createForm.description}
                name="comments"
                placeholder="Description"
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
