import { use, useEffect, useState } from 'react';

const Leaderboard = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://22i0ulr0k4.execute-api.eu-north-1.amazonaws.com/staging/api/leaderboard', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setPosts([...data]))
      .catch((error) => console.log(error));
  }, []);

  const Posts = posts.map((post) => (
    <div id='user-score' key={Math.random()}>
      <h1>Username: {post.username}</h1>
      <h2>WPM: {post.highScore}</h2>
      <hr />
    </div>
  ));
  return (
    <div>
      <h1 id='leaderboard'>Leaderboard</h1>
      <div id='score-container'>{Posts}</div>
    </div>
  );
};

export default Leaderboard;
