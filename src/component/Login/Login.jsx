import React,{useState} from 'react';
import { toast } from 'react-toastify';
import {withRouter} from "react-router-dom";
import { LoginUser } from '../../services/userServices';

const Login = props => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const reset=()=>{
        setEmail("");
        setPassword("");
    }

    const handleSubmit= async(event)=>{
        event.preventDefault();

        const user={
            email,
            password
        }
        try {
            const { status,data } = await LoginUser(user);
            if (status === 201) {
                toast.success('همه چی روبه راهه', { position: "top-right", closeOnClick: true });
            }
            localStorage.setItem("token",data.token)
            History.replace("/");
            reset();
        } catch (err) {
            toast.error('خطا رخ داده است', { position: "top-right", closeOnClick: true });
            reset();
            console.log(err)
        }
    }
    return (
        <main className="form-signin">
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <div className="form-floating">
                    <input name="email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={e=>setEmail(e.target.value)}/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
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