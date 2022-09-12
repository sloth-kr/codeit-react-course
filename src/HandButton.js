import HandIcon from './HandIcon.js';

const HandButton = ({ value, onClick }) => {
  const handleClick = () => onClick(value);
  return <button onClick={handleClick}><HandIcon value={value}/></button>;
}

export default HandButton;
