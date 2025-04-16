import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the type for the response data
interface Patient {
  id: number;
  name: string;
  age: number;
  condition: string;
}

// Define the type for the parameters if needed
interface FetchPatientsParams {
  clinicId: number;
}

// Create the async thunk
export const fetchPatients = createAsyncThunk<Patient[], FetchPatientsParams>(
  "patients/fetchPatients",
  async (params, thunkAPI) => {
    try {
      const response = await axios.get<Patient[]>(
        `/api/clinics/${params.clinicId}/patients`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(
          error.response?.data || "Failed to fetch patients"
        );
      }
      return thunkAPI.rejectWithValue("Failed to fetch patients");
    }
  }
);
