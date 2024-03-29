import React from 'react';

const Register = () => {
    return (
        <div className="container">
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    <input type="Text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="seller" value="option1" />
                    <label class="form-check-label" for="seller">Seller</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="user" value="option2" />
                    <label class="form-check-label" for="user">User</label>
                </div>
                <br/>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default Register;