import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const reset = () => {
        setEmail("");
        setFullname("");
        setPassword("");
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            fullname,
            email,
            password,
        };

        axios
            .post('https://toplearnapi.ghorbany.dev/api/register', JSON.stringify(user),
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            .then(({ status, data }) => {
                if (status === 201) {
                    toast.success('همه چی روبه راهه', { position: "top-right", closeOnClick: true });
                    console.log(data);
                    reset();
                }
            })
            .catch(err => {
                toast.error('خطا رخ داده است', { position: "top-right", closeOnClick: true });
                reset();
                console.log(err)
            })

        console.log(user);
    }

    return (
        <main className="form-signin">
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Please Register in</h1>
                <div className="form-floating">
                    <input value={fullname} onChange={(e) => setFullname(e.target.value)} name="fullname" type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
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