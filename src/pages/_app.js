import '../styles/globals.css';
import Navbar from '../components/navbar';
import { useState } from 'react';


function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState('');

  const handleUser = () => {
    alert('nice');
  };



  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
