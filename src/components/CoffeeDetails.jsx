import React from 'react';
import { useLoaderData, Link } from 'react-router';

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    const { _id, name, price, quantity, photo, supplier, taste, details } = coffee;

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="btn btn-outline mb-8">
                    ← Back to Home
                </Link>

                <div className="card lg:card-side bg-white shadow-xl rounded-3xl overflow-hidden">
                    <figure className="lg:w-1/2 p-8">
                        <img
                            src={photo}
                            alt={name}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </figure>
                    <div className="card-body lg:w-1/2 p-8">
                        <h2 className="card-title text-4xl font-bold text-black mb-6">
                            {name}
                        </h2>

                        <div className="space-y-4">
                            <div className="p-4 rounded-xl border border-gray-200">
                                <p className="font-semibold text-black mb-1">Supplier</p>
                                <p className="text-black">{supplier}</p>
                            </div>

                            <div className="p-4 rounded-xl border border-gray-200">
                                <p className="font-semibold text-black mb-1">Taste</p>
                                <p className="text-black">{taste}</p>
                            </div>

                            <div className="p-4 rounded-xl border border-gray-200">
                                <p className="font-semibold text-black mb-1">Price</p>
                                <p className="text-black text-xl font-bold">${price}</p>
                            </div>

                            <div className="p-4 rounded-xl border border-gray-200">
                                <p className="font-semibold text-black mb-1">Quantity</p>
                                <p className="text-black">{quantity} units</p>
                            </div>

                            {details && (
                                <div className="p-4 rounded-xl border border-gray-200">
                                    <p className="font-semibold text-black mb-1">Details</p>
                                    <p className="text-black">{details}</p>
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