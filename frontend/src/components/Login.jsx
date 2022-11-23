import { useState } from "react"
import { FaArrowLeft } from "react-icons/fa"

function Login() {

    const [fade, setFade] = useState(false)

    return <div className="register">


        <div className="card">
            <div className="card-title">
                <img src="https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg" alt="" />
            </div>

            <div className="card-body">
                {fade ? <input type="checkbox" id="dot" checked /> : <input type="checkbox" id="dot" />}
                <div className="card-body-username">
                    <div className="form-group">
                        <h3>Sign In</h3>
                    </div>

                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>

                    <div className="form-group">
                        <p className="card-footer">No account? <span>Create one!</span></p>
                    </div>

                    <div className="form-group">
                        <p className="card-footer">
                            <span>Sign in with a security key</span>
                        </p>
                    </div>

                    <div className="form-group">
                        <div className="btn-container">
                            <button className="btn" onClick={() => setFade(prevState => !prevState)}>Next</button>
                        </div>
                    </div>

                </div>

                <div className="card-body-password">
                    <div className="form-group">
                        <div className="arrow-current-user">
                            {/* <div className="arrow"> */}
                                <FaArrowLeft className="arrow" onClick={() => setFade(prevState => !prevState)}/>
                            {/* </div> */}
                            <div className="current-user">
                                <p>me@hotmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <h3>Enter Password</h3>
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="password" />
                    </div>

                    <div className="form-group">
                        <p className="card-footer">
                            <span>forgot password?</span>
                        </p>
                    </div>

                    <div className="form-group">
                        <div className="btn-container">
                            <button className="btn">Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default Login