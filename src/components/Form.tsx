import React, { useState } from 'react';
import RightArrow from '@assets/img/arrow.png';
import Logo from '@assets/img/logo.png';

interface IFormField { id: string, label: string, type: string, error?: string | null }

const Form: React.FC = () => {
    const formFields = [
        { id: "first-name", label: "First name", type: "text", error: null },
        { id: "last-name", label: "Last name", type: "text", error: null },
        { id: "b-name", label: "Business name and HQ location", type: "text", error: null },
        { id: "work-email", label: "Work email", type: "text" },
        { id: "password", label: "Password", type: "password", error: "Password must be at least 12 characters" }
    ]

    const [fields, setFields] = useState<IFormField[]>(formFields)

    return (
        <div className=" lg:w-1/2  w-full   min-h-screen bg-[#F8F8FB] md:flex-row">
            <div className='max-w-1300 lg:flex xl:flex min-h-screen lg:flex-shrink-0 lg:flex-col lg:justify-evenly xl:flex-shrink-0 xl:flex-col xl:justify-evenly mt-5'>
                <div className='flex justify-between items-center mt-5  md:mt-3 lg:mt-0'>
                    <div className='block lg:hidden pl-7 lg:pl-0'>
                        <img src={Logo} className="w-[17.5px] md:w-[37.5px]" alt="Logo" />
                    </div>
                    <div className="w-full flex justify-end items-center md:pr-7 lg:pr-7 pr-5  lg:pt-5 text-theme-gray">
                        Log in
                        <img src={RightArrow} className="ml-5" alt="Right Arrow" />
                    </div>
                </div>
                <div className="flex flex-col md:w-65 lg:w-4/5 xl:w-95 md:mx-auto lg:p-14 p-5 md:flex-1 flex-grow mt-5 md:mt-24 lg:mt-0">
                    <h3 className="text-2xl font-medium text-theme-gray">Get started with Franchain</h3>
                    <p className="mt-2 text-sm font-normal text-theme-gray">Create an account in 5 minutes.</p>
                    <form action="#" className="flex flex-col space-y-5 md:mt-10 lg:mt-10 mt-5">
                        {fields.map(({ id, label, type, error }) => (
                            <div className="flex flex-col space-y-1" key={id}>
                                <label htmlFor={id} className="text-base font-normal text-theme-gray leading-[20.83px] text-gray-500">{label}</label>
                                <input
                                    type={type}
                                    id={id}
                                    autoFocus
                                    className="px-4 py-2 border border-[#B1B7D6] focus:border-[#B1B7D6] focus:outline-none h-[56px] rounded-[10px]"
                                />
                                {error && (
                                    <div className='text-danger text-base font-normal mt-3'>
                                        {error}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div>
                            <button
                                type="submit"
                                className="rounded-[60px] w-[144px] text-lg leading-[23.44px] px-3.5 py-5 bg-[#CED6F7] text-white"
                            >
                                Sign up
                            </button>
                        </div>
                        <div className="font-normal text-sm text-theme-gray">
                            By clicking “Start Application“, I agree to Mercury’s Terms of Use, Privacy Policy and to receive electronic communication about my accounts and services per Mercury’s Electronic Communications Agreement, and acknowledge receipt of Mercury’s USA PATRIOT Act disclosure.
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
