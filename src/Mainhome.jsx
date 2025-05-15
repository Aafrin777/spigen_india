
import Navbarmain from './Navbarmain';
import Layer1hero from './Layer1hero';


import './index.css';

const Mainhome = () => {
  return (
    <div className="mainhome-container">
      <Navbarmain />
      <Layer1hero />

      {/* Optionally include your Footer here */}
    </div>
  );
};

export default Mainhome;