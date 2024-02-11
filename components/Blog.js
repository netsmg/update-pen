// Blog.js
import { useState } from 'react';
import { firestore, serverTimestamp } from '../config/firebase';

export function CreatePost() {
  const [content, setContent] = useState('');

  const createPost = async () => {
    await firestore.collection('posts').add({
      content,
      createdAt: serverTimestamp(),
    });
    setContent('');
  };

  return (
    <div>
      <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}

export function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.content}</li>
      ))}
    </ul>
  );
}
