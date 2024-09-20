/** @format */

import { useState } from 'react';
import './Login.css';
import { User } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../Dashboard/Dashboard';
// import { useLoginMutation } from '../../Store/api';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../../Store/Slices/UserSlice';
// import toast from "react-hot-toast";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false); // Added loading state
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true); // Set loading state to true

        const url = 'http://127.0.0.1:8000/auth/login/'; // Fixed URL assignment
        const method = 'POST';
        const body = JSON.stringify({ username, password });

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body,
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const result = await response.json();
            console.log('Login successful:', result);

            alert('Logged in successfully!');
            // Navigate to /bookticket after successful login
            navigate('/Dashboard');

            // Optionally, you can store the user token or information in localStorage
            localStorage.setItem('accessToken', result.access); // Example of storing access token
        } catch (error) {
            setError(error.message); // Set error message to state
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div className='con'>
        <div className='man'>
           
                    <div className='logi'>WELCOME</div>
                    <form method='POST' onSubmit={handleSubmit}>
                    <div className="inbox">
                    <User className="ico" size={20} />
                        <input
                            type="text"
                            id="uname"
                            name="username"
                            className='iput'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder='Username'
                            required
                        />
                    </div>

                    <div className="inbox">
                    <FontAwesomeIcon icon={faLock} style={{ position: 
                        'absolute', left: '-150px', top: '47%', 
                        transform: 'translateY(-50%)' }} />
                        <input
                            type="password"
                            id="pwd"
                            name="password"
                            className='iput'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password'
                            required
                        />
                    </div>

                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                    
                    <div className="rem-forg">
                        <p><span>Forgot Password</span></p>
                    </div>

                    {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
                </form>

            </div>
        </div>
    );
};

export default Login;