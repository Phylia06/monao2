import React from 'react'
import './Forgot.css';
function Forgot() {
  return (
    <div>
    
            <form action="" className='con'>
                <h1>
                    Forgot Password
                </h1>

                <div className="inbox">
                  <p> <label for="email">Email</label></p> 
                    <input type="email" placeholder="youremail@gmailcom" id="email" name="email" required/>
                </div>
    
                <button type="submit">
                    Send
                </button>
                
                </form>
    </div>
  )
}

export default Forgot;
