import { useState } from 'react';
import illustration from '../assets/login-illustration.svg';


function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const handleSubmit = (e) => {
e.preventDefault();
console.log('Email:', email, 'Password:', password);
// Later: integrate with backend authentication
};


return (
<div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
<div className="row w-100 shadow-lg" style={{ maxWidth: '900px', borderRadius: '1rem', overflow: 'hidden' }}>
{/* Illustration Section */}
<div className="col-md-6 d-none d-md-flex p-0 bg-primary justify-content-center align-items-center">
<img src={illustration} alt="Login Illustration" className="img-fluid p-4" style={{ maxHeight: '80%' }} />
</div>


{/* Form Section */}
<div className="col-12 col-md-6 bg-white p-5 d-flex flex-column justify-content-center">
<h3 className="text-center mb-4">Smart LMS Login</h3>
<form onSubmit={handleSubmit}>
<div className="mb-3">
<label htmlFor="email" className="form-label">Email address</label>
<input
type="email"
className="form-control"
id="email"
placeholder="Enter email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
</div>
<div className="mb-3">
<label htmlFor="password" className="form-label">Password</label>
<input
type="password"
className="form-control"
id="password"
placeholder="Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
required
/>
</div>
<button type="submit" className="btn btn-primary w-100">Login</button>
</form>
<p className="text-center mt-3 mb-0">
<a href="#" className="text-decoration-none">Forgot password?</a>
</p>
</div>
</div>
</div>
);
}


export default Login;