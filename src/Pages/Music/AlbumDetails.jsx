import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router';
import CommentList from '../../components/CommentList/CommentList';

export default function AlbumDetails(props) {
  const {id} = useParams();
  const [comment, setComment] = useState([])

  // Fetch the details of the post with the given id
  async function fetchDetails() {
    try {
      // Send a GET request to the API to retrieve the post data
      const res = await fetch(`http://localhost:4000/post/${id}`);
      if (!res.ok) {
        // Throw an error if the request fails
        throw new Error("Failed to fetch posts");
      }
      // Parse the response data as JSON
      const data = await res.json();
      // Set the comment state to the data fetched from the API
      setComment(data);
    } catch (error) {
      // Log the error if an error occurs while fetching the post
      console.error(`An error occurred while fetching the post: ${error}`);
    }
  }

  // Fetch the post details when the component is first rendered, or when the id changes
  useEffect(()=>{
    if(id){
      fetchDetails();
    }
  },[id])

  const { description, image } = comment;

  return (
    <div>
      {/* Display the image associated with the post */}
      <img src={image} alt="Post image"/>
      {/* Display the description of the post */}
      <h3>Description</h3>
      <p>{description}</p>
      {/* Display the comments associated with the post */}
      <CommentList/>
    </div>
  )
}
