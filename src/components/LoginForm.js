import React, { useState } from 'react'
import Form from './Form'
import TextInput from './TextInput'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(email, password);
            navigate('/');
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to login");
        }
    }

    return (
        <Form onSubmit={handleSubmit} style={{ height: '330px' }} >
            <TextInput type='email' placeholder="Enter email" icon="alternate_email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <TextInput type='password' placeholder="Enter password" icon="lock" value={password} onChange={(e) => setPassword(e.target.value)} required />

            {error && <p className='error'>{error}</p>}

            <Button disabled={loading} type="submit"><span>Login</span></Button>

            <div class="info">Don't have an account? <Link to="/sign-up">Sign up</Link> instead.</div>
        </Form>
    )
}
