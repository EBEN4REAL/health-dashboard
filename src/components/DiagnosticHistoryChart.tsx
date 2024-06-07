import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { RootState } from '~/store';
import { useSelector } from 'react-redux';
import DownCaret from "../assets/img/down-caret.svg";
import ArrowDown from "../assets/img/ArrowDown.svg";
import ArrowUp from "../assets/img/ArrowUp.svg";
import "./DiagnosticChart.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartComponent: React.FC = () => {
    const activePatient = useSelector((state: RootState) => state.patient.activePatient);

    if (!activePatient) {
        return <p className="text-center font-bold py-10">No active patient selected</p>;
    }

    const labels = activePatient.diagnosis_history.map(item => `${item.month.slice(0, 3)}, ${item.year}`).reverse().slice(-6);

    const systolicData: number[] = activePatient.diagnosis_history.map(data => data.blood_pressure.systolic.value).reverse().slice(-6);
    const diastolicData: number[] = activePatient.diagnosis_history.map(data => data.blood_pressure.diastolic.value).reverse().slice(-6);

    const latestDiagnosis = activePatient.diagnosis_history[0];
    const { systolic, diastolic } = latestDiagnosis.blood_pressure;

    const data = {
        labels,
        datasets: [
            {
                label: 'Systolic',
                data: systolicData,
                borderColor: 'rgba(230, 111, 210, 1)',
                backgroundColor: 'rgba(230, 111, 210, 1)',
                tension: 0.4,
            },
            {
                label: 'Diastolic',
                data: diastolicData,
                borderColor: 'rgba(140, 111, 230, 1)',
                backgroundColor: 'rgba(140, 111, 230, 1)',
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right' as const,
                display: false,
            },
            title: {
                display: false,
                text: 'Monthly Blood Pressure Values',
            },
        },
    };

    return (
        <div className='shadow rounded-[16px] bg-[#F4F0FE] mx-4'>
            <div className='flex p-4 chat-container '>
                <div className='w-full md:w-[70%] lg:w-[70%] xl:w-[70%]'>
                    <div className='flex justify-between'>
                        <h4 className='font-bold text-md'>Blood Pressure</h4>
                        <div className='flex justify-end'>
                            <div className='flex mr-7'>
                                <span className='font-normal text-sm'>Last 6 months</span>
                                <img src={DownCaret} className='w-[10.65px] ml-3' />
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 h-[200px]'> {/* Increased height by 100px */}
                        <Line data={data} options={options} />
                    </div>
                </div>
                <div className='w-[30%] hidden md:block lg:block xl:block'>
                    <div className='flex items-center'>
                        <div className='w-[14px] h-[14px] bg-[#E66FD2] rounded-full'></div>
                        <span className='ml-2 text-sm'>Systolic</span>
                    </div>
                    <div className='flex mt-2'>
                        <span className='text-[22px] font-bold '>{systolic.value}</span>
                    </div>
                    <div className='flex mt-3 items-center'>
                        <span className='text-[22px] font-bold '>
                            <img src={ArrowUp} className='w-[10px] h-[5.48px]' />
                        </span>
                        <span className='font-normal ml-2 text-sm'>{systolic.levels}</span>
                    </div>
                    <div className='my-3 bg-gray-level-1 h-[1px] w-full'></div>
                    <div className='flex items-center'>
                        <div className='w-[14px] h-[14px] bg-[#8C6FE6] rounded-full'></div>
                        <span className='ml-2 text-sm'>Diastolic</span>
                    </div>
                    <div className='flex mt-3'>
                        <span className='text-[22px] font-bold '>{diastolic.value}</span>
                    </div>
                    <div className='flex mt-3 items-center'>
                        <span className='text-[22px] font-bold '>
                            <img src={ArrowDown} className='w-[10px] h-[5.48px]' />
                        </span>
                        <span className='text-sm font-normal ml-2'>{diastolic.levels}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChartComponent;
