import Link from 'next/link';
import React from 'react';

const SignInOrSignUp = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Link href={'/login'}><button className="btn bg-cyan-600 rounded-full place-items-center px-20">Sign in</button></Link>
            <div className="divider divider-horizontal">OR</div>
            <Link href={'/registration'}><button className="btn bg-cyan-600 rounded-full place-items-center px-20">Sign up</button></Link>
        </div>
    );
};

export default SignInOrSignUp;