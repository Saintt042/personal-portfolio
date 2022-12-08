import './LogoStyle.scss';
import img from '../../../assets/images/img-m.svg';
import { useRef } from 'react';

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  return (
   <div className="logo-container">
    <img src={img} alt="LoGo" className="solid-logo" />
   </div>
  )
}

export default Logo