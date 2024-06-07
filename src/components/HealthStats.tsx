import RespiratoryRate from "../assets/img/respiratory-rate.svg"
import HeartBPM from "../assets/img/HeartBPM.svg"
import Temperature from "../assets/img/temperature.svg"
import { useSelector } from "react-redux";
import { RootState } from "~/store";

const HealthStats = () => {
    const activePatient = useSelector((state: RootState) => state.patient.activePatient);

    if (!activePatient) {
        return <p className="text-center font-bold py-10">No active patient selected</p>;
    }
    
    return (
        <>
            <div className='flex gap-[16px] flex-wrap p-4'>
              <div className={`bg-[#E0F3FA] flex-1 h-[242px] rounded-[12px] p-[16px]`}>
                <div className='rounded-full w-[96px] h-[96px] bg-[#ffffff] flex flex-col justify-center items-center'>
                  <img src={RespiratoryRate} alt={"Respiratory Rate"} />
                </div>
                <div className='mt-3 font-medium text-base leading-normal text-[#072635] capitalize'>
                  Respiratory Rate
                </div>
                <div className='font-extrabold text-xl leading-tight text-[#072635]'>
                  {activePatient?.diagnosis_history[0].respiratory_rate.value} bpm
                </div>
                <div className='text-[#072635] mt-7 font-normal'>
                  {activePatient?.diagnosis_history[0].respiratory_rate.levels}
                </div>
              </div>

              <div className={`bg-[#FFE6F1] flex-1 h-[242px] rounded-[12px] p-[16px]`}>
                <div className='rounded-full w-[96px] h-[96px] bg-[#ffffff] flex flex-col justify-center items-center'>
                  <img src={Temperature} alt={"Temperature"} />
                </div>
                <div className='mt-3 font-medium text-base leading-normal text-[#072635] capitalize'>
                  Temperature
                </div>
                <div className='font-extrabold text-xl leading-tight text-[#072635]'>
                  {activePatient?.diagnosis_history[0].temperature.value}°F
                </div>
                <div className='text-[#072635] mt-7 font-normal'>
                  {activePatient?.diagnosis_history[0].temperature.levels}
                </div>
              </div>

              <div className={`bg-[#FFE6F1] flex-1 h-[242px] rounded-[12px] p-[16px]`}>
                <div className='rounded-full w-[96px] h-[96px] bg-[#ffffff] flex flex-col justify-center items-center'>
                  <img src={HeartBPM} alt={"Temperature"} />
                </div>
                <div className='mt-3 font-medium text-base leading-normal text-[#072635] capitalize'>
                  Heart Rate
                </div>
                <div className='font-extrabold text-xl leading-tight text-[#072635]'>
                  {activePatient?.diagnosis_history[0].heart_rate.value} bpm
                </div>
                <div className='text-[#072635] mt-7 font-normal'>
                  {activePatient?.diagnosis_history[0].heart_rate.levels}
                </div>
              </div>
            </div>
        </>
    )
}

export default HealthStats