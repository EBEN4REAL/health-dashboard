import { DropdownIndicatorProps, components } from "react-select";
import { ICountryOption } from "~/Types";

export const DropdownIndicator = (props: DropdownIndicatorProps<ICountryOption>) => {
    const selectedOption = props.selectProps.value as ICountryOption | null;

    return (
        <components.DropdownIndicator {...props}>
            {selectedOption && (
                <div className="flex items-center">
                    <img src={selectedOption.flag} alt="selected flag" className="w-5 h-5 mr-2" />
                    <span className="">{selectedOption.code}</span>
                </div>
            )}
            <components.DropdownIndicator {...props} />
        </components.DropdownIndicator>
    );
};