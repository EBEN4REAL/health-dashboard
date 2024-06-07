import { useSelector } from "react-redux";
import { RootState } from "~/store";
import More from "../assets/img/more.svg"

const PatientList = () => {
    const patients = useSelector((state: RootState) => state.patient.patients);

    return (
        <>
            {patients.map((patient, index) => (
                <div key={index} className={`flex justify-between items-center p-3 ${patient?.active ? 'bg-active-faint' : ''}`}>
                    <div className='flex justify-between items-center'>
                        <div className='w-[44px] h-[44px] rounded-full'>
                            <img src={patient.profile_picture} className='w-full h-full' alt={`${patient.name}`} />
                        </div>
                        <div className='ml-3'>
                            <div className='font-bold text-[14px] leading-[19px] text-[#072635]'>{patient.name}</div>
                            <div className='font-normal text-[14px] leading-[19px] text-[#707070]'>{patient.gender}, {patient.age}</div>
                        </div>
                    </div>
                    <div>
                        <img src={More} className='cursor-pointer' alt="options" />
                    </div>
                </div>
            ))}
        </>
    )
}

export default PatientList