import React from 'react'
import Illustration from '../Illustration'
import signUpImg from '../../assets/images/signup.svg'
import SignUpForm from '../SignUpForm'

export default function SignUp() {
    return (
        <>
            <h1>Create an Account</h1>
            <div className='column'>
                <Illustration src={signUpImg} alt="Signup" />

                <SignUpForm />
            </div >
        </>
    )
}
