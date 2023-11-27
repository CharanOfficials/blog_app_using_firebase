import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useEffect } from 'react';
const PostDetail = () => {
  const [post, setPost] = useState([]);
  const { postId } = useParams();
  useEffect(() => {
    const docs = async () => {
      const docRef = doc(db, 'blogs', postId);
      const docSnap = await getDoc(docRef);
      setPost(docSnap.data());
    };
    docs();
  }, []);
  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;
