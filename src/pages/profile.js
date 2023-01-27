import Link from 'next/link';
import useStore from '../stores/useStore';

const Profile = () => {
  const { username } = useStore();
  const { highScore } = useStore();

  return username != null ? (
    <div id='profile'>
      <h1>{username}</h1>
      <h1>{highScore}</h1>
    </div>
  ) : (
    <div id='profile'>
      <Link href='/login'>Log In</Link>
      <Link href='/signup'>Sign Up</Link>
    </div>
  );
};

export default Profile;
