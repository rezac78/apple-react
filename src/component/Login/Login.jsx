import React, { useState, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { toast } from 'react-toastify';
import { withRouter } from "react-router-dom";
import { Sugar } from 'react-preloaders';
import { Helmet } from "react-helmet";
import { LoginUser } from '../../services/userServices';

const Login = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [, forceUpdate] = useState();

    const validator = useRef(new SimpleReactValidator({
        messages: {
            required: "پرکردن الزامی است",
            min: "کمتر از 4 نباشد",
            email: "ایمیل نئشته شده صحیح نیست"
        },
        element: message => <div style={{ color: "red" }}>{message}</div>
    }))

    const reset = () => {
        setEmail("");
        setPassword("");
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const user = {
            email,
            password
        }
        try {
            if (validator.current.allValid()) {
                setLoading(true);
                const { status, data } = await LoginUser(user);
                if (status === 201) {
                    toast.success('همه چی روبه راهه', { position: "top-right", closeOnClick: true });
                }
                setLoading(false);
                localStorage.setItem("token", data.token)
                History.replace("/");
                reset();
            } else {
                setLoading(false);
                validator.current.showMessages();
                forceUpdate(1)
            }
        } catch (err) {
            toast.error('خطا رخ داده است', { position: "top-right", closeOnClick: true });
            reset();
            console.log(err)
        }
    }
    return (
        <main className="form-signin">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                {loading ? (
                    <Sugar time={0} color="#fc03d7" customLoading={loading} />
                ) : null}
                <div className="form-floating">
                    <input name="email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={e => {
                        setEmail(e.target.value);
                        validator.current.showMessageFor("email")

                    }} />
                    {validator.current.message("email", email, "required|email")}
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={e => {
                        setPassword(e.target.value);
                        validator.current.showMessageFor("password")
                    }} />
                    {validator.current.message("password", password, "required|min:4")}
                    <label for="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input name="remember" type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </main>
    )
}

export default withRouter(Login);