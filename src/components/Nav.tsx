import { useState, useRef, useEffect } from 'react';
import overview from "../assets/img/overview.svg";
import patients from "../assets/img/patients.svg";
import message from "../assets/img/message.svg";
import schedule from "../assets/img/schedule.svg";
import transactions from "../assets/img/transactions.svg";
import Logo from "../assets/img/TestLogo.svg";
import Settings from "../assets/img/settings.svg";
import Options from "../assets/img/options.svg";
import { RootState } from '../store';
import { useSelector } from "react-redux";
import { Menu } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface MenuItem {
    icon: string;
    name: string;
    active: boolean;
}

const Nav = () => {
    const activePatient = useSelector((state: RootState) => state.patient.activePatient);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navMenu: MenuItem[] = [
        { icon: overview, name: 'Overview', active: false },
        { icon: patients, name: 'Patients', active: true },
        { icon: message, name: 'Message', active: false },
        { icon: schedule, name: 'Schedule', active: false },
        { icon: transactions, name: 'Transactions', active: false }
    ];

    return (
        <nav className="bg-white shadow border-gray-300 rounded-[70px] mt-[18px] p-[18px]">
            <div className="w-full flex justify-between items-center gap-5">
                <div className="flex items-center w-[30%]">
                    <img src={Logo} alt="Test Logo" className='w-[210px]' />
                </div>
                <div className={`flex items-center lg:hidden xl:hidden 2xl:hidden`} ref={menuRef}>
                    <Menu>
                        {({ open }) => {
                            setMenuOpen(open)
                            return (
                                <>
                                    <Menu.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={toggleMenu}>
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Menu.Button>
                                </>
                            )
                        }}
                    </Menu>
                </div>

                <div className={`w-full lg:flex hidden sm:items-center sm:justify-between `}>
                    <ul className='flex flex-col sm:flex-row gap-[10px] sm:gap-[30px]'>
                        {navMenu.map(nav => (
                            <li key={nav.name} className={`flex items-center cursor-pointer mt-3 sm:mt-0 ${nav.active ? 'bg-active rounded-[41px] px-[16px] py-[11px]' : ''}`}>
                                <img src={nav.icon} className='mr-2' alt={`${nav.name} icon`} />
                                {nav.name}
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-center sm:justify-end gap-[8px] items-center mt-4 sm:mt-0">
                        <div className='w-[44px] h-[44px] rounded-full'>
                            <img src={activePatient?.profile_picture} className='w-full h-full rounded-full' alt="Profile" />
                        </div>
                        <div>
                            <div className='font-bold text-[14px] leading-[19px] text-[#072635]'>{activePatient?.name}</div>
                            <div className='font-normal text-[14px] leading-[19px] text-[#707070]'>General Practitioner</div>
                        </div>
                        <div className='w-[1px] h-[44px] bg-[#EDEDED] hidden sm:block'></div>
                        <div>
                            <img src={Settings} className='w-[18.94px] h-[20px]' alt="Settings" />
                        </div>
                        <div className='mr-2'>
                            <img src={Options} className='w-[3.71px] h-[18px]' alt="Options" />
                        </div>
                    </div>
                </div>
            </div>
            {menuOpen && (
                <div className=" mt-4">
                    <ul className='flex flex-col gap-[10px]'>
                        {navMenu.map(nav => (
                            <li key={nav.name} className={`flex items-center cursor-pointer mt-3 ${nav.active ? 'bg-active rounded-[41px] px-[16px] py-[11px]' : ''}`}>
                                <img src={nav.icon} className='mr-2' alt={`${nav.name} icon`} />
                                {nav.name}
                            </li>
                        ))}
                        <div className='flex gap-[8px] items-center mt-4'>
                            <div className='w-[44px] h-[44px] rounded-full'>
                                <img src={activePatient?.profile_picture} className='w-full h-full rounded-full' alt="Profile" />
                            </div>
                            <div>
                                <div className='font-bold text-[14px] leading-[19px] text-[#072635]'>{activePatient?.name}</div>
                                <div className='font-normal text-[14px] leading-[19px] text-[#707070]'>General Practitioner</div>
                            </div>
                        </div>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;
