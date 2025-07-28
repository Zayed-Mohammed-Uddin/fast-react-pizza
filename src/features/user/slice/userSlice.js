import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUserAddress } from "../../../services/apiGeocoding";

const initialState = {
  username: "",
  status: "idle",
  position: {},
  userAddress: "",
  fetchedAddress: "",
  error: "",
};

export const fetchAddress = createAsyncThunk("user/fetchAddress", async () => {
  return await fetchUserAddress();
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addName(state, action) {
      state.username = action.payload;
    },
    addAddress(state, action){
      state.userAddress = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = "idle";
        state.position = action.payload.position;
        state.fetchedAddress = action.payload.fetchedAddress;
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const { addName, addAddress } = userSlice.actions;
export default userSlice.reducer;
