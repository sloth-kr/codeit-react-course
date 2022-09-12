import {useState} from 'react';
import Button from './Button';
import Dice from './Dice';




function App() {

  function random(n) {
    return Math.ceil(Math.random() * n)
  };

  const [num, changeNum] = useState(1);

  const handleRollClick = () => {
    const nextNum = random(6)
    changeNum(nextNum)
  }  

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button>처음부터</Button>
      </div>
      
      <Dice color="red" num={num} />
      <Dice color="blue" num={num} />
    </div>
  );
}

export default App;