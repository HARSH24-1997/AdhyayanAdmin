import React from 'react'

function Login() {
    return (
        <div className="px-5">
         <form>
            <div class="form-group"> <input type="email" class="form-control" placeholder="Enter email" id="form9"/> </div>
            <div class="form-group mb-3"> <input type="password" class="form-control" placeholder="Password" id="form10"/> <small class="form-text text-muted text-right">
                <a href="#"> Recover password</a>
              </small> </div> <button type="submit" class="btn btn-primary">Submit</button>
          </form>   
        </div>
    )
}

export default Login
