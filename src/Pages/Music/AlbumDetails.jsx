import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router';
import CommentList from '../../components/CommentList/CommentList';

export default function AlbumDetails(props) {
  const {id} = useParams();
  const [comment, setComment] = useState([])

  async function fetchDetails() {
    try {
      const res = await fetch(`http://localhost:4000/post/${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await res.json();
      setComment(data);
    } catch (error) {
      console.error(`An error occurred while fetching the post: ${error}`);
    }
  }

  useEffect(()=>{
    if(id){
      fetchDetails();
    }
  },[id])

  const { description } = comment;

  return (
    <div>
      <p>{description}</p>
      <CommentList/>
    </div>
  )
}
