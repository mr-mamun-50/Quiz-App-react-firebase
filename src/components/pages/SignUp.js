import React from 'react'
import Form from '../Form'
import Illustration from '../Illustration'
import styles from '../../styles/SignUp.module.css'
import TextInput from '../TextInput'
import CheckBox from '../CheckBox'
import Button from '../Button'
import signUpImg from '../../assets/images/signup.svg'
import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <>
            <h1>Create an Account</h1>
            <div className='column'>
                <Illustration src={signUpImg} alt="Signup" />
                <Form className={`${styles.signup}`} >
                    <TextInput type='text' placeholder="Enter name" icon="person" />
                    <TextInput type='email' placeholder="Enter email" icon="alternate_email" />
                    <TextInput type='password' placeholder="Enter password" icon="lock" />
                    <TextInput type='password' placeholder="Confirm password" icon="lock_clock" />
                    <CheckBox text="I agree to the Terms & Conditions" />

                    <Button><span>Sign Up</span></Button>

                    <div className="info">
                        Already have an account? <Link to="/login">Login</Link> instead.
                    </div>
                </Form>
            </div >
        </>
    )
}
