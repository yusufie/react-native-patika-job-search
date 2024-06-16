import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  jobs: [],
};
export const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    addJob: (state, action) => {
      state.jobs.push(action.payload); // Yeni işi listeye ekleyen bir eylem
    },
    removeJob: (state, action) => {
      state.jobs = state.jobs.filter(job => job.id !== action.payload.id); // Belirli bir işi listeden kaldıran bir eylem
    },
    clearJobs: state => {
      state.jobs = []; // Tüm işleri temizleyen bir eylem
    },
  },
});
export const {setJobs, addJob, removeJob, clearJobs} = jobSlice.actions;

export default jobSlice.reducer;
