import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

const handIconImg = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg
};

const HandIcon = (props) => {
  const src = handIconImg[props.value]
  return <img src={src} alt={props.value} />;
}

export default HandIcon;
