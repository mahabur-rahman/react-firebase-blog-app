import { useState, useEffect } from "react";
import "./App.css";
import { v4 } from "uuid";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase-config";

function App() {
  const [img, setImg] = useState(null);
  const [imgList, setImgList] = useState([]);

  const imgRef = ref(storage, "images/");

  // uploadImg
  const uploadImg = () => {
    if (img === null) return;

    const imgRef = ref(storage, `images/${img.name + v4()}`);

    uploadBytes(imgRef, img).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImgList((prev) => [...prev, url]);
      });
      alert("Upload image!");
    });
  };

  // img list show on page
  useEffect(() => {
    listAll(imgRef).then((response) => {
      console.log(response);
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImgList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <input type="file" onChange={(e) => setImg(e.target.files[0])} />

      <button onClick={uploadImg}> Upload Image</button>

      <br />
      <br />

      <h1>Show (store) image below : </h1>

      {imgList.map((img) => (
        <img key={Math.random()} src={img} alt="" width="100" />
      ))}
    </div>
  );
}

export default App;
