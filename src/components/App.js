import '../styles/App.css'
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<Layout />}>

                        <Route index element={<Home />} />

                        <Route path='/sign-up' element={<PublicRoute> <SignUp /> </PublicRoute>} />
                        <Route path='/login' element={<PublicRoute> <Login /> </PublicRoute>} />

                        <Route path='/quiz/:id' element={<PrivateRoute> <Quiz /> </PrivateRoute>} />
                        <Route path='/result/:id' element={<PrivateRoute> <Result /> </PrivateRoute>} />

                    </Route>
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
