import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'

const ResultsModal = ({ isModalVisible, onBackdropClick, children }) => {

    if (!isModalVisible) {
        return null
    }


    return ReactDOM.createPortal(
        <div className='overlay' onClick={onBackdropClick}>
            <div className='modal-container' onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
        , document.getElementById('modal-root'))
}

export default ResultsModal