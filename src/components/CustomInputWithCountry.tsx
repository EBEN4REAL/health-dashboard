
import { useEffect, useRef, useState } from "react";
import Select, { components } from "react-select";
import { ICountryOption, IUserResponse } from "~/Types";
import { fetchCountries, getUserCountry } from "~/services/CountryService";
import { DropdownIndicator } from "./DropdownIndicator";

export const CustomInputWithCountry: React.FC = () => {
    const [countries, setCountries] = useState<ICountryOption[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<ICountryOption | null>(null);
    const [businessName, setBusinessName] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loadCountriesAndUserCountry = async () => {
            try {
                const countriesData = await fetchCountries();

                const countryOptions = countriesData.map((country: any) => ({
                    value: country.cca2,
                    label: country.name.common,
                    flag: country.flags.svg,
                    code: country.cca2,
                }));

                setCountries(countryOptions);

                const userCountryResponse: IUserResponse = await getUserCountry();
                const userCountryCode = userCountryResponse.country;
                const userCountry = countryOptions.find((country) => country.code === userCountryCode);

                if (userCountry) {
                    setSelectedCountry(userCountry);
                }

            } catch (error) {
                console.error('Error fetching countries or user location:', error);
            }
        };

        loadCountriesAndUserCountry();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleSelectClick = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    const handleMenuOpen = () => {
        setIsMenuOpen(true);
    };

    const Option = (props: any) => (
        <components.Option {...props}>
            <div className="flex items-center">
                <img src={props.data.flag} alt={props.data.label} className="w-5 h-5 mr-2" />
                <span>{props.data.label}</span>
            </div>
        </components.Option>
    );

    return (
        <div ref={selectRef} className="flex items-center border border-[#B1B7D6] rounded-[10px] h-[56px] bg-[#ffffff]">
            <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Business name"
                className="flex-grow px-4 mr-1 focus:ring-0 focus:outline-none rounded-l-[10px] h-full border-r border-r-gray-level-1 rounded-tr-none rounded-br-none"
            />
            <Select
                options={countries}
                value={selectedCountry}
                onChange={(selectedOption) => setSelectedCountry(selectedOption as ICountryOption)}
                placeholder="HQ location"
                classNamePrefix="react-select"
                components={{ DropdownIndicator, Option }}
                menuIsOpen={isMenuOpen}
                onMenuClose={handleMenuClose}
                onMenuOpen={handleMenuOpen}
                onKeyDown={(e) => {
                    if (e.key === ' ') {
                        handleSelectClick();
                    }
                }}
            />
        </div>
    );
};
