import '../styles/login.css'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login-card">
        <div className="brand">
            <div className="brand-logo"></div>
            <h1>Mornix Login</h1>
            {/* <p>Enter your credentials to access your account</p> */}
        </div>

        <form id="loginForm">
            <div className="login-form-group">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="name@company.com"
                    autoComplete="email"
                />
                <div className="error" id="emailError"></div>
            </div>

            <div className="login-form-group">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    />
                <div className="error" id="passwordError"></div>
            </div>

            <div className="remember-forgot">
                {/* <div className="remember-me">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                </div> */}
                <a href="#" className="forgot-password">Forgot password?</a>
            </div>

            <button type="submit" className="login-btn" id="loginButton">
                Sign in
            </button>
        </form>

        <div className="signup-link">
            <p>Don&apos;t have an account? <NavLink to="/create">Sign up</NavLink></p>
        </div>
    </div>
  )
}

export default Login