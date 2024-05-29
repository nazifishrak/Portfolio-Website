import { useState } from 'react';

const useAuthentication = (correctPassword: string) => {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handlePasswordSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (password === correctPassword) {
            setIsAuthenticated(true);
        } else {
            alert('Incorrect password');
        }
    };

    return { password, setPassword, isAuthenticated, handlePasswordSubmit };
};

export default useAuthentication;
