import React, { useState, useEffect } from "react";

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/comment")
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(error => console.error(error));
  }, []);

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

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <textarea value={newComment} onChange={e => setNewComment(e.target.value)} placeholder="Comment" />
      <button onClick={handleAddComment}>Add Comment</button>
      <ul>
        {comments.map(comment => (
          <li key={comment._id}>
            <p>Name: {comment.name}</p>
            <p>Comment: {comment.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
