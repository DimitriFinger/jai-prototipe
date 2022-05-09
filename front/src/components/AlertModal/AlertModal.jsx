import React from 'react'
import ReactDOM from 'react-dom';
import './styles.css';

const AlertModal = ({ isAlertVisible, children, setIsAlertVisible }) => {

    const closeAlert = () => {
        setIsAlertVisible(false);
    }

    if (!isAlertVisible) {
        return null
    }

    return ReactDOM.createPortal(
        <div className='overlay' >
            <div className='modal-container' onClick={e => e.stopPropagation()}>
                <div className="card">
                    <div className='card-header header-container'>
                        <button type="button" class="close" aria-label="Close" onClick={closeAlert} >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className='card-body'>
                        <h4 className="card-title">{children}</h4>
                    </div>
                </div>
            </div>
        </div>
        , document.getElementById('modal-root'))
}

export default AlertModal