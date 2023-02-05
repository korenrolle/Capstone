// import './Post.css'
import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

const Post = (props) => {
    // define our state variable - []
    // react state
    const [post, setPost] = useState([])
    const [newForm, setNewForm] = useState({
        title: "",
        image: "",
        description: "",
    })
    // fetch endpoint
    const BASE_URL = "http://localhost:4000/post/"

    // create some local state for tracking post input (user) ++
    // link this state to a controlled form (post) ++
    // handlers (change ++ / submit )
    // submit event will make a post request from our current comp.

    const getPost = async () => {
        try {
            const response = await fetch(BASE_URL)
            // fetch grabs the data from API - (mongo)
            const allPost = await response.json()
            // assuming no errors - translate to JS 
            // console.log(allPost)
            setPost(allPost)
            // store that data (from api) in react state
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        // console.log(newForm)
        const userInput = { ...newForm }
        userInput[e.target.name] = e.target.value
        setNewForm(userInput)
    }

    const handleSubmit = async (e) => {
        // 0. prevent default (event object method)
        // e.preventDefault()
        // 1. capturing our local state
        const currentState = { ...newForm }
        // check any fields for property data types / truthy value (function call - stretch)
        try {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(currentState)
            }
            // 2. specify request method , headers, Content-Type
            // 3. make fetch to BE - sending data (requestOptions)

            // 3a fetch sends the data to API - (mongo)
            const response = await fetch(BASE_URL, requestOptions)
            // 4. check our response - 
            // 5. parse the data from the response into JS (from JSON) 
            const createdSinglePost = await response.json()
            console.log(createdSinglePost)
            // update local state with response (json from be)
            setPost([...post, createdSinglePost])
            console.log(post)
            // reset newForm state so that our form empties out
            setNewForm({
                title: "",
                image: "",
                description: "",
            })
            // getPost()
            

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPost()
    }, [])



    
    // useEffect takes two arguments -> runs function upon component mount
    // react mount -> 

    return (
        <div>
    <h1>Create Post</h1>
    <section className='postForm'>
            <form>
                <div>
                    <label htmlFor='title'>
                        Title:
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Track Title"
                            value={newForm.title}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor='image'>
                        Image:
                        <input
                            type="text"
                            id="image"
                            name="image"
                            placeholder="post image"
                            value={newForm.image}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor='description'>
                        Description:
                        <input
                            type="text"
                            id="description"
                            name="description"
                            placeholder="post description"
                            value={newForm.description}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <input className='button'onClick={() => handleSubmit()} type="submit" value="Create a Post" />
                </div>
            </form>
        </section>
        {/* {post && post.length ? loaded() : loading()} */}
</div>
    )

}

export default Post