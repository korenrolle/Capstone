import React, { useState, useEffect } from "react";
import CreatePost from "../Components/Post/CreatePost";
import { useNavigate } from 'react-router-dom'

function Feed() {
  // State for the list of posts
  const [posts, setPosts] = useState([]);
  
  const navigate = useNavigate()

  // Function to fetch the list of posts from the backend API
  async function fetchPosts() {
    const res = await fetch("http://localhost:4000/posts");
    const data = await res.json();
    setPosts(data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to handle a comment submission for a post
  async function handleCommentSubmit(postId, comment) {
    // Send the comment to the backend API
    await fetch(`/api/posts/${postId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment }),
    });

    // Refresh the list of posts
    fetchPosts();
  }

  // Function to handle delete a post
  async function handleDeletePost(postId) {
    // Send the delete request to the backend API
    await fetch(`/api/posts/${postId}`, {
      method: "DELETE",
    });

    // Refresh the list of posts
    fetchPosts();
  }
  return (
    <div>
      <CreatePost fetchPosts={fetchPosts} />
      {posts.map((post) => {
        return (
        <div key={post.id}>
          <img src={post.image} alt={post.title} />
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <form onSubmit={(event) => handleCommentSubmit(post.id, event.target.comment.value)}>
            <input type="text" name="comment" />
            <button type="submit">Comment</button>
          </form>
          <button onClick={() => handleDeletePost(post.id)}>Delete</button>
        </div>
)})}
    </div>
  );

      }
export default Feed;