import React from 'react'

const Login = () => {
  return (
    <div>

<div className="container">
    <div className="row justify-content-center vh-100 align-items-center">
        <div className="col col-12 col-sm-8 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
            
<div class="card shadow">
  <div class="card-body">
    <h4 class="text-center">User Login</h4>
    <div className="mb-3">
        <label htmlFor="" className="form-label">Username</label>
        <input type="text" className="form-control" />
    </div>
    <div className="mb-3">
        <label htmlFor="" className="form-label">Password</label>
        <input type="text" className="form-control" />
    </div>
    <div className="mb-3">
        <button className="btn btn-success">Login</button>
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