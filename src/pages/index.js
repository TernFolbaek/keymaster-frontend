import { useEffect, useState } from 'react';
const randomWords = require('random-words');
import useStore from '../stores/useStore';

const Home = () => {
  const [words, setWords] = useState([]);
  const [time, setTime] = useState(0);
  const [totalWords, setTotalWords] = useState(10);
  const { highScore } = useStore();
  const { userId } = useStore();
  const { username } = useStore();
  const { setUser } = useStore();

  useEffect(() => {
    const RandomWords = randomWords(totalWords).join(' ');
    const splitWords = RandomWords.split('');

    setWords(splitWords);
  }, [totalWords]);

  useEffect(() => {
    document.addEventListener('keydown', handleChange);

    // clean up
    return () => {
      document.removeEventListener('keydown', handleChange);
    };
  }, [words]);

  let counter = 0;
  let seconds = 0;

  const handleHighScore = (score) => {
    console.log('in creation');

    fetch('http://localhost:2000/api/highscore', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        score,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log('nice'))
      .catch((error) => console.log('not nice'));
  };

  const handleChange = (e) => {
    let test = words[counter];

    const audio = new Audio('audio/sound.mp3');
    audio.play();

    if (seconds == 0) {
      startTimer();
    }
    let word = e.code.substring(3).toLowerCase();

    if (word == 'ce') {
      word = ' ';
    }
    if (word == test) {
      document.getElementById(counter).style.color = 'white';
      document.getElementById(counter).textShadow = ' 0px 0px 70px #fff;';

      counter = counter + 1;
    } else {
      const container = document.getElementById('container');
      container.classList.add('shake');
      setTimeout(() => {
        container.classList.remove('shake');
      }, 250);
      return;
    }

    if (counter >= words.length) {
      setTime(Math.floor((totalWords / seconds) * 1000));
      let score = Math.floor((totalWords / seconds) * 1000);
      seconds = 0;
      counter = 0;
      const RandomWords = randomWords(10).join(' ');
      const splitWords = RandomWords.split('');
      if (score > highScore) {
        setUser(userId, username, score);
        handleHighScore(score);
      }

      setWords(splitWords);
    }
  };

  const startTimer = () => {
    setInterval(() => {
      seconds += 1;
    }, 100);
  };
  const Words = words.map((word, index) => {
    if (word == ' ') {
      return (
        <h4 key={Math.random()} className='clear' id={index}>
          -
        </h4>
      );
    }
    return (
      <h4 key={Math.random()} id={index}>
        {word}
      </h4>
    );
  });
  const setTotal = (number) => {
    setTotalWords(number);
  };
  return (
    <div id='container'>
      <div className='total'>
        <h4
          onClick={() => {
            setTotal(10);
          }}
        >
          10
        </h4>
        <h4
          onClick={() => {
            setTotal(20);
          }}
        >
          20
        </h4>
        <h4
          onClick={() => {
            setTotal(30);
          }}
        >
          30
        </h4>
      </div>
      <h1 id='wpm'>WPM: {time}</h1>

      <div id='words'>{Words}</div>
    </div>
  );
};

export default Home;
