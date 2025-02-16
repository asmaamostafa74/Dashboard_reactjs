import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import background from '../assets/images/signInBG.webp';
import { IoIosArrowBack } from 'react-icons/io';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: false, password: false });

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {
            email: email.trim() === '',
            password: password.trim() === '',
        };

        setErrors(newErrors);

        if (!newErrors.email && !newErrors.password) {
            console.log('Logging in with:', { email, password });
        }
    };

    return (
        <div className='mx-auto flex items-center justify-between overflow-hidden max-h-[100vh]'>
            <div className='flex flex-col mx-auto'>
                <NavLink to='/Dashboard' className='flex items-center gap-2 mb-10 text-gray-400'>
                    <IoIosArrowBack />
                    <p>Back to dashboard</p>
                </NavLink>
                <h2 className='text-[#4FD1C5] font-bold text-[32px]'>Welcome Back</h2>
                <p className='text-[#A0AEC0] font-medium mt-2'>Enter your email and password to sign in</p>
                <div>
                    <form className="mt-4" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className={`appearance-none border ${errors.email ? 'border-red-500' : 'border-[#E2E8F0]'
                                    } rounded-[15px] w-[350px] py-3 px-3 text-gray-700 leading-tight focus:outline-0`}
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">Email is required.</p>}
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className={`appearance-none border ${errors.password ? 'border-red-500' : 'border-[#E2E8F0]'
                                    } rounded-[15px] w-[350px] py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-0`}
                                id="password"
                                type="password"
                                placeholder="********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">Password is required.</p>}
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="w-full bg-[#4FD1C5] text-white font-bold py-3 px-4 rounded-[15px]" type="submit">
                                Sign In
                            </button>
                        </div>
                        <p className='text-[#acb1b8] py-3'>
                            Don&apos;t have an account? <NavLink to='/signUp' className='text-[#4FD1C5]'>Sign up</NavLink>
                        </p>
                    </form>
                </div>
            </div>

            <div>
                <img src={background} className='lg:flex hidden w-[862px] h-auto' alt="Background" />
            </div>
        </div>
    );
};

export default SignIn;
