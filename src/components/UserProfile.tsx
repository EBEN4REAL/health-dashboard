import { useSelector } from "react-redux";
import { RootState } from "~/store";
import BirthIcon from "../assets/img/BirthIcon.svg"
import InsuranceIcon from "../assets/img/InsuranceIcon.svg"
import PhoneIcon from "../assets/img/PhoneIcon.svg"
import Gender from "../assets/img/FemaleIcon.svg"
import ProfilePic from "../assets/img/profile-pic.png"

const UserProfile = () => {
    const activePatient = useSelector((state: RootState) => state.patient.activePatient);

    if (!activePatient) {
        return <p className="text-center font-bold py-10">No active patient selected</p>;
    }

    const userInfo = [
        { icon: BirthIcon, label: "Date Of Birth", value: activePatient.date_of_birth },
        { icon: Gender, label: "Gender", value: activePatient.gender },
        { icon: PhoneIcon, label: "Contact Info", value: activePatient.phone_number },
        { icon: PhoneIcon, label: "Emergency Contacts", value: activePatient.emergency_contact },
        { icon: InsuranceIcon, label: "Insurance Provider", value: activePatient.insurance_type },
    ];

    return (
        <>
            <div className="bg-white p-4 rounded-[16px] shadow border-gray-300">
                <div className="mb-4">
                    <img src={ProfilePic} alt="Patient" className="w-[200px] h-[200px] rounded-full mx-auto" />
                    <h3 className="text-center text-2xl mt-4 font-bold">{activePatient.name}</h3>
                </div>
                <ul>
                    {userInfo.map((info, index) => (
                        <li key={index} className="py-1 flex gap-3 items-center mt-3">
                            <div className='w-9 h-9 rounded-full flex items-center justify-center bg-gray-200'>
                                <img src={info.icon} alt={info.label} />
                            </div>
                            <span className='text-sm text-[#072635] font-normal'>
                                {info.label}: <br />
                                <span className='font-bold text-sm text-[#072635]'>{info.value}</span>
                            </span>
                        </li>
                    ))}
                </ul>
                <div className='mt-7 mb-3 text-center'>
                    <button className='text-center bg-theme rounded-[41px] px-[40px] py-[11px] text-[#072635] text-sm font-bold'>Show All Information</button>
                </div>
            </div>
        </>
    )
}

export default UserProfile