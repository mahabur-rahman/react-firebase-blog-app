import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAXCst_Cav4ouLjI6qePFruXJyz7rmzd1k",
  authDomain: "upload-img-file.firebaseapp.com",
  projectId: "upload-img-file",
  storageBucket: "upload-img-file.appspot.com",
  messagingSenderId: "937740096139",
  appId: "1:937740096139:web:6fb4a2ea4a45ae02e6ba8e",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
