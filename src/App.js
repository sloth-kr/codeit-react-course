import Button from './Button';
import Dice from './Dice';

function App() {
  return (
    <div>
      <Dice color="red" num={2} />
      <Dice color="blue" num={6} />

      <div>
        <Button>던지기</Button>
        <Button>처음부터</Button>
      </div>
    </div>
  );
}

export default App;