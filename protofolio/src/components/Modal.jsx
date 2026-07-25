import React,{useState} from 'react';
import ShowingModal from './ShowingModal.jsx'
const Modal = ({title,popup,desc})=>{
  const [modal,setShowModal] = useState(false)
  const closeModal = ()=>{
    setShowModal(false)
  }
  return (
    <>
      <button className="mx-2 btn shadow" onClick={()=>setShowModal(true)}>{title}</button>
      {
        modal && <ShowingModal closeModal={closeModal} showTitle={title} showPopUp={popup} desc={desc}/>
      }
    </>
  )
}
export default Modal