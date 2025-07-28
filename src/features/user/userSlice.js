import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUserAddress } from "../../services/apiGeocoding";

const initialState = {
  username: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};

export const fetchAddress = createAsyncThunk("user/fetchAddress", async () => {
  return await fetchUserAddress();
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = "idle";
        state.position = action.payload.position;
        state.address = action.payload.address;
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
