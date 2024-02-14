import React from 'react'

const SignUp = () =>
 {
  return(
    <>
    <div class="wrapper">
    
    <div class="title">
       SignUp form
    </div>
    <form action="#">

       <div class="field">
          <input type="text" required/>
          <label>FIRST-NAME</label>
       </div>

       <div class="field">
          <input type="M-NO." required/>
          <label>MOBILE NUMBER</label>
       </div>

       <div class="field">
          <input type="E-MAIL ID" required/>
          <label>E-MAIL ID</label>
       </div>

       <div class="field">
          <input type="PASSWORD" required/>
          <label>PASSWORD</label>
       </div>

       <div class="field">
          <input type="C-PASSWORD" required/>
          <label>C-PASSWORD</label>
       </div>

       <div class="field">
          <input type="ADDRESS" required/>
          <label>ADDRESS</label>
       </div>
       <div class="field">
               <input type="submit" value="SignUp"/>
            </div>

       
       
       
    </form>
 </div>
      
    </>
  )
   


}

export default SignUp