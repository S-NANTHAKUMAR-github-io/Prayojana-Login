import React from 'react'
import './Signin.css'
import bgimg from '../images/background.png'
import logo from '../images/image1.ico'
import fbimg from '../images/fb-Social.png'
import twimg from '../images/tw-social.png'
import gtimg from '../images/git-social.png'
import {Link,Route,Routes,useNavigate} from 'react-router-dom'

function Signin() {



    return (
    <div>
        <Link to='/'></Link>
        <div className='frame'>
            {/* right-side */}
            <div className='right-side'>
                {/* right-image */}
                <div className='right-image'>
                    <img src={bgimg} alt='backgroungimg' />
                </div>
            </div>

            {/* left-side */}

            <div className='content'>
                {/* header */}
                <div className='header'>
                    {/* prayojana-logo */}
                    <div className='logo'>
                        <img src={logo} alt='logo' />
                    </div>

                    <div className='headline'>
                        {/* signin-text */}
                        <div className='signin-text'>
                            <h1>Sign in to your account</h1>
                        </div>
                    </div>
                </div>
                {/* Form */}

                <div className='form'>
                    {/* text */}
                    <div className='social-signin'>
                        <div className='social-text'>
                            <h5>Sign in with</h5>
                        </div>
                    </div>
                    {/* social-login */}
                    <div className='social-button'>
                        {/* facebook */}
                        <div className='fb-box'>
                            <div className='fb-outer-box'>
                                <div className='fb'>
                                    <button><img src={fbimg} alt='fb-img' /></button>
                                </div>
                            </div>
                        </div>
                        {/* twitter */}
                        <div className='tw-box'>
                            <div className='tw-outer-box'>
                                <div className='tw'>
                                    <button><img src={twimg} alt='tw-img' /></button>
                                </div>
                            </div>
                        </div>
                        {/* github */}
                        <div className='gt-box'>
                            <div className='gt-outer-box'>
                                <div className='gt'>
                                    <button><img src={gtimg} alt='gt-img' /></button>
                                </div>
                            </div>
                        </div>
                        {/* Ribbon */}
                        <div className='ribbon'>
                            <div className='divider-1'></div>
                            <div className='rib-text'>
                                <h5>Or continue with</h5>
                            </div>
                            <div className='divider-2'></div>
                        </div>

                        {/* email-input */}
                        <div className='email-input'>
                            <div className='email-label'>
                                <h5>Email address</h5>
                            </div>

                            <div className='email-form'></div>

                            <div className='email-placeholder'>
                                <input type='email' />
                            </div>
                        </div>

                        {/* password-input */}
                        <div className='password-input'>
                            <div className='password-label'>
                                <h5>Password</h5>
                            </div>

                            <div className='password-form'></div>

                            <div className='password-placeholder'>
                                <input type='password' />
                            </div>
                        </div>

                        {/* Supporting-input */}
                        <div className='supporting-input'>
                            <div className='checkbox-txt'>
                                <div className='input-checkbox'>
                                    <input type='checkbox' />
                                </div>
                                <div className='checkbox-label'>
                                    <h5>Remember me</h5>
                                </div>
                            </div>
                            <div className='Forget-textbox'>
                                <div className='forget-label'>
                                    <h5>Forget your password?</h5>
                                </div>
                            </div>
                        </div>

                        {/* Signin-button */}
                        <div className='signin-button'>
                            <input type='button' />
                            <div className='button-label'>
                                <h5>Sign in</h5>
                            </div>
                        </div>

                        {/* New customer Signup */}

                        <div className='signup-text'>
                            <Link to='/signup' >New customer? Sign up</Link>
                        </div>

                    </div>



                </div>

            </div>

        </div>
        </div>
    )
}

export default Signin