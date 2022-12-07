import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db, auth } from "../firebase-config";

export const Home = ({ isAuth }) => {
  const [postList, setPostList] = useState([]);

  const postRef = collection(db, "posts");

  // get post
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postRef);

      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [postRef]);

  // delete post
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);

    await deleteDoc(postDoc);

    alert("Post deleted!");
  };

  return (
    <>
      <h1>See all posts ..</h1>

      {postList.map((post) => (
        <>
          <div className="post_div" key={post.id}>
            <h3>{post.title}</h3>
            <pre>{post.message}</pre>
            <strong>{post.author.name}</strong>

            <br />
            <br />
            {isAuth && post.author.id === auth.currentUser.uid && (
              <button
                onClick={() => {
                  deletePost(post.id);
                }}
              >
                Delete Post
              </button>
            )}
          </div>
        </>
      ))}
    </>
  );
};
