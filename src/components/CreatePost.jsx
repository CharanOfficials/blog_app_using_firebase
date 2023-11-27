import { db } from '../firebase.js';
import { addDoc, collection } from 'firebase/firestore';
import { useFormInput } from '../hooks.js';
const CreatePost = () => {
  const title = useFormInput('');
  const content = useFormInput('');
  const subTitle = useFormInput('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'blogs'), {
      title: title.value,
      subTitle: subTitle.value,
      content: content.value,
      createdAt: new Date().toISOString(),
    });
  };

  return (
    <>
      <h1>Create Post</h1>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>
        <div className="form-field">
          <label>Sub Title</label>
          <input {...subTitle} />
        </div>
        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>
        <button className="create-post-btn">Create Post</button>
      </form>
    </>
  );
};

export default CreatePost;
