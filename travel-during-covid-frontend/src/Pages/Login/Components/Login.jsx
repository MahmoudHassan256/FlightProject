import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import '../../../styles/styles.css'
import { useNavigate } from 'react-router-dom'
import { defaultUrl } from '../../../Components/Constants';
export default function Login() {
    const navigate = useNavigate();
    const [emailEl, setEmail] = useState('');
    const [passwordEl, setPassword] = useState('');
    const [erroremail, setErroremail] = useState(null);
    const [errorpassword, setErrorpassword] = useState(null);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    function isValidPassword(password) {
        if (password.length < 8) return false;
        else
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(password);
    }
    const handleChangeemail = event => {
        if (!isValidEmail(event.target.value)) {
            setErroremail('Email is invalid');
        } else {
            setErroremail(null);
        }

        setEmail(event.target.value);
    };
    const handleChangepassword = event => {
        if (!isValidPassword(event.target.value)) {
            setErrorpassword('Password is invalid length 8 need to have at least 1 Upercase LowerCase and numbers');
        } else {
            setErrorpassword(null);
        }

        setPassword(event.target.value);
    };

    return (
        <section className="book" id="register-from">
            <h1 className="heading">
                <span>l</span>
                <span>o</span>
                <span>g</span>
                <span>i</span>
                <span>n</span>

                <span className="space"></span>
                <span>f</span>
                <span>o</span>
                <span>r</span>
                <span>m</span>
            </h1>
            <div className="row">
                <div className='side'>
                    <form action="">
                        <div className="inputBox">
                            <h3>Email</h3>
                            <input id="email" name="email" type="email" placeholder="enter email here..." value={emailEl} onChange={handleChangeemail} />
                        </div>
                        <div className="inputBox">
                            <h3>Password</h3>
                            <input id="password" name="password" type="password" className="box" placeholder="enter password here..." value={passwordEl} onChange={handleChangepassword} />
                            {erroremail && <h2 style={{ color: 'red' }}>{erroremail}</h2>}
                            {errorpassword && <h2 style={{ color: 'red' }}>{errorpassword}</h2>}

                        </div>
                        <button className="btn" id="btn" type="button"
                            onClick={async () => {
                                if (!errorpassword && !erroremail)
                                    if (!emailEl || !passwordEl) { setErroremail("Fill form") }
                                    else {
                                        const user = { email: emailEl, password: passwordEl };
                                        const URL = defaultUrl+"api/users/getUser"
                                        const response =await fetch(URL, {
                                            method: "post",
                                            headers:
                                            {
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify(user),
                                        });
                                        const content = await response.json();
                                        if (content.length > 0) {
                                            alert("User Found");
                                            const cookies = new Cookies();
                                            cookies.set(content[0].role, content[0].fullname, { path: "/" });
                                            navigate("/");
                                        }
                                        else { alert(content["msg"]); }
                                    }

                            }
                            }
                        >Login</button>
                    </form>
                    <div className="not-found">
                        <h3>Dont have an account?</h3>
                        <h3 className='clickableText' onClick={() => { navigate('/Register'); window.scrollTo(0, 0) }}>Register Now</h3>
                    </div>
                </div>
                <div className="image">
                    <img src="images/login-img.jpg" alt="" />
                </div>
            </div>
        </section >)
}
