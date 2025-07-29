import React, { useState, useEffect } from "react";

export default function Register() {
    const [labName, setLabName] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [reports, setReports] = useState('');
    const [radioReports, setRadioReports] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        setLabName(localStorage.getItem("labName") || '');
        setName(localStorage.getItem("name") || '');
        setRole(localStorage.getItem("role") || '');
        setReports(localStorage.getItem("reports") || '');
        setRadioReports(localStorage.getItem("radioReports") || '');
        setNumber(localStorage.getItem("number") || '');
        setAddress(localStorage.getItem("address") || '');
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem("labName", labName);
        localStorage.setItem("name", name);
        localStorage.setItem("role", role);
        localStorage.setItem("reports", reports);
        localStorage.setItem("radioReports", radioReports);
        localStorage.setItem("number", number);
        localStorage.setItem("address", address);

        alert("Form data saved to local storage!");
        // Clear inputs after saving
        setLabName('');
        setName('');
        setRole('');
        setReports('');
        setRadioReports('');
        setNumber('');
        setAddress('');

    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-500 flex justify-center items-center p-4">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-3xl">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    Sign up as <span className="text-blue-600">Diagnostic Lab</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Lab name</label>
                        <input
                            type="text"
                            placeholder="Enter your laboratory name"
                            value={labName}
                            onChange={(e) => setLabName(e.target.value)}
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Your Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Your Role</label>
                        <input
                            type="text"
                            placeholder="Enter your role in the lab"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Daily pathology reports</label>
                        <input
                            type="number"
                            placeholder="Number of reports"
                            value={reports}
                            onChange={(e) => setReports(e.target.value)}
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Daily radiology reports</label>
                        <input
                            type="number"
                            placeholder="Number of reports"
                            value={radioReports}
                            onChange={(e) => setRadioReports(e.target.value)}
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                        <input
                            type="text"
                            placeholder="Enter your mobile number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Address</label>
                        <input
                            type="text"
                            placeholder="Enter lab address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                        />
                    </div>
                </div>

                <div className="mt-6 flex items-center">
                    <input
                        type="checkbox"
                        id="terms"
                        className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        required
                    />
                    <label className="text-sm text-gray-600">
                        I agree with all <span className="text-blue-600 ">Terms and Conditions</span> and
                        <span className="text-blue-600 ">Privacy Policies</span> of Evoiko.
                    </label>
                </div>

                <button
                    type="submit"
                    className="mt-6 w-full md:w-40 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}
