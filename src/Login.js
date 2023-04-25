import React from 'react'
import img1 from './images/background.png'
import img2 from './images/image1.ico'
import './Login.css'

function Login() {
  return (
    <div>
        {/* whole page */}
        <div className='two-section'>

           {/* left side */}
            <div className='left-side'>

                {/* prayojana logo */}
                <img src={img2} alt='logo'/>
                <div className='signin-text'>
                    <h1>Sign in to your account</h1>
                </div>

                {/* email input field */}

                <div className='email-input'>
                    <h5>Email address</h5>
                    <div className="input-group flex-nowrap">
                        <input type="email" className="form-control" placeholder="email" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                </div>

                {/* password input field */}
                <div className='password-input'>
                    <h5>Password</h5>
                    <div className="input-group flex-nowrap">
                        <input type="password" className="form-control" placeholder="password" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                </div>

                 {/* check-box */}

                 <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /><br/>
                </div>
                {/* Remember me */}
                <div className='remember-me'>
                    <h5>
                        Remember me
                    </h5>
                </div>

                {/* Forget password */}
                <div className='forget-password'>
                    <h5>Forget your password?</h5>
                </div>


            </div>

            {/* Image section  Rightside*/}
            <div className='right-side'>
                <img src={img1} alt='Background-img' />
            </div>
        </div>
    </div>
  )
}

export default Login