import {useState} from 'react';
import Button from './Button';
import Dice from './Dice';

function random(n) {
  return Math.ceil(Math.random() * n);
}



function App() {

  const [num, setNum] = useState(1);
  const [num2, setNum2] = useState(1);

  const handleRollClick = () => {
    setNum(random(6));
    setNum2(random(6));
  };

  const handleClearClick = () => {
    setNum(1);
    setNum2(1);
  };

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      
      <Dice color="red" num={num} />
      <Dice color="blue" num={num2} />
    </div>
  );
}

export default App;