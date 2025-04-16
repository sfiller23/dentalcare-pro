import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Patient {
  id: string;
  name: string;
  age: number;
  condition: string;
}

interface PatientsState {
  patients: Patient[];
  loading: boolean;
  error: string | null;
}

const initialState: PatientsState = {
  patients: [],
  loading: false,
  error: null,
};

// Async action to fetch patients from an API
export const fetchPatients = createAsyncThunk<Patient[]>(
  "patients/fetchPatients",
  async () => {
    const response = await fetch("/api/patients");
    if (!response.ok) {
      throw new Error("Failed to fetch patients");
    }
    return (await response.json()) as Patient[];
  }
);

const patienceSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    addPatient: (state, action: PayloadAction<Patient>) => {
      state.patients.push(action.payload);
    },
    removePatient: (state, action: PayloadAction<string>) => {
      state.patients = state.patients.filter(
        (patient) => patient.id !== action.payload
      );
    },
    updatePatient: (state, action: PayloadAction<Patient>) => {
      const index = state.patients.findIndex(
        (patient) => patient.id === action.payload.id
      );
      if (index !== -1) {
        state.patients[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPatients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.loading = false;
        state.patients = action.payload;
      })
      .addCase(fetchPatients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch patients";
      });
  },
});

export const { addPatient, removePatient, updatePatient } =
  patienceSlice.actions;

export default patienceSlice.reducer;
