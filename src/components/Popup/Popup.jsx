import React from 'react';
import './index.scss';

const Popup = ({ texto, onSim, onNao, titulo }) => {
  return (
    <div className="popup">
      <div className="popup__popup-ctn">
        <h1>Deseja {titulo} esse item?</h1>
        <p>{texto}</p>
        <div className="popup__btn-grl" >
          <button onClick={onNao} className="popup__btn-no">Não</button>
          <button onClick={onSim} className="popup__btn-yes">Sim</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;