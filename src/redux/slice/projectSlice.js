import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  projectName: "",
  features: {},
  companyDetail: {
    email: "",
    companyName: "",
    phone: "",
  },
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setStep(state, action) {
      state.step = action.payload;
    },
    setProjectName(state, action) {
      state.projectName = action.payload;
    },
    setFeatures(state, action) {
      state.features = action.payload;
    },
    setCompanyDetail(state, action) {
      state.companyDetail = action.payload;
    },
    resetProjectState() {
      return initialState;
    },
  },
});

export const {
  setStep,
  setProjectName,
  setFeatures,
  setCompanyDetail,
  resetProjectState,
} = projectSlice.actions;
export default projectSlice.reducer;
