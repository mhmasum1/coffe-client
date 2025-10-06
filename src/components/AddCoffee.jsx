import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries())
        console.log(newCoffee);

        // send coffee data to the db
        fetch('https://caffe-server.vercel.app/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('added successfully')
                    Swal.fire({
                        title: "Coffee added successfully!",
                        icon: "success",
                        draggable: true
                    });
                    form.reset();
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
                    <h1 className="text-5xl font-bold text-orange-600 mb-4">Add New Coffee</h1>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                    </p>
                </div>

                {/* Form Section */}
                <div className='bg-white rounded-2xl shadow-xl p-8 md:p-12'>
                    <form onSubmit={handleAddCoffee}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <fieldset className="bg-amber-50  border-none rounded-xl p-4">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-700">Coffee Name</span>
                                </label>
                                <input
                                    type="text"
                                    name='name'
                                    className="input w-full border-amber-200 focus:border-orange-400 focus:outline-none"
                                    placeholder="Coffee Name"
                                    required
                                />
                            </fieldset>

                            <fieldset className="bg-amber-50  border-none rounded-xl p-4">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-700">Quantity</span>
                                </label>
                                <input
                                    type="text"
                                    name='quantity'
                                    className="input w-full border-amber-200 focus:border-orange-400 focus:outline-none"
                                    placeholder="Quantity"
                                    required
                                />
                            </fieldset>

                            <fieldset className="bg-amber-50  border-none rounded-xl p-4 ">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-700">Supplier</span>
                                </label>
                                <input
                                    type="text"
                                    name='supplier'
                                    className="input w-full border-amber-200 focus:border-orange-400 focus:outline-none"
                                    placeholder="Supplier"
                                    required
                                />
                            </fieldset>

                            <fieldset className="bg-amber-50  border-none rounded-xl p-4 ">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-700">Taste</span>
                                </label>
                                <input
                                    type="text"
                                    name='taste'
                                    className="input w-full border-amber-200 focus:border-orange-400 focus:outline-none"
                                    placeholder="Taste"
                                    required
                                />
                            </fieldset>

                            <fieldset className="bg-amber-50  border-none rounded-xl p-4 ">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-700">Price</span>
                                </label>
                                <input
                                    type="text"
                                    name='price'
                                    className="input w-full border-amber-200 focus:border-orange-400 focus:outline-none"
                                    placeholder="Price"
                                    required
                                />
                            </fieldset>

                            <fieldset className="bg-amber-50  border-none rounded-xl p-4">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-700">Details</span>
                                </label>
                                <input
                                    type="text"
                                    name='details'
                                    className="input w-full border-amber-200 focus:border-orange-400 focus:outline-none"
                                    placeholder="Details"
                                    required
                                />
                            </fieldset>
                        </div>

                        <fieldset className="bg-amber-50  border-none rounded-xl p-4 ">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                name='photo'
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add Coffee
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;