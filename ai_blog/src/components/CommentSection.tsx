"use client";
import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

type Comment = {
  id: string;
  text: string;
};

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [editId, setEditId] = useState<string | null>(null);
  const [editText, setEditText] = useState<string>("");

  // Load comments from localStorage when component mounts
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // Add a new comment
  const handleAddComment = () => {
    if (!newComment.trim()) return;
    const newCommentObj: Comment = {
      id: Date.now().toString(),
      text: newComment,
    };
    setComments([newCommentObj, ...comments]); // Prepend the new comment
    setNewComment(""); // Clear input
  };

  // Delete a comment
  const handleDeleteComment = (id: string) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  // Enable edit mode
  const handleEditComment = (id: string) => {
    const commentToEdit = comments.find((comment) => comment.id === id);
    if (commentToEdit) {
      setEditId(id);
      setEditText(commentToEdit.text);
    }
  };

  // Save the edited comment automatically
  const handleSaveEdit = () => {
    if (editId) {
      setComments(
        comments.map((comment) =>
          comment.id === editId ? { ...comment, text: editText } : comment
        )
      );
      setEditId(null); // Exit edit mode
      setEditText(""); // Clear edit input
    }
  };

  return (
    <div className="w-full mx-auto mt-20 p-4 border border-gray-300 rounded-lg shadow-sm">
      <h1 className="text-2xl font-semibold mb-12">Comment Section</h1>

      {/* Input for new comments */}
      <div className="mb-4 flex">
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="flex-1 border border-gray-300 rounded-l-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
        >
          Post
        </button>
      </div>

      {/* Display comments */}
      <ul className="space-y-3">
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="border border-gray-300 p-3 rounded-md flex justify-between items-center"
          >
            {editId === comment.id ? (
              <div className="flex-1">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onBlur={handleSaveEdit} // Save when input loses focus
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSaveEdit(); // Save on Enter key
                  }}
                  className="border border-gray-300 w-full p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
            ) : (
              <span className="flex-1">{comment.text}</span>
            )}
            <div className="ml-4 flex space-x-2">
              <button
                onClick={() => handleEditComment(comment.id)}
                className="bg-black text-white px-3 py-1 rounded-md"
              >
                <FaRegEdit />
              </button>
              <button
                onClick={() => handleDeleteComment(comment.id)}
                className="bg-blue-950 text-white px-3 py-1 rounded-md hover:bg-blue-900"
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
