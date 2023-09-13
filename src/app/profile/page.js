"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import user from '/public/default_user.png'
import Link from 'next/link'

const Profile = () => {
    const router = useRouter();

    const handleLogout = async () => {
        const res = await fetch('/api/loginAuth', {
            method: 'GET',
        });
        const data = await res.json();

        if (data['status'] === true) {
            router.replace('/');
        }
    }

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
                    <label className="btn btn-ghost normal-case text-xl">JWT Token Auth</label>
                </div>
                {/*  <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href={`/blogs`}>Blogs</Link></li>
                    <li><Link href={`/about`}>About</Link></li>
                    <li><Link href={`/contact`}>Contact</Link></li>
                </ul>
            </div> */}
                <div className='navbar-end'>
                    <div className="flex-none gap-2">
                        {/* <div className="form-control">
                    <input type="text" placeholder="Search blog" className="input input-bordered w-24 md:w-auto" />
                </div> */}
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <Image src={user} alt='user' />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link href={""} className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><Link href={""}>Settings</Link></li>
                                <li><Link href={""} onClick={handleLogout}>Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div>Profile page</div>
        </div>
    );
};

export default Profile;