import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router';
import CoffeeCard from './CoffeeCard ';

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(initialCoffees);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="hero min-h-[60vh] bg-amber-100">
                <div className="hero-content text-center">
                    <div className="max-w-4xl">
                        <h1 className="text-7xl font-bold text-orange-500 mb-6">
                            Welcome to Coffee Store
                        </h1>
                        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                            Discover the finest collection of premium coffees from around the world.
                            Each cup tells a unique story of flavor, aroma, and craftsmanship.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Link to="/addcoffee">
                                <button className="btn btn-primary btn-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                    Add New Coffee
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
                        <p className="text-xl text-gray-600">Experience the difference with our premium coffee selection</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="card bg-amber-50 shadow-xl">
                            <div className="card-body items-center text-center">
                                <div className="text-5xl mb-4">☕</div>
                                <h3 className="card-title text-2xl">Premium Quality</h3>
                                <p>Hand-picked beans from the finest coffee regions around the world</p>
                            </div>
                        </div>

                        <div className="card bg-amber-50 shadow-xl">
                            <div className="card-body items-center text-center">
                                <div className="text-5xl mb-4">🌍</div>
                                <h3 className="card-title text-2xl">Global Selection</h3>
                                <p>Explore diverse flavors from Ethiopia, Colombia, Brazil, and beyond</p>
                            </div>
                        </div>

                        <div className="card bg-amber-50 shadow-xl">
                            <div className="card-body items-center text-center">
                                <div className="text-5xl mb-4">⚡</div>
                                <h3 className="card-title text-2xl">Easy Management</h3>
                                <p>Add, update, or remove coffees with our intuitive interface</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Coffee Gallery Section */}
            <div id="coffees" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-bold text-gray-800 mb-4">Our Coffee Collection</h2>
                        <p className="text-xl text-gray-600">Browse through our carefully curated selection</p>
                    </div>

                    {coffees.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {coffees.map(coffee => (
                                <CoffeeCard
                                    key={coffee._id}
                                    coffee={coffee}
                                    coffees={coffees}
                                    setCoffees={setCoffees}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">☕</div>
                            <h3 className="text-3xl font-bold text-gray-700 mb-4">No Coffees Yet</h3>
                            <p className="text-xl text-gray-600 mb-8">Start building your collection</p>
                            <Link to="/addcoffee">
                                <button className="btn btn-primary btn-lg">Add Your First Coffee</button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 bg-amber-100  text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-5xl font-bold text-orange-500 mb-6">Ready to Add Your Coffee?</h2>
                    <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                        Join our community and share your favorite coffee blends with the world
                    </p>
                    <Link to="/addcoffee">
                        <button className="btn btn-lg bg-white text-black hover:bg-orange-200 hover:text-blue-500  border-none">
                            Get Started Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;