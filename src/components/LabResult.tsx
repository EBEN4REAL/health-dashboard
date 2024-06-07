import { useSelector } from "react-redux";
import { RootState } from "~/store";
import Download from "../assets/img/download.svg"

const LabResult = () => {
    const activePatient = useSelector((state: RootState) => state.patient.activePatient);
    
    return (
        <div className="">
            <div className='flex justify-between items-center'>
                <h2 className="text-lg font-semibold mb-4">Lab Results</h2>
            </div>

            <ul className="pr-2 h-[200px] overflow-y-scroll">
                {activePatient?.lab_results.map((data, index) => (
                    <li key={index} className='flex justify-between items-center mt-3 hover:bg-[#F6F7F8] p-3'>
                        <div className="text-sm font-normal">{data}</div>
                        <img src={Download} alt="Download" className='w-7 pr-2' />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LabResult