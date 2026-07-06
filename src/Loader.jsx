export default function(){
  const mystyle = {
    height:"100vh",
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }
  return(
    <>
    <div style={mystyle}>
      <div className="spinner-border" role="status">
  <span className="sr-only">Loading...</span>
</div>
    </div>
    </>
  )
}