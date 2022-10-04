import React, { useState } from 'react'
import Form from './Form'
import TextInput from './TextInput'
import CheckBox from './CheckBox'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function SignUpForm() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const { signup } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        // do validation 
        if (password !== confirmPassword) {
            return setError("Password don't match!");
        }

        try {
            setError("");
            setLoading(true);
            await signup(email, password, username);
            navigate('/');
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to create an account");
        }
    }

    return (
        <Form onSubmit={handleSubmit} style={{ height: '500px' }} >
            <TextInput type='text' placeholder="Enter name" icon="person" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <TextInput type='email' placeholder="Enter email" icon="alternate_email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <TextInput type='password' placeholder="Enter password" icon="lock" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <TextInput type='password' placeholder="Confirm password" icon="lock_clock" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            <CheckBox text="I agree to the Terms & Conditions" value={agree} onChange={(e) => setAgree(e.target.value)} required />

            {error && <p className='error'>{error}</p>}

            <Button disabled={loading} type="submit"><span>Sign Up</span></Button>

            <div className="info">
                Already have an account? <Link to="/login">Login</Link> instead.
            </div>
        </Form>
    )
}
