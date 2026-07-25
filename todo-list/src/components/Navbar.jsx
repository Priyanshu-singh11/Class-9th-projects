import { RiTodoLine } from "react-icons/ri"
export default function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="header">
          <RiTodoLine style={{ color: '#00ff03' ,fontSize:"43px",margin:"0.4rem"}} /> 
          <h1 className="title">TODO-APP</h1>
          <RiTodoLine style={{ color:'#cb223b' ,fontSize:"43px"}} /> 
        </div>
      </div>
    </>
  )
}