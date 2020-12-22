import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { PopupProps } from '../../types/index'

const PopupBox: React.FC<PopupProps> = ({ open, close, errorMsg }) => (
  <Popup open={open} closeOnDocumentClick onClose={() => close('')}>
    {(close: any) => (
      <div className='modal'>
        <button className='close' onClick={close}>
          &times;
        </button>
        <div className='header'>
          <h3>Error</h3>
        </div>
        <div className='content'>{errorMsg}</div>
        <div className='actions'>
          <button
            className='button'
            onClick={() => {
              close();
            }}
          >
            I understand
          </button>
        </div>
      </div>
    )}
  </Popup>
);

export default PopupBox;
