import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {

    const { currentUser } = useAuth();

    return currentUser ? children : <Navigate to='/login' />;
}
