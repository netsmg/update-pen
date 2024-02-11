// index.js
import { SignIn, SignOut } from '../components/Auth';
import { CreatePost, Posts } from '../components/Blog';
import { useCollection } from 'react-firebase-hooks/firestore';
import { getAuth, onAuthStateChanged } from '../config/firebase';
import { firestore } from '../config/firebase';

export default function Home() {
  const [user] = useAuthState(getAuth());
  const [postsSnapshot, loading, error] = useCollection(firestore.collection('posts'));

  return (
    <div>
      {user ? (
        <>
          <SignOut />
          <CreatePost />
          {error && <p>Error: {error.message}</p>}
          {loading && <p>Loading...</p>}
          {postsSnapshot && <Posts posts={postsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))} />}
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
}
