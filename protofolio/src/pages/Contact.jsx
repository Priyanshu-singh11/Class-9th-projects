const Contact = ()=>{
  return(
    <>
      <div style={{background:"white"}} className="container my-5 shadow">
        <div className="row  py-4" >
          <h1 className="my-3 h1">Contact</h1>
          <div className="col-md-6 y-3">

            <div class="form-outline">
  <label class="form-label h5" htmlFor="formControlLg">Name</label>
  <div className="shadow rounded-5">
    <input type="text" id="formControlLg" className="h1  form-control form-control-lg lead" />
  </div>
</div>
            
          </div>       

          <div className="col-md-6 y-3">

            <div class="form-outline">
  <label class="form-label h5" htmlFor="formControlLg">Email</label>
  <div className="shadow rounded-5">
    <input type="email" id="formControlLg" className="h1  form-control form-control-lg lead" />
  </div>
</div>    
          </div>       
          <div className="col-md-6 y-3">

            <div class="form-outline">
  <label class="form-label h5" htmlFor="formControlLg">password</label>
  <div className="shadow rounded-5">
    <input type="password" id="formControlLg" className="h1  form-control form-control-lg lead" />
  </div>
</div>
            
          </div>       
          <div className="col-md-6 y-3">

            <div class="form-outline">
  <label class="form-label h5" htmlFor="formControlLg">Mobile Number</label>
  <div className="shadow rounded-5">
    <input type="number" id="formControlLg" className="h1  form-control form-control-lg lead" />
  </div>  
         </div>   
            </div>
          </div>
        <button type="button" className="btn btn-primary my-2">Sumbit</button>
    </div>
      
    </>
  )
}

export default Contact;