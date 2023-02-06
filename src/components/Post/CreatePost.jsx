import './style/post.css'
import { useState, useEffect } from 'react'

// 'useState' and 'useEffect' are hook functions from the React library
// they allow you to use state and component lifecycle methods in functional components

const Post = (props) => {
    // 'post' and 'setPost' are used to store the data fetched from the API
    // 'newForm' and 'setNewForm' are used to store the data entered by the user in the form
    const [post, setPost] = useState([])
    const [newForm, setNewForm] = useState({
        title: "",
        image: "",
        description: "",
    })

    // The base URL for fetching and posting data from the API
    const BASE_URL = "http://localhost:4000/post/"

    // 'getPost' is used to fetch all the posts from the API
    const getPost = async () => {
        try {
            // Fetch the data from the API
            const response = await fetch(BASE_URL)
            const allPost = await response.json()
            // Store the data in the state
            setPost(allPost)
        } catch (err) {
            // Log the error if there is any
            console.log(err)
        }
    }

    // 'handleChange' is used to update the state when the user changes the form input
    const handleChange = (e) => {
        const userInput = { ...newForm }
        userInput[e.target.name] = e.target.value
        setNewForm(userInput)
    }

    // 'handleSubmit' is used to submit the form data to the API
    const handleSubmit = async (e) => {
        if (!newForm.title || !newForm.image || !newForm.description) {
            alert("All fields must be filled in");
            return;
        }
        
        try {
            // Get the current state
            const currentState = { ...newForm }

            // Specify the request options
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(currentState)
            }

            // Send the request to the API
            const response = await fetch(BASE_URL, requestOptions)
            // Get the response and parse it into JSON
            const createdSinglePost = await response.json()
            // Update the state with the newly created post
            setPost([...post, createdSinglePost])
            // Reset the form data
            setNewForm({
                title: "",
                image: "",
                description: "",
            })

        } catch (err) {
            // Log the error if there is any
            console.log(err)
        }
    }

    // 'useEffect' is used to run the 'getPost' function when the component is mounted
    useEffect(() => {
        getPost()
    }, [])

    return (
        <div>
          {/* Title */}
          <h1>Create Post</h1>
          <p> A place where you can post the best music, best vibes, best you!</p>
          {/* Form */}
          <section className='postForm'>
            <form>
              {/* Title Input */}
              <div>
                <label htmlFor='title'>
                  Title:
                  <input className='postInput'
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                    value={newForm.title}
                    onChange={handleChange}
                  />
                </label>
              </div>
              {/* Image Input */}
              <div>
                <label htmlFor='image'>
                  Image:
                  <input className='postInput'
                    type="text"
                    id="image"
                    name="image"
                    placeholder="Post Image"
                    value={newForm.image}
                    onChange={handleChange}
                  />
                </label>
              </div>
              {/* Description Input */}
              <div>
                <label htmlFor='description'>
                  Description:
                  <input className='postInput'
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Post Description"
                    value={newForm.description}
                    onChange={handleChange}
                  />
                </label>
                <br />
                {/* Submit Button */}
                <input className='button' onClick={() => handleSubmit()} type="submit" value="Create a Post" />
              </div>
            </form>
          </section>
        </div>
      )
    }
    export default Post      