// components/PasswordForm.tsx
import React from 'react';

// @ts-ignore
const PasswordForm = ({ password, setPassword, handlePasswordSubmit }) => {
    return (
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-3xl font-extrabold text-center text-gray-900">Enter Password</h2>
            <form onSubmit={handlePasswordSubmit} className="space-y-6">
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                        required
                    />
                </div>
                <button type="submit" className="w-full py-3 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Submit</button>
            </form>
        </div>
    );
};

export default PasswordForm;
