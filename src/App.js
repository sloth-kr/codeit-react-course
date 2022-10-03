import {useState} from 'react';
import Button from './Button';
import Dice from './Dice';

function random(n) {
  return Math.ceil(Math.random() * n);
}



function App() {

  const [num, setNum] = useState(1);
  const [num2, setNum2] = useState(1);

  const [sum, setSum] = useState(0);
  const [sum2, setSum2] = useState(0);

  const [gameHistory, setGameHistory] = useState([]);
  const [gameHistory2, setGameHistory2] = useState([]);


  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    setGameHistory([...gameHistory, nextNum]);



    const nextNum2 = random(6);
    setNum2(nextNum2);
    setSum2(sum2 + nextNum2)
    setGameHistory2([...gameHistory2, nextNum2]);
  };

  const handleClearClick = () => {
    setNum(1);
    setNum2(1);
    setGameHistory([]);
  
    setSum(0);
    setSum2(0);
    setGameHistory2([]);
  };

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <h2>나</h2>
        <Dice color="red" num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <p>{gameHistory.join(', ')}</p>
        <h2>너</h2>
        <Dice color="red" num={num2} />
        <h2>총점</h2>
        <p>{sum2}</p>
        <p>{gameHistory2.join(', ')}</p>
      </div>
    </div>
  );
}

export default App;