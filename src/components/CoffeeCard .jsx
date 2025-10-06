import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, price, quantity, photo } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#f97316",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
            if (result.isConfirmed) {

                // start deleting the coffee
                fetch(`https://caffe-server.vercel.app/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });

                            // remove the coffee from the state
                            const remainingCoffees = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remainingCoffees);
                        }
                    })


            }
        });

    }

    return (
        <div className="card card-side bg-white shadow-xl border border-amber-200 rounded-2xl overflow-hidden">
            <figure className="w-48 p-4">
                <img
                    src={photo}
                    alt={name}
                    className="w-full h-full object-cover rounded-xl"
                />
            </figure>
            <div className="flex w-full justify-around items-center pr-4 py-6">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
                    <p className="text-gray-600"><span className="font-semibold text-gray-700">Price:</span> ${price}</p>
                    <p className="text-gray-600"><span className="font-semibold text-gray-700">Quantity:</span> {quantity}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <Link to={`/coffee/${_id}`}>
                        <button className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white border-none w-20">View</button>
                    </Link>
                    <Link to={`/updateCoffee/${_id}`}>
                        <button className="btn btn-sm bg-orange-500 hover:bg-orange-600 text-white border-none w-20">Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm bg-red-500 hover:bg-red-600 text-white border-none w-20">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;