import React from 'react'
import styles from '../../styles/login.module.css'
import Illustration from '../Illustration'
import loginImg from '../../assets/images/login.svg'
import Form from '../Form'
import TextInput from '../TextInput'
import Button from '../Button'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <h1>Login to your account</h1>
            <div className='column'>
                <Illustration src={loginImg} alt="login" />

                <Form className={`${styles.login}`} >
                    <TextInput type="email" placeholder="Enter email" icon="alternate_email" />
                    <TextInput type='password' placeholder="Enter password" icon="lock" />

                    <Button><span>Login</span></Button>

                    <div class="info">Don't have an account? <Link to="/sign-up">Signup</Link> instead.</div>
                </Form>
            </div>
        </>
    )
}
