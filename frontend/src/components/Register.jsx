import { useState, useRef } from "react"
import { FaArrowLeft } from "react-icons/fa"
function Register() {
    const [emailTail, setEmailTail] = useState("@outlook.com")
    const [emailHead, setEmailHead] = useState("")
    const [newUser, setNewUser] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [errorStyle, setErrorStyle] = useState({ display: "none" })
    const [errorMessage, setErrorMessage] = useState("")
    const [errorOccured, setErrorOccured] = useState(false)
    const [fade, setFade] = useState(false)

    const emailHeadRef = useRef("")

    //Error messages checker and provider
    const checkEmailHead = (next = false) => {
        const regex = /^[a-zA-Z]/

        if (emailHeadRef.current === "") {
            setErrorOccured(true)
            setErrorMessage("An email address is required")
            setErrorStyle({
                display: "block",
                color: "red",
                marginBottom: "7px"
            })
        } else if (!regex.test(emailHeadRef.current)) {
            setErrorOccured(true)
            setErrorMessage("Enter the email address in the format someone@example.com.")
            setErrorStyle({
                display: "block",
                color: "red",
                marginBottom: "7px"
            })
        } else if (emailHeadRef.current !== "" && next) {
            setNewUser(emailHead + emailTail)
            setFade(prevState => !prevState)
            setErrorStyle({
                display: "none"
            })
        } else if (emailHeadRef.current !== "" && !next) {
            setErrorMessage("")
        }
    }

    //Works when clicking on card-body-username button
    const handleClickUsername = () => {
        checkEmailHead(true)
    }

    const handleEmailHead = (e) => {
        setEmailHead(e.target.value)
        emailHeadRef.current = e.target.value
        if (errorOccured) {
            checkEmailHead()
        }
    }
    return <div className="register">
        
        <div className={fade ? "card card-lg" : "card"}>
        {/* <div className="loading"></div> */}
            <div className="card-title">
                <img src="https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg" alt="" />
            </div>

            <div className="card-body">
                {fade ? <input type="checkbox" id="dot" checked /> : <input type="checkbox" id="dot" />}
                <div className="card-body-username">
                    <div className="form-group">
                        <h3>Create account</h3>
                    </div>


                    <p style={{ ...errorStyle }}>{errorMessage}</p>


                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="New email" value={emailHead} onChange={handleEmailHead} />

                        <div className="dropdown">
                            <input type="checkbox" id="tail-dot" />
                            <label htmlFor="tail-dot">{emailTail}</label>
                            <div className="dropdown-content">
                                <label htmlFor="tail-dot" className="content-item" onClick={e => setEmailTail(e.target.innerText)}>@outlook.com</label>
                                <label htmlFor="tail-dot" className="content-item" onClick={e => setEmailTail(e.target.innerText)}>@hotmail.com</label>
                            </div>
                        </div>

                    </div>

                    <div className="form-group">
                        <div className="btn-container btn-container-for-register">
                            <button className="btn" onClick={handleClickUsername}>Next</button>
                        </div>
                    </div>
                </div>

                <div className="card-body-password">
                    <div className="form-group">
                        <div className="arrow-current-user">
                            <FaArrowLeft className="arrow" onClick={() => setFade(prevState => !prevState)} />
                            <div className="current-user">
                                <p>{newUser}</p>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <h3>Create a password</h3>
                    </div>

                    <div className="form-group">
                        <p className="advice">Enter the password you would like to use with your account</p>
                    </div>

                    <div className="form-group">
                        <input type={showPassword ? "text" : "password"} className="form-control" placeholder="Create password" />
                    </div>

                    <div className="form-group">
                        <label className="checkbox-container" htmlFor="check-item" >Show password
                            <input type="checkbox" id="check-item" onClick={() => setShowPassword(prevState => !prevState)} />
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    <div className="form-group">
                        <label className="checkbox-container" htmlFor="information-receiver">I would like information, tips, and offers about Microsoft products and services.
                            <input type="checkbox" id="information-receiver" />
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    <div className="form-group">
                        <p className="card-footer">Choosing Next means that you agree to the <span>Microsoft Services Agreement</span> and <span>privacy and cookies statement.</span></p>
                    </div>

                    <div className="form-group">
                        <div className="btn-container">
                            <button className="btn">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
}

export default Register