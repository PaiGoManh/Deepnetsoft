import React, { useState, useEffect } from 'react';
import bgImage from '../assets/bg-menu.jpeg';
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const BunchCard = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [newBunch, setNewBunch] = useState({
        name: '',
        price: '',
        description: '',
    });
    const [selectedBunch, setSelectedBunch] = useState(null);

    const fetchMenuItems = async () => {
        try {
            const response = await fetch('http://localhost:5000/bunch');
            const data = await response.json();
            setMenuItems(data);
        } catch (error) {
            console.error('Error fetching menu items:', error);
        }
    };

    useEffect(() => {
        fetchMenuItems();
    }, []);

    const handleChange = (e) => {
      setNewBunch({ ...newBunch, [e.target.name]: e.target.value });
    };

    const handleEditChange = (e) => {
        setSelectedBunch({ ...selectedBunch, [e.target.name]: e.target.value });
    };

    const addNewBunch = async (e) => {
        e.preventDefault();
        try {
            await fetch('http://localhost:5000/bunch', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...newBunch,
                description: newBunch.description.trim(),
                }),
            });
            fetchMenuItems();
            setIsModalOpen(false);
            setNewBunch({ name: '', price: '', description: '' });
        } catch (error) {
            console.error('Error adding new food item:', error);
        }
    };

    const deleteFood = async (id) => {
        try {
            await fetch(`http://localhost:5000/bunch/${id}`, {
                method: 'DELETE',
            });
            fetchMenuItems();
        } catch (error) {
            console.error('Error deleting food item:', error);
        }
    };

    const openEditModal = (food) => {
        setSelectedBunch(food);
        setIsEditModalOpen(true);
    };

    const updateFood = async (e) => {
        e.preventDefault();
        try {
            await fetch(`http://localhost:5000/bunch/${selectedBunch._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...selectedBunch,
                description: selectedBunch.description.trim(),
                }),
            });
            fetchMenuItems();
            setIsEditModalOpen(false);
        } catch (error) {
            console.error('Error updating food item:', error);
        }
    };

    return (
        <div
            className="relative h-[1000px] bg-cover bg-center px-[8%] pt-[8%]"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="w-[1500px] h-[700px] border-2 border-white text-white bg-black">
                <div className="text-3xl font-bold pt-4 text-center">
                    BUNCH WE GIVES
                </div>
                <div className="px-[5%] pt-[5%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {menuItems.map((item) => (
                        <div
                            key={item._id}
                            className="bg-black border border-gray-700 rounded-lg p-4 text-white flex flex-col justify-between"
                        >
                            <div>
                                <h1 className="font-bold text-xl mb-2">
                                    {item.name} <span className="text-gray-400">..............${item.price}</span>
                                </h1>
                                {item.description}
                            </div>
                            <div className="flex gap-4 mt-4">
                                <button 
                                    className="text-blue-500 hover:text-blue-300"
                                    onClick={() => openEditModal(item)}
                                >
                                    <FiEdit />
                                </button>
                                <button 
                                    className="text-red-500 hover:text-red-300"
                                    onClick={() => deleteFood(item._id)}
                                >
                                    <MdDelete />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='bg-black border border-gray-700 rounded-lg text-white w-[430px] h-[120px] ml-[5%] mt-5 text-center py-[2%]'>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="text-5xl text-white hover:text-yellow-500 "
                    >
                        +
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-4">Add New Bunch</h2>
                        <form className="w-full" onSubmit={addNewBunch}>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="name"
                                    id="floating_name"
                                    placeholder=" "
                                    value={newBunch.name}
                                    onChange={handleChange}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    required
                                />
                                <label
                                    htmlFor="floating_name"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Bunch Name
                                </label>
                            </div>

                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="price"
                                    id="floating_price"
                                    placeholder=" "
                                    value={newBunch.price}
                                    onChange={handleChange}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    required
                                />
                                <label
                                    htmlFor="floating_price"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Price
                                </label>
                            </div>

                            <div className="relative z-0 w-full mb-5 group">
                                <textarea
                                    name="description"
                                    id="floating_description"
                                    placeholder=" "
                                    value={newBunch.description}
                                    onChange={handleChange}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    rows="3"
                                    required
                                ></textarea>
                                <label
                                    htmlFor="floating_description"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Description
                                </label>
                            </div>

                            <div className="flex justify-end gap-4 mt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 bg-gray-500 text-white rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                >
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {isEditModalOpen && selectedBunch && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-4">Edit Bunch</h2>
                        <form className="w-full" onSubmit={updateFood}>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="name"
                                    id="floating_name"
                                    placeholder=" "
                                    value={selectedBunch.name}
                                    onChange={handleEditChange}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    required
                                />
                                <label
                                    htmlFor="floating_name"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Bunch Name
                                </label>
                            </div>

                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="price"
                                    id="floating_price"
                                    placeholder=" "
                                    value={selectedBunch.price}
                                    onChange={handleEditChange}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    required
                                />
                                <label
                                    htmlFor="floating_price"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Price
                                </label>
                            </div>

                            <div className="relative z-0 w-full mb-5 group">
                                <textarea
                                    name="description"
                                    id="floating_description"
                                    placeholder=" "
                                    value={selectedBunch.description}
                                    onChange={handleEditChange}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    rows="3"
                                    required
                                ></textarea>
                                <label
                                    htmlFor="floating_description"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Description
                                </label>
                            </div>

                            <div className="flex justify-end gap-4 mt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsEditModalOpen(false)}
                                    className="px-4 py-2 bg-gray-500 text-white rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BunchCard;
