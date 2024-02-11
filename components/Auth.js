// Auth.js
import { getAuth, signInWithPopup, GoogleAuthProvider } from '../config/firebase';

export function SignIn() {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

export function SignOut() {
  return (
    <button onClick={() => signOut(getAuth())}>Sign out</button>
  );
}
