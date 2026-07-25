import React,{useState} from 'react';
const ShowingModal = ({closeModal,showTitle,showPopUp,desc}) => {
    return(
      <div className="show-modal">
        <div className="modal-data p-3 col-md-12 shadow">
          <h3 className="b-family">{showTitle}</h3>
        <i>{desc}</i>
        <p className="my-1 f-family">{showPopUp}</p>
          
        <button onClick={closeModal} className="btn shadow btn-dark">close</button>
        </div>
      </div>
    )
  }
export default ShowingModal;