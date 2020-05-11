import React from 'react'

function SignUp() {
    return (
        <>
         <form class="text-left">
            <div class="form-group"> <label for="form16">Your Name</label> <input type="text" class="form-control" id="form16" placeholder="Johann W. Goethe"/> </div>
            <div class="form-group"> <label for="form18">Your email</label> <input type="email" class="form-control" id="form18" placeholder="j.goethe@werther.com"/> </div>
            <div class="form-row">
              <div class="form-group col-md-6"> <label for="form19">Password</label> <input type="password" class="form-control" id="form19" placeholder="••••"/> </div>
              <div class="form-group col-md-6"> <label for="form20">Confirm Password</label> <input type="password" class="form-control" id="form20" placeholder="••••"/> </div>
            </div>
            <div class="form-group">
              <div class="form-check"> <input class="form-check-input" type="checkbox" id="form21" value="on"/> <label class="form-check-label" for="form21"> I Agree with <a href="#">Term and Conditions</a> of the service </label> </div>
            </div> <button type="submit" class="btn btn-primary">Sign in</button>
          </form>   
        </>
    )
}

export default SignUp
