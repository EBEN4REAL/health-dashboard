import React, { useEffect } from 'react';
import DiagnosticHistoryChart from "../components/DiagnosticHistoryChart"
import DiagnosticList from "../components/DiagnosticList"
import HealthStats from "../components/HealthStats"
import Nav from "../components/Nav"
import UserProfile from "../components/UserProfile"
import PatientList from "../components/PatientList"
import Search from "../assets/img/search.svg"

import { getAllPatients } from '~/services/PatientService';
import { useDispatch } from 'react-redux';
import { setPatients, setActivePatient } from '../store/slices/patientSlice';
import LabResult from '~/components/LabResult';


const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPatients = async () => {
      try {
        const patients = await getAllPatients()
        patients[3].active = true
        dispatch(setPatients(patients));
        dispatch(setActivePatient(patients[3]));
      } catch (error: unknown) {
        console.log("Couldn't fetch patients::", error)
      }
    }
    getPatients()
  }, [])

  return (
    <div className="mx-[18px] mb-[30px]">
      <Nav />
      <div className=" flex flex-col lg:flex-row mt-7  gap-7">
        <div className="lg:w-[22%] w-full mb-6 lg:mb-0 rounded-[16px] shadow">
          <div className="bg-white rounded-md">
            <div className='flex justify-between items-center p-4'>
              <h2 className="text-lg font-semibold">Patients</h2>
              <img src={Search} className='w-[18px]' />
            </div>
            <div className='mt-5 h-[900px] overflow-y-scroll'>
              <PatientList />
            </div>
          </div>
        </div>
        <div className="lg:w-[52%] w-full mb-6 lg:mb-0">
          <div className="bg-white rounded-[16px] shadow border-gray-300">
            <h2 className="text-lg font-semibold p-4 ">Diagnosis History</h2>
            <DiagnosticHistoryChart />
            <HealthStats />
          </div>
          <DiagnosticList />
        </div>
        <div className="lg:w-[22%] w-full">
          <UserProfile />
          <div className="bg-white p-4 rounded-[16px] shadow border-gray-300 mt-7 h-[315px]  ">
            <LabResult />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
