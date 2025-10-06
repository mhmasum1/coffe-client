import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const { _id, name, quantity, price, taste, supplier, photo, details } = useLoaderData();

    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries())
        console.log(updatedCoffee);

        // send updated coffee to the db
        fetch(`https://caffe-server.vercel.app/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Coffee updated successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12 px-4'>
            <div className='max-w-5xl mx-auto'>

                {/* Header Section */}
                <div className='text-center mb-12'>
                    <div className='inline-block bg-amber-100 rounded-full p-4 mb-4'>
                        <span className='text-6xl'>☕</span>
                    </div>
                    <h1 className="text-5xl font-bold text-orange-600 mb-4">Update Coffee</h1>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                    </p>
                </div>

                {/* Form Section */}
                <div className='bg-white rounded-2xl shadow-xl p-8 md:p-12'>
                    <form onSubmit={handleUpdateCoffee}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <fieldset className="bg-amber-50 border-none rounded-xl p-4">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-700">Coffee Name</span>
                                </label>
                                <input
                                    type="text"
                                    name='name'
                                    defaultValue={name}
                                    className="input w-full border-amber-200 focus:border-orange-400 focus:outline-none"
                                    placeholder="Coffee Name"
                                    required
                                />
                            </fieldset>

                            <fieldset className="bg-amber-50 border-none rounded-xl p-4">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-700">Quantity</span>
                                </label>
                                <input
                                    type="text"
                                    name='quantity'
                                    defaultValue={quantity}
                                    className="input w-full border-amber-200 focus:border-orange-400 focus:outline-none"
                                    placeholder="Quantity"
                                    required
                                />
                            </fieldset>

                            <fieldset className="bg-amber-50 border-none rounded-xl p-4">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-700">Supplier</span>
                                </label>
                                <input
                                    type="text"
                                    name='supplier'
                                    defaultValue={supplier}
                                    className="input w-full border-amber-200 focus:border-orange-400 focus:outline-none"
                                    placeholder="Supplier"
                                    required
                                />
                            </fieldset>

                            <fieldset className="bg-amber-50 border-none rounded-xl p-4">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-700">Taste</span>
                                </label>
                                <input
                                    type="text"
                                    name='taste'
                                    defaultValue={taste}
                                    className="input w-full border-amber-200 focus:border-orange-400 focus:outline-none"
                                    placeholder="Taste"
                                    required
                                />
                            </fieldset>

                            <fieldset className="bg-amber-50 border-none rounded-xl p-4">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-700">Price</span>
                                </label>
                                <input
                                    type="text"
                                    name='price'
                                    defaultValue={price}
                                    className="input w-full border-amber-200 focus:border-orange-400 focus:outline-none"
                                    placeholder="Price"
                                    required
                                />
                            </fieldset>

                            <fieldset className="bg-amber-50 border-none rounded-xl p-4">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-700">Details</span>
                                </label>
                                <input
                                    type="text"
                                    name='details'
                                    defaultValue={details}
                                    className="input w-full border-amber-200 focus:border-orange-400 focus:outline-none"
                                    placeholder="Details"
                                    required
                                />
                            </fieldset>
                        </div>

                        <fieldset className="bg-amber-50 border-none rounded-xl p-4">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                name='photo'
                                defaultValue={photo}
                                className="input w-full border-amber-200 focus:border-orange-400 focus:outline-none"
                                placeholder="Photo Url"
                                required
                            />
                        </fieldset>

                        <button
                            type="submit"
                            className='btn w-full bg-orange-600 hover:bg-amber-700 text-white border-none text-lg h-14 shadow-lg'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Update Coffee
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;