import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom';

export default function PublicRoute({ children }) {

    const { currentUser } = useAuth();

    return currentUser ? <Navigate to='/' /> : children;
}
