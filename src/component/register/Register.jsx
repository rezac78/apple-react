import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import SimpleReactValidator from 'simple-react-validator';
import { registerUser } from './../../services/userServices';

const Register = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [, forceUpdate] = useState();
    const validation = useRef(new SimpleReactValidator({
        message: {
            required: "پرکردن الزامی است",
            min: "کمتر از 4 نباشد",
            email: "ایمیل نئشته شده صحیح نیست"
        },
        element: message => <div style={{ color: "red" }}>{message}</div>
    }))


    const reset = () => {
        setEmail("");
        setFullname("");
        setPassword("");
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        const user = {
            fullname,
            email,
            password,
        };
        try {
            if (validation.current.allValid) {
                const { status } = await registerUser(user);
                if (status === 201) {
                    toast.success('همه چی روبه راهه', { position: "top-right", closeOnClick: true });
                }
                reset();
            } else {
                validation.current.showMessages();
                forceUpdate(1)
            }
        } catch (err) {
            toast.error('خطا رخ داده است', { position: "top-right", closeOnClick: true });
            reset();
            console.log(err)
        }

        console.log(user);
    }

    return (
        <main className="form-signin">
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Please Register in</h1>
                <div className="form-floating">
                    <input value={fullname} onChange={(e) => {
                        setFullname(e.target.value)
                        validation.current.showMessageFor("fullname")
                    }} name="fullname" type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    {validation.current.message("fullname", fullname, "required|min:4")}
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" />
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