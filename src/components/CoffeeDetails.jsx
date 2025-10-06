import React from 'react';
import { useLoaderData, Link } from 'react-router';

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    const { _id, name, price, quantity, photo, supplier, taste, details } = coffee;

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12 px-4">
            <div className="max-w-5xl mx-auto">
                <Link to="/" className="btn bg-orange-600 hover:bg-amber-700 text-white border-none mb-8">
                    ← Back to Home
                </Link>

                {/* Header Section */}
                <div className='text-center mb-12'>
                    <div className='inline-block bg-amber-100 rounded-full p-4 mb-4'>
                        <span className='text-6xl'>☕</span>
                    </div>
                    <h1 className="text-5xl font-bold text-orange-600 mb-4">Coffee Details</h1>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>

                {/* Card Section */}
                <div className="card lg:card-side bg-white shadow-xl rounded-2xl overflow-hidden">
                    <figure className="lg:w-1/2 p-8">
                        <img
                            src={photo}
                            alt={name}
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </figure>
                    <div className="card-body lg:w-1/2 p-8">
                        <h2 className="card-title text-4xl font-bold text-orange-600 mb-6">
                            {name}
                        </h2>

                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-amber-50 border-none">
                                <p className="font-semibold text-gray-700 mb-1">Supplier</p>
                                <p className="text-gray-600">{supplier}</p>
                            </div>

                            <div className="p-4 rounded-xl bg-amber-50 border-none">
                                <p className="font-semibold text-gray-700 mb-1">Taste</p>
                                <p className="text-gray-600">{taste}</p>
                            </div>

                            <div className="p-4 rounded-xl bg-amber-50 border-none">
                                <p className="font-semibold text-gray-700 mb-1">Price</p>
                                <p className="text-orange-600 text-xl font-bold">${price}</p>
                            </div>

                            <div className="p-4 rounded-xl bg-amber-50 border-none">
                                <p className="font-semibold text-gray-700 mb-1">Quantity</p>
                                <p className="text-gray-600">{quantity} units</p>
                            </div>

                            {details && (
                                <div className="p-4 rounded-xl bg-amber-50 border-none">
                                    <p className="font-semibold text-gray-700 mb-1">Details</p>
                                    <p className="text-gray-600">{details}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;