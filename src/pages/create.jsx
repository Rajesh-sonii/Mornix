import { NavLink } from "react-router-dom"
import "../styles/create.css"

const Create = () => {
    return (
        <div className="signup-card">
            <div className="brand">
                <div className="brand-logo"></div>
                <h1>Become a member</h1>
                {/* <p>Enter your credentials to access your account</p> */}
            </div>

            <form id="signupForm">
                <div className="form-column">

                    <div className="form-group">
                        <label htmlFor="email">Refer By</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="name@company.com"
                            autoComplete="email"
                        />
                        <div className="error" id="emailError"></div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Full Name</label>
                        <input
                            type="text"
                            id="password"
                            placeholder="Enter your password"
                            autoComplete="current-password"
                        />
                        <div className="error" id="passwordError"></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Email ID</label>
                        <input
                            type="email"
                            id="password"
                            placeholder="Enter your password"
                            autoComplete="current-password"
                        />
                        <div className="error" id="passwordError"></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Address</label>
                        <input
                            type="text"
                            id="password"
                            placeholder="Enter your password"
                            autoComplete="current-password"
                        />
                        <div className="error" id="passwordError"></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Create Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            autoComplete="current-password"
                        />
                        <div className="error" id="passwordError"></div>
                    </div>
                    <div className="signup-link">
                <NavLink to='/login'>← Back to login</NavLink>
            </div>
                </div>
                <div className="form-column-2">

                    <div className="form-group">
                        <label htmlFor="password">Refer Code</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            autoComplete="current-password"
                        />
                        <div className="error" id="passwordError"></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mobile</label>
                        <input
                            type="number"
                            id="password"
                            placeholder="Enter your password"
                            autoComplete="current-password"
                        />
                        <div className="error" id="passwordError"></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">State</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            autoComplete="current-password"
                        />
                        <div className="error" id="passwordError"></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Date Of Birth</label>
                        <input
                            type="date"
                            id="password"
                            placeholder="Enter your password"
                            autoComplete="current-password"
                        />
                        <div className="error" id="passwordError"></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            autoComplete="current-password"
                        />
                        <div className="error" id="passwordError"></div>
                    </div>
                    {/* <div className="remember-forgot">
                <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
                </div>
                <a href="#" className="forgot-password">Forgot password?</a>
                </div> */}

                    <button type="submit" className="signup-btn" id="loginButton">
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Create