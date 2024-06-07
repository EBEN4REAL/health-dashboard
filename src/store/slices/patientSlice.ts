import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPatient } from '~/Types';

interface PatientState {
  patients: IPatient[];
  activePatient: IPatient | null;
}

const initialState: PatientState = {
  patients: [],
  activePatient: null,
};

const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    setPatients(state, action: PayloadAction<IPatient[]>) {
      state.patients = action.payload;
    },
    setActivePatient(state, action: PayloadAction<IPatient>) {
      state.activePatient = action.payload;
    },
  },
});

export const { setPatients, setActivePatient } = patientSlice.actions;
export default patientSlice.reducer;
