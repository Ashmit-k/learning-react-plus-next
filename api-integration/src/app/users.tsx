'use client'

import React, { use, useEffect, useState } from 'react'

interface User {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        city: string;
    };
}

const UsersDetail: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data: User[] = await response.json();
                setUsers(data);
                setLoading(false);
            }
            catch (error) {
                console.error('Failed to fetch users:', error);
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    if (loading) return <div className="text-center p-10">Loading users...</div>;

    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <h1 className="text-3xl text-blue-800 font-bold mb-6">User List</h1>
            <ul className="space-y-4">
                {users.map((user) => (
                    <li key={user.id} className="bg-white p-4 shadow rounded">
                        <h2 className="text-black text-2xl font-semibold">{user.name}</h2>
                        <p className="text-gray-600">{user.email}</p>
                        <p className="text-gray-500">
                            {user.address.street}, {user.address.city}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UsersDetail