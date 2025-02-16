import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import background from '../assets/images/signUpBG.avif';
import Footer from '../components/general/Footer';

const SignUp = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        cpassword: '',
    });

    const [errors, setErrors] = useState({
        email: false,
        password: false,
        cpassword: false,
        passwordMatch: true,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: false, passwordMatch: true });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {
            email: formData.email.trim() === '',
            password: formData.password.trim() === '',
            cpassword: formData.cpassword.trim() === '',
            passwordMatch: formData.password !== formData.cpassword,
        };

        setErrors(newErrors);

        if (!newErrors.email && !newErrors.password && !newErrors.cpassword && !newErrors.passwordMatch) {
            console.log('Signing up with:', formData);
        }
    };

    return (
        <div className="flex flex-col justify-center font-[sans-serif]">
            <img src={background} className='lg:block hidden' alt="Background" />
            <div className="max-w-md w-full mx-auto bg-white rounded-2xl md:mt-[-200px] mt-10 p-8">
                <h2 className='text-[#4FD1C5] font-bold text-2xl my-3 flex justify-center'>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Email</label>
                            <input
                                name="email"
                                type="email"
                                className={`text-gray-800 bg-white border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                    } w-full text-sm px-4 py-3 rounded-md focus:outline-0`}
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">Email is required.</p>}
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Password</label>
                            <input
                                name="password"
                                type="password"
                                className={`text-gray-800 bg-white border ${errors.password ? 'border-red-500' : 'border-gray-300'
                                    } w-full text-sm px-4 py-3 rounded-md focus:outline-0`}
                                placeholder="Enter password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">Password is required.</p>}
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
                            <input
                                name="cpassword"
                                type="password"
                                className={`text-gray-800 bg-white border ${errors.cpassword || !errors.passwordMatch ? 'border-red-500' : 'border-gray-300'
                                    } w-full text-sm px-4 py-3 rounded-md focus:outline-0`}
                                placeholder="Confirm password"
                                value={formData.cpassword}
                                onChange={handleChange}
                            />
                            {errors.cpassword && <p className="text-red-500 text-xs mt-1">Confirm password is required.</p>}
                            {!errors.passwordMatch && <p className="text-red-500 text-xs mt-1">Passwords do not match.</p>}
                        </div>
                    </div>

                    <div className="mt-6">
                        <button type="submit" className="w-full bg-[#4FD1C5] py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white focus:outline-none">
                            Create an account
                        </button>
                    </div>
                    <p className="text-gray-800 text-sm text-center mt-4">
                        Already have an account?
                        <NavLink to='/signIn' className="text-[#4FD1C5] font-semibold hover:underline ml-1">Login here</NavLink>
                    </p>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default SignUp;
