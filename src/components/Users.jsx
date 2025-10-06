import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
    const initailsUsers = useLoaderData();
    const [users, setUsers] = useState(initailsUsers);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#f97316",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://caffe-server.vercel.app/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remainingUsers = users.filter(user => user._id !== id);
                            setUsers(remainingUsers);

                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted successfully.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12 px-4'>
            <div className='max-w-7xl mx-auto'>
                {/* Header Section */}
                <div className='text-center mb-12'>
                    <div className='inline-block bg-amber-100 rounded-full p-4 mb-4'>
                        <span className='text-6xl'>👥</span>
                    </div>
                    <h1 className="text-5xl font-bold text-orange-600 mb-4">User Management</h1>
                </div>

                {/* Table Section */}
                <div className='bg-white rounded-2xl shadow-xl overflow-hidden'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className='bg-gradient-to-r from-orange-500 to-amber-500 text-white'>
                                <tr>
                                    <th className='text-white'>No</th>
                                    <th className='text-white'>Name</th>
                                    <th className='text-white'>Phone Number</th>
                                    <th className='text-white'>Email</th>
                                    <th className='text-white'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length > 0 ? (
                                    users.map((user, index) => (
                                        <tr key={user._id}>
                                            <th className='text-gray-700'>{index + 1}</th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12 ring-2 ring-amber-200">
                                                            <img
                                                                src={user.photo || 'https://via.placeholder.com/150'}
                                                                alt="User Avatar"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-gray-800">{user.name}</div>
                                                        <div className="text-sm text-gray-500">{user.address || 'N/A'}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='text-gray-700'>{user.phone || 'N/A'}</td>
                                            <td className='text-gray-700'>{user.email}</td>
                                            <th>
                                                <div className='flex gap-2'>
                                                    <button
                                                        className="btn btn-xs"
                                                    >
                                                        View
                                                    </button>
                                                    <button
                                                        className="btn btn-xs"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(user._id)}
                                                        className="btn btn-xs"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </th>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className='text-center py-12'>
                                            <div className='text-6xl mb-4'>👤</div>
                                            <p className='text-xl text-gray-600'>No users found</p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Stats Card */}
                {users.length > 0 && (
                    <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <div className='bg-white rounded-xl shadow-lg p-6 text-center'>
                            <div className='text-3xl mb-2'>👥</div>
                            <div className='text-2xl font-bold text-orange-600'>{users.length}</div>
                            <div className='text-gray-600'>Total Users</div>
                        </div>
                        <div className='bg-white rounded-xl shadow-lg p-6 text-center'>
                            <div className='text-3xl mb-2'>✅</div>
                            <div className='text-2xl font-bold text-amber-600'>{users.filter(u => u.email).length}</div>
                            <div className='text-gray-600'>Active Emails</div>
                        </div>
                        <div className='bg-white rounded-xl shadow-lg p-6 text-center'>
                            <div className='text-3xl mb-2'>📞</div>
                            <div className='text-2xl font-bold text-orange-500'>{users.filter(u => u.phone).length}</div>
                            <div className='text-gray-600'>Phone Numbers</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Users;