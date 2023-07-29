import React, { useState } from "react";
import { HiArrowCircleRight } from "react-icons/hi";


export const Dashboard = () => {
    const [items, setItems] = useState([
        { id: 1, name: "Item 1", price: 10 },
        { id: 2, name: "Item 2", price: 20 },
        { id: 3, name: "Item 3", price: 30 },
    ]);

    const [totalMoney, setTotalMoney] = useState(1000);

    const handleAddItem = () => {
        const itemName = prompt("Enter item name:");
        const itemPrice = Number(prompt("Enter item price:"));
        if (itemName && itemPrice) {
            const newId = Math.max(...items.map((item) => item.id)) + 1;
            const newItem = {
                id: newId,
                name: itemName,
                price: itemPrice,
            };
            setItems([...items, newItem]);
            setTotalMoney(totalMoney - newItem.price);
        }
    };

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => setSearchTerm(event.target.value);

    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div
            className="bg-cover bg-center h-screen bg-gradient-to-b from-yellow-400 to-yellow-200 "
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white shadow-md rounded-md overflow-hidden">
                    <div className="flex justify-center px-4 py-2 bg-yellow-400 h-24 items-center">
                        <h2 className=" text-4xl font-bold">Total Money </h2>
                        <HiArrowCircleRight className="text-4xl mx-4" />
                    
                        <h2 className="text-4xl font-bold">  ${totalMoney}</h2>
                    </div>
                    <div className="flex justify-between px-4 py-2 border-b border-gray-200">
                        <h1 className="text-2xl font-bold">Items</h1>
                        <button
                            className="bg-black hover:bg-yellow-400 text-white hover:text-black rounded-md px-4 py-2"
                            onClick={handleAddItem}
                        >
                            Add Item
                        </button>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border border-gray-300 rounded-md px-4 py-2 w-48"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="flex flex-wrap p-4">
                        {filteredItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white shadow-md rounded-md p-4 m-2 flex-1"
                            >
                                <h2 className="text-lg font-bold">{item.name}</h2>
                                <p className="text-gray-500">${item.price}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
