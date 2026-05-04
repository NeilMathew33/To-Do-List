import React, { useState } from 'react'

const Login = () => {

    const [input, setInput]=useState(
        {
            username:"",
            password:"",
        }
    )

const handleInput = (event) => {
setInput(
    { ...input, [event.target.name]:event.target.value}
)
}

const readValues= () => {
    console.log(input)
}
    return (
        <div>

            <div className="container">
                <div className="row justify-content-center vh-100 align-items-center">
                    <div className="col col-12 col-sm-8 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                        <div class="card">
                            <div class="card-body">
                                <h4 class="text-center">User Login</h4>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Username</label>
                                    <input type="text" className="form-control" name="username" value={input.username} onChange={handleInput} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Password</label>
                                    <input type="password" name="password" value={input.password} onChange={handleInput} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <button onClick={readValues} className="btn btn-success">Login</button>
                                </div>
                                <div className="mb-3">
                                    <a href="/SignUp">New Users Click Here</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login