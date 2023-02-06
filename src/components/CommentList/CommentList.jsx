import React, { useState, useEffect } from "react";
import "./style/commentList.css"

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [newComment, setNewComment] = useState("");
  const [isEditing, setEditing] = useState(false);
  const [updatedComment, setUpdatedComment] = useState("");
  const [postId, setPostId] = useState(null);


  useEffect(() => {
    fetchComment()
  }, []);

  const fetchComment = () => {
    fetch("http://localhost:4000/comment")
    .then(res => res.json())
    .then(data => setComments(data))
    .catch(error => console.error(error));
  }

  const handleAddComment = () => {
    fetch("http://localhost:4000/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: name, comment: newComment })
    })
      .then(res => res.json())
      .then(data => {
        setComments([...comments, data]);
        setName("");
        setNewComment("");
      })
      .catch(error => console.error(error));
  };

  async function handleDeletePost(postId) {
    try {
      console.log(`/Post/${postId}`)
      // Send the delete request to the backend API
      const res = await fetch(`http://localhost:4000/comment/${postId}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to delete post");
      }
      // Refresh the list of posts
      fetchComment();
    } catch (error) {
      console.error(error);
    }
  }
  const handleUpdatePost = (postId) => {
    // setEditingCommentId(postId);
    setEditing(true);
    setPostId(postId);
  };

  const handleSavePost = postId => {
    fetch(`http://localhost:4000/comment/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ comment: updatedComment })
    })
      .then(res => res.json())
      .then(data => {
        setComments(
          comments.map(comment => {
            if (comment._id === postId) {
              return { ...comment, comment: updatedComment };
            }
            return comment;
          })
        );
        setEditing(false);
      })
      .catch(error => console.error(error));
  };
  
  

  return (
    <div>
      <input className="input" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <textarea className="input" value={newComment} onChange={e => setNewComment(e.target.value)} placeholder="Comment" />
      <button onClick={handleAddComment}>Add Comment</button>
      <ul>
        {comments.map(comment => (
          <li key={comment._id}>
            <p className="name">Name: {comment.name}</p>
            <p className="name">Comment: {comment.comment}</p>
            <button onClick={() => handleDeletePost(comment._id)}>Delete</button>
            <button onClick={() => handleUpdatePost(comment._id)}>Update</button>
            {isEditing && comment._id === postId ? (
              <div>
                <input className="input"
                  type="text"
                  value={updatedComment}
                  onChange={e => setUpdatedComment(e.target.value)}
                  placeholder="Enter the updated comment"
                />
                <button onClick={() => handleSavePost(comment._id)}>Save</button>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
