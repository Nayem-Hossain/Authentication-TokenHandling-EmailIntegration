"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import user from "/public/default_user.png";
import Link from "next/link";

const Profile = () => {
    const router = useRouter();
    const [emailOptions, setEmailOptions] = useState({
        subject: "",
        email: "",
        message: "",
    });
    const handleInputChange = (name, value) => {
        setEmailOptions({ ...emailOptions, [name]: value });
    };

    const handleLogout = async () => {
        const res = await fetch("/api/loginAuth", {
            method: "GET",
        });
        const data = await res.json();

        if (data["status"] === true) {
            router.replace("/");
        }
    };

    const handleEmailSend = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/email", {
            method: 'POST',
            body: JSON.stringify(emailOptions),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (res.ok) {
            alert("send email successfully!")
        }
    };

    return (
        <div>
            <nav className="navbar bg-base-100">
                <div className="navbar-start">
                    {/* <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/blogs">Blogs</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div> */}
                    <label className="btn btn-ghost normal-case text-xl">
                        JWT Token Auth
                    </label>
                </div>
                {/*  <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href={`/blogs`}>Blogs</Link></li>
                    <li><Link href={`/about`}>About</Link></li>
                    <li><Link href={`/contact`}>Contact</Link></li>
                </ul>
            </div> */}
                <div className="navbar-end">
                    <div className="flex-none gap-2">
                        {/* <div className="form-control">
                    <input type="text" placeholder="Search blog" className="input input-bordered w-24 md:w-auto" />
                </div> */}
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <Image src={user} alt="user" />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <Link href={""} className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>Settings</Link>
                                </li>
                                <li>
                                    <Link href={""} onClick={handleLogout}>
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/* contact form  */}
            <div className="flex justify-end">
                <div className="mt-8 lg:w-1/2 lg:mx-6">
                    <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-[#191d24] lg:max-w-xl">
                        <h1 className="text-2xl font-medium text-gray-700 dark:text-gray-200">
                            Contact form
                        </h1>

                        <form onSubmit={handleEmailSend} className="mt-6">
                            <div className="flex-1">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                    Subject
                                </label>
                                <input
                                    onChange={(e) => {
                                        handleInputChange("subject", e.target.value);
                                    }}
                                    required
                                    type="text"
                                    name="subject"
                                    value={emailOptions.subject}
                                    placeholder="Enter email subject"
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-[#191d24] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>

                            <div className="flex-1 mt-6">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                    Email address
                                </label>
                                <input
                                    onChange={(e) => {
                                        handleInputChange("email", e.target.value);
                                    }}
                                    required
                                    type="email"
                                    name="email"
                                    value={emailOptions.email}
                                    placeholder="Enter your email"
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-[#191d24] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>

                            <div className="w-full mt-6">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                    Message
                                </label>
                                <textarea
                                    onChange={(e) => {
                                        handleInputChange("message", e.target.value);
                                    }}
                                    required
                                    type="text"
                                    name="message"
                                    value={emailOptions.message}
                                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-[#191d24] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    placeholder="Message"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-[#2361ff] to-[#07f7f7] rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                            >
                                Send Email
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;


