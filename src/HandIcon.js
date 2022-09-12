import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

const handIconImg = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg
};

const HandIcon = ({ value }) => {
  const src = handIconImg[value]
  return <img src={src} alt={value} />;
}

export default HandIcon;
