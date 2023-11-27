import { getDocs, collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const data = async () => {
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      const posts = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setPosts(posts);
    };
    data();
  }, []);
  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div>Charanjeet Singh</div>
      {console.log(posts)}
      {posts.map((post, i) => (
        <div className="post" key={`post-${i}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.subTitle}</p>
          <p>{post.createdAt.split('T')[0]}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
