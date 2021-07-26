import React from 'react';

const Register = () => {
    return (
        <main className="form-signin">
            <form>
                <h1 className="h3 mb-3 fw-normal">Please Register in</h1>
                <div className="form-floating">
                    <input name="fullname" type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input name="email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input name="remember" type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Register in</button>
            </form>
        </main>
    )
}

export default Register;