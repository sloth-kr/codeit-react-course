import Dice from './Dice';

function App() {
  return (
    <div>
      <Dice color="red" num={2} />
      <Dice color="blue" num={6} />
    </div>
  );
}

export default App;