import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../firebase-config";

export const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const postCollectionRef = collection(db, "posts");

  // create post
  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      message,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });

    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  return (
    <>
      <h1>Create Post</h1>

      <span>Title : </span>
      <input
        type="text"
        placeholder="title.."
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <span>Message : </span>
      <textarea
        placeholder="message.."
        onChange={(e) => setMessage(e.target.value)}
      />

      <br />
      <br />

      <button onClick={createPost}>Create Post</button>
    </>
  );
};
